"use strict";
require("dotenv").config();

const line = require("@line/bot-sdk");
const axios = require("axios");
const express = require("express");
const cors = require("cors");

const { KEYWORD_COMPARISON } = require("./constants/keyword.ts");
const { MESSAGE_CONTENT } = require("./constants/message.ts");
const { DIRTY_WORDS } = require("./constants/dirty.ts");

// create LINE SDK config from env variables
const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET,
};

// create LINE SDK client
const client = new line.Client(config);

// create Express app
const app = express();

app.use(cors());

// create variables

const messages = [];

// register a webhook handler with middleware
// about the middleware, please refer to doc
app.post("/", line.middleware(config), (req, res) => {
  Promise.all(req.body.events.map(handleEvent))
    .then((result) => res.json(result))
    .catch((err) => {
      res.status(500).end();
    });
});

app.get("/messages", handleMessages);

// event handler
function handleEvent(event) {
  if (event.type !== "message" || event.message.type !== "text") {
    // ignore non-text-message event
    return Promise.resolve(null);
  }

  return axios
    .get(`https://api.line.me/v2/bot/profile/${event.source.userId}`, {
      headers: { Authorization: `Bearer ${process.env.CHANNEL_ACCESS_TOKEN}` },
    })
    .then((res) => {
      // filter dirty words
      const text = DIRTY_WORDS.reduce(
        (acc, item) => acc.replace(new RegExp(item), "*".repeat(item.length)),
        event.message.text
      );

      // echo message
      const echo = {
        type: "text",
        text,
      };

      // mapping keyword
      const result = Object.keys(KEYWORD_COMPARISON).reduce((acc, keyword) => {
        if (acc === "" && text.includes(keyword)) {
          acc = MESSAGE_CONTENT[KEYWORD_COMPARISON[keyword]];
        }
        return acc;
      }, "");

      // server sent event
      if (result === "") {
        messages.push({ user: res.data, text });
      }

      // use reply API
      return client.replyMessage(event.replyToken, result || echo);
    });
}

function handleMessages(request, response) {
  const headers = {
    "Content-Type": "text/event-stream",
    Connection: "keep-alive",
    "Cache-Control": "no-cache",
  };
  response.writeHead(200, headers);

  const timer = setInterval(() => {
    const data = `data: ${JSON.stringify({ messages })}\n\n`;

    response.write(data);

    // clear messages
    messages.length = 0;
  }, 1000);

  request.on("close", () => {
    clearInterval(timer);
  });
}

// listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});

/**
 * message type
 *
 * sticker  => 貼圖
 * image    => 照片
 * video    => 影片
 * audio    => 語音
 * location => 座標
 *
 *
 *
 *
 * emoji
 *
 * https://d.line-scdn.net/r/devcenter/sendable_line_emoji_list.pdf
 *
 * example:
 *
 *  {
 *    type: 'text',
 *    text: '$ emoji $'
 *    emojis: [
 *      {
 *          index: 0,
 *          product: 'xxx'
 *          emojiId: '001
 *       },
 *       {
 *          index: 8,
 *          product: 'xxx'
 *          emojiId: '002
 *       }
 *    ]
 *  }
 */

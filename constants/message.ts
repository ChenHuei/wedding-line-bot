const BREAK_LINE = "\n";

const MESSAGE_CONTENT = {
  /**
   * line 圖文訊息
   */
  when: [
    {
      type: "text",
      text: `我們的喜宴舉辦在 2021年12月11日(六) 午宴${BREAK_LINE}11:30   迎賓酒會${BREAK_LINE}12:00   賓客入席${BREAK_LINE}12:30   午宴開席${BREAK_LINE}14:30   合照送客${BREAK_LINE}${BREAK_LINE}請準時到場不然新娘會生氣喔${BREAK_LINE}o(｀ω´ )o`,
    },
  ],
  where: [
    {
      type: "text",
      text: `晶宴婚宴會館－民生館${BREAK_LINE}(台北市中山區民生東路三段 8 號 B2)`,
    },
    {
      type: "location",
      title: "晶宴會館 - 民生店",
      address: "台北市中山區民生東路三段 8 號 1 樓",
      latitude: 25.0576391,
      longitude: 121.534272,
    },
  ],
  seat: [
    {
      type: "text",
      text: `想知道婚禮當天坐哪裡嗎?${BREAK_LINE}請輸入你的大名 (´▽｀)`,
    },
  ],
  pictures: [
    {
      type: "text",
      text: "偷偷的搶先給你看幾張 σ(o'ω'o)",
    },
    {
      type: "image",
      originalContentUrl:
        "https://res.cloudinary.com/dtssrpk5g/image/upload/v1635866335/1_bdgsnz.webp",
      previewImageUrl:
        "https://res.cloudinary.com/dtssrpk5g/image/upload/v1635866335/1_bdgsnz.webp",
    },
    {
      type: "image",
      originalContentUrl:
        "https://res.cloudinary.com/dtssrpk5g/image/upload/v1635866336/2_qzrezp.webp",
      previewImageUrl:
        "https://res.cloudinary.com/dtssrpk5g/image/upload/v1635866336/2_qzrezp.webp",
    },

    {
      type: "image",
      originalContentUrl:
        "https://res.cloudinary.com/dtssrpk5g/image/upload/v1635866337/3_mwxesf.webp",
      previewImageUrl:
        "https://res.cloudinary.com/dtssrpk5g/image/upload/v1635866337/3_mwxesf.webp",
    },
  ],
  surveycake: [
    {
      type: "text",
      text: "請點選以下連結",
    },
    {
      type: "text",
      text: "https://www.surveycake.com/s/X422r",
    },
  ],
  blessing: [
    {
      type: "text",
      text: "謝謝你的祝福 (((o(*ﾟ▽ﾟ*)o)))",
    },
    {
      type: "text",
      text: "但此功能將於婚禮當天開放喲！",
    },
  ],
  
  /**
   * 自由發揮
   */
  congregation: [
    {
      type: "text",
      text: `"謝謝你～當天要一起來玩哦${BREAK_LINE}ヽ(●\´∀\`●)ﾉ`,
    },
  ],
  badWord: [
    {
      type: "text",
      text: "大囍之日怎麼可以罵人哩？你壞！",
    },
  ],
  bride: [
    {
      type: "text",
      text: "我也這麼覺得(*´∀`)~♥️",
    },
  ],
  praise: [
    {
      type: "text",
      text: "麥安捏共，哇欸拍謝拉哈哈哈哈 (*´∀`)~♥️",
    },
  ],
  bridegroom: [
    {
      type: "text",
      text: "我也這麼覺得ε٩(๑> ₃ <)۶з",
    },
    {
      type: "text",
      text: "但新娘更美喔",
    },
    {
      type: "image",
      originalContentUrl:
        "https://res.cloudinary.com/dtssrpk5g/image/upload/v1635866339/4_ogalnr.webp",
      previewImageUrl:
        "https://res.cloudinary.com/dtssrpk5g/image/upload/v1635866339/4_ogalnr.webp",
    },
  ],
  alcohol: [
    {
      type: "text",
      text: "當天不准把我們灌醉",
    },
    {
      type: "text",
      text: "但送客如果沒有新郎，新娘會生氣喔(´･_･`)",
    },
  ],
  touching: [
    {
      type: "text",
      text: "(｡◕∀◕｡)",
    },
  ],
  moon: [
    {
      type: "text",
      text: "你認錯人了 我是美人魚喔(*´▽`*)",
    },
  ],
};

module.exports = {
  MESSAGE_CONTENT,
};

const BREAK_LINE = "\n";

const MESSAGE_CONTENT = {
  when: [
    {
      type: "text",
      text: `我們的喜宴舉辦在 2021年12月11日(六) 午宴${BREAK_LINE}12:00   賓客入席${BREAK_LINE}11:30   迎賓酒會${BREAK_LINE}12:00   賓客入席${BREAK_LINE}12:30   午宴開席${BREAK_LINE}14:30   合照送客`,
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
      text: `不好意思，我們還沒有安排好${BREAK_LINE}等大家表單填寫完畢我們將盡快安排${BREAK_LINE}完成後會再推播給大家喲！`,
    },
    {
      type: "text",
      text: "還沒填寫表單的話請點以下連結",
    },
    {
      type: "text",
      text: "https://www.surveycake.com/s/X422r",
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
};

module.exports = {
  MESSAGE_CONTENT,
};

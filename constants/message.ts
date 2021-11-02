const BREAK_LINE = "\n";

const MESSAGE_CONTENT = {
  bridegroom: [
    {
      type: "text",
      text: "陳振輝 - 新北三重人 σ(o'ω'o)",
    },
    {
      type: "image",
      originalContentUrl:
        "https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      previewImageUrl:
        "https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
  ],
  bride: [
    {
      type: "text",
      text: "曾蓓珊 - 新北三重人 (^_^)/",
    },
    {
      type: "image",
      originalContentUrl:
        "https://images.unsplash.com/photo-1514315384763-ba401779410f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=630&q=80",
      previewImageUrl:
        "https://images.unsplash.com/photo-1514315384763-ba401779410f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=630&q=80",
    },
  ],
  brideFixed: [
    {
      type: "text",
      text: "是蓓珊拉，曾蓓珊 - 新北三重人 -`д´-",
    },
    {
      type: "image",
      originalContentUrl:
        "https://images.unsplash.com/photo-1514315384763-ba401779410f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=630&q=80",
      previewImageUrl:
        "https://images.unsplash.com/photo-1514315384763-ba401779410f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=630&q=80",
    },
  ],
  menu: [
    {
      type: "image",
      originalContentUrl:
        "https://media-cdn.tripadvisor.com/media/photo-s/14/ac/b1/5e/burger-menu.jpg",
      previewImageUrl:
        "https://media-cdn.tripadvisor.com/media/photo-s/14/ac/b1/5e/burger-menu.jpg",
    },
  ],
  location: [
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
  flow: [
    {
      type: "text",
      text: `這是我們當天的流程${BREAK_LINE}12:00   賓客入席${BREAK_LINE}12:30   午宴用餐${BREAK_LINE}14:30   合照送客`,
    },
  ],
  pictures: [
    {
      type: "text",
      text: "偷偷的搶先給你看幾張婚紗照 σ(o'ω'o)",
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
  date: [
    {
      type: "text",
      text: `我們的喜宴舉辦在 2021年12月11日(六) 午宴${BREAK_LINE}12:00   賓客入席${BREAK_LINE}11:30   迎賓酒會${BREAK_LINE}12:00   賓客入席${BREAK_LINE}12:30   午宴開席${BREAK_LINE}14:30   合照送客`,
    },
  ],
  question: [
    {
      type: "text",
      text: "請點選以下連結",
    },
    {
      type: "text",
      text: "https://google.com",
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
      text: "https://google.com",
    },
  ],
  cong: [
    {
      type: "text",
      text: "此功能將於婚禮當天開放喲！",
    },
  ],
};

module.exports = {
  MESSAGE_CONTENT,
};

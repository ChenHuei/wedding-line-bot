const KEYWORD_COMPARISON = {
  // line 圖文資訊
  // 婚禮日期
  婚禮在什麼時候: "when",

  // 婚禮地點
  場地在哪裡: "where",

  // 婚禮座位
  婚禮當天我會坐哪裡: "seat",

  // 婚禮美照
  可以看一下婚紗照嗎: "pictures",

  // 出席問卷
  我可以去哪裡填問卷: "surveycake",

  // 祝福我們
  祝福我們: "blessing",

  // 自由發揮
  恭喜: "congregation",

  // 座位圖 start
  林泳秀: "14table",
  林柏甫: "14table",
  王婷譽: "14table",
  吳明純: "14table",
  林品綺: "14table",
  蔡祐辰: "14table",
  李書毅: "14table",
  李齊: "14table",
  林旻萱: "14table",
  沈陽傑: "14table",

  郭書榕: "15table",
  余承軒: "15table",
  劉品妤: "15table",
  戴佳儒: "15table",
  陳昕圓: "15table",
  林思妤: "15table",
  周子雅: "15table",
  羅勻廷: "15table",
  洪至韋: "15table",
  蔡名宣: "15table",

  許維中: "16table",
  陳妤彤: "16table",
  任作哲: "16table",
  郭又禎: "16table",
  陳竑宇: "16table",
  李振銘: "16table",
  邱如嫺: "16table",
  李蕙君: "16table",

  林葳: "17table",
  柯昱任: "17table",
  洪敏豪: "17table",
  黃思齊: "17table",
  廖家緯: "17table",
  陳威志: "17table",
  練東霖: "17table",
  趙星豪: "17table",
  楊博喬: "17table",

  張楷侑: "37table",
  黃裕琇: "37table",
  傅家琳: "37table",
  蕭妤辰: "37table",
  盧亦為: "37table",
  張伯宇: "37table",
  黃雋華: "37table",
  謝欣儒: "37table",
  許芊芊: "37table",
  王柏元: "37table",

  劉宴汝: "39table",
  王晨蔚: "39table",
  黃順隆: "39table",
  周志康: "39table",
  郭維昌: "39table",
  邱筱婷: "39table",
  江婉菱: "39table",
  江江: "39table",
  珮珊: "39table",

  Hank: "36table",
  林漢克: "36table",
  Wesley: "36table",
  吳慕云: "36table",
  Royal: "36table",
  陳柏融: "36table",
  Woody: "36table",
  張皓涵: "36table",
  Ding: "36table",
  陳財丁: "36table",
  Spencer: "36table",
  林宗翰: "36table",
  Samuel: "36table",
  莊盛州: "36table",
  Sam: "36table",
  楊俊生: "36table",
  Ben: "36table",
  郭俊毅: "36table",
  Zoey: "36table",
  沈曼鈞: "36table",

  Vito: "38table",
  黃祥驊: "38table",
  Damien: "38table",
  盧禹丞: "38table",
  Peter: "38table",
  楊威澤: "38table",
  Jeff: "38table",
  小Jeff: "38table",
  趙知遠: "38table",
  Daniel: "38table",
  葉菘揚: "38table",
  Tony: "38table",
  徐磊: "38table",
  Molly: "38table",
  黃詩予: "38table",
  Jenny: "38table",
  陳俞臻: "38table",
  Brian: "38table",
  陳柏瑄: "38table",
  Bill: "38table",
  郭庭光: "38table",
  Herman: "38table",
  葉志健: "38table",

  馮儀芝: "22table",
  林書宜: "22table",
  莊雅雯: "22table",
  胡珊綺: "22table",
  鍾正剛: "22table",
  黃浩瑜: "22table",
  陳聖元: "22table",
  馮子薰: "22table",
  謝嘉允: "22table",
  莊旻錡: "22table",

  陳俊宇: "29table",
  陳彥閔: "29table",
  陳宇倫: "29table",
  劉祐著: "29table",
  簡立昕: "29table",
  Shane: "29table",
  黃立軒: "29table",
  廖凰媛: "29table",
  何沂瑾: "29table",

  林致珈: "30table",
  周世軒: "30table",
  杜宥萱: "30table",
  張剛寧: "30table",
  王馨卉: "30table",
  王郁婷: "30table",
  陳玟臻: "30table",
  張心: "30table",
  黃耀立: "30table",

  陳誼珊: "24table",
  陳柏翔: "24table",
  林易萱: "24table",
  蔡秋圓: "24table",
  高宜鈴: "24table",
  林亦庭: "24table",
  賴怡婷: "24table",

  羅珮綺: "31table",
  曾鈺涵: "31table",
  吳建錡: "31table",
  張驥宇: "31table",
  梅皓昀: "31table",
  吳佩汾: "31table",
  顏松柏: "31table",
  林昆佑: "31table",

  葉宇珊: "23table",
  邵薰誼: "23table",
  唐偉傑: "23table",
  吳聖輝: "23table",
  曾育萱: "23table",
  莊偉安: "23table",
  張雅琪: "23table",
  莊佳恩: "23table",
  高晨揚: "23table",

  許雅雯: "25table",
  Blackrys: "25table",
  陳又寧: "25table",
  孫韻茹: "25table",
  Tasha: "25table",
  鄭守綱: "25table",
  Patrick: "25table",
  Kenny: "25table",

  游靖宇: "32table",
  Yuly: "32table",
  Emily: "32table",
  皮皮: "32table",
  李明穎: "32table",
  李子: "32table",
  胡佳倩: "32table",
  佳佳: "32table",
  林孟如: "32table",
  小孟: "32table",
  // 座位圖 end

  笨蛋: "badWord",
  低能: "badWord",
  智障: "badWord",
  白痴: "badWord",
  醜: "badWord",

  阿珊好美: "bride",
  蓓珊好美: "bride",
  新娘好美: "bride",
  阿珊太美: "bride",
  蓓珊太美: "bride",
  新娘太美: "bride",
  阿珊超美: "bride",
  蓓珊超美: "bride",
  新娘超美: "bride",

  阿輝好帥: "bridegroom",
  輝輝好帥: "bridegroom",
  振輝好帥: "bridegroom",
  新郎好帥: "bridegroom",
  阿輝太帥: "bridegroom",
  輝輝太帥: "bridegroom",
  振輝太帥: "bridegroom",
  新郎太帥: "bridegroom",
  阿輝超帥: "bridegroom",
  輝輝超帥: "bridegroom",
  振輝超帥: "bridegroom",
  新郎超帥: "bridegroom",

  酒: "alcohol",

  感動: "touching",
  感人: "touching",

  王月: "moon",
  月亮: "moon",
};

const IGNORE_KEYWORD = [
  "when",
  "where",
  "seat",
  "pictures",
  "surveycake",
  "blessing",
  "14table",
  "15table",
  "16table",
  "17table",
  "37table",
  "39table",
  "36table",
  "38table",
  "22table",
  "29table",
  "30table",
  "24table",
  "31table",
  "23table",
  "25table",
  "32table",
];

module.exports = {
  KEYWORD_COMPARISON,
  IGNORE_KEYWORD,
};

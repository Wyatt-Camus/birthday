// Wyatt-Camus 2023年8月15日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "沈佳莹大宝贝",  // 同上...
        "今天是你的生日",
        "这是我们在一起的",
        "你的第一个生日",
        "虽然是为了应付政策的生日",
        "但是也没有关系",
        "（由衷的有点尴尬）",
        "只要你能开心就好！",
        "(不行来点正经的祝福)",
        "祝你少生气少长皱纹",
        "祝你所有美梦都成真",
        "祝你天天快乐永远不死",
        "祝你永远健康美好依旧",
        "祝你能乘风破浪、凌虚蹈空",
        "能上九天揽月，下五洋捉鳖",
        "还有别忘了要好好吃饭",
        "你要把我家可爱莹莹喂饱",
        "然后我抱走",
        "YAMI~~",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "沈佳莹大宝贝": "./imgs//QQ图片20230815005642.jpg",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始",
        play: "音乐",
        bannar_coming: "颜色",
        balloons_flying: "好像少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐",
        story: "A MESSAGE FOR YOU",
    }
};

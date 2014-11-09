var dataForWeixin = {
    appId: "",
    img: "http://http://120.27.28.237/asx/australia-made-logo.png",
    url: "http://http://120.27.28.237/asx",
    title: '小兔兔澳洲代购',
    desc: '澳洲代购直邮保健品，原装正品空运直邮。下单后人肉药店超市采购，保质期同超市药店同步，1-2周从澳洲悉尼直接到你家。',
    fakeid: ""
};
(function () {
    var onBridgeReady = function () {
        // 发送给好友;
        WeixinJSBridge.on('menu:share:appmessage', function (argv) {
            WeixinJSBridge.invoke('sendAppMessage', {
                "appid": dataForWeixin.appId,
                "img_url": dataForWeixin.img,
                "img_width": "300",
                "img_height": "300",
                "link": dataForWeixin.url,
                "desc": dataForWeixin.desc,
                "title": dataForWeixin.title
            }, function (res) {
            });
        });
        // 分享到朋友圈;
        WeixinJSBridge.on('menu:share:timeline', function (argv) {
            WeixinJSBridge.invoke('shareTimeline', {
                "img_url": dataForWeixin.img,
                "img_width": "300",
                "img_height": "300",
                "link": dataForWeixin.url,
                "desc": dataForWeixin.desc,
                "title": dataForWeixin.title
            }, function (res) {
            });
        });
        // 分享到微博;
        WeixinJSBridge.on('menu:share:weibo', function (argv) {
            WeixinJSBridge.invoke('shareWeibo', {
                "content": dataForWeixin.title + ' ' + dataForWeixin.url,
                "url": dataForWeixin.url
            }, function (res) {
            });
        });
        // 分享到Facebook
        WeixinJSBridge.on('menu:share:facebook', function (argv) {
            WeixinJSBridge.invoke('shareFB', {
                "img_url": dataForWeixin.img,
                "img_width": "300",
                "img_height": "300",
                "link": dataForWeixin.url,
                "desc": dataForWeixin.desc,
                "title": dataForWeixin.title
            }, function (res) {
            });
        });
    };
    if (document.addEventListener) {
        document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
    } else if (document.attachEvent) {
        document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
        document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
    }
})();
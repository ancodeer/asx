var imgUrl = "http://http://120.27.28.237/asx/australia-made-logo.png";  //注意必须是绝对路径

var lineLink = "http://http://120.27.28.237/asx";   //同样，必须是绝对路径
var descContent = '澳洲代购直邮保健品，原装正品空运直邮。下单后人肉药店超市采购，保质期同超市药店同步，1-2周从澳洲悉尼直接到你家。'; //分享给朋友或朋友圈时的文字简介
var shareTitle = '小兔兔澳洲代购';  //分享title
var appid = ''; //apiID，可留空

function shareFriend() {
    WeixinJSBridge.invoke('sendAppMessage', {
        "appid": appid,
        "img_url": imgUrl,
        "img_width": "300",
        "img_height": "300",
        "link": lineLink,
        "desc": descContent,
        "title": shareTitle
    }, function (res) {
        //_report('send_msg', res.err_msg);
    })
}
function shareTimeline() {
    WeixinJSBridge.invoke('shareTimeline', {
        "img_url": imgUrl,
        "img_width": "300",
        "img_height": "300",
        "link": lineLink,
        "desc": descContent,
        "title": shareTitle
    }, function (res) {
        //_report('timeline', res.err_msg);
    });
}
function shareWeibo() {
    WeixinJSBridge.invoke('shareWeibo', {
        "content": descContent,
        "url": lineLink
    }, function (res) {
        //_report('weibo', res.err_msg);
    });
}
// 当微信内置浏览器完成内部初始化后会触发WeixinJSBridgeReady事件。
document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
    // 发送给好友
    WeixinJSBridge.on('menu:share:appmessage', function (argv) {
        shareFriend();
    });
    // 分享到朋友圈
    WeixinJSBridge.on('menu:share:timeline', function (argv) {
        shareTimeline();
    });
    // 分享到微博
    WeixinJSBridge.on('menu:share:weibo', function (argv) {
        shareWeibo();
    });
}, false);
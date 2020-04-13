
// https://juejin.im/post/5acf348151882579ef4f5a77
// workWorker 

self.onmessage = function(evt){
    // 工作线程收到主线程的消息
    console.log(evt.data, 'work线程收到的消息')
};
postMessage({
    value: '工作线程向主线程发送消息11'
});

// 终止工作线程
// self.close();


// inline: true,
// fallback: false
// publicPath: '/scripts/workers/'
// 可以设置 inline 属性为 true 将 worker 作为 blob 进行内联；
// 要注意，内联模式将额外为浏览器创建 chunk，即使对于不支持内联 worker 的浏览器也是如此；
// 若这种浏览器想要禁用这种行为，只需要将 fallback 参数设置为 false 即可。

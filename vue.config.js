
module.exports = {
    // 选项...
    // devtool: 'eval-source-map',//开发调试
    devServer: {
        port: 8888,
        proxy: {
            '/apis': {//代理api
                target: "http://localhost:9999",//服务器api地址
                changeOrigin: true,//是否跨域
                pathRewrite: {//重写路径
                    "^/apis": ''
                }
            }
        }
    }
}
// module.exports = {
//     devServer: {
//         proxy: 'http://localhost:9999'
//     }
// }
// // module.exports = {
// //     devServer: {
// //         proxy: {
// //             '/api': {
// //                 target: 'http://localhost:9999',
// //                 ws: true,
// //                 changeOrigin: true
// //             }
// //         }
// //     }
// // }
// // export const lintOnSave = false;
// // export const devServer = {
// //     open: true,
// //     // host: '127.0.0.0', //域名
// //     //host: "0.0.0.0", //如果是真机测试，就使用这个IP
// //     port: 8888,
// //     https: false,
// //     hotOnly: false,
// //     proxy: {
// //         //配置跨域
// //         '/api': {
// //             target: "http://localhost:9999/api",
// //             ws: true,
// //             changOrigin: true,
// //             pathRewrite: {
// //                 '^/api': ''
// //             }
// //         }
// //     }
// // };
// // // const goods = require("./data/goods.json");
// // // module.exports = {
// // //     baseUrl: "/", //根路径
// // //     outputDir: "dists", //构建输出目录
// // //     assetsDir: "assets", //静态资源目录（js,css,img,fonts）
// // //     lintOnSave: false, //是否开启eslint保存检测，有效值:true || false || "error"
// // //     devServer: {
// // //         open: true, //浏览器自动打开页面
// // //         host: 'localhost', //域名
// // //         port: 8060,
// // //         https: false,
// // //         hotOnly: false, //热更新（webpack已实现了，这里false即可）
// // //         //加载本地josn数据
// // //         //参见webpack官网：https://webpack.docschina.org/configuration/dev-server/#devserver-before
// // //         before(app) {
// // //             //http://localhost:8090/myapi/goods
// // //             app.get("/myapi/goods", (req, res) => {
// // //                 res.json(goods);
// // //             })
// // //         }
// // //     }
// // // }
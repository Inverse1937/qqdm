
module.exports = {
    devServer: {
        proxy: {
            "/dmzj": {
                target: "http://v2.api.dmzj.com", // 代理跳转的目标网站
                changeOrigin: true,
                pathRewrite: { // 路径重写
                    '^/dmzj': '', // rewrite path
                }
            },
            "/api": {
                target: "https://interface.dmzj.com", // 代理跳转的目标网站
                changeOrigin: true,
                secure: false,
                // pathRewrite: { // 路径重写
                //     '^/sss': '', // rewrite path
                // }
            },
            
        }
    }
}
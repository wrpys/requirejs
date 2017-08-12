/**
 * Created by Administrator on 2017/8/12.
 */

({
    appDir: './src',
    baseUrl: './js',
    dir: './build',// 输出路径
    optimize: 'uglify',// 是否压缩
    mainConfigFile: './src/js/require.config.js',
    inlineText: true,// 是否把文本文件一起打包到js文件
    modules: [{
        name: "app",
        // include: [],// 包含哪些文件
        // insertRequire: [],// 在打包后的文件添加依赖
        // exclude: ["backbone"],// 排除哪些文件
        // excludeShallow: ["backbone"]// 不打包哪些文件，但是会单独依赖下载
    }]
})
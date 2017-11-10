## elementui-demo01

> 基于vue.js的PC端组件库-全部引入

### Build Setup

```javascript
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

```
### 构建项目

```javascript
vue init webpack-simple elementui-demo

cnpm install

npm run dev

cnpm i element-ui -D  //安装element-ui

cnpm install style-loader -D
        -> webpack.config.js     配置
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
             },

        -> webpack.config.js     字体图标配置
            {
                 test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                 loader: 'file-loader'
            },
            
cnpm i install less less-loader -D   //下载less,less-loader
        -> webpack.config.js     配置
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader"
            },

```

### elementUI用法  
[http://element-cn.eleme.io/#/zh-CN/component/installation](http://element-cn.eleme.io/#/zh-CN/component/installation)

```javascript
1.安装 element-ui
    npm install element-ui --save-dev

2.全部引入   main.js  入口文件
    import ElementUI from 'element-ui'
    import 'element-ui/lib/theme-chalk/index.css'

3.使用组件  //main.js
    Vue.use(ElementUI)        

```










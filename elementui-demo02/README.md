## elementui-demo02

> 基于vue.js的PC端组件库-按需求引入

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
            
cnpm install babel-plugin-component -D   //安装 babel-plugin-component

npm run dev  // 重新启动

cnpm install axios -D   //axios下载

```

### elementUI按需求引入用法  
[http://element-cn.eleme.io/#/zh-CN/component/quickstart](http://element-cn.eleme.io/#/zh-CN/component/quickstart)

```javascript
1.安装 element-ui
    npm install element-ui --save-dev


2.借助 babel-plugin-component，我们可以只引入需要的组件，安装 babel-plugin-component
    npm install babel-plugin-component -D

2.将 .babelrc 文件新增配置
    "plugins": [["component", [
        {
          "libraryName": "element-ui",
          "styleLibraryName": "theme-chalk"
        }
      ]]]

3.想用哪个组件就引用哪个组件，比如 Button 和 Select  //main.js或者单独js然后用main.js引用即可
    import { Button, Select } from 'element-ui'
    
    Vue.component(Button.name, Button)
    Vue.component(Select.name, Select)
    /* 或写为
     * Vue.use(Button)
     * Vue.use(Select)
     */

```
axios请求数据api参考： [https://www.kancloud.cn/yunye/axios/234845](https://www.kancloud.cn/yunye/axios/234845)









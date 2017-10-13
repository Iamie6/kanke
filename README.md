    # 获客

    > A Vue.js project

    ## Build Setup

    ``` bash
    # install dependencies
    npm install

    # serve with hot reload at localhost:8080
    npm run dev

    # build for production with minification
    npm run build

    # build for production and view the bundle analyzer report
    npm run build --report
    ```

    For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).




    ├── index.html
    ├── main.js
    ├── api
    │   └── ... # API 请求
    ├── components  # 组件页面
    │   ├── App.vue
    │   └── ...
    ├── public  # 公用的内容
        ├── components  # 公用组件
        └── scss  # 公用样式
        ├── components  # 公用工具函数
        ├── filter  # 过滤函数
    ├── router  # 路由
    └── vuex
        ├── store.js          # 我们组装模块并导出 store 的地方
        ├── mutation-types.js      # 动作常量
        └── modules
        |   ├── cart.js       # 各个页面的数据处理
            └── products.js   # 产品模块

    首先，npm install 下载 package.json 中的文件包。 node-sass 模块出错，请多下载几次 或翻墙下载
    1、项目由webpack 构建,执行 npm run dev  即可以跑起本地服务，npm run build 打包文件 至 dist 文件夹

    2.整个项目由 vue+ vuex+ vue-route 组成，XhttpRequest 请求由 axios 库完成，ui 控件采用 饿了吗的Vue 手机端 控件 mint-ui
    （1） src/main.js 全局引入 mint-ui 控件及样式文件，语法请查看mint-ui文档
        在src/main.js 引入normalize.css  重置样式
    （2） vue 负责html 模板和数据渲染，模板语法请查阅官方文档
    （3） 所有请求api 统一放置在 src/api/index.js 文件夹中进行管理
            a、引入 crypto.js 后，axios 可根据项目增加配置，对传输的数据进行的加密，解密
            b、axios 可根据环境不同，更改 配置 url 前缀
            c、具体使用请查阅axios官方文档
    （4） vuex 配合 axios 负责整个项目的数据存储和管理
            a、异步获取更改数据   页面 dispatch actionType 至 vuex ,vuex 根据 actionType 调用 axios 中对应的 api 更新 store
            b、常规同步修改数据，commit  mutationType 至 对应的 mutation 函数处理数据变动
            b、页面 使用 computed 动态 获取store  中的 数据进行数据响应式渲染
            c、mutationType 和 actionType 为全局唯一的，为防止多人合作导致命名冲突，故放置于同一文件下，如 src/vuex/mutation-types.js
            d、对于每个路由模块 建一个单独的完整的数据管理，包括存储，异步更改，同步修改
                如 src/vuex/modules/home.js
                home.js 负责 Home.vue 此组件所在路由下的所有数据的管理和存储
            f、最后于 src/vuex/store.js 进行所有路由数据的拼装
            d、具体使用请查阅官方vuex 文档
    (5)   vue-router  负责整个单页面的路由 如 src/router/index.js
                异步或同步加载对应的模块，对于不同的模块配置对应的name，路径path,和components 参数
                具体使用请查阅 官方vue-route 文档

    3、项目完全支持es6 的写法，可以使用es6 的 import  引入模块的方式，也可以使用 CMD require 引入模块的方式，支持 webpack 的异步写法引入 模块

    4、支持使用 es7 async/await 完成异步链式调用

    5、项目采用rem 完成自适应操作，由 src/public/sass/common.scss 中的 pxToRem 函数 以及 index.html 模板中的 REM字体自适应函数来设定

    6、项目支持 sass写法， 支持外部引入或者写在vue 组件下，scoped 属性 锁住当前 sass 的作用域为当前文件

    7、eslint 代码检查已经注释掉，可以在 build/webpack.base.conf.js 中开启

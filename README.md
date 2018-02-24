# myvue-music

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

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


# 安装sass
	npm install sass sass-loader node-sass --save-dev

# 安装babel-runtime  or babel-polyfill
	npm install babel-runtime --save-dev//模拟 ES2015 环境

# 安装fastclick
	npm install fastclick --save-dev
	
	import fastclick from 'fastclick'
	fastclick.attach(document.body)//去掉移动端点击事件延迟3秒的等待

# 安装 axios jsonp获取数据
	npm install --save axios jsonp 

# 安装滚动插件
	npm install --save better-scroll

# vue中图片懒加载
[vue-lazyload插件地址](https://github.com/hilongjw/vue-lazyload)
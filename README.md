# 项目名称
```
万悦湾微信端 wyw-wx
```

# 技术栈

- Vue3
- Vuex
- Vue-Router
- Webpack
- Gulp
- TypeScript
- ES5/6/7/8
- Fetch
- Sass
- [Flexible](https://www.w3cplus.com/mobile/vw-layout-in-vue.html)
- Vant



# 项目运行

#### 注意：由于涉及到部分 ES6/7/8 等新属性，node 需要 6.0 以上版本

```
git clone https://git.qi-cloud.net/wanyuewan/wx.git  

npm install

npm run dev

```



# 目标模块
- 积分停车 ---- 完成
- AR红包 ---- 完成
- 抢优惠 ---- 完成
- 找商家 ---- 完成
- 免费wifi ---- 目前不做实现
- 会员信息 ---- 完成
- 赚积分 ---- 完成
- 积分兑换 ---- 完成
- 我的券包 ---- 完成



# 项目布局

```
.
├── public
├── src
│   ├── assets
│   │   ├── css
│   │   ├── icon
│   │   ├── image
│   │   └── logo.png
│   ├── components
│   │   ├── common
│   │   │   ├── coupon
│   │   │   ├── earn
│   │   │   ├── guide
│   │   │   ├── member
│   │   │   ├── offer
│   │   │   ├── parking
│   │   │   ├── redeem
│   │   │   ├── button.vue
│   │   │   ├── layer.vue
│   │   │   └── myInput.vue
│   ├── config
│   │   ├── auxiliaryTools.ts
│   │   ├── componentsPath.ts
│   │   ├── consoleLog.ts
│   │   ├── env.ts
│   │   ├── fetch.ts
│   │   ├── request.ts
│   │   ├── utils.ts
│   │   ├── vueUtils.ts
│   │   ├── wxConfig.ts
│   │   └── wxMethod.ts
│   ├── lang                                 
│   │   ├── wx.ts
│   │   └── zh.ts
│   ├── router                                 
│   │   ├── router-path.ts
│   │   └── router.ts
│   ├── service
│   │   └── getData.ts
│   ├── store                                 
│   │   ├── module
│   │   └── index.ts                               
│   ├── views
│   │   ├── ar                     // AR红包
│   │   ├── coupon                 // 我的券包
│   │   ├── earn                   // 赚积分
│   │   ├── guide                  // 找商家
│   │   ├── member                 // 会员信息
│   │   ├── offer                  // 抢优惠
│   │   ├── parking                // 积分停车
│   │   ├── redeem                 // 积分兑换
│   │   ├── wifi                   // 免费wifi
│   │   └── index.vue
│   ├── App.vue                                
│   ├── main.ts                         
│   ├── shims-tsx.d.ts
│   └── shims-vue.d.ts
├── .browserslistrc                                
├── .gitignore
├── babel.config.js
├── gulpfile.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tsconfig.json
├── tslint.json
├── vue.config.js
.

```



# 总结

首次在项目中使用typescript，许多地方写法不同于javascript，可以参考[vue + typescript 进阶篇](https://segmentfault.com/a/1190000011878086)；微信「分享到朋友圈」以及「分享给朋友」请采用“（即将废弃）”一套接口，新出接口无法自定义分享内容，可查看[微信公总号](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141115)；vue3相比vue2版本，build、config文件都没有了，需要自行在目录下面创建vue.config.js添加相应的配置，可参考文档[Vue CLI 3](https://cli.vuejs.org/zh/config/)。

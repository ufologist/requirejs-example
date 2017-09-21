# 使用共用组件的项目示例

[预览效果](https://rawgit.com/ufologist/requirejs-example/master/index.html)

[基于 RequireJS 的跨项目共用前端组件(模块)方案](https://github.com/ufologist/requirejs-component/blob/master/principle.md)

## 目录说明

```
项目静态资源/
├── index/                   -- 项目中的一个模块(例如首页模块)
|   |── index.css
|   |── index.js
|   └── res/                 -- 该模块用到的所有静态资源(图片, 音乐等等)
|
├── .../                     -- 项目的其他模块
|
└── lib/                     -- 公共模块
    |── app/                 -- 项目公共模块
    |   |── app.css          -- 项目公共样式
    |   |── app.js           -- 项目公共逻辑
    |   |── res/             -- 项目公共的静态资源
    |   |
    |   |── box-list/        -- 项目的一个公共组件
    |   |   |── box-list.css -- 公共组件的样式
    |   |   |── box-list.js  -- 公共组件的逻辑
    |   |   └── res/         -- 公共组件的资源
    |   |
    |   └── .../             -- 项目的其他公共组件
    |
    └── vendor/              -- 项目需要的第三方模块
        |── clipboard.min.js
        └── ...
```
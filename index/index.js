var start = Date.now();

define(function(require, exports, module) {
    // 如果使用 require('css!normalize.css'), 会将 css 视为依赖关系,
    // 模块的逻辑需等待 css 加载完成后, 才会执行, 即需要等待 css 加载完成后, 才会回调
    // 因此为了提升页面的性能, 可以考虑将 css 模块通过异步的方式去加载.
    // 例如: require(['css!normalize.css'])
    // 这样模块的逻辑便可以更快地执行, 但由于 css 模块是异步加载的, 因此坏处就是页面样式可能"闪烁"一下,
    // 即页面是尽快渲染出来了, 但样式可能还没有加载完, 一旦样式加载完成, 会出现页面样式从无到有的变化一下,
    // 因此选用哪种方案, 还需要在实际中权衡下具体的情况
    // PS: 如果页面本身就有内容, 那么不管使用哪种方案, 都会出现样式"闪烁"
    //     此时需要考虑将基础样式直接在页面 <head> 中通过 <link> 方式"直出"
    //
    // 多个 css 模块同时进行也是可以的, 例如: require(['css!normalize.css', 'css!./index.css'])
    // 即使各个 css 模块的加载完成的顺序不一, 也不会影响到最终的样式展现,
    // 因为插入的 <link> 顺序与 require([]) 时数组中的顺序是一致的
    require([ // 异步加载的方式
        'css!normalize.css', // 公共 CSS 组件
        'css!../lib/app/app.css',
        'css!./index.css'
    ]);
    // 公共 JS 组件
    var $ = require('zepto.js');
    var Component1 = require('component1.js');

    // 项目公共组件
    var app = require('../lib/app/app.js');
    var Clipboard = require('../lib/vendor/clipboard.min.js');
    var BoxList = require('../lib/app/box-list/box-list.js');

    // 页面模块
    var tpl = require('text!./index-tpl.html');

    console.log('index/index.js');
    console.log('zepto', $);

    $('.js-mod-finished').text('模块加载完毕: ' + (Date.now() - start) + 'ms');
    new Component1('.js-component');
    new Clipboard('.js-clipboard-copy');
    app.hello();
    new BoxList('.box-list', 0);
    $('.js-mod-content').html(tpl);
});
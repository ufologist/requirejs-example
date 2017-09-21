// 项目公共逻辑
define(function(require, exports, module) {
    var $ = require('zepto.js');
    console.log('lib/app/app.js');

    module.exports = {
        hello: function() {
            $('.js-app-hello').text('Hello app.js');
        }
    }
});
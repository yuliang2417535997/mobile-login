var exec = require('cordova/exec');

var MobileLoginPlugin = { 
    // 初始化
    onekey_init: function(
        success,
        error        
    ) {
       exec(success, error, 'MobileLoginPlugin', 'onekey_init', ['']); 
    },
    // 登陆
    // tp  1:切换到其他手机号短信登录方式.  2:切换到其他手机号绑定页面
    onekey_login: function(
        tp,
        success,
        error        
    ) {
        cordova.require('cordova/channel').onCordovaReady.subscribe(function(){
            exec(success, error, 'MobileLoginPlugin', 'onekey_login', [tp]);
        });
    }
}

module.exports = MobileLoginPlugin
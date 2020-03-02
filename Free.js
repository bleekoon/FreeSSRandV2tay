// ==UserScript==
// @name         科学上网，SSR/V2ray 账号免费分享
// @namespace    https://baidu.com/
// @version      0.09
// @description  SSR/V2ray节点免费分享，在百度网站上展示SSR/V2ray节点,不定时更新间隔一个星期内，打开https://www.baidu.com/会显示有“获取SSR/V2ray账号  点击显示/隐藏”如果没有显示则需登录百度账号。所有连接失效了尝试更新插件！！
// @author       blee koon
// @match        https://www.baidu.com/
// @grant        none
// ==/UserScript==



(function() {
    'use strict';
    if (test_url()) {
        baidu();
    };
})();

function test_url(host_url) {
    var host=location.host;
    var regExp = new RegExp('^.*baidu.com$', 'i');
    return regExp.test(host);
}

function baidu(host_url){
    if(test_url("baidu.com")) {
        var head = "<p id='max-flip' style='padding:5px;border:solid 1px #c3c3c3;margin-top:0px;text-align:center;background:#e5eecc;'>获取SSR/V2ray账号  点击显示/隐藏</p><div id='max-panel' style='z-index:999；opacity:1;height:120;display:none;border:solid 1px #c3c3c3;padding:5px;text-align:center;background:#e5eecc;'>";
        var time = "<br /><hr /><p><strong style='font-size:18px'>北京时间2020年3月2日10点45分更新</strong></p>"
        var ss1 = "<p>SSR账号: v11.ssrsub.xyz 端口: 1063 密码: t.me/SSRSUB 加密: aes-256-ctr 协议: auth_aes128_md5 混淆: tls1.2_ticket_auth <br /> SSR账号: v9.ssrsub.xyz 端口: 1063 密码: t.me/SSRSUB 加密: aes-256-ctr 协议: auth_aes128_md5 混淆: tls1.2_ticket_auth <br />SSR账号: v4.ssrsub.xyz 端口: 1063 密码: t.me/SSRSUB 加密: aes-256-ctr 协议: auth_aes128_md5 混淆: tls1.2_ticket_auth <br />SSR账号: v2.ssrsub.xyz 端口: 1063 密码: t.me/SSRSUB 加密: aes-256-ctr 协议: auth_aes128_md5 混淆: tls1.2_ticket_auth <br />SSR账号: v1.ssrsub.xyz 端口: 1063 密码: t.me/SSRSUB 加密: aes-256-ctr 协议: auth_aes128_md5 混淆: tls1.2_ticket_auth </p>";
        var str = "<br /><hr /><p><strong style='font-size:18px'>以下来自美帝亡我之心不灭，请慎用，北京时间2020年2月28日10点45分更新</strong></p>"
        var ss2 = "<p>美帝亡我之心不灭--SS/SSR1：162.245.239.67 端口：65535 密码： dongtaiwang.com 加密方式：RC4 协议：origin 混淆：plain </p>";
        var ss3 = "<p>美帝亡我之心不灭--SS/SSR2：185.118.166.1 端口：333 密码： dongtaiwang.com 加密方式： RC4 协议：origin 混淆：plain </p>";
        var v1 = "<p>美帝亡我之心不灭--V2ray1：Address(地址): www.free9999.net Port（端口）: 1234 UUID（用户id）: a2d83225-d8b6-4ad9-bf3a-bda17f800d5e alterId（额外ID）: 8 security（加密方式）: auto network（传输协议）: ws headerType（伪装类型）: none </p>";
        var v2 = "<p>美帝亡我之心不灭--V2ray2：Address(地址): www.free6666.net Port（端口）: 443 UUID（用户id）: bc0abab8-a0e7-40dd-8e20-7acabed8625a alterId（额外ID）: 2 security（加密方式）: auto network（传输协议）: ws headerType（伪装类型）: none 路径（不要落下/）： /6aa0a068/  底层传输安全： tls </p>";
        var dow = "<br /><hr /><p>软件下载:<br>SSR:<a href='https://github.com/shadowsocksr-backup/shadowsocksr-csharp/releases' target='poclic' style='text-decoration: none;'>Windows SSR客户端</a> <a href='https://github.com/shadowsocksr-backup/shadowsocksr-android/releases/download/3.4.0.8/shadowsocksr-release.apk' target='poclic' style='text-decoration: none;'>安卓SSR客户端</a><br>v2ray:<a href='https://github.com/2dust/v2rayN/releases/tag/3.5' target='poclic' style='text-decoration: none;'>windows客户端</a> <a href='https://github.com/2dust/v2rayNG/releases' target='poclic' style='text-decoration: none;'>安卓客户端</a><br /><strong style='font-size:18px'>所有连接失效了尝试更新插件</strong></p>"
        var pay = "<h3 style='font-size:26px'>大佬，可怜可怜我吧，打赏一下！</h3><img src='https://i.loli.net/2020/03/02/snUdkrbqywSMADX.jpg' width='200' height='200'>"
        var tail = "</div>";
        var ssdata = head + time + ss1 + str + ss2 + ss3 + v1 + v2 + dow + pay + tail;
        $('#s_top_wrap').append(ssdata);
        $('#max-flip').click(function() {
        $("#max-panel").slideToggle("fast");
        });
    }
}
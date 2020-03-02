// ==UserScript==
// @name         科学上网，SSR/V2ray 账号免费分享
// @namespace    http://tampermonkey.net/
// @version      0.01
// @description  SSR/V2ray节点免费分享，在百度网站上展示SSR/V2ray节点,不定时更新间隔一个星期内，打开https://www.baidu.com/会显示有“获取SSR/V2ray账号  点击显示/隐藏”如果没有显示则需登录百度账号。
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
        var time = "<br /><hr /><p>北京时间2020年3月2日10点45分更新</p>"
        var ss1 = "<p>SSR账号: v11.ssrsub.xyz 端口: 1063 密码: t.me/SSRSUB 加密: aes-256-ctr 协议: auth_aes128_md5 混淆: tls1.2_ticket_auth <br /> ssr://djExLnNzcnN1Yi54eXo6MTA2MzphdXRoX2FlczEyOF9tZDU6YWVzLTI1Ni1jdHI6dGxzMS4yX3RpY2tldF9hdXRoOmRDNXRaUzlUVTFKVFZVSS8_b2Jmc3BhcmFtPTVMdVk2TFM1VTFOUzVyT281WWFNT21oMGRIQTZMeTkwTG1OdUwwVkhTa2w1Y213JnByb3RvcGFyYW09ZEM1dFpTOVRVMUpUVlVJJnJlbWFya3M9VTFOU1ZFOVBURjlPYjJSbE91V0tvT2FMdi1Xa3B5M2xyb25scEtmbmxhVSZncm91cD1WMWRYTGxOVFVsUlBUMHd1UTA5Tg <br />SSR账号: v9.ssrsub.xyz 端口: 1063 密码: t.me/SSRSUB 加密: aes-256-ctr 协议: auth_aes128_md5 混淆: tls1.2_ticket_auth <br />SSR账号: v4.ssrsub.xyz 端口: 1063 密码: t.me/SSRSUB 加密: aes-256-ctr 协议: auth_aes128_md5 混淆: tls1.2_ticket_auth <br />SSR账号: v2.ssrsub.xyz 端口: 1063 密码: t.me/SSRSUB 加密: aes-256-ctr 协议: auth_aes128_md5 混淆: tls1.2_ticket_auth <br />SSR账号: v1.ssrsub.xyz 端口: 1063 密码: t.me/SSRSUB 加密: aes-256-ctr 协议: auth_aes128_md5 混淆: tls1.2_ticket_auth </p>";
        var str = "<br /><hr /><p>以下来自美帝亡我之心不灭，请慎用，北京时间2020年2月28日10点45分更新</p>"
        var ss2 = "<p>美帝亡我之心不灭--SS/SSR1：162.245.239.67 端口：65535 密码： dongtaiwang.com 加密方式：RC4 协议：origin 混淆：plain </p>";
        var ss3 = "<p>美帝亡我之心不灭--SS/SSR2：185.118.166.1 端口：333 密码： dongtaiwang.com 加密方式： RC4 协议：origin 混淆：plain </p>";
        var v1 = "<p>美帝亡我之心不灭--V2ray1：Address(地址): www.free9999.net Port（端口）: 1234 UUID（用户id）: a2d83225-d8b6-4ad9-bf3a-bda17f800d5e alterId（额外ID）: 8 security（加密方式）: auto network（传输协议）: ws headerType（伪装类型）: none <br>vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogImh0dHBzOi8vZ2l0aHViLmNvbS9BbHZpbjk5OTkvbmV3LXBhYy93aWtpL3YycmF55YWN6LS56LSm5Y+3IiwNCiAgImFkZCI6ICJ0cjEuZnJlZTk5OTkubmV0IiwNCiAgInBvcnQiOiAiMTIzNCIsDQogICJpZCI6ICJhMmQ4MzIyNS1kOGI2LTRhZDktYmYzYS1iZGExN2Y4MDBkNWUiLA0KICAiYWlkIjogIjgiLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogIiIsDQogICJwYXRoIjogIiIsDQogICJ0bHMiOiAiIg0KfQ==</p>";
        var v2 = "<p>美帝亡我之心不灭--V2ray2：Address(地址): www.free6666.net Port（端口）: 443 UUID（用户id）: bc0abab8-a0e7-40dd-8e20-7acabed8625a alterId（额外ID）: 2 security（加密方式）: auto network（传输协议）: ws headerType（伪装类型）: none 路径（不要落下/）： /6aa0a068/  底层传输安全： tls  <br>vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogImh0dHBzOi8vZ2l0aHViLmNvbS9BbHZpbjk5OTkvbmV3LXBhYy93aWtpLyIsDQogICJhZGQiOiAid3d3LmZyZWU2NjY2Lm5ldCIsDQogICJwb3J0IjogIjQ0MyIsDQogICJpZCI6ICJiYzBhYmFiOC1hMGU3LTQwZGQtOGUyMC03YWNhYmVkODYyNWEiLA0KICAiYWlkIjogIjIiLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogInd3dy5mcmVlNjY2Ni5uZXQiLA0KICAicGF0aCI6ICIvNmFhMGEwNjgvIiwNCiAgInRscyI6ICJ0bHMiDQp9</p>";
        var dow = "<br /><hr /><p>软件下载:<br>SSR:<a href='https://github.com/shadowsocksr-backup/shadowsocksr-csharp/releases'>Windows SSR客户端</a> <a href='https://github.com/shadowsocksr-backup/shadowsocksr-android/releases/download/3.4.0.8/shadowsocksr-release.apk'>安卓SSR客户端</a><br>v2ray:<a href='https://github.com/2dust/v2rayN/releases/tag/3.5'>windows客户端</a> <a href='https://github.com/2dust/v2rayNG/releases'>安卓客户端</a></p>"
        var tail = "</div>";
        var ssdata = head + time + ss1 + str + ss2 + ss3 + v1 + v2 + dow + tail;
        $('#s_top_wrap').append(ssdata);
        $('#max-flip').click(function() {
            $("#max-panel").slideToggle("fast");
        });
    }
}
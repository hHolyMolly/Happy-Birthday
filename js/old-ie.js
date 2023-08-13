// JavaScript Document
var browser = navigator.userAgent.indexOf("MSIE");
var version = parseInt(navigator.userAgent.substr(browser + 5, 2));
if (version !== -1) var ie = true;
if (ie && version < 11) {
   document.body.innerHTML = '<div style="width:100%; background:#CC3333; padding: 11px; text-align: center; color: #ffffff; font: 15px Verdana;">Вы используете старую версию браузера?. <a href="http://www.microsoft.com/rus/windows/internet-explorer/worldwide-sites.aspx" target="_blank" style="color: #FFFFFF; text-decoration: underline;">обновитесь</a></div>';
   window.document.execCommand('Stop');
}
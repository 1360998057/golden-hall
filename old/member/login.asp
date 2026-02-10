<!--#include file="conn.asp"-->
<!--#include file="sql.asp"-->
<!--#include file="../config.asp" -->
<!--#include file="../w78_sql.asp"--> 
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>会员登陆_<%=config("title")%></title>
<meta name="keywords" content="<%=config("keywords")%>" />
<meta name="description" content="<%=config("description")%>" />
<link href="../images/css.css" rel="stylesheet" type="text/css" />
</head>
<body>
<!--#include file="../top.asp" -->
<table width="980" border="0" align="center" cellpadding="0" cellspacing="0">
  <tr valign="top">
    <td width="220" bgcolor="#EEF2FA"><!--#include file="left.asp" --></td>
    <td width="760"><table width="100%" height="500" border="0" align="center" cellpadding="0" cellspacing="0" id="line">
      <tr>
        <td valign="top"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="background:#DEE7F9">
          <tr>
            <td><div id="lat">当前位置：<a href="/">首 页</a> > 会员中心 > 会员登录</div></td>
          </tr>
        </table>
          <table width="48%" border="0" align="center" cellpadding="0" cellspacing="0" style=" margin:30px auto">
            <tr>
              <td>
			  <%if session("username")<>"" then%>
<table width="100%" border="0" cellpadding="3" cellspacing="0">
  <tr>
    <td width="52%" colspan="2"><% 
set rs=server.createobject("adodb.recordset") 
exec="select * from user where id="&session("username")&"  " 
rs.open exec,conn,1,1 
response.write("<a href=""/member/index.asp"">"&rs("useradmin")&"</a>&nbsp;欢迎您！")
%></td>
    </tr>
  <tr>
    <td width="52%"><a href="index.asp">我的资料</a></td>
    <td width="48%"><a href="my_orders.asp">我的订单</a></td>
  </tr>
  <tr>
    <td><a href="xiugai_password.asp">修改密码</a></td>
    <td><a href="loginOUT.asp">退出登陆</a></td>
  </tr>
</table>

<%else%>
  <table width="100%" border="0" cellpadding="3" cellspacing="0">
  <form action="login_pass2.asp" method="post" name="add">
    <tr>
      <td width="19%">帐号</td>
      <td colspan="2">
        <input name="useradmin" type="text" size="20" /></td>
    </tr>
    <tr>
      <td>密码</td>
      <td colspan="2"><input name="password" type="password" size="21" /></td>
    </tr>
    <tr>
      <td>验证码</td>
      <td><input name="VerifyCode" type="text"   size="10" /></td>
      <td><img src="safecode.asp?" onClick="this.src+=Math.random()" alt="图片看不清？点击重新得到验证码" style="cursor:hand;" /></td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td width="16%">
       <input align=middle border=0 cache height=20 src="../images/login.gif" type=image width=48 name="image"></td>
      <td width="65%"><a href="Register.asp"><img src="../images/Register.gif" width="48" height="20" /></a></td>
    </tr></form>
  </table>
  <%end if%>
			  </td>
            </tr>
          </table></td>
      </tr>
    </table></td>
  </tr>
</table>
<!--#include file="../foot.asp" -->
</body>
</html>


<!--#include file="conn.asp"-->
<!--#include file="sql.asp"-->
<!--#include file="../config.asp" -->
<!--#include file="../w78_sql.asp"--> 
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>修改密码_<%=config("title")%></title>
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
            <td><div id="lat">当前位置：<a href="/">首 页</a> > 会员中心 > 修改密码</div></td>
          </tr>
        </table>
		<form action="updata_password.asp" method="post" name="add">
          <table width="90%" border="0" align="center" cellpadding="0" cellspacing="0" style="margin:20px auto">
            <tr>
              <td><%if session("username")<>"" then%>
<%set rs=server.createobject("adodb.recordset") 
exec="select * from user where id="&session("username")&"  " 
rs.open exec,conn,1,1 %>

  <table width="100%" border="0" cellpadding="5" cellspacing="0">
    <tr>
      <td width="19%">登陆帐号：</td>
      <td width="38%" colspan="2"><%=rs("useradmin")%>
        <input name="id" type="hidden" value="<%=rs("id")%>" /></td>
      <td width="43%">&nbsp;</td>
    </tr>
    
    
    <tr>
      <td>登陆密码：</td>
      <td colspan="2"><input name="userpassword" type="text" size="30" /></td>
      <td>6-12位,字母、数字或下划线</td>
    </tr>
    <tr>
      <td>重复密码：</td>
      <td colspan="2"><input name="userpassword2" type="text" size="30" /></td>
      <td>同上</td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td colspan="2"><label>
        <input type="submit" name="button" id="button" value="修改密码" />
      </label></td>
      <td>&nbsp;</td>
    </tr>
  </table>
  <%
else
response.write ("<div style="" padding:20px;font-size:14px; color:#990000; font-weight:bold; text-align:left"">您未登陆！请先登陆</div>")
response.write("<a href=""login.asp"" style="" padding:20px;font-size:14px; color:#000000; text-align:left"">已注册会员请点此登陆！</a>")
response.write("<a href=""Register.asp"" style="" padding:20px;font-size:14px; color:#000000; text-align:left"">还没有帐号？点击此处进行注册！</a>")
end if
%>
</td>
            </tr>
          </table></form></td>
      </tr>
    </table></td>
  </tr>
</table>
<!--#include file="../foot.asp" -->
</body>
</html>


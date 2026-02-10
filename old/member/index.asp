<!--#include file="conn.asp"-->
<!--#include file="sql.asp"-->
<!--#include file="../config.asp" -->
<!--#include file="../w78_sql.asp"--> 
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>会员中心_<%=config("title")%></title>
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
            <td><div id="lat">当前位置：<a href="/">首 页</a> > 会员中心 > 我的资料</div></td>
          </tr>
        </table>
          <table width="90%" border="0" align="center" cellpadding="0" cellspacing="0">
<form action="updata_user.asp" method="post" name="add">
  <tr>
    <td width="729" valign="top">
<div class="right_body">
<%if session("username")<>"" then%>
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
      <td>真实姓名：</td>
      <td colspan="2"><input name="zsname" type="text" value="<%=rs("zsname")%>" size="30" /></td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>性别：</td>
      <td colspan="2"><input type="radio" name="sex" value="0" <%if rs("sex")=0 then%>checked<%end if%>>先生　 
<input type="radio" name="sex" value="1" <%if rs("sex")=1 then%>checked<%end if%>>女士</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>密码保护问题：</td>
      <td colspan="2"><%=rs("wen")%></td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>密码保护答案：</td>
      <td colspan="2"><input name="da" type="text" value="<%=rs("da")%>" size="30" /></td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>公司名称：</td>
      <td colspan="2"><input name="gsname" type="text" value="<%=rs("gsname")%>" size="30" /></td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>详细地址：</td>
      <td colspan="2"><input name="gsadd" type="text" value="<%=rs("gsadd")%>" size="40" /></td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>邮政编码：</td>
      <td colspan="2"><input name="youbian" type="text" value="<%=rs("youbian")%>" size="20" /></td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>联系电话：</td>
      <td colspan="2"><input name="tel" type="text" value="<%=rs("tel")%>" size="30" /></td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>联系传真：</td>
      <td colspan="2"><input name="fax" type="text" value="<%=rs("fax")%>" size="30" /></td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>手机号码：</td>
      <td colspan="2"><input name="sj" type="text" value="<%=rs("sj")%>" size="30" /></td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>电子邮箱：</td>
      <td colspan="2"><input name="mail" type="text" value="<%=rs("mail")%>" size="30" /></td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>公司网址：</td>
      <td colspan="2"><input name="wz" type="text" value="<%=rs("wz")%>" size="30" /></td>
      <td>&nbsp;</td>
    </tr>
    
    <tr>
      <td>注册时间：</td>
      <td colspan="2"><%=rs("data")%></td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>注册IP：</td>
      <td colspan="2"><%=rs("ip")%></td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>登陆次数：</td>
      <td colspan="2"><%=rs("dlcs")%></td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>最后登陆：</td>
      <td colspan="2"><%=rs("dldata")%></td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td colspan="2"><label>
        <input type="submit" name="button" id="button" value="更新资料" />
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
</div></td>
  </tr></form>
</table>
          </td>
      </tr>
    </table></td>
  </tr>
</table>
<!--#include file="../foot.asp" -->
</body>
</html>


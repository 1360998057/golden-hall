<!--#include file="conn.asp"-->
<!--#include file="sql.asp"-->
<!--#include file="../config.asp" -->
<!--#include file="../w78_sql.asp"--> 
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>订单详情_<%=config("title")%></title>
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
            <td><div id="lat">当前位置：<a href="/">首 页</a> > 会员中心 > 我的订单</div></td>
          </tr>
        </table>
          <table width="90%" border="0" align="center" cellpadding="0" cellspacing="0" style="margin:20px auto">
            <tr>
              <td><%if session("username")<>"" then%>
<% 
id=request.QueryString("id")
if id="" or not isnumeric(id) then
Response.Write "<script>alert('参数错误！');history.go(-1);</script>" 
Response.End()
end if
exec="select * from [orders] where id="& id 
set rs=server.createobject("adodb.recordset") 
rs.open exec,conn,1,1 
if rs.eof and rs.bof then
Response.Write "<script>alert('参数不正确，ID值不存在！');history.go(-1);</script>" 
Response.End()
end if
%>

  <table width="100%" border="0" cellpadding="5" cellspacing="0">
    <tr>
      <td width="19%">订单编号：</td>
      <td width="81%" colspan="2"><%=rs("OrderNo")%></td>
      </tr>
    
    
    <tr>
      <td>订购数量：</td>
      <td colspan="2"><%=rs("number")%></td>
    </tr>
    <tr>
      <td>订购姓名：</td>
      <td colspan="2"><%=rs("name")%></td>
      </tr>
    <tr>
      <td>联系电话：</td>
      <td colspan="2"><%=rs("tel")%></td>
      </tr>
    <tr>
      <td>联系地址：</td>
      <td colspan="2"><%=rs("address")%></td>
      </tr>
    <tr>
      <td>邮政编码：</td>
      <td colspan="2"><%=rs("code")%></td>
    </tr>
    <tr>
      <td>其它说明：</td>
      <td colspan="2"><%=rs("sm")%></td>
    </tr>
    <tr>
      <td>订单时间：</td>
      <td colspan="2"><%=rs("data")%></td>
    </tr>
  </table>
  <%
else
response.write ("<div style="" padding:20px;font-size:14px; color:#990000; font-weight:bold; text-align:left"">您未登陆！请先登陆</div>")
response.write("<a href=""login.asp"" style="" padding:20px;font-size:14px; color:#000000; text-align:left"">已注册会员请点此登陆！</a>")
response.write("<a href=""Register.asp"" style="" padding:20px;font-size:14px; color:#000000; text-align:left"">还没有帐号？点击此处进行注册！</a>")
end if
%></td>
            </tr>
          </table></td>
      </tr>
    </table></td>
  </tr>
</table>
<!--#include file="../foot.asp" -->
</body>
</html>


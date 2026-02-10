<!--#include file="conn.asp"-->
<!--#include file="sql.asp"-->
<!--#include file="../config.asp" -->
<!--#include file="../page.asp" -->
<!--#include file="../w78_sql.asp"--> 
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>我的订单_<%=config("title")%></title>
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
set rs=server.createobject("adodb.recordset") 
exec="select * from [orders] where userid="&session("username")&" order by id desc "  
rs.open exec,conn,1,1 
if rs.eof then
response.Write "&nbsp;暂无订单！"
else
rs.PageSize =15 '每页记录条数
iCount=rs.RecordCount '记录总数
iPageSize=rs.PageSize
maxpage=rs.PageCount 
page=request("page")
if Not IsNumeric(page) or page="" then
page=1
else
page=cint(page)
end if
if page<1 then
page=1
elseif  page>maxpage then
page=maxpage
end if
rs.AbsolutePage=Page
if page=maxpage then
x=iCount-(maxpage-1)*iPageSize
else
x=iPageSize
end if	
%>
<%For i=1 To x%>
<table width="100%" border="0" align="center" cellpadding="3" cellspacing="0">
  <tr>
    <td width="42%">订单编号：<a href="orders.asp?id=<%=rs("id")%>"><%=rs("OrderNo")%></a></td>
    <td width="39%">时间：<%=rs("data")%></td>
    <td width="19%">订单状态：<%
	if rs("state")=1 then
	response.write("<font color=#FF0000>未处理</font>")
	else
	response.write("已处理")
	end if
	%></td>
  </tr>
</table>
<%rs.movenext
next
end if
%>
<%'以下显示分页
 call PageControl(iCount,maxpage,page,"border=0 align=center","<p align=center>")
rs.close
set rs=nothing
%>
<%
else
response.write ("<div style="" padding:20px;font-size:14px; color:#990000; font-weight:bold; text-align:left"">您未登陆！请先登陆</div>")
response.write("<a href=""login.asp"" style="" padding:20px;font-size:14px; color:#000000; text-align:left"">已注册会员请点此登陆！</a>")
response.write("<a href=""Register.asp"" style="" padding:20px;font-size:14px; color:#000000; text-align:left"">还没有帐号？点击此处进行注册！</a>")
end if
%>
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


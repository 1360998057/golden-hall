<!--#include file="conn.asp"-->
<!--#include file="config.asp" -->
<!--#include file="page.asp" -->
<!--#include file="Sql.Asp" -->
<!--#include file="w78_sql.asp"--> 
<%
id=request.QueryString("id")
if id="" or not isnumeric(id) then
Response.Write "<script>alert('参数错误！');history.go(-1);</script>" 
Response.End()
end if
set rs=server.createobject("adodb.recordset") 
exec="select * from anli where id="& id
rs.open exec,conn,1,1
if rs.eof then
response.Write "<div style=""padding:10px"">无此新闻！</a>"
response.End()
end if
set daohang=server.createobject("adodb.recordset") 
exec="select * from anli_fl where id="&rs("ssfl")&""
daohang.open exec,conn,1,1
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title><%=rs("title")%>_<%=w78_home%></title>
<meta name="keywords" content="<%=w78_keywords%>" />
<meta name="description" content="<%=w78_description%>" />
<link href="images/css.css" rel="stylesheet" type="text/css" />
<script> 
function oCopy(obj){ 
obj.select(); 
js=obj.createTextRange(); 
js.execCommand("Copy") 
alert('地址复制成功，赶紧推荐给您的QQ/MSN好友吧！')
} 
</script>
</head>

<body>
<!--#include file="top.asp" -->
	<table width="1000" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#FFFFFF">
	  <tr>
		<td height="5"></td>
	  </tr>
	</table>
	
	<table width="1000" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#FFFFFF">
	  <tr>
		<td align="left" width=210 valign="top">
		<!--左-->
		<!--#include file="left_products.asp" -->
		<!--左-->
		</td>
		<td align="left" valign="top">
		<!--右-->
				<table width="780" border="0" cellspacing="0" cellpadding="0" style="margin-left:10px">
					<tr valign="top">
						<td height="36" background="images/bgs1.jpg">
						<table width="100%" border="0" cellpadding="0" cellspacing="0">
							<tr>
								<td width="130" height="36" align="center"><div id="lbt">工程案例</div></td>
								<td align="right" style="padding-right:10px;">div id="lat">当前位置：<a href="Index.asp">首页</a> > <a href="Anli.asp">工程案例</a> > <a href="Anli.asp?id=<%=daohang("id")%>"><%=daohang("title")%></a></div></td>
							</tr>
						</table>  
						</td>
					</tr>
					<tr>
					  <td valign="top" align="left" height="180">

						  <table width="100%" border="0" cellspacing="0" cellpadding="0">
							<tr>
							  <td align="left">
							  <div id="body">
								<% 
								response.Write(""&rs("body")&"")
								rs.close
								set rs=nothing
								%>
							  </div>
							  </td>
							</tr>
						  </table>

					  </td>
					</tr>
				  </table>  
		<!--右-->
		</td>
	  </tr>
	</table>
	
<!--#include file="foot.asp" -->
</body>
</html>

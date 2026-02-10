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
exec="select * from [Products] where id="& id
rs.open exec,conn,1,1
if rs.eof then
response.Write "<div style=""padding:10px"">无此记录！</a>"
response.End()
end if
set bigClass=server.createobject("adodb.recordset") 
exec="select * from [bigClass] where BigClassID="&rs("BigClassID")&""
bigClass.open exec,conn,1,1
if rs("SmallClassID")<>0 then
set smallclass=server.createobject("adodb.recordset") 
exec="select * from [smallclass] where SmallClassID="&rs("SmallClassID")&""
smallclass.open exec,conn,1,1
end if
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title><%=bigClass("BigClassName")%>__<%=w78_home%></title>
<meta name="keywords" content="<%=w78_keywords%>" />
<meta name="description" content="<%=w78_description%>" />
<link href="images/css.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="MSClass.js"></script>
<link href="./img/xixi.css" rel="stylesheet" type="text/css">

<link rel="stylesheet" type="text/css" href="menu/pro_dropdown_2.css" />
<script src="menu/stuHover.js" type="text/javascript"></script>
</head>

<body>
<!--#include file="top.asp" -->
	<table width="1024" border="0" align="center" cellpadding="0" cellspacing="0" style="margin-top:15px; background:#FFFFFF">
	  <tr>
		<td align="left" width=274 valign="top">
		<!--左-->
		<!--#include file="left_products.asp" -->
		<!--左-->
		</td>
		<td align="left" valign="top">
		<!--右-->
				<table width="100%" border="0" cellspacing="0" cellpadding="0">
					<tr valign="top">
						<td height="36" background="images/bgs1.jpg">
						<table width="100%" border="0" cellpadding="0" cellspacing="0">
							<tr>
								<td width="130" height="36" align="center"><div id="lbt">产品中心</div></td>
								<td align="right" style="padding-right:10px;"><div id="lat">
					当前位置：<a href="Products.asp?BigClassID=<%=rs("BigClassID")%>"><%=bigClass("BigClassName")%></a> <%if rs("SmallClassID")=0 then %>
					<%else%>
			> <a href="Products.asp?BigClassID=<%=rs("BigClassID")%>&SmallClassID=<%=rs("SmallClassID")%>"><%=smallclass("SmallClassName")%></a><%end if%></div></td>
							</tr>
						</table>  
						</td>
					</tr>
					<tr>
					  <td valign="top" align="left" height="180">

				<div class="right_body">
				 <table width="100%" border="0" cellpadding="0" cellspacing="10">
				  <tr>	
					<td valign="top" align="left">
					<div style="font-size:12px; line-height:25px;"><%=rs("body")%></div>
					</td>
				  </tr>
				 </table>
				</div>

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

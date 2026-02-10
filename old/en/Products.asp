<!--#include file="conn.asp"-->
<!--#include file="config.asp" -->
<!--#include file="page.asp" -->
<!--#include file="Sql.Asp" -->
<!--#include file="w78_sql.asp"--> 
<%
			BigClassID=request.QueryString("BigClassID")
			SmallClassID=request.QueryString("SmallClassID")
			if  not isnumeric(BigClassID)  or not isnumeric(SmallClassID) then
Response.Write "<script>alert('Warning! Do not attempt to inject！');history.go(-1);</script>" 
			Response.End()
			end if
if BigClassID<>"" then
set bigClass=server.createobject("adodb.recordset") 
exec="select * from [bigClass] where BigClassID="&BigClassID&""
bigClass.open exec,conn,1,1
end if

if SmallClassID<>"" then
set smallclass=server.createobject("adodb.recordset") 
exec="select * from [smallclass] where SmallClassID="&SmallClassID&""
smallclass.open exec,conn,1,1
end if
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Product_<%=w78_home%></title>
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
								<td width="40%" height="36" align="left"><div id="lbt">Product</div></td>
								<td align="right" style="padding-right:10px;">
								<div id="lat">Location：<a href="Index.asp">Home</a> > <%if BigClassID="" then %>Product<%else%>
								<%=bigClass("BigClassName")%><%end if%>
								<%if SmallClassID="" then %>
								<%else%> 
								>> <a href="Products.asp?BigClassID=<%=bigClass("BigClassID")%>&SmallClassID=<%=smallclass("SmallClassID")%>">
								<%=smallclass("SmallClassName")%></a><%end if%></div>
								</td>
							</tr>
						</table>  
						</td>
					</tr>
					<tr>
					  <td valign="top" align="left" height="180">
				<div style="float:left; width:100%;">
				<%
				set rs=server.createobject("adodb.recordset") 
				if BigClassID="" then
				exec="select * from products order by px_id asc, id desc"
				end if
				if BigClassID<>"" then
				exec="select * from products where BigClassID="&BigClassID&" order by px_id asc, id desc"
				end if
				if BigClassID<>"" and SmallClassID<>"" then
				exec="select * from products where BigClassID="&BigClassID&" and SmallClassID="&SmallClassID&" order by px_id asc, id desc"
				end if
				rs.open exec,conn,1,1
				if rs.eof then
				response.Write "<div style=""padding:10px"">No Pic！</div>"
				else
				rs.PageSize = 12
				iCount=rs.RecordCount 
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
				end if
				For i=1 To x
				%>
						<div style="float:left; margin:10px; width:230px;">
						 <table width="150" border="0" cellpadding="0" cellspacing="0">
							  <tr>
								<td>
								<div align="center">
								<a href="ShowProducts.asp?id=<%=rs("id")%>" class="img" title="<%=rs("title")%>">
								<img src="<%=rs("img")%>" width="220" height="147" />
								</a>
								</div>
								</td>
							  </tr>
							  <tr>
								<td align="center">
								<div style="width:220px; height:25px; line-height:25px; overflow:hidden">
								<a href="ShowProducts.asp?id=<%=rs("id")%>" title="<%=rs("title")%>"><%=rs("title")%></a>
								</div>
								</td>
							  </tr>
						 </table>
						</div>
				<%
				rs.movenext
				next
				%>
				</div>
				
				<div style="margin:10px auto">
				<%'以下显示分页
				call PageControl(iCount,maxpage,page,"border=0 align=center","<p align=center>")
				rs.close
				set rs=nothing
				%>
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

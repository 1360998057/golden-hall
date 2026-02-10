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
exec="select * from News where ssfl="& id &" order by id desc"
rs.open exec,conn,1,1
if rs.eof then
Response.Write "<script>alert('此分类暂无记录！');history.go(-1);</script>" 
response.End()
else
set daohang=server.createobject("adodb.recordset") 
exec="select * from news_fl where id="&rs("ssfl")&""
daohang.open exec,conn,1,1
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title><%=daohang("title")%>_<%=w78_home%></title>
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
		<!--#include file="left_news.asp" -->
		<!--左-->
		</td>
		<td align="left" valign="top">
		<!--右-->
				<table width="100%" border="0" cellspacing="0" cellpadding="0">
					<tr valign="top">
						<td height="36" background="images/bgs1.jpg">
						<table width="100%" border="0" cellpadding="0" cellspacing="0">
							<tr>
								<td width="130" height="36" align="center"><div id="lbt"><%=daohang("title")%></td>
								<td align="right" style="padding-right:10px;"><div id="lat">当前位置：<a href="Index.asp">首页</a> > <a href="NewsMore.asp?id=<%=daohang("id")%>"><%=daohang("title")%></a></div></td>
							</tr>
						</table>  
						</td>
					</tr>
					<tr>
					  <td valign="top" align="left" height="180">

						  <table width="100%" border="0" cellpadding="4" cellspacing="1" style="margin-bottom:2px; margin-top:10px">
							  <tr>
								<td><%
								rs.PageSize =""&config("newsclass")&"" 
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
								For i=1 To x
								dim url,color
								if IsNull(rs("url")) or trim(rs("url")&"")="" then
								url="ShowNews.asp?id="&rs("id")&"&menu=6"
								else
								url=""&rs("url")&""
								end if
								if IsNull(rs("color")) or trim(rs("color")&"")="" then
								color="#000000"
								else
								color=""&rs("color")&""
								end if
								%>
								  <table width="100%" border="0" align="center" cellpadding="5" cellspacing="5" style="border-bottom:1px dotted #CCCCCC">
									<tr>
									  <td height="25" align="left" width="15"><img src="images/006.gif"></td>
									  <td align="left"><a href="<%=url%>" style="color:<%=color%>; font-size:12px"><%=InterceptString(rs("title"),50)%></a></td>
									  <td align="right"><div align="right"><font color="#003366"><%=formatdate(rs("data"),2)%></font></div></td>
									</tr>
								  </table>
								 <%
								rs.movenext
								next
								end if
								%>
				
								</td>
							  </tr>
							</table>
						   <table width="100%" border="0" align="center" cellpadding="1" cellspacing="1" bgcolor="#f0f0f0">
							  <tr>
								<td>
								<%'以下显示分页
								call PageControl(iCount,maxpage,page,"border=0 align=center","<p align=center>")
								rs.close
								set rs=nothing
								%></td>
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

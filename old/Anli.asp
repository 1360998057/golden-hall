<!--#include file="conn.asp"-->
<!--#include file="config.asp" -->
<!--#include file="page.asp" -->
<!--#include file="Sql.Asp" -->
<!--#include file="w78_sql.asp"--> 
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>客户案例_<%=w78_home%></title>
<meta name="keywords" content="<%=w78_keywords%>" />
<meta name="description" content="<%=w78_description%>" />
<link href="images/css.css" rel="stylesheet" type="text/css" />

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
								<td align="right" style="padding-right:10px;"><div id="lat">当前位置：<a href="index.asp">首页</a> > <a href="Anli.asp">工程案例</a></div></td>
							</tr>
						</table>  
						</td>
					</tr>
					<tr>
					  <td valign="top" align="left" height="180">

						  <table width="100%" border="0" cellspacing="0" cellpadding="0">
							<tr>
							  <td align="left">
								<div class="right_body">
								<%
								id=request.QueryString("id")
								if  not isnumeric(id)  then
								Response.Write "<script>alert('警告！请勿尝试注入！');history.go(-1);</script>" 
								Response.End()
								end if
								set rs=server.createobject("adodb.recordset") 
								if id="" then
								exec="select * from anli order by id desc"
								else
								exec="select * from anli where ssfl="&id&" order by id desc"
								end if
								rs.open exec,conn,1,1
								if rs.eof then
								response.Write "<div style=""padding:10px"">暂无记录！</a>"
								else
								rs.PageSize =""&config("anliclass")&""
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
								<div style="margin:10px auto;">
								<table width="100%" border="0" cellpadding="5" cellspacing="1" bgcolor="#DEE7F9">
								  <tr valign="top">
									<td width="22%" bgcolor="#FFFFFF"><a href="ShowAnli.asp?id=<%=rs("id")%>" class="img"><img src="<%=rs("img")%>" width="150" height="120" /></a></td>
									<td width="78%" bgcolor="#FFFFFF">
									<div style="margin:5px"><a href="ShowAnli.asp?id=<%=rs("id")%>" style="color:<%=rs("color")%>; font-size:14px; font-weight:bold"><%=InterceptString(rs("title"),50)%></a></div>
									<div style="line-height:23px; color:#464646">&nbsp;&nbsp;&nbsp;&nbsp;<%=rs("daodu")%>...</div>
									</td>
								  </tr>
								</table>
								</div>
								<%
								rs.movenext
								next
								%>
								</div>
								<%'以下显示分页
								 call PageControl(iCount,maxpage,page,"border=0 align=center","<p align=center>")
								rs.close
								set rs=nothing
								%>
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

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
exec="select * from News where id="& id
rs.open exec,conn,1,1
if rs.eof then
response.Write "<div style=""padding:10px"">无此新闻！</a>"
response.End()
end if
set daohang=server.createobject("adodb.recordset") 
exec="select * from news_fl where id="&rs("ssfl")&""
daohang.open exec,conn,1,1
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title><%=rs("title")%>_<%=w78_home%></title>
<meta name="keywords" content="<%=w78_keywords%>" />
<meta name="description" content="<%=w78_description%>" />
<script> 
function oCopy(obj){ 
obj.select(); 
js=obj.createTextRange(); 
js.execCommand("Copy") 
alert('地址复制成功，赶紧推荐给您的QQ/MSN好友吧！')
} 
</script>
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
								<td width="130" height="36" align="center"><div id="lbt">新闻中心</div></td>
								<td align="right" style="padding-right:10px;"><div id="lat">当前位置：<a href="/">首页</a> > <a href="NewsMore.asp?id=<%=daohang("id")%>"><%=daohang("title")%></a> > 查看新闻</div></td>
							</tr>
						</table>  
						</td>
					</tr>
					<tr>
					  <td valign="top" align="left" height="180">

							<table width="100%" border="0" align="center" cellpadding="5" cellspacing="0">
							<tr>
							<td height="60" valign="bottom"><div align="center" style="color:#990000; font-size:16px; font-weight:bold"><%=rs("title")%></div></td>
							</tr>
							<tr>
							<td height="50"><div align="center">作者：<%=rs("zz")%>&nbsp; 来源：<%=rs("ly")%>&nbsp; 发表时间：<%=rs("data")%>&nbsp; <%
							set rs = server.createobject("adodb.recordset") 
							curid=request("id") 
							sql = "UPDATE news SET hit = hit + 1 WHERE id = " + cstr(curid) 
							conn.execute sql 
							sql = "SELECT * FROM news WHERE id = " + cstr(curid) 
							rs.open sql,conn,1,1
							response.write("点击："&rs("hit")&"")
							%></div></td>
							</tr>
							<tr>
							<td height="280" valign="top"><div id="body"><%=rs("body")%></div></td>
							</tr>
							<tr>
							<td>&nbsp;</td>
							</tr>
							<tr>
							<td><hr align="right" width="100%" size="0" noshade="noshade" /></td>
							</tr>
							<tr>
							<td>
							<table width="100%" border="0" cellpadding="10" cellspacing="1" bgcolor="#EEF2FA">
							<tr>
							  <td bgcolor="#f0eddc"><div align="center">
								<%
							   dim rstmp, nexttitle, prevtitle
							   set rstmp=server.CreateObject("adodb.recordset")
							   rstmp.open "select top 1 id, title from news where id>" & request.QueryString("id") & " order by id asc",conn,1,1
							   if not rstmp.eof then
							   nexttitle="<a href=""ShowNews.asp?id=" & rstmp(0) & """>" & InterceptString(rstmp(1),60) & "</a>"
							   else
							   nexttitle = "无"
							   end if
							   rstmp.close
							   rstmp.open "select top 1 id, title from news where id<" & request.QueryString("id") & " order by id desc"
							   if not rstmp.eof then
							   prevtitle="<a href=""ShowNews.asp?id=" & rstmp(0) & """>" & InterceptString(rstmp(1),60) & "</a>"
							   else
							   prevtitle = "无"
							   end if
							   rstmp.close
							   set rstmp=nothing
								%>
								上条新闻：<%=prevtitle%> </div></td>
							  <td bgcolor="#f0eddc"><div align="center">下条新闻：<%=nexttitle%></div></td>
							</tr>
							</table>
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

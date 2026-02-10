<!--#include file="conn.asp"-->
<!--#include file="config.asp" -->
<!--#include file="Sql.Asp" -->
<!--#include file="page.Asp" -->
<!--#include file="w78_sql.asp"--> 
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>搜索结果_<%=w78_home%></title>
<meta name="keywords" content="<%=w78_keywords%>" />
<meta name="description" content="<%=w78_description%>" />
<link href="images/css.css" rel="stylesheet" type="text/css" />
</head>
<body>
<!--#include file="top.asp" -->

<table width="1024" border="0" align="center" cellpadding="0" cellspacing="0">
  <tr>
	<td align="left" width=210 valign="top">
	<!--左-->
	<!--#include file="left_products.asp" -->
	<!--左-->
	</td>
	<td align="left" valign="top" style="padding-left:30px">
		<!--右-->

<table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
<tr>
	<td height="36" background="images/bgs1.jpg">
	<table width="100%" border="0" cellpadding="0" cellspacing="0">
		<tr>
			<td width="130" height="36" align="center"><div id="lbt">站内搜索</div></td>
			<td align="right" style="padding-right:10px;"><div id="lat">当前位置：<a href="Index.asp">首页</a> > 站内搜索</div></td>
		</tr>
	</table>  
	</td>
</tr>
  <tr>
    <td valign="top">
<div class="right_body">
<%	
t=request.QueryString("t") 
key=request.QueryString("key") 
if t="" then
Response.Write("<script>alert('请选择要搜索的栏目!');history.back();</script>")
Response.End()
end if
if key="" then
Response.Write("<script>alert('请输入关键词!');history.back();</script>")
Response.End()
end if
set rs=server.createobject("adodb.recordset") 
if t=1 then
exec="select * from [news] where title like '%"&key&"%'  order by id desc  " 
elseif t=2 then
exec="select * from [Products] where title like '%"&key&"%'  order by id desc  " 
else
exec="select * from [download] where title like '%"&key&"%'  order by id desc  " 
end if
if t=4 then
exec="select * from [anli] where title like '%"&key&"%'  order by id desc  " 
end if
rs.open exec,conn,1,1 
if rs.eof then
response.Write "&nbsp;没有搜索到相关内容！"
else
rs.PageSize =10 '每页记录条数
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
For i=1 To x%>
<%if t=1 then%>
      <table width="100%" border="0" cellpadding="5" cellspacing="5" style="border-bottom:#CCCCCC 1px dotted">
        <tr>
          <td width="55%" class="td" align="left">· <a href="ShowNews.asp?id=<%=rs("id")%>" style=" font-size:14px" target="_blank"><%=InterceptString(rs("title"),50)%></a> 浏览：<%=rs("hit")%></td>
          <td width="45%" class="td"><div align="right"><font color="#009900"><%=rs("data")%></font></div></td>
        </tr>
      </table>
<%end if%>
<%if t=2 then%>
<div style="float:left; margin-left:22px">
<table width="165" border="0" cellpadding="5" cellspacing="1">
          
          <tr>
            <td width="36%"><div align="left"><a href="ShowProducts.asp?id=<%=rs("id")%>" class="img" title="<%=rs("title")%>"><img src="<%=rs("img")%>" width="150" height="120" /></a></div></td>
            </tr>
          
          <tr>
            <td><div style="font-weight:bold; text-align:center; color:#333333"><a href="ShowProducts.asp?id=<%=rs("id")%>" title="<%=rs("title")%>"><%=InterceptString(rs("title"),10)%></a></div></td>
            </tr>
          
        </table>
</div>
<%end if%>
<%if t=3 then%>
      <table width="100%" border="0" cellpadding="5" cellspacing="5" style="border-bottom:#CCCCCC 1px dotted">
        <tr>
          <td width="55%" class="td" align="left">· <a href="ShowDownload.asp?id=<%=rs("id")%>" title="<%=rs("title")%>"><%=InterceptString(rs("title"),20)%></a></td>
          <td width="45%" class="td"><div align="right"><font color="#009900"><%=rs("data")%></font></div></td>
        </tr>
      </table>
<%end if%>
<%if t=4 then%>
      <table width="100%" border="0" cellpadding="5" cellspacing="5" style="border-bottom:#CCCCCC 1px dotted">
        <tr>
          <td width="55%" class="td" align="left">· <a href="ShowAnli.asp?id=<%=rs("id")%>" title="<%=rs("title")%>"><%=InterceptString(rs("title"),20)%></a></td>
          <td width="45%" class="td"><div align="right"><font color="#009900"><%=rs("data")%></font></div></td>
        </tr>
      </table>
<%end if%>

<%rs.movenext
next
end if
%>
<%'以下显示分页
 call PageControl(iCount,maxpage,page,"border=0 align=center","<p align=center>")
rs.close

sql="select * from so where key='"&key&"'"
rs.open sql,conn,1,3

if rs.eof and rs.bof then
rs.addnew
rs("key")=key
rs("cishu")=rs("cishu")+1
else
rs("cishu")=rs("cishu")+1
end if

rs.update
rs.close
set rs=nothing

%>
</div></td>
  </tr>
</table>

		<!--右-->
		</td>
	  </tr>
	</table>
<!--#include file="foot.asp" -->
</body>
</html>

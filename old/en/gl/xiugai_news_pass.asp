<!--#include file="Conn.asp" -->
<!--#include file="seeion.asp" -->
<%
id=request.QueryString("id")
set rs=server.createobject("adodb.recordset")
sql="select * from news where id="&id
rs.open sql,conn,1,3
title=request.form("title")
url=request.form("url")
body=request.form("body")
img=request.form("img")
ly=request.form("ly")
data=request.form("data")
zz=request.form("zz")
color=request.form("color")
ssfl=request.form("ssfl")
tuijian=request.form("tuijian")
if title=""  then 
response.Write("<script language=javascript>alert('新闻标题不能为空!');history.go(-1)</script>") 
response.end 
end if
if body=""  then 
response.Write("<script language=javascript>alert('新闻内容不能为空!');history.go(-1)</script>") 
response.end 
end if

rs("title")=title
rs("url")=url
rs("body")=body
rs("img")=img
rs("ly")=ly
rs("data")=data
rs("zz")=zz
rs("color")=color
rs("ssfl")=ssfl
rs("tuijian")=tuijian
rs.update
rs.close
set rs=nothing
conn.close
set rs=nothing
Response.Write "<script>alert('新闻修改成功！');window.location.href='admin_news.asp';</script>" 
%>
<!--#include file="Conn.asp" -->
<!--#include file="seeion.asp" -->
<%
set rs=server.createobject("adodb.recordset")
sql="select * from anli"
rs.open sql,conn,1,3
title=request.form("title")
daodu=request.form("daodu")
body=request.form("body")
img=request.form("img")
color=request.form("color")
ssfl=request.form("ssfl")
tuijian=request.form("tuijian")
if title=""  then 
response.Write("<script language=javascript>alert('案例标题不能为空!');history.go(-1)</script>") 
response.end 
end if
if body=""  then 
response.Write("<script language=javascript>alert('案例内容不能为空!');history.go(-1)</script>") 
response.end 
end if
rs.addnew
rs("title")=title
rs("daodu")=daodu
rs("body")=body
rs("img")=img
rs("color")=color
rs("ssfl")=ssfl
rs("tuijian")=tuijian
rs.update
rs.close
set rs=nothing
conn.close
set rs=nothing
Response.Write "<script>alert('新闻增加成功，点击继续增加！');window.location.href='add_anli.asp';</script>" 
%>
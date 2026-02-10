<!--#include file="Conn.asp" -->
<!--#include file="seeion.asp" -->
<%
set rs=server.createobject("adodb.recordset")
sql="select * from Products"
rs.open sql,conn,1,3
title=request.form("title")
BigClassID=request.form("BigClassID")
SmallClassID=request.form("SmallClassID")
ri=request.form("ri")
img=request.form("img")
zz=request.form("zz")
body=request.form("body")
tuijian=request.form("tuijian")
jiage=request.form("jiage")
px_id=request.form("px_id")
if title=""  then 
response.Write("<script language=javascript>alert('标题不能为空!');history.go(-1)</script>") 
response.end 
end if
if BigClassID="" then
response.Write("<script language=javascript>alert('请选择分类!');history.go(-1)</script>")
response.End()
end if
if SmallClassID="" then
SmallClassID=0
end if
if body="" then 
response.Write("<script language=javascript>alert('介绍内容不能为空!');history.go(-1)</script>") 
response.end 
end if
if px_id=""  then 
response.Write("<script language=javascript>alert('排序ID不能为空!');history.go(-1)</script>") 
response.end 
end if
rs.addnew
rs("title")=title
rs("BigClassID")=BigClassID
rs("SmallClassID")=SmallClassID
rs("ri")=ri
rs("img")=img
rs("zz")=zz
rs("body")=body
rs("px_id")=px_id
rs("tuijian")=tuijian
if request.form("jiage") <> "" then
rs("jiage")=jiage
end if
rs.update
rs.close
set rs=nothing
conn.close
set rs=nothing
Response.Write "<script>alert('增加成功，点击继续增加！');window.location.href='add_products.asp';</script>" 
%>
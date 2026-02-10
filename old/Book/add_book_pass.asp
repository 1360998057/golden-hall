<!--#include file="Conn.asp" -->
<!--#include file="../w78_Sql.Asp" -->
<!--#include file="sql.asp"-->
<%
set rs=server.createobject("adodb.recordset")
sql="select * from ly"
rs.open sql,conn,1,3
title=request.form("title")
body=request.form("body")
name=request.form("name")
qq=request.form("qq")
mail=request.form("mail")
tel=request.form("tel")
sh=request.form("sh")
VerifyCode=request.form("VerifyCode") 
if title=""  then 
response.Write("<script language=javascript>alert('留言标题不能为空!');history.go(-1)</script>") 
response.end 
end if
if name=""  then 
response.Write("<script language=javascript>alert('姓名不能为空!');history.go(-1)</script>") 
response.end 
end if
if tel=""  then 
response.Write("<script language=javascript>alert('联系电话不能为空!');history.go(-1)</script>") 
response.end 
end if
IF sh="" or not isNumeric(request("sh")) then
response.write("<script>alert(""警告！请勿尝试外部提交数据！""); history.go(-1);</script>")
response.end
end if
if body=""  then 
response.Write("<script language=javascript>alert('内容不能为空!');history.go(-1)</script>") 
response.end 
end if

rs.addnew
rs("title")=title
rs("body")=body
rs("name")=name
rs("qq")=qq
rs("mail")=mail
rs("tel")=tel
rs("sh")=sh
rs.update
rs.close
set rs=nothing
conn.close
set rs=nothing
Response.Write "<script>alert('留言提交成功！');window.location.href='../index.asp';</script>" 
%>
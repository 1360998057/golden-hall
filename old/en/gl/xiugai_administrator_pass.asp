<!--#include file="Conn.asp" -->
<!--#include file="seeion.asp" -->
<!--#include file="md5.Asp"-->
<%
id=request.QueryString("id")
set rs=server.createobject("adodb.recordset")
sql="select * from admin where id="&id
rs.open sql,conn,1,3
admin=request.form("admin")
password=md5(request.form("password"))
password3=md5(request.form("password3"))
zsname=request.form("zsname")
mail=request.form("mail")
qx=request.form("qx")

if password<>password3  then 
response.Write("<script language=javascript>alert('两次密码不一!');history.go(-1)</script>") 
response.end 
end if


rs("admin")=admin
if request.form("password")<>"" then
rs("password")=password
end if
rs("zsname")=zsname
rs("mail")=mail
rs("qx")=qx
rs.update
rs.close
set rs=nothing
conn.close
set rs=nothing
Response.Write "<script>alert('管理员修改成功！');window.location.href='admin_administrator.asp';</script>" 
%>
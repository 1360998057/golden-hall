<!--#include file="Conn.asp" -->
<!--#include file="seeion.asp" -->
<!--#include file="md5.asp" -->
<%
admini=request.form("admin")
set rs=server.createobject("adodb.recordset")
sql="select * from admin where admin='"&admini&"'" 
rs.open sql,conn,1,3
password=md5(request.form("password"))
password3=md5(request.form("password3"))
zsname=request.form("zsname")
mail=request.form("mail")
qx=request.form("qx")

if admin="" and password="" and password3="" then 
response.Write("<script language=javascript>alert('用户名称密码不能为空!');history.go(-1)</script>") 
response.end 
end if
if password<>password3  then 
response.Write("<script language=javascript>alert('两次密码不一!');history.go(-1)</script>") 
response.end 
end if

	if not rs.eof then
		Response.Write "<script language='javascript'>alert('已存在同名管理员,请重新输入!');history.go(-1)</script>"
		Response.end
	end if

rs.addnew
rs("admin")=admini
rs("password")=password
rs("zsname")=zsname
rs("mail")=mail
rs("qx")=qx
rs.update
rs.close
set rs=nothing
conn.close
set rs=nothing
Response.Write "<script>alert('管理员增加成功！');window.location.href='admin_administrator.asp';</script>" 
%>
<!--#include file="Conn.asp" -->
<!--#include file="seeion.asp" -->
<%
id=request.QueryString("id")
set rs=server.createobject("adodb.recordset")
sql="select * from user where id="&id
rs.open sql,conn,1,3
userpassword=request.form("userpassword")
sex=request.form("sex")
gsname=request.form("gsname")
gsadd=request.form("gsadd")
youbian=request.form("youbian")
tel=request.form("tel")
fax=request.form("fax")
sj=request.form("sj")
mail=request.form("mail")
wz=request.form("wz")



if userpassword<>"" then
rs("userpassword")=userpassword
end if
rs("sex")=sex
rs("gsname")=gsname
rs("gsadd")=gsadd
rs("youbian")=youbian
rs("tel")=tel
rs("fax")=fax
rs("sj")=sj
rs("mail")=mail
rs("wz")=wz
rs.update
rs.close
set rs=nothing
conn.close
set rs=nothing
Response.Write "<script>alert('修改成功！');window.location.href='admin_user.asp';</script>" 
%>
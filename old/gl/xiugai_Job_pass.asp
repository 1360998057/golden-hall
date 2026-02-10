<!--#include file="Conn.asp" -->
<!--#include file="seeion.asp" -->
<%
id=request.QueryString("id")
set rs=server.createobject("adodb.recordset")
sql="select * from job where id="& id 
rs.open sql,conn,1,3
title=request.form("title")
body=request.form("body")
nn1=request.form("nn1")
nn2=request.form("nn2")
sex=request.form("sex")
xueli=request.form("xueli")
renshu=request.form("renshu")
if title=""  then 
response.Write("<script language=javascript>alert('职位名称不能为空!');history.go(-1)</script>") 
response.end 
end if
if nn1="" or nn2=""  then 
response.Write("<script language=javascript>alert('年龄不能为空!');history.go(-1)</script>") 
response.end 
end if
IF not isNumeric(request("nn1")) or not isNumeric(request("nn2")) then
response.write("<script>alert(""年龄必须为数字！""); history.go(-1);</script>")
response.end
end if
if renshu=""  then 
response.Write("<script language=javascript>alert('请填写招聘人数!');history.go(-1)</script>") 
response.end 
end if
IF not isNumeric(request("renshu")) then
response.write("<script>alert(""招聘人数请填写数字！""); history.go(-1);</script>")
response.end
end if

rs("title")=title
rs("body")=body
rs("nn1")=nn1
rs("nn2")=nn2
rs("sex")=sex
rs("xueli")=xueli
rs("renshu")=renshu
rs.update
rs.close
set rs=nothing
conn.close
set rs=nothing
Response.Write "<script>alert('职位修改成功！');window.location.href='admin_Job.asp';</script>" 
%>
<!--#include file="conn.asp"-->
<!--#include file="config.asp" -->
<!--#include file="Sql.Asp" -->
<!--#include file="w78_sql.asp"--> 
<% 
id=request.QueryString("id") 
	if id="" or not isnumeric(id) then
Response.Write "<script>alert('参数错误！');history.go(-1);</script>" 
	Response.End()
	end if
exec="select * from download where id="&id
set rs=server.createobject("adodb.recordset") 
rs.open exec,conn,1,1 
sql="update download set js=js+1 where id="&id&" and js is not null" '下载次数
conn.execute(sql) 
response.redirect "" & rs("url")& "" 
rs.close 
set rs=nothing 
%>

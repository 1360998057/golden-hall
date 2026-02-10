<!--#include file="Conn.asp" -->
<!--#include file="seeion.asp" -->
<%
id=request.QueryString("id")
set rs=server.createobject("adodb.recordset")
sql="select * from ad where id="&id
rs.open sql,conn,1,3
title=request.form("title")
url=request.form("url")
width=request.form("width")
height=request.form("height")
img=request.form("img")
lx=request.form("lx")
sm=request.form("sm")
bz=request.form("bz")
openfs=request.form("openfs")
code=request.form("code")
if title=""  then 
response.Write("<script language=javascript>alert('广告名称不能为空!');history.go(-1)</script>") 
response.end 
end if
if lx=1 or lx=2  then
if img=""  then 
response.Write("<script language=javascript>alert('广告图片不能为空!');history.go(-1)</script>") 
response.end 
end if
if url=""  then 
response.Write("<script language=javascript>alert('广告链接地址不能为空!');history.go(-1)</script>") 
response.end 
end if
if width=""  then 
response.Write("<script language=javascript>alert('请输入广告宽度!');history.go(-1)</script>") 
response.end 
end if
if height=""  then 
response.Write("<script language=javascript>alert('请输入广告高度!');history.go(-1)</script>") 
response.end 
end if
IF not isNumeric(request("width")) or not isNumeric(request("height"))then
response.write("<script>alert(""广告尺寸必须都为数字！""); history.go(-1);</script>")
response.end
end if
else
if code=""  then 
response.Write("<script language=javascript>alert('文字广告内容不能为空!');history.go(-1)</script>") 
response.end 
end if
end if


rs("title")=title
rs("url")=url
rs("width")=width
rs("height")=height
rs("img")=img
rs("lx")=lx
rs("sm")=sm
rs("bz")=bz
rs("code")=code
rs("openfs")=openfs
rs.update
rs.close
set rs=nothing
conn.close
set rs=nothing
Response.Write "<script>alert('广告修改成功！');window.location.href='admin_ad.asp';</script>" 
%>
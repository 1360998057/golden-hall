<!--#include file="Conn.asp" -->
<!--#include file="seeion.asp"-->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" type="text/css" id="css" href="images/style.css">
<title>专题管理</title>
</head>
<body>
<table width="95%" border="0" align="center" cellpadding="0" cellspacing="1" bgcolor="#666666">
  <tr>
    <td height="30" background="images/bg_list.gif"><div  style="padding-left:10px; font-weight:bold; color:#FFFFFF">专题管理</div></td>
  </tr>
  <tr>
    <td bgcolor="#FFFFFF"><table width="100%" border="0" align="center" cellpadding="0" cellspacing="1">
      <tr>
        <td bgcolor="#FFFFFF"><%	
set rs=server.createobject("adodb.recordset") 
exec="select * from quyu order by id desc" 
rs.open exec,conn,1,1 
if rs.eof then
response.write ("<div style=""padding:10px;"">暂无!</div>")
else
rs.PageSize =300 '每页记录条数
iCount=rs.RecordCount '记录总数
iPageSize=rs.PageSize
maxpage=rs.PageCount 
page=request("page")
if Not IsNumeric(page) or page="" then
page=1
else
page=cint(page)
end if
if page<1 then
page=1
elseif  page>maxpage then
page=maxpage
end if
rs.AbsolutePage=Page
if page=maxpage then
x=iCount-(maxpage-1)*iPageSize
else
x=iPageSize
end if	
%>
            <% 
for i=1 to rs.pagesize 
j=i 
if j mod 2=0 then 
bg="#F1F5F8" 
else 
bg="#FFFFFF" 
end if 
%>
        </td>
      </tr><%if session("qx")=2 then%>
      <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='<%=bg%>'" bgcolor="<%=bg%>">
        <td colspan="2"><table width="100%" border="0" cellpadding="5" cellspacing="0">
        <form action="admin_quyu.asp?xiugai=ok" method="post" name="add">
            <tr>
              <td width="8%" class="td">ID：<%=rs("ID")%><input name="quyuID" type="hidden" size="15"  value="<%=rs("ID")%>"/></td>
              <td width="20%" height="25" class="td"><input name="quyuName" type="text" size="15"  value="<%=rs("quyu")%>"/></td>
              <td width="7%" class="td"><input type="submit" name="button2" id="button2" value="修改"  class="btn"/></td>
              <td width="7%" class="td"><input type="button" name="Submit" value="删除" onClick="javascript:if(confirm('确定删除？删除后不可恢复!')){window.location.href='admin_quyu.asp?act=del&id=<%=rs("ID")%>';}else{history.go(0);}"  class="btn"/></td>
            </tr></form>
          </table>
        <%else%>
<div style=" padding:20px;font-size:14px; color:#990000; font-weight:bold; text-align:center">您没有权限操作！</div>
	<%response.end
	end if%>
            <% 
rs.movenext 
if rs.eof then exit for 
next 
%>
          <%
end if
%></td>
      </tr>
    </table></td>
  </tr>
</table>

<div style="margin-top:10px">

<table width="95%" border="0" align="center" cellpadding="0" cellspacing="1" bgcolor="#666666">
<form action="admin_quyu.asp?add=ok" method="post" name="add">
  <tr>
    <td height="30" background="images/bg_list.gif"><div  style="padding-left:10px; font-weight:bold; color:#FFFFFF">增加专题</div></td>
  </tr>
  <tr>
    <td bgcolor="#FFFFFF"><table width="100%" border="0" align="center" cellpadding="5" cellspacing="0" >
      <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#F1F5F8'" bgcolor="#F1F5F8" >
        <td height="25" width="34%" class="td">专题名称</td>
        <td width="66%"  class="td"><input name="quyuName" type="text" size="30"  /></td>
      </tr>
      
      <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#F1F5F8'" bgcolor="#F1F5F8">
        <td height="25" class="td">&nbsp;</td>
        <td class="td"><label>
        <input type="submit" name="button" id="button" value="增加"  class="btn"/>
        </label></td>
      </tr>
      
    </table></td>
  </tr></form>
</table>

    </div>
</body>
</html>
<% 
if Request.QueryString("xiugai")="ok" then
id=request("quyuID") 
sql="select * from quyu where ID="&id 
set rs=server.CreateObject("adodb.recordset")
rs.open sql,conn,1,3
rs("quyu")=request.form("quyuName") 
rs.update 
rs.close 
response.Write("<script language=""javascript"">alert(""当前专题修改成功！"");window.location.href='admin_quyu.asp';</script>")
end if
%> 
<%
if request("act")="del" then
	id=request("ID")
	if id="" then
	Response.Write "<script language='javascript'>alert('参数错误!');document.location.href('admin_quyu.asp');</script>"
	Response.End()
	end if
set rs=server.createobject("adodb.recordset")
rs.open "Select * from quyu where ID="&Request("id"),conn,1,3
if rs.bof and rs.eof then
	Response.Write "<script language='javascript'>alert('数据库中没有该记录！');document.location.href('admin_quyu.asp');</script>"
	Response.End()
else
	rs.Delete
	rs.Update
	Response.Write "<script language='javascript'>alert('当前专题删除成功！');document.location.href('admin_quyu.asp');</script>"
end if
end if
%>
<%
if request("add")="ok" then
set rs=server.createobject("adodb.recordset")
sql="select * from quyu"
rs.open sql,conn,1,3
quyuName=request.form("quyuName")
if quyuName=""  then 
response.Write("<script language=javascript>alert('名称不能为空!');history.go(-1)</script>") 
response.end 
end if
rs.addnew
rs("quyu")=quyuName
rs.update
rs.close
set rs=nothing
conn.close
set rs=nothing
Response.Write "<script>alert('\增加成功！');window.location.href='admin_quyu.asp';</script>" 
end if
%>
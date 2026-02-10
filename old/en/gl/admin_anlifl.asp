<!--#include file="Conn.asp" -->
<!--#include file="seeion.asp"-->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" type="text/css" id="css" href="images/style.css">
<title>案例分类管理</title>
</head>
<body>
<table width="95%" border="0" align="center" cellpadding="0" cellspacing="1" bgcolor="#666666">
  <tr>
    <td height="30" background="images/bg_list.gif"><div  style="padding-left:10px; font-weight:bold; color:#FFFFFF">案例分类管理</div></td>
  </tr>
  <tr>
    <td bgcolor="#FFFFFF"><table width="100%" border="0" align="center" cellpadding="0" cellspacing="1">
      <tr>
        <td bgcolor="#FFFFFF"><%	
set rs=server.createobject("adodb.recordset") 
exec="select * from anli_fl order by px_id asc" 
rs.open exec,conn,1,1 
if rs.eof then
response.write ("<div style=""padding:10px;"">暂无案例分类!</div>")
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
        <form action="admin_anlifl.asp?xiugai=ok&id=<%=rs("id")%>" method="post" name="add">
            <tr>
              <td width="8%" class="td">ID：<%=rs("id")%><input name="id" type="hidden" size="15"  value="<%=rs("id")%>"/></td>
              <td width="20%" height="25" class="td"><input name="title" type="text" size="15"  value="<%=rs("title")%>"/></td>
              <td width="38%" class="td">地址：
                <input name="url" type="text" value="Anli.asp?id=<%=rs("id")%>" size="20" readonly="true"/> 
                [<a href="../Anli.asp?id=<%=rs("id")%>" target="_blank" style="color:#003399">访问</a>]</td>
              <td width="20%" class="td">排序：
                <input name="px_id" type="text" value="<%=rs("px_id")%>" size="5"  /></td>
              <td width="7%" class="td"><input type="submit" name="button2" id="button2" value="修改"  class="btn"/></td>
              <td width="7%" class="td"><input type="button" name="Submit" value="删除" onClick="javascript:if(confirm('确定删除？删除后不可恢复!')){window.location.href='admin_anlifl.asp?act=del&id=<%=rs("id")%>';}else{history.go(0);}"  class="btn"/></td>
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
<form  action="admin_anlifl.asp?add=ok" method="post" name="add">
  <tr>
    <td height="30" background="images/bg_list.gif"><div  style="padding-left:10px; font-weight:bold; color:#FFFFFF">增加分类</div></td>
  </tr>
  <tr>
    <td bgcolor="#FFFFFF"><table width="100%" border="0" align="center" cellpadding="5" cellspacing="0" >
      <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#F1F5F8'" bgcolor="#F1F5F8" >
        <td height="25" width="34%" class="td">分类名称</td>
        <td width="66%"  class="td"><input name="title" type="text" size="30"  /></td>
      </tr>
      
      <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#FFFFFF'" bgcolor="#FFFFFF">
        <td height="25" width="34%" class="td">排序ID</td>
        <td class="td"><input name="px_id" type="text" size="30"  /> 
          数字越小越靠前。</td>
      </tr>
      
      <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#F1F5F8'" bgcolor="#F1F5F8">
        <td height="25" class="td">&nbsp;</td>
        <td class="td"><label>
        <input type="submit" name="button" id="button" value="增加分类"  class="btn"/>
        </label></td>
      </tr>
      
    </table></td>
  </tr></form>
</table>

    </div>
</body>
</html>
<%
if request("act")="del" then
set rs=server.createobject("adodb.recordset")
id=Request.QueryString("id")
sql="select * from anli_fl where id="&id
rs.open sql,conn,2,3
rs.delete
rs.update
Response.Write "<script>alert('删除成功！');window.location.href='admin_anlifl.asp';</script>"
end if 

if request("xiugai")="ok" then
set rs=server.createobject("adodb.recordset")
id=Request.QueryString("id")
sql="select * from anli_fl where id="&id
rs.open sql,conn,2,3
rs("title")=request.form("title")
rs("px_id")=request.form("px_id")
rs.update
Response.Write "<script>alert('修改成功！');window.location.href='admin_anlifl.asp';</script>"
end if 

if request("add")="ok" then
set rs=server.createobject("adodb.recordset")
id=Request.QueryString("id")
sql="select * from anli_fl"
rs.open sql,conn,2,3
rs.addnew
rs("title")=request.form("title")
rs("px_id")=request.form("px_id")
rs.update
Response.Write "<script>alert('添加成功！');window.location.href='admin_anlifl.asp';</script>"
end if 
%>
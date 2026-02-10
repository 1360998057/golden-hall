<!--#include file="Conn.asp" -->
<!--#include file="seeion.asp"-->
<!--#include file="page.asp" -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" type="text/css" id="css" href="images/style.css">
<title>广告管理</title>
<script> 
function oCopy(obj){ 
obj.select(); 
js=obj.createTextRange(); 
js.execCommand("Copy") 
alert('调用代码已复到剪贴板！请粘贴到前台需要显示广告的地方即可!')
} 
</script> 
</head>
<body>
<table width="95%" border="0" align="center" cellpadding="0" cellspacing="1" bgcolor="#666666">
  <tr>
    <td height="30" background="images/bg_list.gif"><div  style="padding-left:10px; font-weight:bold; color:#FFFFFF">广告管理</div></td>
  </tr>
  <tr>
    <td bgcolor="#FFFFFF"><table width="100%" border="0" align="center" cellpadding="0" cellspacing="1">
      <tr>
        <td colspan="2" bgcolor="#FFFFFF"><%	
set rs=server.createobject("adodb.recordset") 
exec="select * from ad order by id asc" 
rs.open exec,conn,1,1 
if rs.eof then
response.write ("<div style=""padding:10px;"">暂无记录!</div>")
else
rs.PageSize =20 '每页记录条数
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
%>        </td>
      </tr>
      <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='<%=bg%>'" bgcolor="<%=bg%>">
        <td colspan="3"><table width="100%" border="0" cellpadding="5" cellspacing="0">
            <tr>
              <td width="7%" class="td">ID：<%=rs("id")%></td>
              <td width="19%" height="25" class="td"><a href="xiugai_ad.asp?id=<%=rs("id")%>" style="color:#003399"><%=rs("title")%></a> </td>
              <td width="39%" class="td">调用：
                <input onclick="oCopy(this)" value="&lt;script src='adfile/ad<%=rs("id")%>.js' language='JavaScript' charset='gb2312'&gt;&lt;/script&gt;" size="30"/></td>
              <td width="14%" class="td">点击：<%=rs("hit")%></td>
              <td width="7%" class="td"><div align="center">
                <input type="button" name="Submit2" value="生成JS" onclick="window.location.href='add_js.asp?id=<%=rs("id")%>' "  class="btn"/>
              </div></td>
              <td width="7%" class="td">
                <div align="center">
                  <input type="button" name="Submit3" value="修改" onclick="window.location.href='xiugai_ad.asp?id=<%=rs("id")%>' "  class="btn"/>
                </div></td>
             <%if session("qx")=2 then%> <td width="7%" class="td">
                  
                  <div align="center">
                    <input type="button" name="Submit" value="删除" onclick="javascript:if(confirm('确定删除当前广告？删除后不可恢复!')){window.location.href='admin_ad.asp?id=<%=rs("id")%>&amp;del=ok';}else{history.go(0);}"  class="btn"/>
                  </div></td><%end if%>
            </tr>
          </table>
            <% 
rs.movenext 
if rs.eof then exit for 
next 
%>
            <%
end if
%></td>
      </tr>
      <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='<%=bg%>'" bgcolor="<%=bg%>">
        <td width="24%" height="30">&nbsp;注意：增加广告或修改广告后勿必生成JS再调用！</td>
        <td width="25%"><%call PageControl(iCount,maxpage,page,"border=0 align=right","<p align=right>")
rs.close
set rs=nothing
%></td>
      </tr> 
    </table></td>
  </tr>
</table>
</body>
</html>
<%
if request("del")="ok" then
set rs=server.createobject("adodb.recordset")
id=Request.QueryString("id")
sql="select * from ad where id="&id
rs.open sql,conn,2,3
rs.delete
rs.update
Response.Write "<script>alert('当前广告删除成功！');window.location.href='admin_ad.asp';</script>"
end if 
%>
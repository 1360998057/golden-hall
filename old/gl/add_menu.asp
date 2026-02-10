<!--#include file="Conn.asp" -->
<!--#include file="seeion.asp"-->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" type="text/css" id="css" href="images/style.css">
<title>网站菜单管理</title>
</head>
<body>
<table width="95%" border="0" align="center" cellpadding="0" cellspacing="1" bgcolor="#666666">
  <tr>
    <td height="30" background="images/bg_list.gif"><div  style="padding-left:10px; font-weight:bold; color:#FFFFFF">网站菜单管理</div></td>
  </tr>
  <tr>
    <td bgcolor="#FFFFFF"><table width="100%" border="0" align="center" cellpadding="0" cellspacing="1">
      <tr>
        <td bgcolor="#FFFFFF"><%	
id=request("id") 

set rs=server.createobject("adodb.recordset") 
exec="select * from menu where id="& id 
rs.open exec,conn,1,3 

%>
        </td>
      </tr>
	  <%if session("qx")=2 then%>
	  
      <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='<%=bg%>'" bgcolor="<%=bg%>">
        <td colspan="2">

<table width="95%" border="0" align="center" cellpadding="0" cellspacing="1" bgcolor="#666666">
<form action="add_menu_pass.asp" method="post" name="add">
  <tr>
    <td height="30" background="images/bg_list.gif"><div  style="padding-left:10px; font-weight:bold; color:#FFFFFF">增加二级菜单</div></td>
  </tr>
  <tr>
    <td bgcolor="#FFFFFF"><table width="100%" border="0" align="center" cellpadding="5" cellspacing="0" >
      <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#F1F5F8'" bgcolor="#F1F5F8" >
        <td height="25" width="34%" class="td">所属上级</td>
        <td width="66%"  class="td"><%=rs("title")%> <input name="tid" type="hidden" size="15"  value='<%=rs("id")%>'/></td>
      </tr>
      <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#F1F5F8'" bgcolor="#F1F5F8" >
        <td height="25" width="34%" class="td">菜单名称</td>
        <td width="66%"  class="td"><input name="title" type="text" size="30"  /></td>
      </tr>
      <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#FFFFFF'" bgcolor="#FFFFFF">
        <td width="34%" height="13" class="td">链接地址</td>
        <td class="td"><input name="url" type="text" size="30"  /></td>
      </tr>
      <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#FFFFFF'" bgcolor="#FFFFFF">
        <td width="34%" height="12" class="td">打开方式</td>
        <td class="td"><select name="openfs" id="openfs">
          <option value="_self">原窗口</option>
          <option value="_blank">新窗口</option>
        </select>
          * </td>
      </tr>
      <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#F1F5F8'" bgcolor="#F1F5F8">
        <td height="25" width="34%" class="td">排序ID</td>
        <td class="td"><input name="px_id" type="text" size="30"  /> 
          数字越小越靠前。</td>
      </tr>
      <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#FFFFFF'" bgcolor="#FFFFFF">
        <td height="25" class="td">是否隐藏该菜单</td>
        <td class="td"><select name="yc" id="yc">
          <option value="1">显示</option>
          <option value="2">隐藏</option>
        </select> 
          隐藏后前台将不显示该菜单。</td>
      </tr>
      <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#F1F5F8'" bgcolor="#F1F5F8">
        <td height="25" class="td">&nbsp;</td>
        <td class="td"><label>
        <input type="submit" name="button" id="button" value="提交数据"  class="btn"/>
		<input type="button" name="Submit1" value="返回管理" onClick="javascript:{window.location.href='admin_menu.asp';}"  class="btn"/>
        </label></td>
      </tr>
      
    </table></td>
  </tr></form>
</table>
		
		  
		  <%else%>
<div style=" padding:20px;font-size:14px; color:#990000; font-weight:bold; text-align:center">您没有权限操作！</div>
	<%response.end
	end if%>

</td>
      </tr>
    </table></td>
  </tr>
</table>

</body>
</html>

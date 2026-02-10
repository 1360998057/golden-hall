<!--#include file="Conn.asp" -->
<!--#include file="seeion.asp"-->
<% 
id=request.QueryString("id")
exec="select * from ad where id="& request.QueryString("id") 
set rs=server.createobject("adodb.recordset") 
rs.open exec,conn,1,1 
id=rs("id")
lx=rs("lx")
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" type="text/css" id="css" href="images/style.css">
<title>修改广告</title>
<script language="javascript">
function showUploadDialog(s_Type, s_Link, s_Thumbnail){
var arr = showModalDialog("gaolichi/dialog/i_upload.htm?style=popup&type="+s_Type+"&link="+s_Link+"&thumbnail="+s_Thumbnail, window, "dialogWidth:0px;dialogHeight:0px;help:no;scroll:no;status:no");}
</script>
<script src="images/data.js" type="text/javascript"></script>
</head>
<body>
<form  name="myform" method="post" action="xiugai_ad_pass.asp?id=<%=id%>">
<table width="95%" border="0" align="center" cellpadding="0" cellspacing="1" bgcolor="#666666">
  <tr>
    <td height="30" background="images/bg_list.gif"><div  style="padding-left:10px; font-weight:bold; color:#FFFFFF">修改广告</div></td>
  </tr>
  <tr>
    <td bgcolor="#FFFFFF"><%if session("qx")=2 then%><table width="100%" border="0" align="center" cellpadding="5" cellspacing="0" >
    

                        <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#F1F5F8'" bgcolor="#F1F5F8" >
        <td height="14" width="16%" class="td">广告类型 <font color="#FF0000">*</font></td>
        <td width="84%" height="25"  class="td"><strong>
		<%if lx=1 then
		response.Write("图片广告")
		elseif lx=2 then
		response.Write("FLASH广告")
		else
		response.Write("文字广告")
		end if
		%></strong>
          <input name="lx" type="hidden" id="lx" value="<%= rs("lx")%> " /></td>
      </tr>
                      <%if lx=3 then%>  
   
      <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#FFFFFF'" bgcolor="#FFFFFF" >
        <td height="28" width="16%" class="td">广告名称 <font color="#FF0000">*</font></td>
        <td width="84%"  class="td">
          <input name="title" type="text" value="<%=rs("title")%>" size="40"  />
          <input name="id" type="hidden" value="<%=rs("id")%>" size="40"  /></td>
      </tr> 
<tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#F1F5F8'" bgcolor="#F1F5F8" >
                          <td height="14" class="td">文字内容 <font color="#FF0000">*</font></td>
                          <td width="84%"  class="td"><textarea name="code" cols="40" rows="10"><%=rs("code")%></textarea></td>
                        </tr><%else%>
                              <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#FFFFFF'" bgcolor="#FFFFFF" >
        <td height="28" width="16%" class="td">广告名称 <font color="#FF0000">*</font></td>
        <td width="84%"  class="td">
          <input name="title" type="text" value="<%=rs("title")%>" size="40"  />
          <input name="id" type="hidden" value="<%=rs("id")%>" size="40"  /></td>
      </tr> 
      <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#F1F5F8'" bgcolor="#F1F5F8">
        <td height="25" width="16%" class="td">图片地址 <font color="#FF0000">*</font></td>
        <td class="td"><input name="img" type="text" value="<%=rs("img")%>" size="40" />
          <input type=button value="本地上传..." onClick="showUploadDialog('file', 'myform.img', '')" class="btn" /> 
          格式要求:jpg,gif,swf</td>
      </tr>
    <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#FFFFFF'" bgcolor="#FFFFFF">
        <td height="13" class="td">链接地址 <font color="#FF0000">*</font></td>
        <td class="td"><input name="url" type="text" value="<%=rs("url")%>" size="40"  />
          打开方式：
          <select name="openfs" id="openfs">
            <option value="_blank"  <%if rs("openfs")="_blank" then%>selected="selected"<%end if%>>_blank</option>
            <option value="_parent" <%if rs("openfs")="_parent" then%>selected="selected"<%end if%>>_parent</option>
            <option value="_self" <%if rs("openfs")="_self" then%>selected="selected"<%end if%>>_self</option>
            <option value="_top" <%if rs("openfs")="_top" then%>selected="selected"<%end if%>>_top</option>
          </select></td>
    </tr>
    <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#F1F5F8'" bgcolor="#F1F5F8">
      <td height="6" class="td">广告尺寸</td>
      <td class="td"><input name="width" type="text" value="<%=rs("width")%>" size="10"  />
        <font color="#FF0000">*</font>
        宽
          <input name="height" type="text" value="<%=rs("height")%>" size="10"  />
          <font color="#FF0000">*</font>          高</td>
    </tr>
    <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#FFFFFF'" bgcolor="#FFFFFF">
      <td height="6" class="td">链接说明</td>
      <td class="td"><input name="sm" type="text" value="<%=rs("sm")%>" size="40"  /></td>
    </tr>
      <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#F1F5F8'" bgcolor="#F1F5F8">
        <td height="25" class="td"><p>备注</p>          </td>
        <td class="td"><textarea name="bz" cols="50" rows="5"><%=rs("bz")%></textarea></td>
      </tr>
    <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#FFFFFF'" bgcolor="#FFFFFF">
        <td height="13" class="td">发布时间：</td>
        <td class="td"><input name="data" type="text" value="<%=rs("data")%>" size="40"   onfocus="show_cele_date(data,'','',data)"/></td>
      </tr>  <%end if%>
      <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#F1F5F8'" bgcolor="#F1F5F8">
      <td height="12" class="td">&nbsp;</td>
      <td class="td"><input type="submit" name="button" id="button" value="提交修改"  class="btn"/></td>
    </tr>
  
    </table>
    <%else%>
<div style=" padding:20px;font-size:14px; color:#990000; font-weight:bold; text-align:center">您没有权限操作！</div>
	<%response.end
	end if%></td>
  </tr>
</table></form>
</body>
</html>
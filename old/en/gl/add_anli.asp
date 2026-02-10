<!--#include file="Conn.asp" -->
<!--#include file="seeion.asp"-->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" type="text/css" id="css" href="images/style.css">
<title>增加案例</title>
<script language="javascript">
function showUploadDialog(s_Type, s_Link, s_Thumbnail){
var arr = showModalDialog("gaolichi/dialog/i_upload.htm?style=popup&type="+s_Type+"&link="+s_Link+"&thumbnail="+s_Thumbnail, window, "dialogWidth:0px;dialogHeight:0px;help:no;scroll:no;status:no");}
</script>
<script src="images/color.js" type="text/javascript"></script>
</head>
<body>
<form  name="add" method="post" action="add_anli_pass.asp">
<table width="95%" border="0" align="center" cellpadding="0" cellspacing="1" bgcolor="#666666">
  <tr>
    <td height="30" background="images/bg_list.gif"><div  style="padding-left:10px; font-weight:bold; color:#FFFFFF">增加案例</div></td>
  </tr>
  <tr>
    <td bgcolor="#FFFFFF"><table width="100%" border="0" align="center" cellpadding="5" cellspacing="0" >
      <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#F1F5F8'" bgcolor="#F1F5F8" >
        <td height="28" width="16%" class="td">案例标题 <font color="#FF0000">*</font></td>
        <td width="84%"  class="td">
          <input name="title" type="text" size="40"  />
           标题颜色： <input name="color"  type="text"  id="colorPicker" size="10">
          <script type="text/javascript" src="images/Deepteach_colorPicker.js"></script>
          <label></label></td>
      </tr>
      <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#FFFFFF'" bgcolor="#FFFFFF">
        <td width="16%" height="13" class="td">案例分类</td>
        <td class="td"><select name="ssfl" id="select">
            <%
		  dim rsc
		  set rsc=server.CreateObject("adodb.recordset")
		  rsc.open "select * from anli_fl",conn,1,1
		  while not rsc.eof
			response.Write("<option value=""" & rsc("id") & """>" & rsc("title") & "</option>")
			rsc.movenext
		wend
		rsc.close
		set rsc=nothing
		  %>
                    </select></td>
      </tr>
         <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#F1F5F8'" bgcolor="#F1F5F8">
        <td width="16%" height="12" class="td">列表导读</td>
        <td class="td"><textarea name="daodu" cols="60" rows="5"></textarea></td>
      </tr>
       <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#FFFFFF'" bgcolor="#FFFFFF">
      <td height="12" class="td">标题略缩图</td>
      <td class="td"><input name=img type=text value="images/noimages.gif" size=50> 
      <input type=button value="上传图片" onClick="showUploadDialog('image', 'add.img', '')" class="btn"></td>
    </tr>
     <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#F1F5F8'" bgcolor="#F1F5F8">
        <td height="25" class="td">案例内容 <font color="#FF0000">*</font></td>
        <td class="td"><INPUT type="hidden" name="body" value="">
<IFRAME ID="eWebEditor1" SRC="gaolichi/ewebeditor.htm?id=body&style=popup" FRAMEBORDER="0" SCROLLING="no" WIDTH="600" HEIGHT="350"></IFRAME></td>
      </tr>
       <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#FFFFFF'" bgcolor="#FFFFFF">
        <td height="13" class="td">是否推荐</td>
        <td class="td"><label>
          <input name="tuijian" type="radio"  value="0" checked="checked" />不推荐
          <input type="radio" name="tuijian"  value="1" />推荐 </label></td>
      </tr>
     <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#F1F5F8'" bgcolor="#F1F5F8">
         <td height="12" class="td">&nbsp;</td>
         <td class="td"><input type="submit" name="button" id="button" value="确认提交"  class="btn"/></td>
       </tr>
    </table>
</td>
  </tr>
</table></form>
</body>
</html>
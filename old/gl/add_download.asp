<!--#include file="Conn.asp" -->
<!--#include file="seeion.asp"-->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" type="text/css" id="css" href="images/style.css">
<title>增加下载</title>
<script language="javascript">
function showUploadDialog(s_Type, s_Link, s_Thumbnail){
var arr = showModalDialog("gaolichi/dialog/i_upload.htm?style=popup&type="+s_Type+"&link="+s_Link+"&thumbnail="+s_Thumbnail, window, "dialogWidth:0px;dialogHeight:0px;help:no;scroll:no;status:no");}
</script>
</head>
<body>
<form  name="myform" method="post" action="add_download_pass.asp">
<table width="95%" border="0" align="center" cellpadding="0" cellspacing="1" bgcolor="#666666">
  <tr>
    <td height="30" background="images/bg_list.gif"><div  style="padding-left:10px; font-weight:bold; color:#FFFFFF">增加下载</div></td>
  </tr>
  <tr>
    <td bgcolor="#FFFFFF"><table width="100%" border="0" align="center" cellpadding="5" cellspacing="0" >
      <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#F1F5F8'" bgcolor="#F1F5F8" >
        <td height="28" width="16%" class="td">下载名称</td>
        <td width="84%"  class="td">
          <input name="title" type="text" size="50"  /></td>
      </tr>
      <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#FFFFFF'" bgcolor="#FFFFFF">
        <td height="25" width="16%" class="td">所属分类</td>
        <td class="td"><select name="ssfl" id="select">
    <%
    dim rsc
    set rsc=server.CreateObject("adodb.recordset")
    rsc.open "select * from download_fl",conn,1,1
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
        <td width="16%" height="7" class="td">程序语言</td>
        <td class="td"><label>
          <input name="yuyan" type="radio"value="1" checked="checked" />
          简体中文
          <input type="radio" name="yuyan"value="2" />
          繁体中文 
          <input type="radio" name="yuyan"value="3" />
          English 
          <input type="radio" name="yuyan"value="4" />
          多国语言
        </label></td>
      </tr>
      <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#FFFFFF'" bgcolor="#FFFFFF">
        <td width="16%" height="6" class="td">运行平台</td>
        <td class="td"><label>
<input name="yxpt" type="checkbox"  value="Win9X" />Win9X
<input name="yxpt" type="checkbox" checked="checked"  value="Win98"/>Win98
<input name="yxpt" type="checkbox" checked="checked"  value="2000" />2000 
<input name="yxpt" type="checkbox" checked="checked"   value="2003"/>2003 
<input name="yxpt" type="checkbox" checked="checked"   value="XP"/>XP 
<input type="checkbox" name="yxpt"  value="Vista" />Vista</label></td>
      </tr>
      <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#F1F5F8'" bgcolor="#F1F5F8">
        <td width="16%" height="12" class="td">推荐等级</td>
        <td class="td"><label>
          <select name="tjdj" id="select2">
            <option value="1">★☆☆☆☆</option>
            <option value="2">★★☆☆☆</option>
            <option value="3">★★★☆☆</option>
            <option value="4">★★★★☆</option>
            <option value="5">★★★★★</option>
          </select>
        </label></td>
      </tr>
    <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#FFFFFF'" bgcolor="#FFFFFF">
        <td height="25" class="td">程序大小</td>
        <td class="td"><input name="daxiao" type="text" size="10"  />
          <label>
          <input name="danwei" type="radio" value="1" checked="checked" />
KB
<input type="radio" name="danwei" value="2" />
MB
<input type="radio" name="danwei" value="3" />
GB</label></td>
      </tr>
    <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#F1F5F8'" bgcolor="#F1F5F8">
      <td height="25" class="td">下载地址</td>
      <td class="td"><input type=text name=url size=50> <input type=button value="上传文件" onClick="showUploadDialog('file', 'myform.url', '')" class="btn"></td>
    </tr>
      <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#FFFFFF'" bgcolor="#FFFFFF">
        <td height="25" class="td">程序介绍</td>
        <td class="td"><INPUT type="hidden" name="body" value="">
<IFRAME ID="eWebEditor1" SRC="gaolichi/ewebeditor.htm?id=body&style=popup" FRAMEBORDER="0" SCROLLING="no" WIDTH="600" HEIGHT="400"></IFRAME></td>
      </tr>
    <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#FFFFFF'" bgcolor="#FFFFFF">
        <td height="25" class="td">&nbsp;</td>
        <td class="td"><input type="submit" name="button" id="button" value="确认提交"  class="btn"/></td>
      </tr>
    </table>
</td>
  </tr>
</table></form>
</body>
</html>
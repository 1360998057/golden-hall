<!--#include file="Conn.asp" -->
<!--#include file="seeion.asp"-->
<% 
id=request.QueryString("id")
exec="select * from news where id="& request.QueryString("id") 
set rs=server.createobject("adodb.recordset") 
rs.open exec,conn,1,1 
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" type="text/css" id="css" href="images/style.css">
<title>修改新闻</title>
<script language="javascript">
function showUploadDialog(s_Type, s_Link, s_Thumbnail){
var arr = showModalDialog("gaolichi/dialog/i_upload.htm?style=popup&type="+s_Type+"&link="+s_Link+"&thumbnail="+s_Thumbnail, window, "dialogWidth:0px;dialogHeight:0px;help:no;scroll:no;status:no");}
</script>
<script src="images/color.js" type="text/javascript"></script>
</head>
<body>
<form  name="add" method="post" action="xiugai_news_pass.asp?id=<%=id%>">
<table width="95%" border="0" align="center" cellpadding="0" cellspacing="1" bgcolor="#666666">
  <tr>
    <td height="30" background="images/bg_list.gif"><div  style="padding-left:10px; font-weight:bold; color:#FFFFFF">修改新闻</div></td>
  </tr>
  <tr>
    <td bgcolor="#FFFFFF"><table width="100%" border="0" align="center" cellpadding="5" cellspacing="0" >
      <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#F1F5F8'" bgcolor="#F1F5F8" >
        <td height="28" width="16%" class="td">新闻标题 <font color="#FF0000">*</font></td>
        <td width="84%"  class="td">
          <input name="title" type="text" value="<%=rs("title")%>" size="40"  />
          标题颜色：
<input name="color"  type="text"  id="colorPicker" value="<%=rs("color")%>" size="10">
          <script type="text/javascript" src="images/Deepteach_colorPicker.js"></script>
          <label>
          <input name="id" type="hidden" id="id" value="<%=rs("id")%>" />
          </label></td>
      </tr>
      <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#FFFFFF'" bgcolor="#FFFFFF">
        <td width="16%" height="13" class="td">新闻分类</td>
        <td class="td"><select name="ssfl" id="select">
      <%
		  dim rsc
		  set rsc=server.CreateObject("adodb.recordset")
		  rsc.open "select * from news_fl",conn,1,1
		  while not rsc.eof
		    if rs("ssfl")=rsc("id") then
			response.Write("<option value=""" & rsc("id") & """ selected>" & rsc("title") & "</option>")
			else
			response.Write("<option value=""" & rsc("id") & """>" & rsc("title") & "</option>")
			end if
			rsc.movenext
		wend
		rsc.close
		set rsc=nothing
		  %>
                    </select></td>
      </tr>
       <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#F1F5F8'" bgcolor="#F1F5F8">
        <td width="16%" height="12" class="td">外部链接</td>
        <td class="td"><input name="url" type="text" value="<%=rs("url")%>" size="40"  />
如填写，则直接跳转到外部链接地址。</td>
      </tr>
     <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#FFFFFF'" bgcolor="#FFFFFF">
        <td height="25" width="16%" class="td">新闻来源</td>
        <td class="td"><input name="ly" type="text" value="<%=rs("ly")%>" size="30"  /></td>
      </tr>
     <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#FFFFFF'" bgcolor="#FFFFFF">
        <td height="25" width="16%" class="td">发布时间</td>
        <td class="td"><input name="data" type="text" value="<%=rs("data")%>" size="30"  /></td>
      </tr>
   <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#F1F5F8'" bgcolor="#F1F5F8">
        <td height="13" class="td">发布作者</td>
        <td class="td"> <input name="zz" type="text" value="<%=rs("zz")%>" size="30"  /></td>
      </tr>
     <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#FFFFFF'" bgcolor="#FFFFFF">
      <td height="12" class="td">标题略缩图</td>
      <td class="td"><input name=img type=text value="<%=rs("img")%>" size=50>
      <input type=button value="上传图片" onClick="showUploadDialog('image', 'add.img', '')" class="btn"></td>
    </tr>
     <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#F1F5F8'" bgcolor="#F1F5F8">
        <td height="25" class="td">新闻内容 <font color="#FF0000">*</font></td>
        <td class="td"><input type="hidden" name="body" value='<%=replace(rs("body"),"'","&#39;")%>'/>
<IFRAME ID="eWebEditor1" SRC="gaolichi/ewebeditor.htm?id=body&style=popup" FRAMEBORDER="0" SCROLLING="no" WIDTH="600" HEIGHT="350"></IFRAME></td>
      </tr>
        <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#FFFFFF'" bgcolor="#FFFFFF">
        <td height="13" class="td">是否推荐</td>
        <td class="td"><label>
<input type="radio" name="tuijian" value="0" <%if rs("tuijian")=0 then%>checked<%end if%>>不推荐　 
<input type="radio" name="tuijian" value="1" <%if rs("tuijian")=1 then%>checked<%end if%>>推荐
</label></td>
      </tr>
       <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#F1F5F8'" bgcolor="#F1F5F8">
          <td height="12" class="td">&nbsp;</td>
          <td class="td"><input type="submit" name="button" id="button" value="确认修改"  class="btn"/></td>
        </tr>
    </table>
</td>
  </tr>
</table></form>
</body>
</html>
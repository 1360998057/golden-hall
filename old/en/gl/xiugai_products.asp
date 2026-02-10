<!--#include file="Conn.asp" -->
<!--#include file="seeion.asp"-->
<% 
id=request.QueryString("id")
exec="select * from Products where id="& request.QueryString("id") 
set rsa=server.createobject("adodb.recordset") 
rsa.open exec,conn,1,1 
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" type="text/css" id="css" href="images/style.css">
<title>修改图文</title>
<script language="javascript">
function showUploadDialog(s_Type, s_Link, s_Thumbnail){
var arr = showModalDialog("gaolichi/dialog/i_upload.htm?style=popup&type="+s_Type+"&link="+s_Link+"&thumbnail="+s_Thumbnail, window, "dialogWidth:0px;dialogHeight:0px;help:no;scroll:no;status:no");}
</script>
<script language = "JavaScript">
<%
Set Rs = Server.CreateObject("Adodb.Recordset")
Rs.Open "SELECT * FROM SmallClass ORDER BY SmallClassID asc",conn,1,1
%>
var onecount;
onecount=0;
subcat = new Array();
<%
   i = 0
   Do While Not Rs.eof 
%>
subcat[<%=i%>] = new Array("<%= Trim(Rs("SmallClassName"))%>","<%= Rs("BigClassID")%>","<%= Rs("SmallClassID")%>");
<%
        i = i + 1
        Rs.MoveNext
        Loop
        Rs.Close
%>
  
onecount=<%=i%>;

function changelocation(locationid,formname)
    {
    formname.SmallClassID.length = 0; 

    var locationid = locationid;
    var i;
    for (i = 0;i < onecount; i++)
        {
            if (subcat[i][1] == locationid)
            {
             formname.SmallClassID.options[formname.SmallClassID.length] = new Option(subcat[i][0], subcat[i][2]);
            }        
        }
        
    }    
</script>
</head>
<body>
<form  name="form1" method="post" action="xiugai_products_pass.asp?id=<%=id%>">
<table width="95%" border="0" align="center" cellpadding="0" cellspacing="1" bgcolor="#666666">
  <tr>
    <td height="30" background="images/bg_list.gif"><div  style="padding-left:10px; font-weight:bold; color:#FFFFFF">修改图文</div></td>
  </tr>
  <tr>
    <td bgcolor="#FFFFFF"><table width="100%" border="0" align="center" cellpadding="5" cellspacing="0" >
      <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#F1F5F8'" bgcolor="#F1F5F8" >
        <td height="28" width="8%" class="td">图文标题 <font color="#FF0000">*</font></td>
        <td  class="td">
          <input name="title" type="text" value="<%=rsa("title")%>" size="40"  />
          <label>
          <input name="id" type="hidden" id="id" value="<%=rsa("id")%>" />
          </label> 
		  图文排序<input name="px_id" type="text" value="<%=rsa("px_id")%>" size="10" onkeyup="value=value.replace(/[^\d]/g,'') "onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\d]/g,''))"  /> 数值越小，排列越靠前
		  </td>
        </tr>
      <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#FFFFFF'" bgcolor="#FFFFFF">
        <td width="8%" height="13" class="td">图文分类</td>
         <td class="td"><select name="BigClassID" id="BigClassID" onChange="changelocation(document.form1.BigClassID.options[document.form1.BigClassID.selectedIndex].value,document.form1)">
        <option value="">请选择大类</option>
		<%
        i = 0
        Set RsBig = Conn.Execute("SELECT * FROM BigClass ORDER BY px_id")
        Do While Not RsBig.Eof
        	If i = 0 Then BigClassID = RsBig(0)
				IF Cstr(rsa("BigClassID"))=Cstr(RsBig(0)) THEN SelectStr = " selected" ELSE SelectStr = ""
        		Response.Write("<option value='"&RsBig(0)&"'"& SelectStr &">"&RsBig(1)&"</option>")
        	i = i + 1
        	RsBig.MoveNext
        Loop
        RsBig.Close:Set RsBig = Nothing
        %>
    	</select>
        <select name="SmallClassID" id="SmallClassID">
        <option value="">请选择小类</option>
        <%
		IF rsa("BigClassID")<>"" THEN
			Set RsSmall = Conn.Execute("SELECT * FROM SmallClass WHERE BigClassID="&rsa("BigClassID"))
			Do While Not RsSmall.Eof
				IF Cstr(rsa("SmallClassID"))=Cstr(RsSmall(0)) THEN SelectStr = " selected" ELSE SelectStr = ""
				Response.Write("<option value='"&RsSmall(0)&"'"& SelectStr &">"&RsSmall(1)&"</option>")
				RsSmall.MoveNext
				Loop
			RsSmall.Close:Set RsSmall = Nothing
        End IF
		%>
        </select>        </td>
      </tr>
       <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#FFFFFF'" bgcolor="#FFFFFF">
      <td height="25" class="td">图文略缩图</td>
      <td class="td"><input name=img type=text value="<%=rsa("img")%>" size=50>
      <input type=button value="上传图片" onClick="showUploadDialog('image', 'form1.img', '')" class="btn"></td>
    </tr>
       <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#F1F5F8'" bgcolor="#F1F5F8" style="display:none">
         <td height="25" class="td">图文价格</td>
         <td class="td"><input name="jiage" type="text" value="<%=rsa("jiage")%>"  size="20" /> ￥</td>
       </tr>
     <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#FFFFFF'" bgcolor="#FFFFFF">
        <td height="25" class="td">图文介绍 <font color="#FF0000">*</font></td>
        <td class="td"><input type="hidden" name="body" value='<%=replace(rsa("body"),"'","&#39;")%>'/>
<IFRAME ID="eWebEditor1" SRC="gaolichi/ewebeditor.htm?id=body&style=popup" FRAMEBORDER="0" SCROLLING="no" WIDTH="600" HEIGHT="350"></IFRAME></td>
      </tr>
       <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#F1F5F8'" bgcolor="#F1F5F8">
        <td height="13" class="td">发布作者</td>
        <td class="td"><% 
exec="select * from admin where id="&session("admin")&" "
set rsn=server.createobject("adodb.recordset") 
rsn.open exec,conn,1,1 
%> <input name="zz" type="text" value="<%=rsa("zz")%>" size="30"  /></td>
      </tr>
       <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#FFFFFF'" bgcolor="#FFFFFF">
        <td height="13" class="td">是否推荐</td>
        <td class="td"><label>
<input type="radio" name="tuijian" value="0" <%if rsa("tuijian")=0 then%>checked<%end if%>>不推荐　 
<input type="radio" name="tuijian" value="1" <%if rsa("tuijian")=1 then%>checked<%end if%>>推荐</label></td>
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
<!--#include file="Conn.asp" -->
<!--#include file="../config.asp" -->
<!--#include file="../page.asp" -->
<!--#include file="sql.asp"-->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>留言中心_<%=config("title")%></title>
<meta name="keywords" content="<%=config("keywords")%>" />
<meta name="description" content="<%=config("description")%>" />
<link href="../images/css.css" rel="stylesheet" type="text/css" />
</head>

<body>
<!--#include file="../top.asp" -->

	<table width="1024" border="0" align="center" cellpadding="0" cellspacing="0">
	  <tr>
		<td align="left" width=210 valign="top">
		<!--左-->
		<!--#include file="left.asp" -->
		<!--左-->
		</td>
		<td align="left" valign="top" style="padding-left:30px">
		<!--右-->
				<table width="100%" border="0" cellspacing="0" cellpadding="0">
					<tr valign="top">
						<td height="36" background="../images/bgs1.jpg">
						<table width="100%" border="0" cellpadding="0" cellspacing="0">
							<tr>
								<td width="130" height="36" align="center"><div id="lbt">留言中心</div></td>
								<td align="right" style="padding-right:10px;"><div id="lat">当前位置：<a href="../index.asp">首 页</a> > 留言中心</div></td>
							</tr>
						</table>  
						</td>
					  </tr>
					  <tr>
						<td valign="top">
<%
id=request.QueryString("id")
if  not isnumeric(id)  then
Response.Write "<script>alert('警告！请勿尝试注入！');history.go(-1);</script>" 
Response.End()
end if
set rs=server.createobject("adodb.recordset") 
exec="select  * from ly where sh=1 order by id desc"
rs.open exec,conn,1,1
if rs.eof then
response.Write "<div style=""padding:10px"">暂无记录！</a>"
else
rs.PageSize =""&config("lyclass")&""
iCount=rs.RecordCount 
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
end if
For i=1 To x
%>
        <table width="100%" border="0" cellpadding="5" cellspacing="1" bgcolor="#EEF2FA">
          
          <tr>
            <td width="41%" bgcolor="#fafafa" ><div align="left" style="font-weight:bold; color:#333333"><%=InterceptString(rs("title"),20)%></div></td>
            <td width="30%" bgcolor="#fafafa" >姓名：<%=rs("name")%></td>
            <td width="29%" bgcolor="#fafafa" ><%=rs("data")%></td>
          </tr>
          <tr>
            <td colspan="3" bgcolor="#fafafa" style="line-height:23px">&nbsp;&nbsp;&nbsp;&nbsp;<%=InterceptString(DelHtml(rs("body")),200)%>...</td>
          </tr>
          <tr>
            <td colspan="3" bgcolor="#fafafa" style="line-height:23px"><div align="left">管理员回复：<%
if IsNull(rs("hf")) or trim(rs("hf")&"")="" then
response.Write("<font color=#FF0000>此留言暂未回复！</font>")
else
response.Write("<font color=#FF0000>"&rs("hf")&"</font>")
end if
  %></td>
          </tr>
        </table> 
        <%
rs.movenext
next
%>
        <%'以下显示分页
 call PageControl(iCount,maxpage,page,"border=0 align=center","<p align=center>")
rs.close
set rs=nothing
%></td>
  </tr>
</table>



	</td>
  </tr>
</table>
<!--#include file="../foot.asp" -->
</body>
</html>

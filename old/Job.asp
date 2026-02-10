<!--#include file="conn.asp"-->
<!--#include file="config.asp" -->
<!--#include file="page.asp" -->
<!--#include file="Sql.Asp" -->
<!--#include file="w78_sql.asp"--> 
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>人力资源_<%=w78_home%></title>
<meta name="keywords" content="<%=w78_keywords%>" />
<meta name="description" content="<%=w78_description%>" />
<link href="images/css.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="MSClass.js"></script>
<link href="./img/xixi.css" rel="stylesheet" type="text/css">

<link rel="stylesheet" type="text/css" href="menu/pro_dropdown_2.css" />
<script src="menu/stuHover.js" type="text/javascript"></script>
</head>

<body>
<!--#include file="top.asp" -->
	<table width="1024" border="0" align="center" cellpadding="0" cellspacing="0" style="margin-top:15px; background:#FFFFFF">
	  <tr>
		<td align="left" width=274 valign="top">
		<!--左-->
		<!--#include file="left_products.asp" -->
		<!--左-->
		</td>
		<td align="left" valign="top">
		<!--右-->
				<table width="100%" border="0" cellspacing="0" cellpadding="0">
					<tr valign="top">
						<td height="36" background="images/bgs1.jpg">
						<table width="100%" border="0" cellpadding="0" cellspacing="0">
							<tr>
								<td width="130" height="36" align="center"><div id="lbt">人才招聘</div></td>
								<td align="right" style="padding-right:10px;"><div id="lat">当前位置：<a href="/">首 页</a> > 人才招聘</div></td>
							</tr>
						</table>  
						</td>
					</tr>
					<tr>
					  <td valign="top" align="left" height="180">

<div class="right_body">
<%
set rs=server.createobject("adodb.recordset") 
exec="select * from job order by id desc"
rs.open exec,conn,1,1
if rs.eof then
response.Write "<div style=""padding:10px"">暂无记录！</a>"
else
rs.PageSize =""&config("jobclass")&""
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

		<table width="100%" style="BORDER-COLLAPSE: collapse; margin:10px 0" border=1 cellSpacing=0 borderColor="#e0e0e0" cellPadding=0>
          <tr>
            <td width="45%" bgcolor="#FFFFFF"><div align="left" style="font-weight:bold; color:#333333"><%=InterceptString(rs("title"),20)%></div></td>
            <td width="38%" bgcolor="#FFFFFF">性别：
              <%
			if rs("sex")=1 then
			response.Write("男")
			elseif rs("sex")=2 then
			response.Write("女")
			else
			response.Write("不限")
			end if
			%></td>
            <td width="17%" bgcolor="#FFFFFF"><div align="center">学历要求：
              <%
			if rs("xueli")=1 then
			response.Write("初中以上")
			elseif rs("xueli")=2 then
			response.Write("中专/高中")
			elseif rs("xueli")=3 then
			response.Write("专科")
			elseif rs("xueli")=4 then
			response.Write("本科")
			elseif rs("xueli")=5 then
			response.Write("博士/硕士")
			else
			response.Write("学历不限")
			end if
			%>
            </div></td>
          </tr>
          <tr>
            <td colspan="3" bgcolor="#FFFFFF">&nbsp;&nbsp;&nbsp;&nbsp;<%=InterceptString(DelHtml(rs("body")),1000)%>...</td>
          </tr>
          <tr>
            <td bgcolor="#FFFFFF">年龄要求：<%=rs("nn1")%>至<%=rs("nn2")%>岁</td>
            <td bgcolor="#FFFFFF">人数：<%=rs("renshu")%></td>
            <td bgcolor="#FFFFFF"><div align="center"><a href="yp.asp?id=<%=rs("id")%>"><img src="images/yp.jpg" border="0" /></a></div></td>
          </tr>
        </table> 
<%
rs.movenext
next
%>
</div>
<%'以下显示分页
call PageControl(iCount,maxpage,page,"border=0 align=center","<p align=center>")
rs.close
set rs=nothing
%>

					  </td>
					</tr>
				  </table>  
		<!--右-->
		</td>
	  </tr>
	</table>
	

<!--#include file="foot.asp" -->
</body>
</html>

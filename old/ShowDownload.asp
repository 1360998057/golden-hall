<!--#include file="conn.asp"-->
<!--#include file="config.asp" -->
<!--#include file="page.asp" -->
<!--#include file="Sql.Asp" -->
<!--#include file="w78_sql.asp"--> 
<%
id=request.QueryString("id")
if id="" or not isnumeric(id) then
Response.Write "<script>alert('参数错误！');history.go(-1);</script>" 
Response.End()
end if
set rs=server.createobject("adodb.recordset") 
exec="select * from [download] where id="& id
rs.open exec,conn,1,1
if rs.eof then
response.Write "<div style=""padding:10px"">无记录！</a>"
response.End()
end if
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>下载中心_<%=w78_home%></title>
<meta name="keywords" content="<%=w78_keywords%>" />
<meta name="description" content="<%=w78_description%>" />
<link href="images/css.css" rel="stylesheet" type="text/css" />

</head>

<body>
<!--#include file="top.asp" -->

<table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
  <tr>
    <td align="center" valign="top" style="background:url(/images/main_bj.jpg) top repeat-x">
	
	<table width="911" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#e0dcdd">
	  <tr>
		<td align="center">
			<table width="880" border="0" align="center" cellpadding="0" cellspacing="0" style="margin-bottom:2px" background="images/title7.jpg">
				<tr valign="top">
					<td width="202" height="31"></td>
					<td align="left"><div id="lat">当前位置：首页 > 下载中心</div></td>
				</tr>
			</table>  
			<table width="880" border="0" align="center" cellpadding="10" cellspacing="0" bgcolor="#FFFFFF">
				<tr>
					<td align="center"><img src="images/down.jpg" /></td>
				</tr>
			</table>  
			<table width="880" border="0" align="center" cellpadding="0" cellspacing="0" style="margin-bottom:2px">
			  <tr>
				<td align="center" valign="top" width="202">
<!--左侧菜单带下拉-->
				<DIV xmlns="" class="columnSpace" id="elem-FrontProductsCategory_show01-1308043373085" name="商品分类">  
				<script type="text/javascript" src="/images/FrontProductsCategory_show01.js"></script>
				<script type="text/javascript">
				//<![CDATA[
				FrontProductsCategory_show01['FrontProductsCategory_show01-1308043373085_init'] = function() {
					jQuery("div[class^=FrontProductsCategory_show01-d1] > div.menu-first > ul > li").hover( function() {
						jQuery("div[class^=FrontProductsCategory_show01-d1] .menu-second").hide();
						jQuery(this).children("div.menu-second").show();
						jQuery(this).children("div.menu-second > a.menu-text1").addClass("current");
					}, function() {
						jQuery("div[class^=FrontProductsCategory_show01-d1] .menu-second").hide();
						jQuery(this).children("div.menu-second > a.menu-text1").removeClass("current");
					});
				}
				jQuery(document).ready(FrontProductsCategory_show01['FrontProductsCategory_show01-1308043373085_init']);
				//]]>
				</script>
				<div id="FrontProductsCategory_show01-1308043373085" class="FrontProductsCategory_show01-d1_c2">
				<div class="menu-first">
					<ul>
					<li class="menu-none"><a href="/Download.asp?id=1" class="menu-text1">优惠券</a></li>
					<li class="menu-none"><a href="/Download.asp?id=2" class="menu-text1">企业内刊</a></li>
					<li class="menu-none"><a href="/Download.asp?id=19" class="menu-text1">视频中心</a></li>
					<li class="menu-none"><a href="/Download.asp?id=22" class="menu-text1">手机软件</a></li>
					</ul>
				</div>
				</div> 
				</DIV>
<!--左侧菜单带下拉-->
				</td>
				<td align="center" valign="top" bgcolor="#f0eddc">

					<table width="90%" border="0" align="center" cellpadding="5" cellspacing="1" bgcolor="#DEE7F9" style="margin:20px auto">
					<tr>
					<td width="15%" bgcolor="#FFFFFF" class="td"><strong>下载名称：</strong></td>
					<td width="85%" bgcolor="#FFFFFF" class="td"><%=rs("title")%></td>
					</tr>
					<tr>
					<td bgcolor="#FFFFFF" class="td"><strong>下载次数：</strong></td>
					<td bgcolor="#FFFFFF" class="td"><%=rs("js")%> 次</td>
					</tr>
					<tr>
					<td bgcolor="#FFFFFF"><strong>内容介绍：</strong></td>
					<td bgcolor="#FFFFFF" align="left"><div style="font-size:12px; line-height:23px;"><%=rs("body")%></div></td>
					</tr>
					<tr>
					<td bgcolor="#FFFFFF"><strong>发布日期：</strong></td>
					<td bgcolor="#FFFFFF"><%=rs("data")%></td>
					</tr>
					<tr>
					<td bgcolor="#FFFFFF"><strong>下载地址：</strong></td>
					<td bgcolor="#FFFFFF"><a href="Downloads.asp?id=<%=rs("id")%>" target="_blank"><img src="images/download.gif" width="70" height="25" /></a>
					</td>
					</tr>
					</table>

				</td>
				</tr>
			  </table>
		</td>
	  </tr>
	</table>
	

	</td>
  </tr>
</table>

<!--#include file="foot.asp" -->
</body>
</html>

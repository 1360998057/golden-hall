<!--#include file="conn.asp"-->
<!--#include file="config.asp" -->
<!--#include file="Sql.Asp" -->
<!--#include file="w78_sql.asp"--> 
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>新闻中心_<%=w78_home%></title>
<meta name="keywords" content="<%=w78_keywords%>" />
<meta name="description" content="<%=w78_description%>" />
<link href="images/css.css" rel="stylesheet" type="text/css" />
</head>

<body>
<!--#include file="top.asp" -->
	<table width="1024" border="0" align="center" cellpadding="0" cellspacing="0">
	  <tr>
		<td align="left" width=210 valign="top">
		<!--左-->
		<!--#include file="left_products.asp" -->
		<!--左-->
		</td>
		<td align="left" valign="top" style="padding-left:30px">
		<!--右-->
				<table width="100%" border="0" cellspacing="0" cellpadding="0">
					<tr valign="top">
						<td height="36" background="images/bgs1.jpg">
						<table width="100%" border="0" cellpadding="0" cellspacing="0">
							<tr>
								<td width="130" height="36" align="center"><div id="lbt">新闻中心</div></td>
								<td align="right" style="padding-right:10px;"><div id="lat">当前位置：<a href="/">首 页</a> > 新闻中心</div></td>
							</tr>
						</table>  
						</td>
					</tr>
					<tr>
					  <td valign="top" align="left" height="180">

          <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td><% 
				set news_fl=server.createobject("adodb.recordset") 
				exec="select * from [news_fl] order by px_id asc  " 
				news_fl.open exec,conn,1,1 
				if news_fl.eof and news_fl.bof then
				response.Write("&nbsp;暂无任何分类 !")
				end if
				do while not news_fl.eof%>
				<div style="margin-bottom:10px;">
				<table width="100%" border="0" align="center" cellpadding="0" cellspacing="0"0>
				  <tr>
					<td>
					<table width="98%" height="30" border="0" align="center" cellpadding="0" cellspacing="0" style="border-bottom:1px dotted #CCCCCC">
						<tr>
						  <td align="left"><span style="font-size:14px; font-weight:bold; color:#069"><%=news_fl("title")%></span></td>
						  <td><div align="right"><a href="NewsMore.asp?id=<%=news_fl("id")%>">更多&gt;&gt;</a></div></td>
						</tr>
					  </table>
					  </td>
				  </tr>
				  <tr>
					<td> <% 
					set news=server.createobject("adodb.recordset") 
					exec="select top 6 * from [news] where ssfl="&news_fl("id")&" order by id desc  " 'top 5代表每栏目显示5条新闻
					news.open exec,conn,1,1 
					if news.eof and news.bof then
					response.Write("&nbsp;此分类暂无新闻 !")
					end if%>
					<table width="98%" border="0" align="center" cellpadding="3" cellspacing="0" style="margin:10px auto">
					<%while not news.eof
					dim url,color
					if IsNull(news("url")) or trim(news("url")&"")="" then
					url="ShowNews.asp?id="&news("id")&"&menu=6"
					else
					url=""&news("url")&""
					end if
					if IsNull(news("color")) or trim(news("color")&"")="" then
					color="#000000"
					else
					color=""&news("color")&""
					end if
					%>
					  <tr>
					    <td height="25" align="left" width="15"><img src="images/T_2.jpg"></td>
						<td align="left">· <a href="<%=url%>" style="color:<%=color%>; font-size:12px"><%=InterceptString(news("title"),50)%></a></td>
						<td align="right"><div align="right"><font color="#009900"><%=news("data")%></font></div></td>
					  </tr>
					<%news.movenext
					wend%></table><%
					news.close
					set news=nothing
					%></td>
				  </tr>
				</table></div>
				<%
				news_fl.movenext
				loop
				news_fl.close
				set news_fl=nothing
				%>
            </td>
			</tr>
          </table>

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

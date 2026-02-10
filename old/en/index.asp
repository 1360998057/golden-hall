<!--#include file="conn.asp"-->
<!--#include file="config.asp" -->
<!--#include file="Sql.Asp" -->
<!--#include file="w78_sql.asp"--> 
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title><%=w78_home%></title>
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


<table border="0" cellpadding="0" cellspacing="0" align="center" width="100%">
  <tr>
	<td valign="top" align="center" style="background:#e5e5e5;">
		<table border="0" cellpadding="0" cellspacing="0" align="center" width="1024">
		  <tr>
			<td colspan="4" align="center" valign="middle" height="100">
			<img src="images/about.png" />
			</td>
		  </tr>
		  <tr>
		<td width="25%" height="150" valign="middle" align="center" style="background:url(images/dian.gif) center center repeat-x">
		<a href="about.asp?id=1"><img src="images/ico1.png" border="0" onMouseMove="this.src='images/ico1a.png'" onMouseOut="this.src='images/ico1.png'" /></a>
		</td>
		<td width="25%" valign="middle" align="center" style="background:url(images/dian.gif) center center repeat-x">
		<a href="about.asp?id=3"><img src="images/ico2.png" border="0" onMouseMove="this.src='images/ico2a.png'" onMouseOut="this.src='images/ico2.png'" /></a>
		</td>
		<td width="25%" valign="middle" align="center" style="background:url(images/dian.gif) center center repeat-x">
		<a href="about.asp?id=6"><img src="images/ico3.png" border="0" onMouseMove="this.src='images/ico3a.png'" onMouseOut="this.src='images/ico3.png'" /></a>
		</td>
		<td width="25%" valign="middle" align="center" style="background:url(images/dian.gif) center center repeat-x">
		<a href="about.asp?id=5"><img src="images/ico4.png" border="0" onMouseMove="this.src='images/ico4a.png'" onMouseOut="this.src='images/ico4.png'" /></a>
		</td>
		  </tr>
		  <tr>
			<td width="25%" height="75" valign="middle" align="center" style="line-height:25px;">
			The company is a professional manufacturer barrel Screw key enterprises,the company is committed to:Conical twin screw,parallel twin-screw,single-screw<br>……
			</td>
			<td width="25%" height="75" valign="middle" align="center" style="line-height:25px;">
			Companies in strict accordance with the ISO9001-2000 Quality system certification for management,high-precision production equipment Advanced technology<br>……
			</td>
			<td width="25%" height="75" valign="middle" align="center" style="line-height:25px;">
			Companies to comply with"the contract,keeping promises,"the purpose,always adhere to the quality of survival,integrity and development,alongside Albert<br>……
			</td>
			<td width="25%" height="75" valign="middle" align="center" style="line-height:25px;">
			The company can provide customers with<br>on-site mapping,design,transformation<br>customization and many other services,and a variety of screw and barrel wear<br>……
			</td>
		  </tr>
		</table>
	</td>
  </tr>
</table>

<table border="0" cellpadding="0" cellspacing="0" align="center" width="100%">
  <tr>
	<td valign="top" align="center" style="background:url(images/midbg.jpg) center center no-repeat;">
	<!--滚动图片-->
	<table border=0 cellSpacing=0 cellPadding=0 width=1024 align="center" style=" margin:10px 0;">
	  <tr>
		<td align="center" valign="middle" height="200">
		<a href="Products.asp"><img src="images/product.png" /></a>
		</td>
	  </tr>
	  <tr>
		<td align="center" valign="middle" height="400">
				<% 
				set tuijian=server.createobject("adodb.recordset") 
				exec="select * from  [Products] order by px_id asc, id desc" 
				tuijian.open exec,conn,1,1 
				%>
				 <div id="marquee" style="width:1024px;height:280px;overflow:hidden;">
					  <table border="0" cellspacing="0" cellpadding="0">
						<tr>
						  <%
						  do while not tuijian.eof
						  %>                
								<td style="padding:0 10px;">
								<table width="100%" border="0" cellpadding="0" cellspacing="0">
								  <tr>
									<td>
									<a href="ShowProducts.asp?id=<%=tuijian("id")%>" class="img" title="<%=tuijian("title")%>">
									<img src="<%=tuijian("img")%>" width="230" height="173" /></a>
									</td>
								  </tr>
								  <tr>
									<td align="center">
									<div style="width:230px; height:50px; overflow:hidden;">
									<a style="color:#FFFFFF; line-height:50px; font-size:16px;" href="Products.asp?id=<%=tuijian("id")%>">
									<%=tuijian("title")%></a>
									</div>
									</td>
								  </tr>
								</table> 
								</td>
						  <%
						  tuijian.movenext 
						  loop 
						  tuijian.close
						  set tuijian=nothing
						  %>
						  </tr>
					  </table>
				<script>
					var marquee2 = new Marquee("marquee")
						marquee2.Direction = 2;
						marquee2.Step = 1;
						marquee2.Width = 1024;
						marquee2.Height = 280;
						marquee2.Timer = 30;
						marquee2.DelayTime = 0;
						marquee2.WaitTime = 0;
						marquee2.Start();
				
				</script>
				</div>
		</td>
	  </tr>
	</table>
	<!--滚动图片-->
	</td>
  </tr>
</table>

<table border="0" cellpadding="0" cellspacing="0" align="center" width="100%">
  <tr>
	<td valign="top" align="center" style="background:#e5e5e5;">
		<table border="0" cellpadding="0" cellspacing="0" align="center" width="1024" style="margin:20px auto;">
		  <tr>
			<td height="80" colspan="2" valign="middle" align="center" style="background:url(images/landian.png) bottom center repeat-x">
			<img src="images/news.png" />
			</td>
		  </tr>
		  <tr>
			<td valign="top" width="50%" align="center" style="background:url(images/baidian.gif) right repeat-y;line-height:25px;">
						<table width="100%" border="0" cellpadding="0" cellspacing="0">
						<tr>
						<td align="left" style="padding:0 50px; border-bottom:1px solid #ffffff">
						<div id="abt">Company news</div>
						</td>
						</tr>
						<% 
						set news=server.createobject("adodb.recordset") 
						exec="select top 5 * from [news] where ssfl=8 order by id desc  " 
						news.open exec,conn,1,1 

						do while not news.eof
						if IsNull(news("url")) or trim(news("url")&"")="" then
						url="ShowNews.asp?id="&news("id")&""
						else
						url=""&news("url")&""
						end if
						%> 
						<tr>
						<td align="left" style="padding:0 50px">
							<table width="100%" border="0" cellpadding="0" cellspacing="0">
							<tr>
							<td height="35" align="left">
							<a href="<%=url%>" class="e67817" title="<%=news("title")%>"><%=InterceptString(news("title"),35)%></a>
							</td>
							<td height="35" align="right" >
							<font style="color:#e67817"><%=formatdate(news("data"),2)%></font>
							</td>
							</tr>
							<tr>
							<td colspan="2" align="left" style="padding:10px 0; border-top:1px dotted #CCCCCC">
							<div style="line-height:20px; color:#999999">
							<%=InterceptString(trim(delhtml(news("body"))),100)%>
							</div>
							</td>
							</tr>
							</table>
						</td>
						</tr>
						<%
						news.movenext 
						loop 
						news.close
						set news=nothing
						%>
						</table>
			</td>
			<td valign="top" align="center" width="50%" style="line-height:25px;">
						<table width="100%" border="0" cellpadding="0" cellspacing="0">
						<tr>
						<td align="right" style="padding:0 50px; border-bottom:1px solid #ffffff">
						<div id="abt">Industry news</div>
						</td>
						</tr>
						<% 
						set news=server.createobject("adodb.recordset") 
						exec="select top 5 * from [news] where ssfl=12 order by id desc  " 
						news.open exec,conn,1,1 

						do while not news.eof
						if IsNull(news("url")) or trim(news("url")&"")="" then
						url="ShowNews.asp?id="&news("id")&""
						else
						url=""&news("url")&""
						end if
						%> 
						<tr>
						<td align="left" style="padding:0 50px">
							<table width="100%" border="0" cellpadding="0" cellspacing="0">
							<tr>
							<td height="35" align="left">
							<a href="<%=url%>" class="e67817" title="<%=news("title")%>"><%=InterceptString(news("title"),35)%></a>
							</td>
							<td height="35" align="right" >
							<font style="color:#e67817"><%=formatdate(news("data"),2)%></font>
							</td>
							</tr>
							<tr>
							<td colspan="2" align="left" style="padding:10px 0; border-top:1px dotted #CCCCCC">
							<div style="line-height:20px; color:#999999">
							<%=InterceptString(trim(delhtml(news("body"))),100)%>
							</div>
							</td>
							</tr>
							</table>
						</td>
						</tr>
						<%
						news.movenext 
						loop 
						news.close
						set news=nothing
						%>
						</table>
			</td>
		  </tr>
		</table>
	</td>
  </tr>
</table>


<table border="0" cellpadding="0" cellspacing="0" align="center" width="100%">
  <tr>
	<td valign="middle" align="center" height="600" style="background:url(images/midbg1.jpg) center center no-repeat; color:#FFFFFF">
	<!--滚动图片-->
	<table border=0 cellSpacing=0 cellPadding=0 width=1024 align="center">
	  <tr>
		<td align="center" valign="top" height="450" width="50%" style="border-right:1px solid #000000">
<script type="text/javascript"> 
function check(){ 
if (document.add.title.value==""){ 
alert('Please fill in the title of the message.！'); 
document.add.title.focus(); 
return false; 
} 
if (document.add.name.value==""){ 
alert('Please fill in your name！'); 
document.add.name.focus(); 
return false; 
} 
if (document.add.tel.value==""){ 
alert('Please fill in the contact phone number！'); 
document.add.tel.focus(); 
return false; 
} 
if (document.add.body.value==""){ 
alert('Please fill in the message！'); 
document.add.body.focus(); 
return false; 
} 
} 
</script>
							<table width="450" border="0" cellpadding="5" cellspacing="5">
							<form action="book/add_book_pass.asp" method="post" name="add" onSubmit="return check()"> 
							<tr>
							<td colspan="2" align="left"><img src="images/ly.png" /></td>
							</tr>
							<tr>
							<td width="100" align="right">Title：</td>
							<td align="left"><input name="title" type="text" class="line" size="40"/></td>
							</tr>
							<tr>
							<td align="right">Name：</td>
							<td align="left"><input name="name" type="text" class="line"  size="40"/>*</td>
							</tr>
							<tr>
							<td align="right">ＱＱ：</td>
							<td align="left"><input name="qq" type="text" class="line"  size="40"/></td>
							</tr>
							<tr>
							<td align="right">Mail：</td>
							<td align="left"><input name="mail" type="text" class="line"  size="40"/></td>
							</tr>
							<tr>
							<td align="right">Tel：</td>
							<td align="left"><input name="tel" type="text" class="line"  size="40"/>*
							<input name="sh" type="hidden" value="<%=config("booksh")%>" size="10"/></td>
							</tr>
							<tr>
							<td align="right">Info：</td>
							<td align="left"><textarea name="body" cols="35" rows="4" class="line" ></textarea>*</td>
							</tr>
							<tr>
							<td>&nbsp;</td>
							<td align="left"><input type="submit" name="button" id="button" value="Submit" style="width:150px; height:50px; color:#FFFFFF; background:#007cc2; border:0; font-size:16px; font-family:Microfost Yahei" /></td>
							</tr>
							</form>
							</table>
		</td>
		<td align="center" valign="top" height="450" width="50%">
							<table width="450" border="0" cellpadding="5" cellspacing="5">
							<tr>
								<td align="left"><img src="images/lx.png" /></td>
							</tr>
							<tr>
								<td align="left">ADD：<%=w78_dz()%></td>
							</tr>
							<tr>
								<td align="left">Linkman：<%=w78_name()%></td>
							</tr>
							<tr>
								<td align="left">Tel：<%=w78_tel()%></td>
							</tr>
							<tr>
								<td align="left">Fax：<%=w78_fax()%></td>
							</tr>
							<tr>
								<td align="left">Mail：<%=w78_mail()%></td>
							</tr>
							<tr>
								<td>
    <!--引用百度地图API-->
    <iframe width="450" height="200" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://j.map.baidu.com/H3UM7"></iframe>
  							</td>
							</tr>
							</table>
		</td>
	  </tr>
	</table>
	<!--滚动图片-->
	</td>
  </tr>
</table>

<!--#include file="foot.asp" -->
</body>
</html>

<!--#include file="Conn.asp" -->
<!--#include file="sql.asp"-->
<!--#include file="../config.asp" -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>发表留言_<%=config("title")%></title>
<meta name="keywords" content="<%=config("keywords")%>" />
<meta name="description" content="<%=config("description")%>" />
<link href="../images/css.css" rel="stylesheet" type="text/css" />
<script type="text/javascript"> 
function check(){ 
if (document.add.title.value==""){ 
alert('请填写留言标题！'); 
document.add.title.focus(); 
return false; 
} 
if (document.add.name.value==""){ 
alert('请填写姓名！'); 
document.add.name.focus(); 
return false; 
} 
if (document.add.tel.value==""){ 
alert('请填写联系电话！'); 
document.add.tel.focus(); 
return false; 
} 
if (document.add.body.value==""){ 
alert('请填写留言内容！'); 
document.add.body.focus(); 
return false; 
} 
} 
</script>
<link href="../img/xixi.css" rel="stylesheet" type="text/css">
</head>

<body>
<!--#include file="../top.asp" -->
	
	<table width="1024" border="0" align="center" cellpadding="0" cellspacing="0" style="margin-top:15px; background:#FFFFFF">
	  <tr>
		<td align="left" width=274 valign="top">
		<!--左-->
		<!--#include file="../left_products.asp" -->
		<!--左-->
		</td>
		<td align="left" valign="top">
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
		
						<div class="right_body" style="margin:20px 20px 20px 20px">
							<table width="100%" align="center" cellpadding="5" cellspacing="1" bgcolor="#ffffff">
							<form action="add_book_pass.asp" method="post" name="add" onSubmit="return check()"> 
							<tr>
							<td width="25%" bgcolor="#ffffff"><div align="center">标题：</div></td>
							<td width="75%" bgcolor="#ffffff"><label>
							<input name="title" type="text" size="40"/>
							　*</label></td>
							</tr>
							<tr>
							<td bgcolor="#ffffff"><div align="center">姓名：</div></td>
							<td bgcolor="#ffffff"><input name="name" type="text" size="40"/>
							　*</td>
							</tr>
							<tr>
							<td bgcolor="#ffffff"> <div align="center">ＱＱ：</div></td>
							<td bgcolor="#ffffff"><input name="qq" type="text" size="40"/></td>
							</tr>
							<tr>
							<td bgcolor="#ffffff"><div align="center">邮箱：</div></td>
							<td bgcolor="#ffffff"><input name="mail" type="text" size="40"/></td>
							</tr>
							<tr>
							<td bgcolor="#ffffff"><div align="center">电话：</div></td>
							<td bgcolor="#ffffff"><input name="tel" type="text" size="40"/>
							　*
							<input name="sh" type="hidden" value="<%=config("booksh")%>" size="10"/></td>
							</tr>
							<tr>
							<td bgcolor="#ffffff"><div align="center">内容：</div></td>
							<td bgcolor="#ffffff"><label>
							<textarea name="body" cols="45" rows="8"></textarea>
							　*</label></td>
							</tr>
							<tr>
							<td bgcolor="#ffffff"><div align="center">验证：</div></td>
							<td bgcolor="#ffffff"><input name="VerifyCode" type="text" class="input"  size="10" /> <img src="../safecode.asp?" onClick="this.src+=Math.random()" alt="图片看不清？点击重新得到验证码" style="cursor:hand;" /></td>
							</tr>
							<tr>
							<td bgcolor="#ffffff">&nbsp;</td>
							<td bgcolor="#ffffff"><label>
							<input type="submit" name="button" id="button" value="提交留言" />
							</label></td>
							</tr></form>
							</table>
						</div>

					  </td>
					</tr>
				  </table>  
		<!--右-->
		</td>
	  </tr>
	</table>
	

<!--#include file="../foot.asp" -->
</body>
</html>

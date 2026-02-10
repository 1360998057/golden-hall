<!--#include file="conn.asp"-->
<!--#include file="config.asp" -->
<!--#include file="page.asp" -->
<!--#include file="Sql.Asp" -->
<!--#include file="w78_sql.asp"--> 
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>在线应聘_<%=w78_home%></title>
<meta name="keywords" content="<%=w78_keywords%>" />
<meta name="description" content="<%=w78_description%>" />
<script type="text/javascript"> 
function check(){ 
if (document.add.name.value==""){ 
alert('姓名不能为空！'); 
document.add.name.focus(); 
return false; 
} 
if (document.add.nn.value==""){ 
alert('年龄不能为空！'); 
document.add.nn.focus(); 
return false; 
} 
if (document.add.hj.value==""){ 
alert('户籍不能为空！'); 
document.add.hj.focus(); 
return false; 
} 
if (document.add.sfz.value==""){ 
alert('身份证不能为空！'); 
document.add.sfz.focus(); 
return false; 
} 
if (document.add.sj.value==""){ 
alert('手机不能为空！'); 
document.add.sj.focus(); 
return false; 
} 
if (document.add.jybj.value==""){ 
alert('教育背景不能为空！'); 
document.add.jybj.focus(); 
return false; 
} 
if (document.add.gzjn.value==""){ 
alert('工作经验不能为空！'); 
document.add.gzjn.focus(); 
return false; 
} 
} 
</script>
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

							<div class="right_body" style="margin:20px 20px 20px 20px">
							<table width="100%" border="0" align="center" cellpadding="0" cellspacing="10">
							<form action="yp_pass.asp" method="post" name="add"  onsubmit="return check()">
							  <tr>
								<td width="20%" align="right">应聘职位：</td>
								<td width="80%" bgcolor="#FFFFFF"><%
							id=request.QueryString("id")
							if id="" or not isnumeric(id) then
							response.write "<script>alert('警告!请勿尝试非法注入！');window.location.href='index.asp';</script>" 
							Response.End()
							end if
							set rs=server.createobject("adodb.recordset") 
							exec="select * from job where id="&id
							rs.open exec,conn,1,1
							response.Write("<b>"&rs("title")&"</b>")
								%>
								  <label>
								  <input name="ypzw" type="hidden" value="<%=rs("title")%>" />
								  </label></td>
							  </tr>
							  <tr>
								<td align="right">您的姓名：</td>
								<td bgcolor="#FFFFFF"><input name="name" type="text" /> 
								  *</td>
							  </tr>
							  <tr>
								<td align="right">性别：</td>
								<td bgcolor="#FFFFFF"><label>
								  <input name="sex" type="radio" value="男" checked="checked"/>
								男
								<input type="radio" name="sex" value="女" /> 
								女
							</label></td>
							  </tr>
							  <tr>
								<td align="right">年龄：</td>
								<td bgcolor="#FFFFFF"><input name="nn" type="text" />
								  *</td>
							  </tr>
							  <tr>
								<td align="right">民族：</td>
								<td bgcolor="#FFFFFF"><input name="mz" type="text" /></td>
							  </tr>
							  <tr>
								<td align="right">户籍：</td>
								<td bgcolor="#FFFFFF"><input name="hj" type="text" />
								  *</td>
							  </tr>
							  <tr>
								<td align="right">婚姻状况：</td>
								<td bgcolor="#FFFFFF"><input name="hyzk" type="radio" value="未婚" checked="checked"/>
							未婚
							  <input type="radio" name="hyzk" value="已婚" />
							已婚 </td>
							  </tr>
							  <tr>
								<td align="right">身高：</td>
								<td bgcolor="#FFFFFF"><input name="sg" type="text" /></td>
							  </tr>
							  <tr>
								<td align="right">体重：</td>
								<td bgcolor="#FFFFFF"><input name="tz" type="text" /></td>
							  </tr>
							  <tr>
								<td align="right">身份证：</td>
								<td bgcolor="#FFFFFF"><input name="sfz" type="text" size="40" />
								  *</td>
							  </tr>
							  <tr>
								<td align="right">学历：</td>
								<td bgcolor="#FFFFFF"><select name="xueli" id="xueli">
										<option value="1">初中</option>
										<option value="2">中专/高中</option>
										<option value="3" selected="selected">大专</option>
										<option value="4">本科</option>
										<option value="5">博士/硕士</option>
									  </select></td>
							  </tr>
							  <tr>
								<td align="right">现所在地：</td>
								<td bgcolor="#FFFFFF"><input name="szd" type="text" /></td>
							  </tr>
							  <tr>
								<td align="right">毕业院校：</td>
								<td bgcolor="#FFFFFF"><input name="byyx" type="text" /></td>
							  </tr>
							  <tr>
								<td align="right">联系电话：</td>
								<td bgcolor="#FFFFFF"><input name="tel" type="text" /></td>
							  </tr>
							  <tr>
								<td align="right">联系手机：</td>
								<td bgcolor="#FFFFFF"><input name="sj" type="text" />
								  *</td>
							  </tr>
							  <tr>
								<td align="right">教育背景：</td>
								<td bgcolor="#FFFFFF"><label>
								  <textarea name="jybj"  cols="45" rows="5"></textarea>
								*</label></td>
							  </tr>
							  <tr>
								<td align="right">工作经验：</td>
								<td bgcolor="#FFFFFF"><textarea name="gzjn"  cols="45" rows="5"></textarea>
								  *</td>
							  </tr>
							  <tr>
								<td align="right">专长：</td>
								<td bgcolor="#FFFFFF"><textarea name="zc"  cols="45" rows="5"></textarea></td>
							  </tr>
							  <tr>
								<td bgcolor="#FFFFFF">&nbsp;</td>
								<td bgcolor="#FFFFFF"><label>
								  <input type="submit" name="button" id="button" value="提交简历" />
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
	

<!--#include file="foot.asp" -->
</body>
</html>

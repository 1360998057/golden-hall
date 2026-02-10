<!--#include file="conn.asp"-->
<!--#include file="config.asp" -->
<!--#include file="page.asp" -->
<!--#include file="Sql.Asp" -->
<!--#include file="w78_sql.asp"--> 
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Application__<%=w78_home%></title>
<meta name="keywords" content="<%=w78_keywords%>" />
<meta name="description" content="<%=w78_description%>" />
<script type="text/javascript"> 
function check(){ 
if (document.add.name.value==""){ 
alert('The name cannot be empty！'); 
document.add.name.focus(); 
return false; 
} 
if (document.add.nn.value==""){ 
alert('Age cannot be empty！'); 
document.add.nn.focus(); 
return false; 
} 
if (document.add.hj.value==""){ 
alert('The household registration can not be empty！'); 
document.add.hj.focus(); 
return false; 
} 
if (document.add.sfz.value==""){ 
alert('ID cannot be empty！'); 
document.add.sfz.focus(); 
return false; 
} 
if (document.add.sj.value==""){ 
alert('Mobile phone cannot be empty！'); 
document.add.sj.focus(); 
return false; 
} 
if (document.add.jybj.value==""){ 
alert('Education background can not be empty！'); 
document.add.jybj.focus(); 
return false; 
} 
if (document.add.gzjn.value==""){ 
alert('Work experience cannot be empty！'); 
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
								<td width="40%" height="36" align="left"><div id="lbt">Job</div></td>
								<td align="right" style="padding-right:10px;"><div id="lat">Location：<a href="/">Home</a> > Job</div></td>
							</tr>
						</table>  
						</td>
					</tr>
					<tr>
					  <td valign="top" align="left" height="180">

							<div class="right_body" style="margin:20px 20px 20px 20px">
							<table width="100%" border="0" align="center" cellpadding="5" cellspacing="1" bgcolor="#ffffff">
							<form action="yp_pass.asp" method="post" name="add"  onsubmit="return check()">
							  <tr>
								<td width="20%">Job objective：</td>
								<td width="80%"><%
							id=request.QueryString("id")
							if id="" or not isnumeric(id) then
							response.write "<script>alert('Warning! Do not try to illegally into the！');window.location.href='index.asp';</script>" 
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
								<td>Name：</td>
								<td><input name="name" type="text" /> 
								  *</td>
							  </tr>
							  <tr>
								<td>Sexuality：</td>
								<td><label>
								  <input name="sex" type="radio" value="男" checked="checked"/>
								Male
								<input type="radio" name="sex" value="女" /> 
								Female
							</label></td>
							  </tr>
							  <tr>
								<td>Age：</td>
								<td><input name="nn" type="text" />
								  *</td>
							  </tr>
							  <tr>
								<td>Nationality：</td>
								<td><input name="mz" type="text" /></td>
							  </tr>
							  <tr>
								<td>Household register：</td>
								<td><input name="hj" type="text" />
								  *</td>
							  </tr>
							  <tr>
								<td>Marital status：</td>
								<td><input name="hyzk" type="radio" value="未婚" checked="checked"/>
							Unmarried
							  <input type="radio" name="hyzk" value="已婚" />
							Married </td>
							  </tr>
							  <tr>
								<td>Height：</td>
								<td><input name="sg" type="text" /></td>
							  </tr>
							  <tr>
								<td>Body weight：</td>
								<td><input name="tz" type="text" /></td>
							  </tr>
							  <tr>
								<td>ID card：</td>
								<td><input name="sfz" type="text" size="40" />
								  *</td>
							  </tr>
							  <tr>
								<td>Educational background：</td>
								<td><select name="xueli" id="xueli">
										<option value="1">Junior high school</option>
										<option value="2">Secondary / high school</option>
										<option value="3" selected="selected">College</option>
										<option value="4">Undergraduate course</option>
										<option value="5">Doctor / Master</option>
									  </select></td>
							  </tr>
							  <tr>
								<td>Its current location：</td>
								<td><input name="szd" type="text" /></td>
							  </tr>
							  <tr>
								<td>Graduated：</td>
								<td><input name="byyx" type="text" /></td>
							  </tr>
							  <tr>
								<td>Tel：</td>
								<td><input name="tel" type="text" /></td>
							  </tr>
							  <tr>
								<td>Phone：</td>
								<td><input name="sj" type="text" />
								  *</td>
							  </tr>
							  <tr style="display:none">
								<td>Educational Background：</td>
								<td><label>
								  <textarea name="jybj"  cols="45" rows="5">No</textarea>
								*</label></td>
							  </tr>
							  <tr>
								<td>Work experience：</td>
								<td><textarea name="gzjn"  cols="45" rows="5"></textarea>
								  *</td>
							  </tr>
							  <tr>
								<td>Specialty：</td>
								<td><textarea name="zc"  cols="45" rows="5"></textarea></td>
							  </tr>
							  <tr>
								<td>&nbsp;</td>
								<td><label>
								  <input type="submit" name="button" id="button" value="Submit" />
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

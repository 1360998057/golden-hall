<!--#include file="conn.asp"-->
<!--#include file="sql.asp"-->
<!--#include file="../config.asp" -->
<!--#include file="../w78_sql.asp"--> 
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>会员注册_<%=config("title")%></title>
<meta name="keywords" content="<%=config("keywords")%>" />
<meta name="description" content="<%=config("description")%>" />
<link href="../images/css.css" rel="stylesheet" type="text/css" />
</head>
<body>
<!--#include file="../top.asp" -->
<table width="980" border="0" align="center" cellpadding="0" cellspacing="0">
  <tr valign="top">
    <td width="220" bgcolor="#EEF2FA"><!--#include file="left.asp" --></td>
    <td width="760"><table width="100%" height="500" border="0" align="center" cellpadding="0" cellspacing="0" id="line">
      <tr>
        <td valign="top"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="background:#DEE7F9">
          <tr>
            <td><div id="lat">当前位置：<a href="/">首 页</a> > 会员中心 > 会员注册</div></td>
          </tr>
        </table>
          <table width="90%" border="0" align="center" cellpadding="0" cellspacing="0" style="margin:20px auto">
            <tr>
              <td><table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
<form action="register_pass.asp" method="post" name="add">
  <tr>
    <td valign="top">
      <%if config("userzc")=0 then%>
  <table width="100%" border="0" cellpadding="5" cellspacing="0">
    <tr>
      <td width="19%">登陆帐号：</td>
      <td colspan="2"><label>
       <input name="sh" type="hidden" value="<%=config("usersh")%>" /> 
       <input name="useradmin" type="text" size="30" />
        <font color="#FF0000">*</font></label></td>
      <td width="43%">字母、数字或下划线</td>
    </tr>
    <tr>
      <td>登陆密码：</td>
      <td colspan="2"><input name="userpassword" type="password" size="33" />
        <font color="#FF0000">*</font></td>
      <td>6-12位,字母或数字</td>
    </tr>
    <tr>
      <td>重复密码：</td>
      <td colspan="2"><input name="userpassword2" type="password" size="33" />
        <font color="#FF0000">*</font></td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>真实姓名：</td>
      <td colspan="2"><input name="zsname" type="text" size="30" />
        <font color="#FF0000">*</font></td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>性别：</td>
      <td colspan="2">
        <input name="sex" type="radio" value="0" checked="checked" />
        先生
         <input type="radio" name="sex" value="1" />
         女士 <font color="#FF0000">*</font></td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>密码保护问题：</td>
      <td colspan="2"><select name="wen"">
				<option selected value="">---请选择密码保护问题---</option>
				<option value="我手机号码的后6位？">我手机号码的后6位？</option>
				<option value="我母亲的生日？">我母亲的生日？</option>
				<option value="我父亲的生日？">我父亲的生日？</option>
				<option value="我最好朋友的生日？">我最好朋友的生日？</option>
				<option value="我儿时居住地的地址？">我儿时居住地的地址？</option>
				<option value="我小学校名全称？">我小学校名全称？</option>
				<option value="我中学校名全称？">我中学校名全称？</option>
				<option value="离我家最近的医院全称？">离我家最近的医院全称？</option>
				<option value="离我家最近的公园全称？">离我家最近的公园全称？</option>
				<option value="我的座右铭是？">我的座右铭是？</option>
				<option value="我最喜爱的电影？">我最喜爱的电影？</option>
				<option value="我最喜爱的歌曲？">我最喜爱的歌曲？</option>
				<option value="我最喜爱的食物？">我最喜爱的食物？</option>
				<option value="我最大的爱好？">我最大的爱好？</option>
				<option value="我最喜欢的小说？">我最喜欢的小说？</option>
				<option value="我最喜欢的运动队？">我最喜欢的运动队？</option>
				</select>
        <font color="#FF0000">*</font></td>
      <td>选择密码保护问题</td>
    </tr>
    <tr>
      <td>密码保护答案：</td>
      <td colspan="2"><input name="da" type="text" size="30" />
        <font color="#FF0000">*</font></td>
      <td>找回密码时使用.</td>
    </tr>
    <tr>
      <td>公司名称：</td>
      <td colspan="2"><input name="gsname" type="text" size="30" /></td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>详细地址：</td>
      <td colspan="2"><input name="gsadd" type="text" size="30" /></td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>邮政编码：</td>
      <td colspan="2"><input name="youbian" type="text" size="20" /></td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>联系电话：</td>
      <td colspan="2"><input name="tel" type="text" size="30" /></td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>联系传真：</td>
      <td colspan="2"><input name="fax" type="text" size="30" /></td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>手机号码：</td>
      <td colspan="2"><input name="sj" type="text" size="30" /></td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>电子邮箱：</td>
      <td colspan="2"><input name="mail" type="text" size="30" /></td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>公司网址：</td>
      <td colspan="2"><input name="wz" type="text" size="30" /></td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>验证码：</td>
      <td width="18%"><input name="VerifyCode" type="text"   size="10" /></td>
      <td width="20%"><img src="safecode.asp?" onClick="this.src+=Math.random()" alt="图片看不清？点击重新得到验证码" style="cursor:hand;" /></td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td colspan="2"><label>
        <input type="submit" name="button" id="button" value="立即注册会员" />
      </label></td>
      <td>&nbsp;</td>
    </tr>
  </table><%else
  response.Write("对不起!会员注册已关闭!")
  end if
  %>
</td>
  </tr></form>
</table></td>
            </tr>
          </table></td>
      </tr>
    </table></td>
  </tr>
</table>
<!--#include file="../foot.asp" -->
</body>
</html>


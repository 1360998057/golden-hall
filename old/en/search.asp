<!--#include file="conn.asp"-->
<!--#include file="config.asp" -->
<!--#include file="Sql.Asp" -->
<!--#include file="w78_sql.asp"--> 
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>搜索中心_<%=w78_home%></title>
<meta name="keywords" content="<%=w78_keywords%>" />
<meta name="description" content="<%=w78_description%>" />
<link href="images/css.css" rel="stylesheet" type="text/css" />
</head>
<body>
<!--#include file="top.asp" -->
<table width="980" border="0" align="center" cellpadding="0" cellspacing="0">
  <tr>
    <td valign="top"><div style="text-align:center; margin:8px auto; font-size:14px; font-weight:bold">站内搜索</div>
<hr align="right" width="100%" size="0" noshade="noshade" />
<div class="right_body"><table width="248" border="0" align="center" cellpadding="5" cellspacing="0">
<form action="so.asp" method="get" name="add">
  <tr>
    <td width="28%">选择栏目</td>
    <td width="72%">
      <select name="t">
        <option value="">请选择栏目</option>
        <option value="1">新闻</option>
        <option value="2">产品</option>
        <option value="3">下载</option>
		<option value="4">案例</option>
      </select>
    </td>
  </tr>
  <tr>
    <td>关键字</td>
    <td>
      <input type="text" name="key" />
    </td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td><label>
      <input type="submit" name="button" id="button" value="搜索" />
    </label></td>
  </tr></form>
</table>
</div></td>
  </tr>
</table>
<!--#include file="foot.asp" -->
</body>
</html>

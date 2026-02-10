<!--#include file="conn.asp"-->
<!--#include file="sql.asp"-->
<!--#include file="../config.asp" -->
<!--#include file="../w78_sql.asp"--> 
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>在线购买_<%=config("title")%></title>
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
            <td><div id="lat">当前位置：<a href="/">首 页</a> > 会员中心 > 在线订购</div></td>
          </tr>
        </table>
          <table width="90%" border="0" align="center" cellpadding="0" cellspacing="0" style="margin:20px auto">
            <tr>
              <td><%if session("username")<>"" then%>
<% 
products_id=request.QueryString("products_id")
if not isnumeric(products_id) then
Response.Write "<script>alert('错误的参数！');history.go(-1);</script>" 
Response.End()
end if
exec="select * from [user] where id="&session("username")&"  "
set rs=server.createobject("adodb.recordset") 
rs.open exec,conn,1,1 
%>
  <table width="100%" border="0" cellpadding="5" cellspacing="0">
  <form action="Buy_order.asp" method="post" name="add">
    <tr>
      <td width="19%">产品名称：</td>
      <td width="81%" colspan="2"><%
exec="select * from [products] where id="&products_id
set rss=server.createobject("adodb.recordset") 
rss.open exec,conn,1,1
response.write ("<a href=""/ShowProducts.asp?id="&rss("id")&"""><b>"&rss("title")&"</b></a>")
%>
        <label>
        <input name="products_id" type="hidden" value="<%=products_id%>" />
        </label></td>
      </tr>
    <tr>
      <td>订单编号：</td>
      <td width="81%" colspan="2"><%BuyId = year(now) & month(now) & day(now) & hour(now) & minute(now) & second(now)%><%=buyid%>
        <input name="OrderNo" type="hidden" value="<%=buyid%>" />
        <input name="userid" type="hidden" value="<%=session("username")%>" /></td>
    </tr>
    
    
    <tr>
      <td>订购数量：</td>
      <td colspan="2"><label>
        <input type="text" name="number"/>
      </label></td>
      </tr>
    <tr>
      <td>订购姓名：</td>
      <td colspan="2"><input name="name" type="text" value="<%=rs("zsname")%>"/></td>
    </tr>
    <tr>
      <td>联系电话：</td>
      <td colspan="2"><input name="tel" type="text" value="<%=rs("tel")%>"/></td>
      </tr>
    <tr>
      <td>联系地址：</td>
      <td colspan="2"><input name="address" type="text" value="<%=rs("gsadd")%>" size="40"/></td>
      </tr>
    <tr>
      <td>邮政编码：</td>
      <td colspan="2"><input name="code" type="text" value="<%=rs("youbian")%>"/></td>
    </tr>
    <tr>
      <td>其它说明：</td>
      <td colspan="2"><textarea name="sm" cols="40" rows="8"></textarea></td>
    </tr>
    <tr>
      <td>订单时间：</td>
      <td colspan="2"><%=now%></td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td colspan="2"><label>
        <input type="submit" name="button" id="button" value="提交订单" />
      </label></td>
    </tr></form>
  </table>
  <%
else
response.write "<script>alert('请先登陆！');window.location.href='login.asp';</script>" 
end if
%>

</td>
            </tr>
          </table></td>
      </tr>
    </table></td>
  </tr>
</table>
<!--#include file="../foot.asp" -->
</body>
</html>


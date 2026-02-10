<!--#include file="conn.asp"-->
<!--#include file="sql.asp"-->
<!--#include file="../config.asp" -->
<!--#include file="../w78_sql.asp"--> 
<%
set rs=server.createobject("adodb.recordset")
sql="select * from [orders]"
rs.open sql,conn,1,3
OrderNo=request.form("OrderNo")
products_id=request.form("products_id")
number=request.form("number")
userid=request.form("userid")
name=request.form("name")
tel=request.form("tel")
address=request.form("address")
sm=request.form("sm")
if number=""  then 
response.Write("<script language=javascript>alert('订购数量不能为空!');history.go(-1)</script>") 
response.end 
end if
IF not isNumeric(request("number")) then
response.write("<script>alert(""订购数量必须为数字！""); history.go(-1);</script>")
response.end
end if
if name=""  then 
response.Write("<script language=javascript>alert('请填写联系人姓名!');history.go(-1)</script>") 
response.end 
end if
if tel=""  then 
response.Write("<script language=javascript>alert('请填写联系电话!');history.go(-1)</script>") 
response.end 
end if
if address=""  then 
response.Write("<script language=javascript>alert('请填写联系地址!');history.go(-1)</script>") 
response.end 
end if
rs.addnew
rs("OrderNo")=OrderNo
rs("products_id")=products_id
rs("number")=number
rs("userid")=userid
rs("name")=name
rs("tel")=tel
rs("address")=address
rs("sm")=sm
rs.update
rs.close
set rs=nothing
conn.close
set rs=nothing
Response.Write "<script>alert('您的订单已经提交成功，请等候客服与您取得联系！');window.location.href='my_orders.asp';</script>" 
%>
<table width="274" border="0" cellpadding="0" cellspacing="0">
<tr>
  <td height="44" style="background:url(/images/jdtop.jpg) left no-repeat">&nbsp;</td>
</tr>
<tr>
  <td>
  <table width="100%" border="0" cellspacing="0" cellpadding="0">
	<tr>
	  <td align="left">
		<div id="left_1">
		<ul>
		<%
		set rs2=server.createobject("adodb.recordset") 
		exec="select * from [smallclass] where BigClassID=16 order by px_id asc" 
		rs2.open exec,conn,1,1 
		do while not rs2.eof

			if cint(SmallClassID)=cint(rs2("SmallClassID")) then
			response.Write("<li><a class=on href=""/Products.asp?BigClassID=16&SmallClassID=" & rs2("SmallClassID") & """ title=""" & rs2("SmallClassName") &""">"&rs2("SmallClassName")&"</a></li>")
			else
			response.Write("<li><a href=""/Products.asp?BigClassID=16&SmallClassID=" & rs2("SmallClassID") & """ title=""" & rs2("SmallClassName") &""">"&rs2("SmallClassName")&"</a></li>")
			end if
		
		rs2.movenext
		loop
		rs2.close
		set rs2=nothing
		%>
		</ul>
		</div>
	  </td>
	</tr>
  </table>
  </td>
</tr>
</table>

<!--#include file="Conn.asp" -->
<!--#include file="seeion.asp"-->  
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>服务器信息</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" type="text/css" id="css" href="images/style.css">
</head>
<body>
<%
Function IsObjInstalled(strClassString)
On Error Resume Next
IsObjInstalled = False
Err = 0
Dim xTestObj
Set xTestObj = Server.CreateObject(strClassString)
If 0 = Err Then IsObjInstalled = True
Set xTestObj = Nothing
Err = 0
End Function
Function IsObjInstalled(strClassString)
 On Error Resume Next
 IsObjInstalled = False
 Err = 0
 Dim xTestObj
 Set xTestObj = Server.CreateObject(strClassString)
 If 0 = Err Then IsObjInstalled = True
 Set xTestObj = Nothing
 Err = 0
End Function
Function IsObjInstalled(strClassString)
On Error Resume Next
IsObjInstalled = False
Err = 0
Dim xTestObj
Set xTestObj = Server.CreateObject(strClassString)
If 0 = Err Then IsObjInstalled = True
Set xTestObj = Nothing
Err = 0
End Function
%>
<%
	Dim theInstalledObjects(17)
    theInstalledObjects(0) = "MSWC.AdRotator"
    theInstalledObjects(1) = "MSWC.BrowserType"
    theInstalledObjects(2) = "MSWC.NextLink"
    theInstalledObjects(3) = "MSWC.Tools"
    theInstalledObjects(4) = "MSWC.Status"
    theInstalledObjects(5) = "MSWC.Counters"
    theInstalledObjects(6) = "IISSample.ContentRotator"
    theInstalledObjects(7) = "IISSample.PageCounter"
    theInstalledObjects(8) = "MSWC.PermissionChecker"
    theInstalledObjects(9) = "Scripting.FileSystemObject"
    theInstalledObjects(10) = "adodb.connection"
    
    theInstalledObjects(11) = "SoftArtisans.FileUp"
    theInstalledObjects(12) = "SoftArtisans.FileManager"
    theInstalledObjects(13) = "JMail.SMTPMail"
    theInstalledObjects(14) = "CDONTS.NewMail"
    theInstalledObjects(15) = "Persits.MailSender"
    theInstalledObjects(16) = "LyfUpload.UploadFile"
    theInstalledObjects(17) = "Persits.Upload.1"
%>
<%
    Dim strClass
    strClass = Trim(Request.Form("classname"))
    If "" <> strClass then%>
      <table width="100%" border="0" cellspacing="1" align="center" class="font" bgcolor="#000000">
	  <tr bgcolor="#FFFFFF">
	  <td bgcolor="#EFEBFF" class="docbutton">
    <%Response.Write "<br>您指定的组件的检查结果："
      If Not IsObjInstalled(strClass) then 
        Response.Write "<br><font color=red>很遗憾，该服务器不支持" & strclass & "组件！</font>"
      Else
        Response.Write "<br><font color=green>恭喜！该服务器支持" & strclass & "组件。</font>"
      End If
      Response.Write "</td></tr></table>"
      end if
%>
          <table width="95%" border="0" align="center" cellpadding="1" cellspacing="1" bgcolor="#666666">
            <tr>
              <td height="28" background="images/bg_list.gif" bgcolor="#F7F7F7"><div  style="padding-left:10px; font-weight:bold; color:#FFFFFF">服务器信息</div></td>
            </tr>
            
            <tr>
              <td bgcolor="#FFFFFF" ><table width="100%" border="0" align="center" cellpadding="4" cellspacing="0" >
                
<tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#F1F5F8'" bgcolor="#F1F5F8" >
                  <td height="25" width="15%" class="td">程序绝对路径:</td>
                <td width="39%"  class="td"><%=Server.MapPath("nowaasp.asp")%></td>
                <td width="15%"  class="td">服务器脚本引擎：</td>
                <td width="31%"  class="td"><%=ScriptEngine & "/"& ScriptEngineMajorVersion &"."&ScriptEngineMinorVersion&"."& ScriptEngineBuildVersion %></td>
</tr>
            <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#FFFFFF'" bgcolor="#FFFFFF">
                  <td height="25" width="15%" class="td">站点物理路径：</td>
                <td class="td"><%=request.ServerVariables("APPL_PHYSICAL_PATH")%></td>
                <td class="td">路径信息：</td>
                <td class="td"><%=request.ServerVariables("PATH_INFO")%></td>
            </tr>
              
                <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#F1F5F8'" bgcolor="#F1F5F8">
                  <td height="25" width="15%" class="td">请求机器IP地址：</td>
                  <td class="td"><%=request.ServerVariables("REMOTE_ADDR")%></td>
                  <td class="td">服务器内部IP：</td>
                  <td class="td"><%=Request.ServerVariables("LOCAL_ADDR")%></td>
                </tr>
                <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#FFFFFF'" bgcolor="#FFFFFF">
                  <td height="25" width="15%"  class="td">SCRIPT虚拟路径：</td>
                  <td  class="td"><%=request.ServerVariables("SCRIPT_NAME")%></td>
                  <td  class="td">服务器IP地址：</td>
                  <td  class="td"><%=request.ServerVariables("SERVER_NAME")%></td>
                </tr>
              <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#F1F5F8'" bgcolor="#F1F5F8">
                  <td height="25" width="15%" class="td">服务器端口：</td>
                <td class="td"><%=request.ServerVariables("SERVER_PORT")%></td>
                <td class="td">协议名称和版本：</td>
                <td class="td"><%=request.ServerVariables("SERVER_PROTOCOL")%></td>
              </tr>
                 <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#FFFFFF'" bgcolor="#FFFFFF">
                  <td height="25" width="15%" class="td">服务器IIS版本：</td>
                  <td class="td"><%=request.ServerVariables("SERVER_SOFTWARE")%></td>
                  <td class="td">脚本超时时间：</td>
                  <td class="td"><%=Server.ScriptTimeout%>秒</td>
                </tr>
               <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#F1F5F8'" bgcolor="#F1F5F8">
                  <td height="25" width="15%" class="td">服务器操作系统：</td>
                 <td  class="td"><%=Request.ServerVariables("OS")%></td>
                 <td  class="td">服务器CPU数量：</td>
                 <td  class="td"><%=Request.ServerVariables("NUMBER_OF_PROCESSORS")%> 个</td>
               </tr>
               <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#FFFFFF'" bgcolor="#FFFFFF">
                 <td height="25" class="td">FSO文本读写：</td>
                 <td  class="td">
				 <% if IsObjInstalled("Scripting.FileSystemObject") = False Then
				 response.Write("<font color=#aaaaaa><b>×</b></font>")
                 Else 
                 response.Write("<b>√</b>")
                 End If %></td>
                 <td  class="td"><%If IsObjInstalled("JMail.Message") Then%>
                 Jmail4.3组件支持：
                   <%else%>Jmail4.2组件支持：<%end if%></td>
                 <td  class="td">
<%If IsObjInstalled("JMail.Message") or IsObjInstalled("JMail.SMTPMail") Then%>
<b>√</b>
<%else%>
<font color=#aaaaaa><b>×</b></font>
<%end if%></td>
               </tr>
               
                 
                
               

              </table>
              </td>
            </tr>
        </table> <div style="margin-top:10px;">    
          <table width="95%" border="0" align="center" cellpadding="0" cellspacing="1" bgcolor="#666666">
            <tr>
              <td height="30" background="images/bg_list.gif"><div  style="padding-left:10px; font-weight:bold; color:#FFFFFF">站点信息</div></td>
            </tr>
            <tr>
              <td bgcolor="#FFFFFF"><table width="100%" border="0" align="center" cellpadding="5" cellspacing="0" >
                  <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#F1F5F8'" bgcolor="#F1F5F8" >
                    <td height="25" width="15%" class="td">管理员个数：</td>
                    <td width="39%"  class="td"><b><%=conn.execute("select count(*) from admin")(0)%> </b>个</td>
                    <td width="16%"  class="td">新订单/全部订单：</td>
                    <td width="30%"  class="td"><b><font color="#FF0000"><%=conn.execute("select count(*) from orders where state=1")(0)%></font>/<%=conn.execute("select count(*) from orders ")(0)%></b> [<a href="admin_orders.asp">查看</a>]</td>
                  </tr>
                  <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#FFFFFF'" bgcolor="#FFFFFF">
                    <td height="25" width="15%" class="td">新闻条数：</td>
                    <td class="td"><b><%=conn.execute("select count(*) from news")(0)%></b> 条</td>
                    <td class="td">新留言/全部留言：</td>
                    <td class="td"><b><font color="#FF0000"><%=conn.execute("select count(*) from ly where hf is null")(0)%></font>/<%=conn.execute("select count(*) from ly ")(0)%></b> [<a href="admin_ly.asp">查看</a>]</td>
                  </tr>
                  <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#F1F5F8'" bgcolor="#F1F5F8">
                    <td height="25" width="15%" class="td">线路个数：</td>
                    <td class="td"><b><%=conn.execute("select count(*) from products")(0)%></b> 个</td>
                    <td class="td">收到的简历：</td>
                    <td class="td"><b><%=conn.execute("select count(*) from Resume")(0)%></b> 份</td>
                  </tr>
                <tr onmouseover="style.backgroundColor='#EEEEEE'" onmouseout="style.backgroundColor='#FFFFFF'" bgcolor="#FFFFFF">
                  <td height="25" class="td">下载个数：</td>
                  <td class="td"><b><%=conn.execute("select count(*) from download")(0)%></b> 个</td>
                    <td class="td">会员个数：</td>
                  <td class="td"><b><%=conn.execute("select count(*) from user")(0)%></b> 个</td>
                </tr>
              </table></td>
            </tr>
          </table></div>
        <div style="margin-top:10px;"> 
          </div></td>
	  </tr>
</table>

</body>
</html>

<%
'--------数据库连接部分--------------
Dim Neeao_Inject_Data_Name,Neeao_Inject_conn,Neeao_Inject_Data_Str
'数据库地址,安装前请修改之
Neeao_Inject_Data_Name = "/shuju/w78#126@#@#%$#df67d8s678.mdb" '数据库路径，请使用绝对路径。

Set Neeao_Inject_conn = Server.CreateObject("ADODB.Connection")
Neeao_Inject_Data_Str = "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" & Server.MapPath(Neeao_Inject_Data_Name)
'On Error Resume Next
Neeao_Inject_conn.Open Neeao_Inject_Data_Str
If Err Then
	err.Clear
	Set Neeao_Inject_conn = Nothing
	Response.Write "数据库连接出错，请检查连接字串。"
	Response.End
End If


'获取本页文件名
Function SelfName()
    SelfName = Mid(Request.ServerVariables("URL"),InstrRev(Request.ServerVariables("URL"),"/")+1)
End Function

%>

    
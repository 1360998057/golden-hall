<% 
'该函数作用：按指定参数格式化显示时间。 
'numformat=1:将时间转化为yyyy-mm-dd hh:nn格式。 
'numformat=2:将时间转化为yyyy-mm-dd格式。 
'numformat=3:将时间转化为hh:nn格式。 
'numformat=4:将时间转化为yyyy年mm月dd日 hh时nn分格式。 
'numformat=5:将时间转化为yyyy年mm月dd日格式。 
'numformat=6:将时间转化为hh时nn分格式。 
'numformat=7:将时间转化为yyyy年mm月dd日 星期×格式。 
'numformat=8:将时间转化为yymmdd格式。 
'numformat=9:将时间转化为mmdd格式。 

function formatdate(shijian,numformat) 
  dim ystr,mstr,dstr,hstr,nstr '变量含义分别为年字符串，月字符串，日字符串，时字符串，分字符串 
   
  if isnull(shijian) then 
    numformat=0 
  else 
    ystr=DatePart("yyyy",shijian)    
     
 if DatePart("m",shijian)>9 then  
      mstr=DatePart("m",shijian) 
    else 
      mstr="0"&DatePart("m",shijian)   
    end if 
   
    if DatePart("d",shijian)>9 then  
      dstr=DatePart("d",shijian) 
    else 
      dstr="0"&DatePart("d",shijian)   
    end if 
   
    if DatePart("h",shijian)>9 then  
      hstr=DatePart("h",shijian) 
    else 
      hstr="0"&DatePart("h",shijian)   
    end if 
   
    if DatePart("n",shijian)>9 then  
      nstr=DatePart("n",shijian) 
    else 
      nstr="0"&DatePart("n",shijian)   
    end if 
  end if   
   
  select case numformat 
    case 0 
   formatdate="" 
 case 1 
   formatdate=ystr&"-"&mstr&"-"&dstr&" "&hstr&":"&nstr  
 case 2 
   formatdate=ystr&"-"&mstr&"-"&dstr  
 case 3 
   formatdate=hstr&":"&nstr 
 case 4 
   formatdate=ystr&"年"&mstr&"月"&dstr&"日 "&hstr&"时"&nstr&"分" 
 case 5 
   formatdate=ystr&"年"&mstr&"月"&dstr&"日"  
 case 6 
   formatdate=hstr&"时"&nstr&"分" 
 case 7 
   formatdate=ystr&"年"&mstr&"月"&dstr&"日 "&WeekdayName(Weekday(shijian)) 
 case 8 
   formatdate=right(ystr,2)&mstr&dstr 
 case 9 
   formatdate=mstr&dstr 
  end select 
end function 


set config=server.createobject("adodb.recordset") 
exec="select * from config" 
config.open exec,conn,1,1 
if config("on") = 1 then
response.write (""&config("off_sm")&"")
response.End
else 
end if 
Function DelHtml(Str1)
  Dim regEx
  Set regEx = New RegExp
  regEx.Pattern = "(<[^>]*?>)"
  regEx.Global = True
  regEx.IgnoreCase = True
  DelHtml = replace(regEx.Replace(""&str1,""),"&nbsp;","")
End Function
Function InterceptString(txt,length)
    txt=trim(txt)
    x = len(txt)
    y = 0
    if x >= 1 then
        for ii = 1 to x
            if asc(mid(txt,ii,1)) < 0 or asc(mid(txt,ii,1)) >255 then 
                y = y + 2
            else
                y = y + 1
            end if
            if y >= length then
                txt = left(trim(txt),ii) 
                exit for
            end if
        next
        InterceptString = txt
    else
        InterceptString = ""
    end if
End Function
%>
<%function w78_login()'会员登陆调用参数%>
<%if session("username")<>"" then%>
<table width="80%" border="0" cellpadding="3" cellspacing="0">
  <tr>
    <td width="52%" colspan="2"><% 
set rss=server.createobject("adodb.recordset") 
exec="select * from user where id="&session("username")&"  " 
rss.open exec,conn,1,1 
response.write("<a href=""/member/index.asp"">"&rss("useradmin")&"</a>&nbsp;欢迎您！")
%></td>
    </tr>
  <tr>
    <td width="52%"><a href="/member/index.asp">我的资料</a></td>
    <td width="48%"><a href="/member/my_orders.asp">我的订单</a></td>
  </tr>
  <tr>
    <td><a href="/member/xiugai_password.asp">修改密码</a></td>
    <td><a href="/member/loginOUT.asp">退出登陆</a></td>
  </tr>
</table>

<%else%>
  <table width="80%" border="0" cellpadding="3" cellspacing="0">
  <form action="member/login_pass.asp" method="post" name="add">
    <tr>
      <td width="37%">帐号</td>
      <td width="63%" colspan="2">
        <input name="useradmin" type="text" size="15" /></td>
    </tr>
    <tr>
      <td>密码</td>
      <td colspan="2"><input name="password" type="password" size="15" /></td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td>
       <input align=middle border=0 cache height=20 src="images/login.gif" type=image width=48 name="image"></td>
      <td><a href="member/Register.asp"><img src="images/Register.gif" width="48" height="20" /></a></td>
    </tr></form>
  </table><%end if%>
<%end function%>
<%
function w78_home()
w78_home=""&config("title")&""
end function
function w78_keywords()
w78_keywords=""&config("keywords")&""
end function
function w78_description()
w78_description=""&config("description")&""
end function
function w78_url()
w78_url=""&config("url")&""
end function
function w78_logo()
w78_logo=""&config("logo")&""
end function
function w78_logoiwidth()
w78_logoiwidth=""&config("logoiwidth")&""
end function
function w78_logoheight()
w78_logoheight=""&config("logoheight")&""
end function
function w78_name()
w78_name=""&config("name")&""
end function
function w78_mail()
w78_mail=""&config("mail")&""
end function
function w78_tel()
w78_tel=""&config("tel")&""
end function
function w78_fax()
w78_fax=""&config("fax")&""
end function
function w78_qq1()
w78_qq1=""&config("qq1")&""
end function
function w78_qq2()
w78_qq2=""&config("qq2")&""
end function
function w78_qq3()
w78_qq3=""&config("qq3")&""
end function
function w78_qq4()
w78_qq4=""&config("qq4")&""
end function
function w78_qq5()
w78_qq5=""&config("qq5")&""
end function
function w78_qq6()
w78_qq6=""&config("qq6")&""
end function
function w78_qq7()
w78_qq7=""&config("qq7")&""
end function
function w78_qq8()
w78_qq8=""&config("qq8")&""
end function
function w78_qq9()
w78_qq9=""&config("qq9")&""
end function
function w78_qq10()
w78_qq10=""&config("qq10")&""
end function
function w78_dz()
w78_dz=""&config("dz")&""
end function
function w78_copyright()
w78_copyright=""&config("copyright")&""
end function
function w78_beian()
w78_beian=""&config("beian")&""
end function
%>
<%
function w78_leftimg()
set leftlist=server.CreateObject("adodb.recordset")
leftlist.open "select * from ad where id=9",conn,1,1

w78_leftimg="<a href='/adurl.asp?id=9'  target='_blank'><img src='"&leftlist("img")&"' width='100' height='400'></a>"

leftlist.close
set leftlist=nothing
end function
%>
<%
function w78_about_list()'单页列表调用参数
set aboutlist=server.CreateObject("adodb.recordset")
aboutlist.open "select * from about order by px_id asc",conn,1,1
if aboutlist.eof and aboutlist.bof then
response.Write("&nbsp;暂无记录 !")
end if
while not aboutlist.eof
response.Write("<li><a href=""About.asp?id=" & aboutlist("id") & """ title=""" & aboutlist("title") &""">"  & aboutlist("title") & "</a></li>")
aboutlist.movenext
wend
aboutlist.close
set aboutlist=nothing
end function
%>
<%
function w78_News_fl_list()'新闻分类调用参数
set newsfl=server.CreateObject("adodb.recordset")
newsfl.open "select * from news_fl order by px_id asc",conn,1,1
if newsfl.eof and newsfl.bof then
response.Write("&nbsp;暂无记录 !")
end if
while not newsfl.eof
response.Write("<li><a href=""NewsMore.asp?id=" & newsfl("id") & """ title=""" & newsfl("title") &""">"  & newsfl("title") & "</a></li></br>")
newsfl.movenext
wend
newsfl.close
set newsfl=nothing
end function
%>
<%
function w78_products_bigclass()'产品大类列表调用参数
set rs=server.CreateObject("adodb.recordset")
rs.open "select * from bigClass order by px_id asc",conn,1,1
if rs.eof and rs.bof then
response.Write("&nbsp;暂无记录 !")
end if
while not rs.eof
response.Write("<li><a href=""Products.asp?BigClassID=" & rs("BigClassID") & """ title=""" & rs("BigClassName") &""">"  & rs("BigClassName") & "</a></li>")
rs.movenext
wend
rs.close
set rs=nothing
end function
%>
<%
function w78_Navigation()'菜单导航调用参数
dim Navigation
set Navigation=server.CreateObject("adodb.recordset")
Navigation.open "select * from menu where yc=1 order by px_id asc",conn,1,1
while not Navigation.eof
response.Write("<li><a href="""&Navigation("url")&""" target="""&Navigation("openfs")&""">"&Navigation("title")&"</a></li>")
Navigation.movenext
wend
Navigation.close
set Navigation=nothing
end function
%>
<%function w78_Flash()'Flash幻灯调用参数%>
<script type=text/javascript>
        <!--
        var focus_width=310//图片宽
        var focus_height=233//图片高
        var text_height=20 //设置显示文字标题高度,最佳为20（如果不显示标题值设为0即可）
        var swf_height = focus_height+text_height
        //var pics=""
        //var links=""
        //var texts=""
		<%
		set db=conn.execute("select * from [flash] order by px_id asc")
			i=0
			do while not db.eof
				 pics=pics&"|"&db("img")
				 links=links&"|"&db("link")
				 texts=texts&"|"&db("title")
				db.moveNext
				i=i+1
			loop
response.write "var pics='"&right(pics,len(pics)-1)&"'"&vbcrlf
response.write "var links='"&right(links,len(links)-1)&"'"&vbcrlf
response.write "var texts='"&right(texts,len(texts)-1)&"'"&vbcrlf
		%>
        document.write('<object ID="focus_flash" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="'+ focus_width +'" height="'+ swf_height +'">');
        document.write('<param name="allowScriptAccess" value="sameDomain"><param name="movie" value="/images/adplay.swf"><param name="quality" value="high"><param name="bgcolor" value="#ffffff">');
        document.write('<param name="menu" value="false"><param name=wmode value="opaque">');
        document.write('<param name="FlashVars" value="pics='+pics+'&links='+links+'&texts='+texts+'&borderwidth='+focus_width+'&borderheight='+focus_height+'&textheight='+text_height+'">');
        document.write('<embed ID="focus_flash" src="/images/adplay.swf" wmode="opaque" FlashVars="pics='+pics+'&links='+links+'&texts='+texts+'&borderwidth='+focus_width+'&borderheight='+focus_height+'&textheight='+text_height+'" menu="false" quality="high" width="'+ focus_width +'" height="'+ swf_height +'" allowScriptAccess="sameDomain" bgcolor="#ffffff" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />');document.write('</object>'); 
        //-->
</script>
<%end function%>
<%
Function GetUrl(action)'加入收藏获取Url地址调用参数
GetUrl=request.servervariables("script_name")'赋目录及文件名
if action="div" then exit Function
GetUrl=Mid(Request.ServerVariables("script_name"),InstrRev(Replace(Request.ServerVariables("script_name"),"\","/"),"/")+1)'赋文件名
if action="page" then exit Function
GetUrl=request.servervariables("QUERY_STRING")
if action="action" then exit Function
GetUrl="http://"
GetUrl=GetUrl&request.servervariables("HTTP_HOST")'
if action="http" then exit Function
GetUrl=GetUrl&request.servervariables("script_name")'
if action="alldiv" then exit Function
if request.servervariables("QUERY_STRING")<>"" then GetUrl=GetUrl&"?"&request.servervariables("QUERY_STRING")'
End Function
%>

<%
function w78_link_text()'文字友情链接调用参数
dim link
dim strHtml
set link=server.CreateObject("adodb.recordset")
link.open "select * from link where lx=1 order by px_id asc",conn,1,1
if link.eof and link.bof then
response.Write("&nbsp;暂无友情链接 !")
end if
while not link.eof
strHtml = strHtml & "<option  value=""" & link("url") & """>" & link("title") & "</option>"
link.movenext
wend
if right(strHtml,3)=" | " then
strHtml=left(strHtml,len(strHtml)-3)
end if
link.close
set link=nothing
response.write(strHtml)
end function
%>

<%
function w78_link_img()'图片友情链接调用参数
set link2=server.CreateObject("adodb.recordset")
link2.open "select * from link where lx=2 order by px_id asc",conn,1,1
if link2.eof and link2.bof then
response.Write("&nbsp;暂无记录 !")
end if
while not link2.eof
response.Write("<li><a href="""&link2("url")&""" title="""&link2("title")&""" target=""_blank""><img src="""&link2("logo")&""" width=""106"" height=""33""/></a></li>")
link2.movenext
wend
link2.close
set link2=nothing
end function
%>

<%
function w78_download_fl()'下载分类调用参数
set downloadclas=server.CreateObject("adodb.recordset")
downloadclas.open "select * from download_fl order by px_id asc",conn,1,1
if downloadclas.eof and downloadclas.bof then
response.Write("&nbsp;暂无记录 !")
end if
while not downloadclas.eof
response.Write("<li><a href=""Download.asp?id=" & downloadclas("id") & """ title=""" & downloadclas("title") &""">"  & downloadclas("title") & "</a></li>")
downloadclas.movenext
wend
downloadclas.close
set downloadclas=nothing
end function
%>

<%
function w78_anli_fl()'案例分类调用参数
set anliclas=server.CreateObject("adodb.recordset")
anliclas.open "select * from anli_fl order by px_id asc",conn,1,1
if anliclas.eof and anliclas.bof then
response.Write("&nbsp;暂无记录 !")
end if
while not anliclas.eof
response.Write("<li><a href=""Anli.asp?id=" & anliclas("id") & """ title=""" & anliclas("title") &""">"  & anliclas("title") & "</a></li>")
anliclas.movenext
wend
anliclas.close
set anliclas=nothing
end function
%>

<%
function w78_anli_fl()'下载分类调用参数
set anliclas=server.CreateObject("adodb.recordset")
anliclas.open "select * from anli_fl order by px_id asc",conn,1,1
if anliclas.eof and anliclas.bof then
response.Write("&nbsp;暂无记录 !")
end if
while not anliclas.eof
response.Write("<li><a href=""Anli.asp?id=" & anliclas("id") & """ title=""" & anliclas("title") &""">"  & anliclas("title") & "</a></li>")
anliclas.movenext
wend
anliclas.close
set anliclas=nothing
end function
%>

<%
function w78_news_tuijian()'推荐新闻调用参数
set tuijian=server.CreateObject("adodb.recordset")
tuijian.open "select top 15 * from news where tuijian=1 order by id desc",conn,1,1
if tuijian.eof and tuijian.bof then
response.Write("&nbsp;暂无推荐新闻 !")
end if
while not tuijian.eof
response.Write("<li><a href=""ShowNews.asp?id=" & tuijian("id") & """ title="""& tuijian("title") &""">·" &InterceptString(tuijian("title"),15)&"</a></li></br>")
tuijian.movenext
wend
tuijian.close
set tuijian=nothing
end function
%>
<%
function w78_news_hot()'热点新闻调用参数
set newshot=server.CreateObject("adodb.recordset")
newshot.open "select top 5 * from news  order by hit desc",conn,1,1
if newshot.eof and newshot.bof then
response.Write("&nbsp;暂无热点新闻 !")
end if
while not newshot.eof
response.Write("·<a href=""ShowNews.asp?id=" & newshot("id") & """ title="""& newshot("title") &""">" &InterceptString(newshot("title"),34)&"</a></br>")
newshot.movenext
wend
newshot.close
set newshot=nothing
end function
%>
<%
function w78_news_img()'图片新闻调用参数 
set img=server.createobject("adodb.recordset") 
exec="select top 4 * from  [news] where len(img)>4 order by id desc  " 
img.open exec,conn,1,1 
if img.eof and img.bof then
response.Write("&nbsp;暂无图片新闻 !")
end if%>
<table width="150" border="0" cellpadding="0" cellspacing="0">
<tr>
<%if IsNull(img("img")) or trim(img("img")&"")="" then%>
<%else%>
<%
dim i
i=1
do while not img.eof
%> 
<td>
<table width="100%" border="0" cellpadding="5" cellspacing="1">
<tr>
<td><div align="center"><a href="ShowNews.asp?id=<%=img("id")%>" class="img" title="<%=img("title")%>"><img src="<%=img("img")%>" width="100" height="80" /></a></div></td>
          </tr>
          <tr>
            <td><div align="center"><a href="ShowProducts.asp?id=<%=img("id")%>"  title="<%=img("title")%>"><%=InterceptString(img("title"),16)%></a></div></td>
          </tr>
        </table>
  </td>
<%
if i mod 2 =0 then
response.Write "<tr>"
end if 
i=i+1 
img.movenext 
loop 
end if 
%>
</tr>
</table>
<%end function%>

<%
function w78_products_class()'产品栏目调用参数
set rs1=server.CreateObject("adodb.recordset")
rs1.open "select * from [bigClass] order by px_id asc",conn,1,1
if rs1.eof and rs1.bof then
response.Write("&nbsp;暂无记录 !")
end if
while not rs1.eof
set rs2=server.createobject("adodb.recordset") 
exec="select * from [smallclass] where BigClassID="&rs1("BigClassID")&" order by px_id asc  " 
rs2.open exec,conn,1,1 
response.Write("<li><a href=""Products.asp?BigClassID=" & rs1("BigClassID") & """ title=""" & rs1("BigClassName") &"""><b>"  & rs1("BigClassName") & "</b></a></li>")
do while not rs2.eof
response.Write("<li><a href=""Products.asp?BigClassID=" & rs2("BigClassID") & "&SmallClassID=" & rs2("SmallClassID") & """ title=""" & rs2("SmallClassName") &""">"&rs2("SmallClassName")&"</a></li>")
rs2.movenext
loop
rs2.close
set rs2=nothing
rs1.movenext
wend
rs1.close
set rs1=nothing
end function
%>

<%'首页简介字数控制
indexabout=config("syabout")
%>


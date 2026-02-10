<!--#include file="Conn.asp" -->
<!--#include file="seeion.asp"--> 
<html>
<head>
<title>管理后台菜单</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<link rel="stylesheet" type="text/css" id="css" href="images/M1.css">
<script src="images/common.js" type="text/javascript"></script>
<script>
var collapsed = getcookie('cdb_collapse');
function collapse_change(menucount) {
	if($('menu_' + menucount).style.display == 'none') {
		$('menu_' + menucount).style.display = '';collapsed = collapsed.replace('[' + menucount + ']' , '');
		$('menuimg_' + menucount).src = 'images/menu_reduce.gif';
	} else {
		$('menu_' + menucount).style.display = 'none';collapsed += '[' + menucount + ']';
		$('menuimg_' + menucount).src = 'images/menu_add.gif';
	}
	setcookie('cdb_collapse', collapsed, 2592000);
}
</script>
</head>
<body style="margin:5px!important;margin:3px;">
<table width="146" border="0" cellspacing="0" cellpadding="0" class="leftmenulist" style="margin-bottom: 5px;">
	<tr class="leftmenutext">
		<td>
			<div align="center"><a href="../index.asp" target="_blank">网站首页</a>&nbsp;&nbsp;<a href="index.asp" target="_parent">后台首页</a></div>
	  </td>
	</tr>
</table>
<div id="home">
	<table width="146" border="0" cellspacing="0" cellpadding="0" class="leftmenulist" style="margin-bottom: 5px;">
		<tr class="leftmenutext">
			<td><a href="#" onClick="collapse_change(1)"><img id="menuimg_1" src="images/menu_add.gif" border="0"/></a>&nbsp;<a href="#" onClick="collapse_change(1)">基本管理</a></td>
		</tr>
		<tbody id="menu_1" style="display:none">
			<tr class="leftmenutd">
				<td>
					<table width="100" border="0" cellpadding="0" cellspacing="0" class="leftmenuinfo">
				    <tr >
				      <td><a href="admin_xtsz.asp" target="main">网站基本设置</a></td>
				    </tr>
						<tr>
						  <td><a href="admin_administrator.asp" target="main">管理员管理</a></td>
					  </tr>
						  
						<tr >
						  <td><a href="admin_xinxisz.asp" target="main">信息显示设置</a></td>
					  </tr>
						
						<tr>
						  <td><a href="admin_menu.asp" target="main">首页菜单管理</a></td>
					  </tr>
						<tr>
						  <td><a href="admin_sql.asp" target="main">SQL注入</a> <a href="admin_sql.asp?Action=config" target="main">设置</a></td>
					  </tr>
						<tr>
						  <td><a href="admin_mail.asp" target="main">SMTP邮件配置</a></td>
					  </tr>
						<tr>
						  <td><a href="admin_count.asp" target="main">后台登陆记录</a></td>
					  </tr>
					</table>
			  </td>
			</tr>
		</tbody>
  </table>
	<table width="146" border="0" cellspacing="0" align="center" cellpadding="0" class="leftmenulist" style="margin-bottom: 5px;">
		<tr class="leftmenutext">
			<td><a href="#" onClick="collapse_change(2)"><img id="menuimg_2" src="images/menu_add.gif" border="0"/></a>&nbsp;<a href="#" onClick="collapse_change(2)">单页管理</a></td>
		</tr>
		<tbody id="menu_2" style="display:none">
			<tr class="leftmenutd">
				<td>
					<table border="0" cellspacing="0" cellpadding="0" class="leftmenuinfo">
						<tr >
						  <td><a href="add_about.asp" target="main">增加单页</a></td>
						</tr>
						<tr >
						  <td><a href="admin_about.asp" target="main">管理单页</a></td>
					  </tr>
					</table>
			  </td>
			</tr>
		</tbody>
	</table>
    <table width="146" border="0" cellspacing="0" align="center" cellpadding="0" class="leftmenulist" style="margin-bottom: 5px;">
      <tr class="leftmenutext">
        <td><a href="#" onClick="collapse_change(3)"><img id="menuimg_3" src="images/menu_add.gif" border="0"/></a>&nbsp; <a href="#" onClick="collapse_change(3)">新闻管理</a></td>
      </tr>
      <tbody id="menu_3" style="display:none">
        <tr class="leftmenutd">
          <td><table border="0" cellspacing="0" cellpadding="0" class="leftmenuinfo">
              <tr >
                <td><a href="add_news.asp" target="main">添加新闻</a></td>
              </tr>
              <tr >
                <td><a href="admin_news.asp" target="main">管理新闻</a></td>
              </tr>
              <tr >
                <td><a href="admin_newsfl.asp" target="main">新闻分类</a></td>
              </tr>
          </table></td>
        </tr>
      </tbody>
    </table>
	<table width="146" border="0" cellspacing="0" align="center" cellpadding="0" class="leftmenulist" style="margin-bottom: 5px;display:none">
      <tr class="leftmenutext">
        <td><a href="#" onClick="collapse_change(31)"><img id="menuimg_31" src="images/menu_add.gif" border="0"/></a>&nbsp; <a href="#" onClick="collapse_change(31)">案例管理</a></td>
      </tr>
      <tbody id="menu_31" style="display:none">
        <tr class="leftmenutd">
          <td><table border="0" cellspacing="0" cellpadding="0" class="leftmenuinfo">
              <tr >
                <td><a href="add_anli.asp" target="main">添加案例</a></td>
              </tr>
              <tr >
                <td><a href="admin_anli.asp" target="main">管理案例</a></td>
              </tr>
              <tr >
                <td><a href="admin_anlifl.asp" target="main">案例分类</a></td>
              </tr>
          </table></td>
        </tr>
      </tbody>
    </table>
    <table width="146" border="0" cellspacing="0" align="center" cellpadding="0" class="leftmenulist" style="margin-bottom: 5px;">
      <tr class="leftmenutext">
        <td><a href="#" onClick="collapse_change(4)"><img id="menuimg_4" src="images/menu_add.gif" border="0"/></a>&nbsp; <a href="#" onClick="collapse_change(4)">图文管理</a></td>
      </tr>
      <tbody id="menu_4" style="display:none">
        <tr class="leftmenutd">
          <td><table border="0" cellspacing="0" cellpadding="0" class="leftmenuinfo">
              <tr >
                <td><a href="add_products.asp" target="main">添加图文</a></td>
              </tr>
              <tr >
                <td><a href="admin_products.asp" target="main">管理图文</a></td>
              </tr>
              <tr >
                <td><a href="admin_products_Bigclass.asp" target="main">一级分类</a></td>
              </tr>
              <tr >
                <td><a href="admin_products_Smallclass.asp" target="main">二级分类</a></td>
              </tr>
              <tr style="display:none">
                <td><a href="admin_quyu.asp" target="main">专题管理</a></td>
              </tr>
              
          </table></td>
        </tr>
      </tbody>
    </table>
    <table width="146" border="0" cellspacing="0" align="center" cellpadding="0" class="leftmenulist" style="margin-bottom: 5px; display:none">
      <tr class="leftmenutext">
        <td><a href="#" onClick="collapse_change(5)"><img id="menuimg_5" src="images/menu_add.gif" border="0"/></a>&nbsp;<a href="#" onClick="collapse_change(5)">下载管理</a></td>
      </tr>
      <tbody id="menu_5" style="display:none">
        <tr class="leftmenutd">
          <td><table border="0" cellspacing="0" cellpadding="0" class="leftmenuinfo">
              <tr >
                <td><a href="add_download.asp" target="main">添加下载</a></td>
              </tr>
              <tr >
                <td><a href="admin_download.asp" target="main">管理下载</a></td>
              </tr>
              <tr >
                <td><a href="admin_download_fl.asp" target="main">下载分类</a></td>
              </tr>
          </table></td>
        </tr>
      </tbody>
    </table>
    <table width="146" border="0" cellspacing="0" align="center" cellpadding="0" class="leftmenulist" style="margin-bottom: 5px;display:none">
      <tr class="leftmenutext">
        <td><a href="#" onClick="collapse_change(6)"><img id="menuimg_6" src="images/menu_add.gif" border="0"/></a>&nbsp;<a href="#" onClick="collapse_change(6)">会员管理</a></td>
      </tr>
      <tbody id="menu_6" style="display:none">
        <tr class="leftmenutd">
          <td><table border="0" cellspacing="0" cellpadding="0" class="leftmenuinfo">
              <tr >
                <td><a href="admin_user.asp" target="main">会员管理</a></td>
              </tr>
              <tr >
                <td><a href="admin_orders.asp" target="main">订单管理</a></td>
              </tr>
              
              
          </table></td>
        </tr>
      </tbody>
    </table>
    <table width="146" border="0" cellspacing="0" align="center" cellpadding="0" class="leftmenulist" style="margin-bottom: 5px;">
      <tr class="leftmenutext">
        <td><a href="#" onClick="collapse_change(7)"><img src="images/menu_add.gif" alt="" border="0" id="menuimg_7"/></a>&nbsp;<a href="#" onClick="collapse_change(7)">广告管理</a></td>
      </tr>
      <tbody id="menu_7" style="display:none">
        <tr class="leftmenutd">
          <td><table border="0" cellspacing="0" cellpadding="0" class="leftmenuinfo">
              <tr style="display:none">
                <td><a href="add_ad.asp?id=1" target="main">添加广告</a></td>
              </tr>
              <tr style="display:none">
                <td><a href="admin_ad.asp"  target="main">管理广告</a></td>
              </tr>
              <tr >
                <td><a href="add_flash.asp"  target="main">增加幻灯</a></td>
              </tr>
              <tr >
                <td><a href="admin_flash.asp"  target="main">幻灯管理</a></td>
              </tr>
              
          </table></td>
        </tr>
      </tbody>
    </table>
    <table width="146" border="0" cellspacing="0" align="center" cellpadding="0" class="leftmenulist" style="margin-bottom: 5px;">
      <tr class="leftmenutext">
        <td><a href="#" onClick="collapse_change(8)"><img src="images/menu_add.gif" alt="" border="0" id="menuimg_8"/></a>&nbsp;<a href="#" onClick="collapse_change(8)">招聘管理</a></td>
      </tr>
      <tbody id="menu_8" style="display:none">
        <tr class="leftmenutd">
          <td><table border="0" cellspacing="0" cellpadding="0" class="leftmenuinfo">
              <tr >
                <td><a href="add_job.asp" target="main">发布招聘</a></td>
              </tr>
              <tr >
                <td><a href="admin_job.asp" target="main">职位管理</a></td>
              </tr>
              <tr >
                <td><a href="admin_Resume.asp" target="main">查看简历</a></td>
              </tr>
          </table></td>
        </tr>
      </tbody>
    </table>
    <table width="146" border="0" cellspacing="0" align="center" cellpadding="0" class="leftmenulist" style="margin-bottom: 5px; display:none">
      <tr class="leftmenutext">
        <td><a href="#" onClick="collapse_change(9)"><img src="images/menu_add.gif" alt="" border="0" id="menuimg_9"/></a>&nbsp;<a href="#" onClick="collapse_change(9)">友情链接</a></td>
      </tr>
      <tbody id="menu_9" style="display:none">
        <tr class="leftmenutd">
          <td><table border="0" cellspacing="0" cellpadding="0" class="leftmenuinfo">
              <tr >
                <td><a href="add_link.asp" target="main">增加友情链接</a></td>
              </tr>
              
              <tr >
                <td><a href="admin_link_txt.asp" target="main">管理链接 [文字]</a></td>
              </tr>
              <tr >
                <td><a href="admin_link_img.asp" target="main">管理链接 [图片]</a></td>
            </tr>
          </table></td>
        </tr>
      </tbody>
    </table>
    <table width="146" border="0" cellspacing="0" align="center" cellpadding="0" class="leftmenulist" style="margin-bottom: 5px;">
      <tr class="leftmenutext">
        <td><a href="#" onClick="collapse_change(10)"><img src="images/menu_add.gif" alt="" border="0" id="menuimg_10"/></a>&nbsp;<a href="#" onClick="collapse_change(10)">其它管理</a></td>
      </tr>
      <tbody id="menu_10" style="display:none">
        <tr class="leftmenutd">
          <td><table border="0" cellspacing="0" cellpadding="0" class="leftmenuinfo">
              <tr >
                <td><a href="admin_ly.asp" target="main">留言管理</a></td>
              </tr>
          </table></td>
        </tr>
      </tbody>
    </table>
</div>
<table width="146" border="0" cellspacing="0" align="center" cellpadding="0" class="leftmenulist">
	<tr class="leftmenutext">
		<td><div style="margin-left:48px;"><a href="LoginOut.asp" target="_parent">退出</a></div></td>
	</tr>
</table>
</body>
</html>
//搜索栏
// $('#myTab').hide();
var seachlm = "";
seachlm += '<div class="container">';
seachlm +=
  '<div class="pull-right phone_hide" id="lianmeng"><a class="btn redBtn"><img src="images/header/dangqi.png"> 全国党建网站联盟</a></div>';
seachlm += '<div class="pull-right" style="display: flex;padding-right:0">';
seachlm +=
  '<a class="btn redBtn" href="https://www.ljxfw.gov.cn/hljuaa/login/"  target="_blank"><img src="images/header/dangqi.png"> 党建云平台</a>';
seachlm +=
  '<a class="btn greenBtn" data-toggle="modal" data-target="#myModal1"><img src="images/header/weixin.png"> 微信公众号</a>';
seachlm +=
  '<a class="btn blueBtn" href="http://www.ljxfw.gov.cn/ljxfw_manager/public/index.php/admin/open/login.html" target="_blank"><img src="images/header/xinxi.png"> <span>信息资源报送入口</span></a>';
seachlm +=
  '<div class="dorp_con"><a href="#">网站用户登录</a><a href="LongjiangNews.html">网站管理员</a>';
seachlm +=
  '<a href="#">市县信息员</a><a href="#">处室信息员</a><a href="#">专题管理员</a>';
seachlm += "</div></div></div>";
$(".miniNav").empty();
$(".miniNav").append(seachlm);
// 搜索遗到导航栏上
var sousuoHtml = "";
sousuoHtml += '<form class="phone_hide" role="form">';
sousuoHtml +=
  '<div class="input-group"><input type="text" class="form-control" id="search_keywords">';
sousuoHtml +=
  '<span class="input-group-btn"><button class="btn btn-sousuo" type="button" onclick="take_search()"><img src="images/header/sousuo.png">';
sousuoHtml += "</button></span></div></form>";
$("#sousuoHtml").append(sousuoHtml);

var modelApp =
  '<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">' +
  '<div class="modal-dialog"><div class="modal-content"><div class="modal-header">' +
  '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
  '<h4 class="modal-title" id="myModalLabel">龙江先锋网APP下载</h4></div>' +
  '<div class="modal-body" style="text-align: center;">扫描下方二维码<br />下载《龙江先锋网APP》<br /><img src="' +
  common.webUrl +
  'images/index/app_qrcode.png"></div>' +
  '<div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">关闭' +
  "</button></div></div></div></div>" +
  '<div class="modal fade" id="myModal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">' +
  '<div class="modal-dialog"><div class="modal-content"><div class="modal-header">' +
  '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
  '<h4 class="modal-title" id="myModalLabel">龙江先锋网微信公众平台</h4></div><div class="modal-body">扫描下方二维码<br />' +
  '关注龙江先锋网微信公众平台<br /><img src="' +
  common.webUrl +
  'images/index/erweima.jpg"></div><div class="modal-footer">' +
  '<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button></div></div></div></div>' +
  '<div class="modal fade" id="weChatxin" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">' +
  '<div class="modal-dialog"><div class="modal-content"><div class="modal-header">' +
  '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
  '<h4 class="modal-title" id="myModalLabel">共产党员微信订阅号</h4></div><div class="modal-body">扫描下方二维码<br />' +
  '共产党员微信订阅号<br /><img src="' +
  common.webUrl +
  'images/index/weixin.png"></div><div class="modal-footer">' +
  '<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button></div></div></div></div>' +
  '<div class="modal fade" id="yixin" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">' +
  '<div class="modal-dialog"><div class="modal-content"><div class="modal-header">' +
  '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
  '<h4 class="modal-title" id="myModalLabel">共产党员易信订阅号</h4></div><div class="modal-body">扫描下方二维码<br />' +
  '关注共产党员易信订阅号<br /><img src="' +
  common.webUrl +
  'images/index/yixin.png"></div><div class="modal-footer">' +
  '<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button></div></div></div></div>';

$("#footer").after(modelApp);

// 导航
    common.ajaxUtil(
      common.apiUrl + "/nodeListAPI/getInfoClass",
      {},
      function (data) {
        $("#daohang").html("");
        $("#daohang").append(
          '<li class="">' +
            '<a href="' +
            common.webUrl +
            'index.html">先锋首页</a>' +
            "</li>"
        );
        if (
          data != null &&
          data != undefined &&
          data != "" &&
          data.length != 0
        ) {
          for (var i = 0; i < data.length; i++) {
            var temp = "";
            temp += '<li class="dropdown">';

            // if (data[i].infoclassId == commonParams.importNew) {// 要问聚焦
            // 	temp += '<a href="' + common.webUrl + 'HighRiseVoice.html?pid='+data[i].infoclassId+'&sid=null" target="_blank">'+data[i].className+'</a>';
            // } else if (data[i].infoclassId == commonParams.gardenPlot) {// 组工园地
            // 	temp += '<a href="' + common.webUrl + 'organizationGarden.html?pid='+data[i].infoclassId+'&sid=null" target="_blank">' + data[i].className + '</a>';
            // } else if (data[i].infoclassId == commonParams.fieldVision) {// 远教视界
            // 	temp += '<a href="' + common.webUrl + 'middleManagement/index.html?pid='+data[i].infoclassId+'&sid='+data[i].infoclassId+'" target="_blank">'+data[i].className+'</a>';
            // } else if (data[i].infoclassId == commonParams.stone) {// 他山之石
            // 	temp += '<a href="javascript:void(0);" style="cursor: default;">'+data[i].className+'</a>';
            // }else if (data[i].infoclassId == commonParams.cadresWindow) {// 干部之窗
            // 	temp += '<a href="' + common.webUrl + 'generalListPage.html?pid='+data[i].infoclassId+'&sid='+ commonParams.CadreSynthesis +'" target="_blank">'+data[i].className+'</a>';
            // }else if (data[i].infoclassId == commonParams.law) {// 政策法规
            // 		temp += '<a href="' + data[i].linkUrl + '" target="_blank">' + data[i].className + '</a>';
            // 	}

            //  else {
            // 	temp += '<a href="' + common.webUrl + 'generalListPage.html?pid='+data[i].infoclassId+'&sid=null" target="_blank">'+data[i].className+'</a>';
            // }
            // 以下判断是第一级导航  ****开始
            if (data[i].infoclassId == commonParams.importNew) {// importNew == 要问聚焦
              temp +=
                '<a href="' +
                common.webUrl +
                "HighRiseVoice.html?pid=" +
                data[i].infoclassId +
                '&sid=null" target="_blank">' +
                data[i].className +
                "</a>";
            } else if (
              data[i].infoclassId == "70DA5ED8171DB81CEF66F21AEEB71D69" || data[i].infoclassId == "6005516FEB694B72F799BBDD8752EC12"
            ) {// 能力作风建设 == 直接跳走 生产得是70DA5ED8171DB81CEF66F21AEEB71D69 测试环境是6005516FEB694B72F799BBDD8752EC12
              temp +=
                '<a href="' +
                data[i].linkUrl +
                '" target="_blank">' +
                data[i].className +
                "</a>";
            } else if (
              data[i].infoclassId == "270FF5D280F6BE040E1DCD7D5CD3E8EE") {
              // 党员教育 == 第一级不点击 二级导航点击
              temp +=
                '<a href="javascript:void(0);" style="cursor: default;">' +
                data[i].className +
                "</a>";
            } else {
              temp +=
                '<a href="' +
                common.webUrl +
                "generalListPage.html?pid=" +
                data[i].infoclassId +
                '&sid=null" target="_blank">' +
                data[i].className +
                "</a>";
            }
             // 以下判断是第一级导航  ****结束
            // 以下二级导航 ***开始
            var childData = data[i].childInfoClass;
            if(childData.length !=0){//这块做一下判断，如果没有值 就不加dropdown-menu样式，否则会多出2像素边框
              temp += '<ul class="dropdown-menu">';
            }else{
              temp += '<ul>';
            }
            for (var j = 0; j < childData.length; j++) {
              temp += '<li class="">';
              if (data[i].infoclassId == commonParams.importNew) {// 要问聚焦 --中央声音、龙江要闻、部领导活动、通知公告
                temp +=
                  '<a href="' +
                  common.webUrl +
                  "HighRiseVoice.html?pid=" +
                  data[i].infoclassId +
                  "&sid=" +
                  childData[j].infoclassId +
                  '" target="_blank">' +
                  childData[j].className +
                  "</a>";
              } else if (data[i].infoclassId == commonParams.gardenPlot) {// 组工动态
                if (
                  childData[j].infoclassId == "99EB4E5AAF0A416E7E035576891A5FEC"
                ) {//人才天地 --跳走外链
                  temp +=
                    '<a href="' +
                    childData[j].linkUrl +
                    '" target="_blank">' +
                    childData[j].className +
                    "</a>";
                } else {//机关建设、党建纵横、干部之窗、公务员在线
                  temp +=
                    '<a href="' +
                    common.webUrl +
                    "generalListPage.html?pid=" +
                    data[i].infoclassId +
                    "&sid=" +
                    childData[j].infoclassId +
                    '" target="_blank">' +
                    childData[j].className +
                    "</a>";
                }
              } else if (data[i].infoclassId == commonParams.fieldVision) {
                //远教视界
                if (
                  childData[j].infoclassId == commonParams.farEduTrends ||
                  childData[j].infoclassId == commonParams.trainArrange
                ) {
                  //远教动态，培训安排
                  temp +=
                    '<a href="' +
                    common.webUrl +
                    "middleManagement/farDynamic.html?pid=" +
                    data[i].infoclassId +
                    "&sid=" +
                    childData[j].infoclassId +
                    '" target="_blank">' +
                    childData[j].className +
                    "</a>";
                } else {
                  if (
                    childData[j].linkUrl == "" ||
                    childData[j].linkUrl == null ||
                    childData[j].linkUrl == undefined
                  ) {
                    temp +=
                      '<a href="' +
                      common.webUrl +
                      "videoList.html?pid=" +
                      childData[j].infoclassId +
                      "&sid=" +
                      childData[j].infoclassId +
                      '" target="_blank">' +
                      childData[j].className +
                      "</a>";
                  } else {
                    temp +=
                      '<a href="' +
                      childData[j].linkUrl +
                      '" target="_blank">' +
                      childData[j].className +
                      "</a>";
                  }
                }
              } else {
                if (
                  childData[j].linkUrl == "" ||
                  childData[j].linkUrl == null ||
                  childData[j].linkUrl == undefined
                ) {
                  if (childData[j].infoclassId =="F8A9D329E647A68DE371B33B7D6261B6") {
                    //视频直播系统  点击要弹窗
                    temp +=
                      '<a onclick=callbackdaohang.layeralert() href="javascript:void(0);">' +
                      childData[j].className +
                      "</a>";
                  } else {
                    temp +=
                      '<a href="' +
                      common.webUrl +
                      "generalListPage.html?pid=" +
                      data[i].infoclassId +
                      "&sid=" +
                      childData[j].infoclassId +
                      '" target="_blank">' +
                      childData[j].className +
                      "</a>";
                  }
                } else {
                  temp +=
                    '<a href="' +
                    childData[j].linkUrl +
                    '" target="_blank">' +
                    childData[j].className +
                    "</a>";
                }
              }

              temp += "</li>";
            }
            // 以上二级导航 ***结束

            temp += "</ul>";
            temp += "</li>";
            $("#daohang").append(temp);
          }
        }
        $(".dropdown").mouseover(function () {
          $(this).addClass("open");
        });

        $(".dropdown").mouseleave(function () {
          $(this).removeClass("open");
        });

        // 面包屑导航
    var parentNodeId = common.getUrlParams("pid"); //获取父级栏目id
    var nodeId = common.getUrlParams("sid"); //获取选中的子栏目id
    var params = {};
    if (nodeId == "null" || nodeId == null || nodeId == "") {
      params.parentNodeId = parentNodeId;
    } else if (nodeId.indexOf(",") >= 0) {
      params.nodeId = commonParams.gardenPlot;
    } else {
      params.nodeId = nodeId;
    }

        // 面包屑
        common.ajaxUtil(
          common.fullModel + "/nodeListAPI/getCrumbsTitle",
          params,
          function (data) {
            if ($("div").hasClass("position")) {
              var html = "";
              html +=
                '<li>当前位置：</li><li><a href="' +
                common.webUrl +
                'index.html" target="_blank">首页</a></li>';
              for (var i = data.length - 1; i >= 0; i--) {
                html += '<li><a href="#">' + data[i].className + "</a></li>";
              }

              for (var h = 0; h < $("#daohang > li").length; h++) {
                for (var i = data.length - 1; i >= 0; i--) {
                  if (
                    data[i].className ==
                    $("#daohang > li:eq(" + h + ") > a").text()
                  ) {
                    $("#daohang > li:eq(" + h + ")")
                      .addClass("active")
                      .siblings("li")
                      .removeClass("active");
                  }
                }
              }
              $(".position ul").empty().append(html);
              if ($(".position ul li").text().indexOf("远教视界") != -1) {
                $(".position ul li:nth-child(3) a").attr({
                  href:
                    common.webUrl +
                    "middleManagement/index.html?pid=" +
                    commonParams.fieldVision +
                    "&sid=" +
                    commonParams.fieldVision,
                  target: "_blank",
                });
              }
              if ($(".position ul li").text().indexOf("中管干部") != -1) {
                $(".position ul li:nth-child(3) a").attr({
                  href:
                    common.webUrl +
                    "generalListPage.html?htmlPage=generalListPage&pid=" +
                    commonParams.cadresWindow +
                    "&sid=null",
                  target: "_blank",
                });
              }
            } else {
              var name = common.getUrlParams("name");
              if (name == "" || name == null) {
                $("#daohang>li:first-child")
                  .addClass("active")
                  .siblings("li")
                  .removeClass("active");
                $(".photo_ li").removeClass("active");
              }
            }
          },
          "GET",
          true
        );
        //
      }
    );

	
$(
  function () {
    // 面包屑导航
    var parentNodeId = common.getUrlParams("pid"); //获取父级栏目id
    var nodeId = common.getUrlParams("sid"); //获取选中的子栏目id
    var params = {};
    if (nodeId == "null" || nodeId == null || nodeId == "") {
      params.parentNodeId = parentNodeId;
    } else if (nodeId.indexOf(",") >= 0) {
      params.nodeId = commonParams.gardenPlot;
    } else {
      params.nodeId = nodeId;
    }

    
    // 底部footer友情链接
    $("#footer").html("");
    var footerHtml = "";
    footerHtml +=
      '<div class="friendLink"><div class="container"><div class="row">';
    footerHtml +=
      '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-3"><div class="pull-left linkName"></div></div>';
    footerHtml +=
      '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-9"><div class="pull-right linkA"><a href="javascript:;" class="active">&nbsp;友情链接</a></div></div>';
    footerHtml +=
      '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 friendLinkContent tab-content" id="friendLinkTabContent"><div class="tab-pane fade active in" id="friendLink1"></div><div class="tab-pane fade" id="friendLink2"></div><div class="tab-pane fade" id="friendLink3"></div>';
    footerHtml += "</div></div></div>";
    footerHtml += '<div class="copyright"><div>';
    //
    //footerHtml +='<script type="text/javascript">document.write(unescape("%3Cspan id=\'_ideConac\' %3E%3C/span%3E%3Cscript src=\'https://dcs.conac.cn/js/10/000/0000/60433879/CA100000000604338790002.js\' type=\'text/javascript\'%3E%3C/script%3E"));</script>'
    //	footerHtml +='<a href="http://bszs.conac.cn/sitename?method=show&amp;id=2A5E7DD528076C6FE053012819ACB9D1" target="_blank"><img style="width: 70px;" id="imgConac" vspace="0" hspace="0" border="0" src="https://www.ljxfw.gov.cn/ljxfwWeb/images/red.png" data-bd-imgshare-binded="1"></a>'
    footerHtml +=
      '</div><div><span id="copyright"></span><br /><span id="support"></span><span id="record" style="cursor: pointer;" onclick="window.open(\'https://beian.miit.gov.cn/#/Integrated/index\')"></span></div></div>';
    footerHtml += "<span id='_ideConac'></span>";
    $("#footer").append(footerHtml);
    $("#friendLink1").html("");
    $("#friendLink2").html("");
    $("#friendLink3").html("");

    var cnzz_s_tag = document.createElement("script");

    cnzz_s_tag.type = "text/javascript";

    //cnzz_s_tag.src ='https://dcs.conac.cn/js/10/000/0000/60433879/CA100000000604338790002.js';
    cnzz_s_tag.src =
      "https://www.ljxfw.gov.cn/ljxfwWeb/js/CA100000000604338790002.js";

    var root_s =
      document.getElementsByTagName("script")[
        document.getElementsByTagName("script").length - 1
      ];
    root_s.parentNode.insertBefore(cnzz_s_tag, root_s);

    var friendLink1 = function (data) {
      $("#friendLink1").append(getNodeContent(data));
    };
    var friendLink2 = function (data) {
      $("#friendLink2").append(getNodeContent(data));
    };
    var friendLink3 = function (data) {
      $("#friendLink3").append(getNodeContent(data));
    };
    function getNodeContent(data) {
      var itemHtml = "";
      if (data != null && data != undefined && data != "" && data.length != 0) {
        for (var i = 0; i < data.length; i++) {
          itemHtml +=
            '<a href="' +
            data[i].link_url +
            '" target="_blank">' +
            data[i].title +
            "</a>";
        }
      }
      return itemHtml;
    }
    common.ajaxUtil(
      common.fullModel + "/friendlinkListAPI/getFriendlinkListByType?",
      { type: 1 },
      friendLink1,
      "GET",
      true
    );
    common.ajaxUtil(
      common.fullModel + "/friendlinkListAPI/getFriendlinkListByType?",
      { type: 2 },
      friendLink2,
      "GET",
      true
    );
    common.ajaxUtil(
      common.fullModel + "/friendlinkListAPI/getFriendlinkListByType?",
      { type: 3 },
      friendLink3,
      "GET",
      true
    );
    // 友情链接
    $("#friendLinkTab a").click(function (e) {
      var i = $(this).index();
      $(this).toggleClass("active").siblings().removeClass("active");
      $("#friendLinkTabContent .tab-pane")
        .eq(i)
        .toggleClass("active in")
        .siblings()
        .removeClass("active in");
    });

    var copyright = function (data) {
      if (data != null && data != undefined && data != "" && data.length != 0) {
        var widthB = "";
        for (var i = 0; i < data.length; i++) {
          if (data[i].varname == "版权信息") {
            $("#copyright").text(data[i].varvalue);

            widthB = $("#copyright").width();
            var bb = widthB / 2 + 85;
            $("#_ideConac").css({
              "margin-left": "calc(50% - " + bb + "px)",
              "margin-top": "-114px",
              display: "block",
            });
          } else if (data[i].varname == "技术支持") {
            $("#support").text(data[i].varvalue);
          } else if (data[i].varname == "备案号") {
            $("#record").text(data[i].varvalue);
          }
        }
        //获取标签宽度
      }
    };
    //webConfig 版权信息
    common.ajaxUtil(
      common.fullModel + "/friendlinkListAPI/getWebconfig?",
      { name: "版权信息,技术支持,备案号" },
      copyright,
      "GET",
      true
    );
    //顶部轮播图
    //$('#topBanner').html('');
    setTimeout(function () {
      // 这里的代码会在5秒后执行
      //   console.log("5秒过去了！");

      common.ajaxUtil(
        common.fullModel + "/friendlinkListAPI/getBanner",
        { siteId: "0" },
        function (data) {
          if (
            data != null &&
            data != undefined &&
            data != "" &&
            data.length > 0
          ) {
            $("#topBanner").html("");
            var topBanner = "";
            for (var i = 0; i < data.length; i++) {
              topBanner +=
                '<li><img src="' + common.imgUrl + data[i].picUrl + '" /></li>';
            }
            $("#topBanner").html(topBanner);
          }
          $("#topBanner li").show();
          var count = $("#topBanner li").length;
          if (count > 1) {
            $(".flash").imgtransition({
              speed: 5000, //图片切换时间
              animate: 1000, //图片切换过渡时间
            });
          }
        }
      );
    }, 5000);
  },
  "get",
  true
);

// 监测ie8
var DEFAULT_VERSION = 8.0;
var ua = navigator.userAgent.toLowerCase();
var isIE = ua.indexOf("msie") > -1;
var safariVersion;
if (isIE) {
  safariVersion = ua.match(/msie ([\d.]+)/)[1];
}
if (safariVersion <= DEFAULT_VERSION) {
  alert(
    "系统检测到您正在使用ie8以下内核的浏览器，不能实现完美体验，请更换或升级浏览器访问！"
  );
}
function take_search() {
  var search_keywords = $("#search_keywords").val();
  keyWord = encodeURI(encodeURI(search_keywords.trim()));
  if ("" != search_keywords) {
    // 		  location.href=common.fullModel+ '/searchList.html?name='+search_keywords;
    location.href = common.webUrl + "searchList.html?name=" + keyWord;
  } else {
    layer.msg("输入搜索条件不得为空，请核实");
  }
}
$("#search_keywords").bind("keydown", function (event) {
  if (event.keyCode == 13) {
    take_search();
    return false;
  }
});

//一下为 banner 轮播切换插件 开始
// $(document).ready(function() {
// 	$('.flash').imgtransition({
// 		speed: 3000, //图片切换时间
// 		animate: 1000 //图片切换过渡时间
// 	});
// });

//图片简单切换调用语句 imgtransition({speed: 3000, animate: 1000});
var fnsetTimeout;
var thisSetTimeout;
$.fn.imgtransition = function (o) {
  var defaults = {
    speed: 5000,
    animate: 1000,
  };
  o = $.extend(defaults, o);
  return this.each(function () {
    var arr_e = $("li", this);
    arr_e.css({
      position: "absolute",
    });
    arr_e.parent().css({
      margin: "0",
      padding: "0",
      "list-style": "none",
      overflow: "hidden",
    });
    function shownext() {
      var active = arr_e.filter(".active").length
        ? arr_e.filter(".active")
        : arr_e.first();
      var next = active.next().length ? active.next() : arr_e.first();
      active.css({
        "z-index": 9,
      });
      next
        .css({
          opacity: 0.0,
          "z-index": 10,
        })
        .addClass("active")
        .animate(
          {
            opacity: 1.0,
          },
          o.animate,
          function () {
            active.removeClass("active").css({
              "z-index": 8,
            });
          }
        );
    }

    arr_e.first().css({
      "z-index": 9,
    });

    //		setInterval(function() {
    //			shownext();
    //		}, o.speed);

    fnsetTimeout = function () {
      var thisSetTimeout = setTimeout(function () {
        shownext();
        this.fnsetTimeout();
        clearInterval(thisSetTimeout);
      }, o.speed);
    };

    setTimeout(function () {
      fnsetTimeout();
    }, 1000);
  });
};
//一下为 banner 轮播切换插件 结束

// 全国党建联盟
$(".header").before(
  '<iframe class="lianmene_iframe" style="position:absolute;top:0;height:60px;display:none" width="100%" frameborder="0" scrolling="no" src="https://dwlm.12371.cn/daohang/index.shtml"></iframe>'
);
$("#lianmeng").on("click", function () {
  $(".lianmene_iframe").slideToggle(500);
  if ($("body").hasClass("lianmeng")) {
    $("body").addClass("lianmeng_hide");
  } else {
    $("body").removeClass("lianmeng_hide");
  }
  $("body").toggleClass("lianmeng");
});

//先锋网logo字样
common.ajaxUtil(
  common.fullModel + "/friendlinkListAPI/getLogoStatus",
  { siteId: "0" },
  function (data) {
    if (data == null || data.status == "1") {
      $("#logoImg").html('<img src="images/index/logo.png">');
      $("#logoImg2").html('<img src="../images/index/logo.png">');
    }
  }
);

var callbackdaohang = {
  layeralert: function () {
    // 视频直播系统
    common.ajaxUtil(
      common.fullModel + "/friendlinkListAPI/getValidVideoLiveInfo",
      {},
      function (data) {
        if (data.length >= 1) {
          var html =
            '<div class="modal fade" id="zhibo" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">' +
            '<div class="modal-dialog"><div class="modal-content" style="max-height:500px;overflow-y:auto"><div class="modal-header">' +
            '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
            '<h4 class="modal-title" id="myModalLabel">视频直播系统' +
            //					'<a href="https://www.ljxfw.gov.cn/ljxfwWeb/shouce.pdf" download="shouce" style="font-size:16px;font-weight: 600;float: right;display: inline-block;margin-right: 20px;">查看操作手册</a>'+
            '</h4></div><div class="modal-body clearfix">';
          //					'<div class="col-sm-12 videoLiveList clearfix"><span>全省第二批主题教育推进会议</span><a href="http://live.vhall.com/108628108" class="btn btn-info btn-sm" target="_blank" >点击进入</a></div>'
          //					'<div class="col-sm-12 videoLiveList clearfix"><span>全省国有企业党支部书记培训</span><a href="http://live.vhall.com/773043752" class="btn btn-info btn-sm"  target="_blank">点击进入</a></div>'+
          for (var i = 0; i < data.length; i++) {
            html +=
              '<div class="col-sm-12 videoLiveList clearfix"><span>' +
              data[i].title +
              '</span><a href="' +
              data[i].link_url +
              '" class="btn btn-info btn-sm" target="_blank" >点击进入</a></div>';
          }
          html +=
            '</div><div class="modal-footer" style="text-align:center">' +
            '<a href="https://djypt.ljxfw.gov.cn/ljxfw_manager/public/upload/20220526/%E8%A7%86%E9%A2%91%E7%9B%B4%E6%92%AD%E7%94%B3%E8%AF%B7%E6%93%8D%E4%BD%9C%E6%89%8B%E5%86%8C.docx"  target="_blank" style="color:#337ab7;font-weight:600;height:30px;line-height:30px;font-size:16px;">视频直播申请手册 下载</a>' +
            "</div></div></div></div>";
          $("#footer").after(html);
          $("#zhibo").modal();
        } else {
          layer.alert("暂无直播", {
            icon: 0,
            shade: 0.5,
            title: "视频直播系统",
            content:
              '<div><p>暂无直播</p><p><a href="https://www.ljxfw.gov.cn/ljxfwWeb/shouce.pdf" target="_blank" download="shouce" style="font-size:16px;font-weight: 600;display: inline-block;margin-right: 20px;">查看操作手册</a></p></div>',
          });
        }
      }
    );
  },
};

/*
 * url-ajax请求地址，前缀自己需根据接口文档写在common.js中,不能更改common中任何配置
 * params-传回后端的参数
 * callback-回调方法
 * method-默认GET请求
 * sync-默认异步请求
 * filter-解决id是long型数据缺失问题-----common.ajaxDataFilter
 */
var callback = {
  hoverModel: function (tabId, contentId) {
    $("#" + tabId + " .tabHover").mousemove(function (e) {
      var i = $("#" + tabId + " .tabHover").index(this);
      $("#" + tabId + " .tabHover").removeClass("active");
      $(this).addClass("active");
      $("#" + contentId + " .tab-pane").removeClass("active in");
      $("#" + contentId + " .tab-pane")
        .eq(i)
        .addClass("active in");
    });
  },
  // 4.6 根据栏目获取文章列表
  getDefault: function (data, tabId, listHtml, detialsHtml, htmlPage) {
    var html = "";
    if (data == null || data == "" || data.length == 0) {
      html +=
        "<p style='text-align:center;'><img src='images/index/nodata.png' style='width:128px!important;height:82px;' /></p>";
      html += "<p style='text-align:center;font-size: 22px;'>暂无数据</p>";
    } else {
      for (var i = 0; i < data.length; i++) {
        if (
          data[i].linkurl == "" ||
          data[i].linkurl == null ||
          data[i].linkurl == undefined
        ) {
          html +=
            "<li><a href='" +
            detialsHtml +
            "?htmlPage=" +
            htmlPage +
            "&pid=" +
            (data[0].class_id == commonParams.cadresPublic
              ? commonParams.cadresPublic
              : data[i].parent_id) +
            "&sid=" +
            data[i].class_id +
            "&infoId=" +
            data[i].outside_id +
            "' target='_blank'>" +
            (data[i].simple_title == "" || data[i].simple_title == null
              ? common.filterHTMLTag(data[i].title)
              : common.filterHTMLTag(data[i].simple_title)) +
            "</a></li>";
        } else {
          html +=
            "<li><a href='" +
            data[i].linkurl +
            "' target='_blank'>" +
            (data[i].simple_title == "" || data[i].simple_title == null
              ? common.filterHTMLTag(data[i].title)
              : common.filterHTMLTag(data[i].simple_title)) +
            "</a></li>";
        }
      }
      //组工动态、干部公示 ---标题
      if(tabId == 'notice'){//通知公告走这
        $("#" + tabId + "_title").attr({
          href:
            listHtml +
            "?pid=" +
            data[0].parent_id +
            "&sid=" +
            data[0].class_id,
          target: "_blank",
        });
      }else{
        $("#" + tabId + "_title").attr({
          href:
            listHtml +
            "?pid=" +
            data[0].class_id +
            "&sid=" +
            data[0].class_id,
          target: "_blank",
        });
      }
      
      $("#" + tabId + "_title").css({ color: "#fff" });
    }
    return html;
  },
  // 4.7根据栏目获取子栏目文章列表 data需处理的数据，tabId选项卡容器Id，contentId选项卡内容容器Id，flag特殊栏目分类，listHtml需跳转列表页，detials需跳转详情页
  getNodeTab: function (
    data,
    tabId,
    contentId,
    flag,
    listHtml,
    detialsHtml,
    htmlPage
  ) {
    var html = "";
	
    if (data != null && data != undefined && data != "" && data.length != 0) {
      for (var i = 0; i < data.length; i++) {
        if (flag == "fieldVision") {
          // 远教视界==改成先锋视频
          if (
            data[i].infoclassId == commonParams.poineerVideo ||
            data[i].infoclassId == commonParams.stars
          ) {
            if (
              data[i].linkurl == "" ||
              data[i].linkurl == null ||
              data[i].linkurl == undefined
            ) {
              html +=
                "<li class='tabHover " +
                (i == 0 ? "active" : "") +
                "'><a href='videoList.html?pid=" +
                data[i].infoclassId +
                "&sid=" +
                data[i].infoclassId +
                "' target='_blank'><img onerror=common.imageError(this,'images/index/noicon.png') src='" +
                (data[i].imageUrl == null || data[i].imageUrl == ""
                  ? "images/index/noicon.png"
                  : common.tabUrl + data[i].imageUrl) +
                "'><br /><span title='" +
                data[i].className +
                "'>" +
                data[i].className +
                "</span></a></li>";
            } else {
              html +=
                "<li class='tabHover " +
                (i == 0 ? "active" : "") +
                "'><a href='" +
                data[i].linkurl +
                "' target='_blank'><img onerror=common.imageError(this,'images/index/noicon.png') src='" +
                (data[i].imageUrl == null || data[i].imageUrl == ""
                  ? "images/index/noicon.png"
                  : common.tabUrl + data[i].imageUrl) +
                "'><br /><span title='" +
                data[i].className +
                "'>" +
                data[i].className +
                "</span></a></li>";
            }
          } else {
            if (
              data[i].linkurl == "" ||
              data[i].linkurl == null ||
              data[i].linkurl == undefined
            ) {
              html +=
                "<li class='tabHover " +
                (i == 0 ? "active" : "") +
                "'><a href='" +
                listHtml +
                "?pid=" +
                data[i].infoclassId +
                "&sid=" +
                data[i].infoclassId +
                "' target='_blank'><img onerror=common.imageError(this,'images/index/noicon.png') src='" +
                (data[i].imageUrl == null || data[i].imageUrl == ""
                  ? "images/index/noicon.png"
                  : common.tempUrlTest + data[i].imageUrl) +
                "'><br /><span title='" +
                data[i].className +
                "'>" +
                data[i].className +
                "</span></a></li>";
            } else {
              html +=
                "<li class='tabHover " +
                (i == 0 ? "active" : "") +
                "'><a href='" +
                data[i].linkurl +
                "' target='_blank'><img onerror=common.imageError(this,'images/index/noicon.png') src='" +
                (data[i].imageUrl == null || data[i].imageUrl == ""
                  ? "images/index/noicon.png"
                  : common.tempUrlTest + data[i].imageUrl) +
                "'><br /><span title='" +
                data[i].className +
                "'>" +
                data[i].className +
                "</span></a></li>";
            }
          }

          if (data.length > 5) {
            data = data.slice(0, 5);
          }
          if (data.length == i + 1) {
            //html += "<li><a href='http://hlj.ljxfw.gov.cn/index.php/Dydj/Index/index.html' target='_blank'><img src='images/index/home_titile_bg8_icon4.png'><br /><span>远教杂志</span></a></li>";
          }

          //新增先锋视频三级接口
          var newVideo = {
            siteId: commonParams.siteId,
            pageNo: 1,
            pageSize: commonParams.pageSize_seven,
          };
          //nodeId不能用，分隔传；所以调了5次
          if (data[i].infoclassId == commonParams.ourModel) {
            newVideo.nodeId = commonParams.ourModel;
            //主题教育
            var themeData = [];
            var callbackTheme = function (res) {
              themeData = res.result;
            };
            common.ajaxUtil(
              common.fullModel + "/infoListAPI/getAllChildInfo",
              newVideo,
              callbackTheme,
              "GET",
              false
            );
            data[i].information = themeData;
          }
          //nodeId不能用，分隔传；所以调了4次
          if (data[i].infoclassId == commonParams.thematicEducation) {
            newVideo.nodeId = commonParams.thematicEducation;
            //主题教育
            var themeData = [];
            var callbackTheme = function (res) {
              themeData = res.result;
            };
            common.ajaxUtil(
              common.fullModel + "/infoListAPI/getAllChildInfo",
              newVideo,
              callbackTheme,
              "GET",
              false
            );
            data[i].information = themeData;
          }
          if (data[i].infoclassId == commonParams.observeExchange) {
            newVideo.nodeId = commonParams.observeExchange;
            //观摩交流
            var ExchangeData = [];
            var callbackTheme = function (res) {
              ExchangeData = res.result;
            };
            common.ajaxUtil(
              common.fullModel + "/infoListAPI/getAllChildInfo",
              newVideo,
              callbackTheme,
              "GET",
              false
            );
            data[i].information = ExchangeData;
          }
          if (data[i].infoclassId == commonParams.tVColumn) {
            newVideo.nodeId = commonParams.tVColumn;
            //电视专栏
            var tVData = [];
            var callbackTheme = function (res) {
              tVData = res.result;
            };
            common.ajaxUtil(
              common.fullModel + "/infoListAPI/getAllChildInfo",
              newVideo,
              callbackTheme,
              "GET",
              false
            );
            data[i].information = tVData;
          }
          if (data[i].infoclassId == commonParams.quality) {
            newVideo.nodeId = commonParams.quality;
            //全国精品
            var qualityData = [];
            var callbackTheme = function (res) {
              qualityData = res.result;
            };
            common.ajaxUtil(
              common.fullModel + "/infoListAPI/getAllChildInfo",
              newVideo,
              callbackTheme,
              "GET",
              false
            );
            data[i].information = qualityData;
          }

          $("#" + contentId).append(
            callback.getNodeContent(
              data[i].information,
              flag,
              detialsHtml,
              data[i].parentId,
              data[i].infoclassId,
              htmlPage
            )
          );
        } else if (flag == "cadresWindow") {
          // 干部之窗的中管干部没有详情列表直接跳页
          if (data[i].className != "中管干部") {
            if (
              data[i].linkurl == "" ||
              data[i].linkurl == null ||
              data[i].linkurl == undefined
            ) {
              html +=
                "<li class='tabHover " +
                (i == 0 ? "active" : "") +
                "'><a href='" +
                listHtml +
                "?pid=" +
                data[i].parentId +
                "&sid=" +
                data[i].infoclassId +
                "' target='_blank'><img onerror=common.imageError(this,'images/index/noicon.png') src='" +
                (data[i].imageUrl == null || data[i].imageUrl == ""
                  ? "images/index/noicon.png"
                  : common.tabUrl + data[i].imageUrl) +
                "'><br /><span title='" +
                data[i].className +
                "'>" +
                data[i].className +
                "</span></a></li>";
            } else {
              html +=
                "<li class='tabHover " +
                (i == 0 ? "active" : "") +
                "'><a href='" +
                data[i].linkurl +
                "' target='_blank'><img onerror=common.imageError(this,'images/index/noicon.png') src='" +
                (data[i].imageUrl == null || data[i].imageUrl == ""
                  ? "images/index/noicon.png"
                  : common.tabUrl + data[i].imageUrl) +
                "'><br /><span title='" +
                data[i].className +
                "'>" +
                data[i].className +
                "</span></a></li>";
            }

            $("#" + contentId).append(
              callback.getNodeContent(
                data[i].informationList.result,
                flag,
                detialsHtml,
                data[i].parentId,
                data[i].infoclassId,
                htmlPage
              )
            );
          } else {
            if (
              data[i].linkurl == "" ||
              data[i].linkurl == null ||
              data[i].linkurl == undefined
            ) {
              html +=
                "<li class='" +
                (i == 0 ? "active" : "") +
                "'><a href='middleManagement/resume.html?pid=" +
                data[i].parentId +
                "&sid=" +
                data[i].infoclassId +
                "' target='_blank'><img onerror=common.imageError(this,'images/index/noicon.png') src='" +
                (data[i].imageUrl == null || data[i].imageUrl == ""
                  ? "images/index/noicon.png"
                  : common.tabUrl + data[i].imageUrl) +
                "'><br /><span title='" +
                data[i].className +
                "'>" +
                data[i].className +
                "</span></a></li>";
            } else {
              html +=
                "<li class='" +
                (i == 0 ? "active" : "") +
                "'><a href='" +
                data[i].linkurl +
                "' target='_blank'><img onerror=common.imageError(this,'images/index/noicon.png') src='" +
                (data[i].imageUrl == null || data[i].imageUrl == ""
                  ? "images/index/noicon.png"
                  : common.tabUrl + data[i].imageUrl) +
                "'><br /><span title='" +
                data[i].className +
                "'>" +
                data[i].className +
                "</span></a></li>";
            }
          }
          //
        }
		else  if(flag=='law1'){
			
			if (
			  (data[i].linkurl == "" ||
			    data[i].linkurl == null ||
			    data[i].linkurl == undefined) &&
			  (data[i].linkUrl == "" ||
			    data[i].linkUrl == null ||
			    data[i].linkUrl == undefined)
			) {	
			  html +=
			    "<li class='tabHover " +
			    (i == 0 ? "active" : "") +
			    "'   ><a href='" +
			    listHtml +
			    "?pid=" +
			    data[i].parentId +
			    "&sid=" +
			    data[i].infoclassId +
			    "' target='_blank'><img onerror=common.imageError(this,'images/index/noicon.png') src='" +
			    (data[i].imageUrl == null || data[i].imageUrl == ""
			      ? "images/index/noicon.png"
			      : common.tabUrl + data[i].imageUrl) +
			    "'><br /><span title='" +
			    data[i].className +
			    "'>" +
			    data[i].className +
			    "</span></a></li>";
			} else {
			  html +=
			    "<li class='tabHover " +
			    (i == 0 ? "active" : "") +
			    "' style='margin-left:calc(50% - 60px);margin-bottom:1px;width:120px;text-align:center;'><a href='" +
			    (data[i].linkurl == "" ||
			    data[i].linkurl == null ||
			    data[i].linkurl == undefined
			      ? data[i].linkUrl
			      : data[i].linkurl) +
			    "' target='_blank'><img onerror=common.imageError(this,'images/index/noicon.png') src='" +
			    (data[i].imageUrl == null || data[i].imageUrl == ""
			      ? "images/index/noicon.png"
			      : common.tabUrl + data[i].imageUrl) +
			    "'><br /><span title='" +
			    data[i].className +
			    "'>" +
			    data[i].className +
			    "</span></a></li>";
			}
			
			$("#" + contentId).append(
			  callback.getNodeContent(
			    data[i].informationList.result,
			    flag,
			    detialsHtml,
			    data[i].parentId,
			    data[i].infoclassId,
			    htmlPage
			  )
			);
			
		}
		
        //				else if (flag == 'partyFreely') { // 党建纵横的党的生活没有详情列表直接跳页
        //					if (data[i].className != '党的生活') {
        //
        //						if (data[i].linkurl == '' || data[i].linkurl == null || data[i].linkurl == undefined) {
        //							html += "<li class='tabHover " + (i == 1 ? 'active' : '') + "'><a href='" + listHtml + "?pid=" + data[i].parentId + "&sid=" + data[i].infoclassId + "' target='_blank'><img onerror=common.imageError(this,'images/index/noicon.png') src='" + (data[i].imageUrl == null || data[i].imageUrl == "" ? "images/index/noicon.png" : common.tabUrl + data[i].imageUrl) + "'><br /><span title='" + data[i].className + "'>" + data[i].className + "</span></a></li>";
        //						} else {
        //							html += "<li class='tabHover " + (i == 1 ? 'active' : '') + "'><a href='" + data[i].linkurl + "' target='_blank'><img onerror=common.imageError(this,'images/index/noicon.png') src='" + (data[i].imageUrl == null || data[i].imageUrl == "" ? "images/index/noicon.png" : common.tabUrl + data[i].imageUrl) + "'><br /><span title='" + data[i].className + "'>" + data[i].className + "</span></a></li>";
        //						}
        //
        //						$('#' + contentId).append(callback.getNodeContent(data[i].informationList.result, flag, detialsHtml, data[i].parentId, data[i].infoclassId, htmlPage));
        //					} else {
        //						if (data[i].linkUrl == '' || data[i].linkUrl == null || data[i].linkUrl == undefined) {
        //							html += "<li class='" + (i == 1 ? 'active' : '') + "'><a href='middleManagement/resume.html?pid=" + data[i].parentId + "&sid=" + data[i].infoclassId + "' target='_blank'><img onerror=common.imageError(this,'images/index/noicon.png') src='" + (data[i].imageUrl == null || data[i].imageUrl == "" ? "images/index/noicon.png" : common.tabUrl + data[i].imageUrl) + "'><br /><span title='" + data[i].className + "'>" + data[i].className + "</span></a></li>";
        //						} else {
        //							html += "<li class='" + (i == 1 ? 'active' : '') + "'><a href='" + data[i].linkUrl + "' target='_blank'><img onerror=common.imageError(this,'images/index/noicon.png') src='" + (data[i].imageUrl == null || data[i].imageUrl == "" ? "images/index/noicon.png" : common.tabUrl + data[i].imageUrl) + "'><br /><span title='" + data[i].className + "'>" + data[i].className + "</span></a></li>";
        //
        //						}
        //
        //					}
        ////
        //				}
        else {
          // 剩余常规tab选项卡
          // linkUrl和linkurl问题：因数据库字段原因，名称区分了大小写，经过沟通，无法统一
          if (
            (data[i].linkurl == "" ||
              data[i].linkurl == null ||
              data[i].linkurl == undefined) &&
            (data[i].linkUrl == "" ||
              data[i].linkUrl == null ||
              data[i].linkUrl == undefined)
          ) {	
            html +=
              "<li class='tabHover " +
              (i == 0 ? "active" : "") +
              "'><a href='" +
              listHtml +
              "?pid=" +
              data[i].parentId +
              "&sid=" +
              data[i].infoclassId +
              "' target='_blank'><img onerror=common.imageError(this,'images/index/noicon.png') src='" +
              (data[i].imageUrl == null || data[i].imageUrl == ""
                ? "images/index/noicon.png"
                : common.tabUrl + data[i].imageUrl) +
              "'><br /><span title='" +
              data[i].className +
              "'>" +
              data[i].className +
              "</span></a></li>";
          } else {
            html +=
              "<li class='tabHover " +
              (i == 0 ? "active" : "") +
              "'><a href='" +
              (data[i].linkurl == "" ||
              data[i].linkurl == null ||
              data[i].linkurl == undefined
                ? data[i].linkUrl
                : data[i].linkurl) +
              "' target='_blank'><img onerror=common.imageError(this,'images/index/noicon.png') src='" +
              (data[i].imageUrl == null || data[i].imageUrl == ""
                ? "images/index/noicon.png"
                : common.tabUrl + data[i].imageUrl) +
              "'><br /><span title='" +
              data[i].className +
              "'>" +
              data[i].className +
              "</span></a></li>";
          }

          $("#" + contentId).append(
            callback.getNodeContent(
              data[i].informationList.result,
              flag,
              detialsHtml,
              data[i].parentId,
              data[i].infoclassId,
              htmlPage
            )
          );
        }
        if (i >= 4) {
          $("#" + tabId)
            .parent(".tabImages")
            .addClass("tabImagesFive");
          break; //跳出循环
        }
      }

      if (flag == "fieldVision") {
        // 远教视界
        $("#" + tabId + "_title").attr({
          href:
            "middleManagement/index.html?pid=" +
            data[0].parentId +
            "&sid=" +
            data[0].parentId +
            "",
          target: "_blank",
        });
      }else if(tabId=='zcfgTab'){
        $("#" + tabId + "_title").attr({
          href: data[0].linkUrl ,
          target: "_blank",
        });
      
      } else if(tabId=='zgydTab'){
        // 组工动态
        $("#" + tabId + "_title").attr({
          href:
          listHtml +
          "?pid=" +
          data[0].parentId +
          "&sid=" +
          data[0].infoclassId,
        target: "_blank",
        });
      }else {
        $("#" + tabId + "_title").attr({
          href: listHtml + "?pid=" + data[0].parentId + "&sid=null",
          target: "_blank",
        });
      }
      $("#" + tabId + "_title").css({ color: "#fff" });
      if (flag != "fieldVision") {
        if (data.length == 2) {
          $("#" + tabId)
            .parent(".tabImages")
            .addClass("tabImagesTwo");
        } else if (data.length == 3) {
          $("#" + tabId)
            .parent(".tabImages")
            .addClass("tabImagesThree");
        } else if (data.length == 4) {
          $("#" + tabId)
            .parent(".tabImages")
            .addClass("tabImagesFour");
        }
      } else {
        // 远教视界需要特殊处理,远教杂志是后拼进去的tab
        /*if (data.length + 1 == 2) {
					$('#' + tabId).parent('.tabImages').addClass('tabImagesTwo');
				} else if (data.length + 1 == 3) {
					$('#' + tabId).parent('.tabImages').addClass('tabImagesThree');
				} else if (data.length + 1 == 4) {
					$('#' + tabId).parent('.tabImages').addClass('tabImagesFour');
				}*/
        //				$('#' + tabId + ' li:last-child').after('<li><a href="https://www.ljxfw.gov.cn/index.php/Dydj/Index/index.html"><img src="images/index/home_titile_bg8_icon4.png"><br /><span>远教杂志</span></a></li>')
        // if (data.length == 2) {
        // 	$('#' + tabId).parent('.tabImages').addClass('tabImagesTwo');
        // } else if (data.length == 3) {
        // 	$('#' + tabId).parent('.tabImages').addClass('tabImagesThree');
        // } else if (data.length == 4) {
        // 	$('#' + tabId).parent('.tabImages').addClass('tabImagesFour');
        // }
      }
    }

    // 给tab和content增加选中状态
    $("#" + tabId + " li")
      .eq(0)
      .addClass("active");
    $("#" + contentId + " .tab-pane")
      .eq(0)
      .addClass("active in");
    return html;
  },
  getNodeContent: function (data, flag, detialsHtml, pid, sid, htmlPage) {
    var html = "<div class='tab-pane fade'>";

    if (data == undefined && flag == "partyFreely") {
      flag = "pratyLife";
      // 党的生活---列表重新套数据
      common.ajaxUtil(
        common.fullModel +
          "/infoListAPI/getDefaultInformationList?siteId=10BB45B071A14F94B20EF5456EA74CA6&nodeId=656AAB0BE9EAE2458FCDD6F55ED4B8F4&pageNo=1&pageSize=5",
        {},
        function (res) {
          data = res.result;
        },
        "GET",
        false
      );
    }

    function VideoCarousel(className) {
    
      html +=
        "<div class='swiper-container " +
        className +
        "'><div class='swiper-wrapper'>";
      //		   	html += "<div class='swiper-container poineerVideo'><div class='swiper-wrapper'>"
      for (var i = 0; i < data.length; i++) {
        if (
          data[i].linkurl == "" ||
          data[i].linkurl == null ||
          data[i].linkurl == undefined
        ) {
          html +=
            "<div class='swiper-slide'><a href='middleManagement/detail.html?htmlPage=" +
            htmlPage +
            "&pid=" +
            pid +
            "&sid=" +
            sid +
            "&infoId=" +
            data[i].outside_id +
            "' target='_blank'><img onerror=common.imageError(this,'images/index/nodata.png') src='" +
            (data[i].picurl == null || data[i].picurl == ""
              ? "images/index/nodata.png"
              : common.imgUrl + data[i].picurl) +
            "'><p class='tp_title'><span>" +
            (data[i].simple_title == "" || data[i].simple_title == null
              ? common.filterHTMLTag(data[i].title)
              : common.filterHTMLTag(data[i].simple_title)) +
            "</span></p></a></div>";
        } else {
          html +=
            "<div class='swiper-slide'><a href='" +
            data[i].linkurl +
            "' target='_blank'><img onerror=common.imageError(this,'images/index/nodata.png') src='" +
            (data[i].picurl == null || data[i].picurl == ""
              ? "images/index/nodata.png"
              : common.imgUrl + data[i].picurl) +
            "'><p class='tp_title'><span>" +
            (data[i].simple_title == "" || data[i].simple_title == null
              ? common.filterHTMLTag(data[i].title)
              : common.filterHTMLTag(data[i].simple_title)) +
            "</span></p></a></div>";
        }
      }
      html += "</div><div class='pagination'></div></div>";
    }

    if (data == null || data == "" || data.length == 0) {
      // html +=
      //   "<div class='noHeight'><p style='text-align:center;'><img src='images/index/nodata.png' style='width:128px!important;height:82px;' /></p>";
      // html +=
      //   "<p style='text-align:center;font-size: 22px;'>暂无数据</p></div>";
    } else {
      if (flag == "fieldVision") {
        // 远教视界

        if (sid == commonParams.thematicEducation) {
          // 主题教育
          VideoCarousel("poineerVideo");
        } else if (sid == commonParams.observeExchange) {
          // 观摩交流
          VideoCarousel("stars");
        } else if (sid == commonParams.ourModel) {
          // 身边的榜样
          VideoCarousel("ourModel");
        } else if (sid == commonParams.tVColumn) {
          // 电视专栏
          VideoCarousel("tVColumn");
        } else if (sid == commonParams.quality) {
          // 全国精品
          VideoCarousel("quality");
          //					html += "<div class='swiper-container quality'><div class='swiper-wrapper'>"
          //					for (var i = 0; i < data.length; i++) {
          //						if (data[i].linkurl == '' || data[i].linkurl == null || data[i].linkurl == undefined) {
          //							html += "<div class='swiper-slide'><a target='_blank' href='middleManagement/detail.html?htmlPage=" + htmlPage + "&pid=" + pid + "&sid=" + sid + "&infoId=" + data[i].outside_id + "'><img onerror=common.imageError(this,'images/index/nodata.png') src='" + (data[i].picurl == null || data[i].picurl == "" ? "images/index/nodata.png" : common.imgUrl + data[i].picurl) + "'><p class='tp_title'><span>" + (data[i].simple_title == '' || data[i].simple_title == null ? common.filterHTMLTag(data[i].title) : common.filterHTMLTag(data[i].simple_title)) + "</span></p></a></div>"
          //						}else{
          //							html += "<div class='swiper-slide'><a target='_blank' href='" + data[i].linkurl + "'><img src='images/index/home_new_main_img.png'><p class='tp_title'><span>" + (data[i].simple_title == '' || data[i].simple_title == null ? common.filterHTMLTag(data[i].title) : common.filterHTMLTag(data[i].simple_title)) + "</span></p></a></div>"
          //						}
          //					}
          //					html += "</div><div class='pagination'></div></div>"
        } else {
          html += "<ul class='newsList'>";
          for (var i = 0; i < data.length; i++) {
            if (
              data[i].linkurl == "" ||
              data[i].linkurl == null ||
              data[i].linkurl == undefined
            ) {
              html +=
                "<li><a href='" +
                detialsHtml +
                "?htmlPage=" +
                htmlPage +
                "&pid=" +
                pid +
                "&sid=" +
                sid +
                "&infoId=" +
                data[i].outside_id +
                "' target='_blank'>" +
                (data[i].simple_title == "" || data[i].simple_title == null
                  ? common.filterHTMLTag(data[i].title)
                  : common.filterHTMLTag(data[i].simple_title)) +
                "</a><span>" +
                data[i].uptime.slice(5, 10) +
                "</span></li>";
            } else {
              html +=
                "<li><a href='" +
                data[i].linkurl +
                "' target='_blank'>" +
                (data[i].simple_title == "" || data[i].simple_title == null
                  ? common.filterHTMLTag(data[i].title)
                  : common.filterHTMLTag(data[i].simple_title)) +
                "</a><span>" +
                data[i].uptime.slice(5, 10) +
                "</span></li>";
            }
          }
          html += "</ul>";
        }
      } else {
        // 剩余常规列表
        html += "<ul class='newsList'>";
        for (var i = 0; i < data.length; i++) {
          if (
            (data[i].linkurl == "" ||
              data[i].linkurl == null ||
              data[i].linkurl == undefined) &&
            flag != "pratyLife"
          ) {
            html +=
              "<li><a href='" +
              detialsHtml +
              "?htmlPage=" +
              htmlPage +
              "&pid=" +
              pid +
              "&sid=" +
              sid +
              "&infoId=" +
              data[i].outside_id +
              "' target='_blank'>" +
              (data[i].simple_title == "" || data[i].simple_title == null
                ? common.filterHTMLTag(data[i].title)
                : common.filterHTMLTag(data[i].simple_title)) +
              "</a><span>" +
              "</span></li>";
          } else if (flag == "pratyLife") {
            html +=
              "<li><a href='" +
              common.partyLife +
              data[i].outside_id +
              "' target='_blank'>" +
              (data[i].simple_title == "" || data[i].simple_title == null
                ? common.filterHTMLTag(data[i].title)
                : common.filterHTMLTag(data[i].simple_title)) +
              "</a><span>" +
              data[i].uptime.slice(5, 10) +
              "</span></li>";
          } else {
            html +=
              "<li><a href='" +
              data[i].linkurl +
              "' target='_blank'>" +
              (data[i].simple_title == "" || data[i].simple_title == null
                ? common.filterHTMLTag(data[i].title)
                : common.filterHTMLTag(data[i].simple_title)) +
              "</a><span>" +
              data[i].uptime.slice(5, 10) +
              "</span></li>";
          }
        }
        html += "</ul>";
      }
      html += "</div>";
    }
    return html;
  },

  notice: function (data) {
    // 预决算公开入口已经关闭
    // $("#openPrejudge").attr({
    //   href: "https://www.ljxfw.gov.cn/yjsgk/generalListPage.html?sid=C6500FB7B571E1679C488E1E46E34A5E",
    // });
    $("#notice").append(
      callback.getDefault(
        data.result,
        "notice",
        "HighRiseVoice.html",
        "organizationGardenDetails.html",
        "HighRiseVoice"
      )
    );
  },
  cadresPublic: function (data) {
    $("#cadresPublic").append(
      callback.getDefault(
        data.result,
        "cadresPublic",
        "generalListPage.html",
        "organizationGardenDetails.html",
        "generalListPage"
      )
    );
  },
  //预决算公开
  yjsgkPublic: function (data) {
    $("#yjsgk_content").append(
      callback.getDefault(
        data,
        "yjsgk_content",
        "generalListPage.html",
        "organizationGardenDetails.html",
        "generalListPage"
      )
    );
  },
  partyFreely_talentWorld: function (data) {
    $("#djzhTab").append(
      callback.getNodeTab(
        data[0],
        "djzhTab",
        "djzhTabContent",
        "partyFreely",
        "generalListPage.html",
        "organizationGardenDetails.html",
        "generalListPage"
      )
    );
    $("#rctdTab").append(
      callback.getNodeTab(
        data[1],
        "rctdTab",
        "rctdTabContent",
        "talentWorld",
        "generalListPage.html",
        "organizationGardenDetails.html",
        "generalListPage"
      )
    );
    //党建纵横鼠标经过事件
    callback.hoverModel("djzhTab", "djzhTabContent");
    callback.hoverModel("rctdTab", "rctdTabContent");
  },
  servantManager: function (data) {
    $("#gwyglTab").append(
      callback.getNodeTab(
        data,
        "gwyglTab",
        "gwyglTabContent",
        "servantManager",
        "generalListPage.html",
        "organizationGardenDetails.html",
        "generalListPage"
      )
    );
    callback.hoverModel("gwyglTab", "gwyglTabContent");
  },
  cadresWindow: function (data) {
    $("#gbzcTab").append(
      callback.getNodeTab(
        data,
        "gbzcTab",
        "gbzcTabContent",
        "cadresWindow",
        "generalListPage.html",
        "organizationGardenDetails.html",
        "generalListPage"
      )
    );
    callback.hoverModel("gbzcTab", "gbzcTabContent");
  },
  gardenPlot: function (data) {
    $("#zgydTab").append(
      callback.getNodeTab(
        data,
        "zgydTab",
        "zgydTabContent",
        "gardenPlot",
        "generalListPage.html",
        "organizationGardenDetails.html",
        "organizationGarden"
      )
    );
    callback.hoverModel("zgydTab", "zgydTabContent");
  },
  fieldVision: function (data) {
    $("#yjsjTab").append(
      callback.getNodeTab(
        data,
        "yjsjTab",
        "yjsjTabContent",
        "fieldVision",
        "videoList.html",
        "middleManagement/detail.html",
        "middleManagement/farDynamic"
      )
    );
    callback.hoverModel("yjsjTab", "yjsjTabContent");

    var ourModel = new Swiper(".ourModel", {
      loop: true,
      autoplayDisableOnInteraction: false,
      autoplay: 3000,
    });
    var poineerVideo = new Swiper(".poineerVideo", {
      loop: true,
      autoplayDisableOnInteraction: false,
      autoplay: 3000,
    });
    var stars = new Swiper(".stars", {
      loop: true,
      autoplayDisableOnInteraction: false,
      autoplay: 3000,
    });
    var tVColumn = new Swiper(".tVColumn", {
      loop: true,
      autoplayDisableOnInteraction: false,
      autoplay: 3000,
    });
    var quality = new Swiper(".quality", {
      loop: true,
      autoplayDisableOnInteraction: false,
      autoplay: 3000,
    });
  },

  law: function (data) {
    $("#zcfgTab").append(
      callback.getNodeTab(
        data,
        "zcfgTab",
        "zcfgTabContent",
        "law1",
        "generalListPage.html",
        "organizationGardenDetails.html",
        "generalListPage"
      )
    );
    callback.hoverModel("zcfgTab", "zcfgTabContent");
  },

  bayWindow: function (data) {
    // 首页飘窗

    var html = "";
 if(data !=null){
    if (
      data[0] != null &&
      data[0] != undefined &&
      data[0] != "" &&
      data[0].length != 0
    ) {
      var piaochuang = $("body").width();
      var piaochuangImg = piaochuang <= 768 ? '130px' : '230px'
        
      for (var i = data.length - 1; i >= 0; i--) {
        html +=
          '<div class="indexPiaochuang" style="position:fixed;bottom:' +
          data[i].topbottom +
          "px;" +
          data[i].position +
          ':1%;width:' + 
          piaochuangImg +
          ';height:auto;z-index:9999;">';
        html += '<span class="close">×</span>';
        html +=
          '<a href="' +
          data[i].linkurl +
          '" target="_blank"><img 	onerror=common.imageError(this,"images/index/piaochuang.gif") src="' +
          (data[i].picurl == null || data[i].picurl == ""
            ? "images/index/piaochuang.gif"
            : common.tempUrlTest + data[i].picurl) +
          '" width="100%"></a>';
        html += "</div>";
      }
    }

    

    $("body").on("click", ".close", function () {
      $(this).parent("div").remove();
    });

    $("body").append(html);
    
    }
  },
};
var params = {
  notice: {
    siteId: commonParams.siteId,
    nodeId: commonParams.notice,
    pageNo: 1,
    pageSize: 6,
    topSize: 1, //置顶条数
  },
  cadresPublic: {
    siteId: commonParams.siteId,
    nodeId: commonParams.cadresPublic,
    pageNo: 1,
    pageSize: commonParams.pageSize_one,
  },
  yjsgkPublic: {
    siteId: '836D3C5D3F067539DED6C451E20A0484',
    nodeId: commonParams.yjsgkPublic,
    // pageNo: 1,
    // pageSize: commonParams.pageSize_one,
  },
  partyFreely_talentWorld: {
    siteId: commonParams.siteId,
    nodeId: commonParams.partyFreely + "," + commonParams.talentWorld,
    pageNo: 1,
    isShow: commonParams.isShow,
    pageSize: commonParams.pageSize_five,
  },
  servantManager: {
    siteId: commonParams.siteId,
    nodeId: commonParams.servantManager,
    pageNo: 1,
    isShow: commonParams.isShow,
    pageSize: commonParams.pageSize_five,
  },
  cadresWindow: {
    siteId: commonParams.siteId,
    nodeId: commonParams.cadresWindow,
    pageNo: 1,
    isShow: commonParams.isShow,
    pageSize: commonParams.pageSize_five,
  },
  gardenPlot: {
    siteId: commonParams.siteId,
    nodeId: commonParams.gardenPlot,
    pageNo: 1,
    isShow: commonParams.isShow,
    pageSize: 1,
  },
  fieldVision: {
    siteId: commonParams.siteId,
    nodeId: commonParams.fieldVision,
    pageNo: 1,
    isShow: commonParams.isShow,
    pageSize: commonParams.pageSize_seven,
  },
  law: {
    siteId: commonParams.siteId,
    nodeId: commonParams.law,
    pageNo: 1,
    isShow: commonParams.isShow,
    pageSize: commonParams.pageSize_five,
  },
};
$(function () {
  //	$('.buguize a').on('click',function(){
  //原版党建联盟
  /*哈尔滨:http://www.hrbxfw.gov.cn/
	牡丹江:http://www.mdjswzzb.gov.cn/
	佳木斯:http://www.jmsdj.gov.cn/
	黑河:http://hhxf.hhdjw.gov.cn/*/
  //		if ($(this).parent('div').attr('class').indexOf('hrb') > -1) {
  //			window.open("http://www.hrbxfw.gov.cn/");
  //		} else if( $(this).parent('div').attr('class').indexOf('mdj') > -1 ){
  //			window.open("http://www.mdjswzzb.gov.cn/");
  //		} else if( $(this).parent('div').attr('class').indexOf('jms') > -1 ){
  //			window.open("http://www.jmsdj.gov.cn/");
  //		} else if( $(this).parent('div').attr('class').indexOf('hh') > -1 ){
  //			window.open("http://hhxf.hhdjw.gov.cn/");
  //		}else {
  //			layer.alert('建设中，敬请期待！',{icon: 0,shade: 0.5,title:'龙江党建联盟'})
  //		}
  //
  //	});
  //	$('.hlj a').unbind('click');

  $(".partyBuild a").on("click", function () {
    if ($(this).parent("li").attr("class").indexOf("hrbxfw") > -1) {
      window.open("http://www.hrbxfw.gov.cn/");
    } else if ($(this).parent("li").attr("class").indexOf("mdjswzzb") > -1) {
      window.open("https://mdj.ljxfw.gov.cn/");
    } else if ($(this).parent("li").attr("class").indexOf("jmsdj") > -1) {
      window.open("https://jms.ljxfw.gov.cn/");
    } else if ($(this).parent("li").attr("class").indexOf("hhdjw") > -1) {
      window.open("https://hh.ljxfw.gov.cn/");
    } else if ($(this).parent("li").attr("class").indexOf("dqq") > -1) {
      window.open("https://dq.ljxfw.gov.cn/");
	} else if ($(this).parent("li").attr("class").indexOf("qthh") > -1) {
	  window.open("https://qth.ljxfw.gov.cn/");
    } else if ($(this).parent("li").attr("class").indexOf("syss") > -1) {
      window.open("https://sys.ljxfw.gov.cn/");
	} else if ($(this).parent("li").attr("class").indexOf("jxx") > -1) {
	  window.open("https://jx.ljxfw.gov.cn/");
	} else if ($(this).parent("li").attr("class").indexOf("qqhrr") > -1) {
	  window.open("https://hcdjw.gov.cn/");
	} else if ($(this).parent("li").attr("class").indexOf("ycc") > -1) {
	  window.open("https://yc.ljxfw.gov.cn/");
	} else if ($(this).parent("li").attr("class").indexOf("shh") > -1) {
	  window.open("https://sh.ljxfw.gov.cn/");
	} else if ($(this).parent("li").attr("class").indexOf("hgg") > -1) {
	  window.open("https://hegang.ljxfw.gov.cn/");
	} else if ($(this).parent("li").attr("class").indexOf("dxall") > -1) {
	  window.open("https://dxal.ljxfw.gov.cn/");
    } else {
      layer.alert("建设中，敬请期待！", {
        icon: 0,
        shade: 0.5,
        title: "龙江党建联盟",
      });
    }
  });

  // 通知公告---（4.6 根据栏目获取文章列表）
  common.ajaxUtil(
    common.fullModel + "/infoListAPI/getDefaultInformationList",
    params.notice,
    callback.notice,
    "GET",
    true
  );

  // 干部公示---（4.6 根据栏目获取文章列表）
  common.ajaxUtil(
    common.fullModel + "/infoListAPI/getDefaultInformationList",
    params.cadresPublic,
    callback.cadresPublic,
    "GET",
    true
  );
  // 预决算公开---
  common.ajaxUtil(
    common.fullModel + "/infoListAPI/getNodeAndInformationListByNewOne",
    params.yjsgkPublic,
    callback.yjsgkPublic,
    "GET",
    true
  );

  // 党建纵横，人才天地---（4.7 根据栏目获取子栏目文章列表）
  common.ajaxUtil(
    common.fullModel + "/infoListAPI/getNodeAndInformationList",
    params.partyFreely_talentWorld,
    callback.partyFreely_talentWorld,
    "GET",
    true
  );

  // 公务员管理---（4.7 根据栏目获取子栏目文章列表）
  common.ajaxUtil(
    common.fullModel + "/infoListAPI/getNodeAndInformationList",
    params.servantManager,
    callback.servantManager,
    "GET",
    true
  );

  // 干部之窗---（4.7 根据栏目获取子栏目文章列表）
  common.ajaxUtil(
    common.fullModel + "/infoListAPI/getNodeAndInformationList",
    params.cadresWindow,
    callback.cadresWindow,
    "GET",
    true
  );

  // 组工园地---（4.7 根据栏目获取子栏目文章列表）
  common.ajaxUtil(
    common.fullModel + "/infoListAPI/getNodeAndInformationList",
    params.gardenPlot,
    callback.gardenPlot,
    "GET",
    true
  );

  // 远教视界---改成先锋视频（4.7 根据栏目获取子栏目文章列表）
  common.ajaxUtil(
    common.fullModel + "/infoListAPI/getNodeAndInformationList",
    params.fieldVision,
    callback.fieldVision,
    "GET",
    true
  );

  // 政策法规---（4.7 根据栏目获取子栏目文章列表）
  common.ajaxUtil(
    common.fullModel + "/infoListAPI/getNodeAndInformationList",
    params.law,
    callback.law,
    "GET",
    true
  );

  // 首页飘窗---（4.7 根据栏目获取子栏目文章列表）
  common.ajaxUtil(
    common.fullModel + "/friendlinkListAPI/getInfoClass",
    {'siteId':0},
    callback.bayWindow,
    "GET",
    true
  );
});

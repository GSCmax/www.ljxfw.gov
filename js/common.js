var table;
var common = {
  fullModel_win: "https://www.ljxfw.gov.cn/gateway2/portal-ljxfw", // 飘窗文字接口
  fullModel: "https://www.ljxfw.gov.cn/gateway2/portal-ljxfw/ljxfw", //线上
 apiUrl: "https://www.ljxfw.gov.cn/gateway2/portal-ljxfw/ljxfw", //线上
webUrl: "https://www.ljxfw.gov.cn/ljxfwWeb/", //线上项目地址前缀
  imgUrl: "", //线上图片路径
  videoUrl: "", //视频公共前缀-暂时使用的文件前缀
  tempUrl: "", //图片长前缀路径
  tabUrl: "", //tab栏图标前缀路径-@Kira
  clickUrl: "https://www.ljxfw.gov.cn/gateway", //点击量前缀生产
  testImgVideo: "", //我和我的祖国生产
  tempUrlTest: "", //中共党员教育平台系列、飘窗、党教视界
  partyLife: "https://www.ljxfw.gov.cn/hljDdsh/detail.html?infoId=", // 文章的outside_id

  ajaxUtil: function (url, params, callBack, method, sync, filter) {
    $.ajax({
      type: method == undefined ? "get" : method,
      url: url,
      async: sync == undefined ? true : sync,
      data: params,
      dataTpye: "json",
      success: function (result) {
        if (result.code == 1003) {
          common.tokenOut("此帐号已在其他地方登录，您已被迫下线");
        } else {
          callBack(result.obj);
        }
      },
      error: function (data) {
        if (data.status == 401) {
          //判断token失效后，接口返回报错信息status值为401
          if (common.tokenFlag) {
            common.tokenFlag = false;
            common.tokenOut("登录失效，请重新登录！");
          }
        }
      },
      dataFilter: filter == undefined ? null : filter,
    });
  },

  tokenOut: function (msg) {
    if (window.top) {
      parent.layer.confirm(
        msg,
        {
          btn: ["确定"],
          cancel: function () {
            common.tokenFlag = true;
            parent.common.logout(); //退出登录
          }, //按钮
        },
        function () {
          common.tokenFlag = true;
          parent.common.logout(); //退出登录
        }
      );
    } else {
      layer.confirm(
        msg,
        {
          btn: ["确定"],
          cancel: function () {
            common.tokenFlag = true;
            common.logout(); //退出登录
          }, //按钮
        },
        function () {
          common.tokenFlag = true;
          common.logout(); //退出登录
        }
      );
    }
  },

  /**
	 * 
	 * @param {pageId:分页div的id,curr:当前页,url:请求地址,pageSize:每页显示条数,id:显示数据的div的id,packageData:动态页面方法} args
	页面定义方式
	var args = {
		url: "partyClassAPI/get/partyClassList",
		method: "post",
		params: {
			access_token: common.getAccessToken,
			pageNo: 1,
			pageSize: 10,
			isChild: isChild,
		},
		pageId: "layerPage",
		packageData: findPageCallBack,
		filter:common.ajaxDataFilter
	}
	调用方式
	common.pagingnew(args);
	* */
  paging: function (args) {
    common.ajaxUtil(
      args.url,
      args.params,
      function (result) {
        layui.use(["laypage", "layer"], function () {
          var laypage = layui.laypage;
          //完整功能
          laypage.render({
            elem: args.pageId, //id
            count: result.totalCount, //数据条数
            limit: args.params.pageSize,
            curr: args.params.pageNo,
            first: "首页",
            last: "尾页",
            layout: ["prev", "page", "next", "count"], //显示上一页，下一页，页码，总页数
            jump: function (obj, first) {
              if (!first) {
                localStorage.setItem("currPage", obj.curr || 1);
                args.params.pageNo = obj.curr;
                if (args.params.type == "notice" && args.params.pageNo > 1) {
                  delete args.params.topSize;
                } else {
                  args.params.topSize = 1;
                }
                common.paging(args);
              }
            },
          });
        });
        args.packageData(result);
      },
      args.method == undefined ? "get" : args.method,
      args.sync == undefined ? "get" : args.method,
      args.filter == null ? null : args.filter
    );
  },
  pagingnew: function (args) {
    common.ajaxUtil(
      args.url,
      args.params,
      function (result) {
        layui.use(["laypage", "layer"], function () {
          var laypage = layui.laypage;
          //完整功能
          laypage.render({
            elem: args.pageId, //id
            count: result.totalCount, //数据条数
            limit: args.params.pageSize,
            curr: args.params.pageNo,
            first: "首页",
            last: "尾页",
            //					    layout: ['prev','page','next','count', 'skip'],//显示上一页，下一页，页码，总页数
            layout: ["prev", "page", "next", "count"], //显示上一页，下一页，页码，总页数
            jump: function (obj, first) {
              if (!first) {
                localStorage.setItem("currPage", obj.curr || 1);
                args.params.pageNo = obj.curr;
                common.pagingnew(args);
              }
            },
          });
        });

        args.packageData(result);
      },
      args.method == undefined ? "get" : args.method
    );
  },
  pagingNew: function (args) {
    common.ajaxUtil(
      args.url,
      args.params,
      function (result) {
        if (0 != result.length) {
          layui.use(["laypage", "layer"], function () {
            var laypage = layui.laypage;
            //完整功能
            laypage.render({
              elem: args.pageId, //id
              count: result[0].informationList.totalCount, //数据条数
              limit: args.params.pageSize,
              curr: args.params.pageNo,
              first: "首页",
              last: "尾页",
              layout: ["prev", "page", "next", "count"], //显示上一页，下一页，页码，总页数
              jump: function (obj, first) {
                if (!first) {
                  localStorage.setItem("currPage", obj.curr || 1);
                  args.params.pageNo = obj.curr;
                  common.pagingNew(args);
                }
              },
            });
          });
          args.packageData(result);
        }
      },
      args.method == undefined ? "get" : args.method,
      args.sync == undefined ? "get" : args.method,
      args.filter == null ? null : args.filter
    );
  },

  /*
	例子： 获取详情页面带回来的pageNo或id等页面需要参数，用路径拼接，getUrlParams方法进行接收
	 var pageNo = common.getUrlParams("pageNo");
	 var id = common.getUrlParams("id");
	 * */
  getUrlParams: function (para) {
    var paraArr = location.search.substring(1).split("&");
    for (var i = 0; i < paraArr.length; i++) {
      if (para == paraArr[i].split("=")[0]) {
        return paraArr[i].split("=")[1];
      }
    }
    return "";
  },
  href: function (url) {
    //详情
    location.href = url;
  },
  hrefMyInfo_: function (url, infoId) {
    //列表跳详情
    location.href = url + "?infoId=" + infoId;
  },
  imageError: function (dom, defaultImagePath) {
    $(dom).attr("src", defaultImagePath);
  },
  uuid: function () {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";
    // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
    // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";
    var uuid = s.join("");
    return uuid;
  },
  mainHeight: function () {
    var htmlHei = $(".html").innerHeight();
    var bodyHei = $(".body").innerHeight();
    var headerHei = $(".header").innerHeight();
    var footerHei = $(".footer").innerHeight();
    if (bodyHei + 1 < htmlHei) {
      var mainHeight = htmlHei - headerHei - footerHei - 80 + "px";
      $(".mainHeight").css("height", mainHeight);
    } else {
      $(".mainHeight").attr("style", "margin-top: 80px;");
    }
  },
  filterHTMLTag: function (msg) {
    var msg = msg.replace(/<\/?[^>]*>/g, ""); //去除HTML Tag
    msg = msg.replace(/[|]*\n/, ""); //去除行尾空格
    msg = msg.replace(/&npsp;/gi, ""); //去掉npsp
    return msg;
  },
  ajaxDataFilter: function (data, type) {
    //获得数据是对数据进行编译（解决id是long型数据缺失问题）
    data = data.replace(/id\":(\d+)/g, 'id":"$1"');
    return data;
  },
  //处理时间戳
  createTime: function (data, format) {
    if (data != null) {
      var date = new Date(data);
      var map = {
        M: date.getMonth() + 1, //月份
        d: date.getDate(), //日
        h: date.getHours(), //小时
        m: date.getMinutes(), //分
        s: date.getSeconds(), //秒
        q: Math.floor((date.getMonth() + 3) / 3), //季度
        S: date.getMilliseconds(), //毫秒
      };
      format = format.replace(/([yMdhmsqS])+/g, function (all, t) {
        var v = map[t];
        if (v !== undefined) {
          if (all.length > 1) {
            v = "0" + v;
            v = v.substr(v.length - 2);
          }
          return v;
        } else if (t === "y") {
          return (date.getFullYear() + "").substr(4 - all.length);
        }
        return all;
      });
      return format;
    } else {
      return "暂无数据";
    }
  },

  getLocalTime: function (param) {
    return new Date(parseInt(param)).format("yyyy-MM-dd");
  },
};

/* 支部建设:branchInfo;教育:education;门户:portal;党建地图:partyMap;APP:app;专家系统：export;平台:platform;
 * 专题:不忘初心牢记使命:cxsm;
 * 学习宣传省第十二次党代会精神:Ddhjs
 * 党性教育红色展馆:Hszg
 * 党的生活:Ddsh
 * 党员电教:Dydj
 * 解放思想推动高质量发展大讨论:Jfsxdtl
 * 解放思想推动革新发展大讨论:Jfsxgfz
 * 学习贯彻党的十九大精神:Shijiu
 * 黑龙江省微信矩阵:Wxjz
 * 市委书记进校园宣讲专栏:Xjzt
 * 学习贯彻习近平新时代中国特色社会主义思想:Xxgc
 *
 */
var _maq = _maq || [];
_maq.push(["_setAccount", "portal"]); // 这里是标识字段名-account
(function () {
  var ma = document.createElement("script");
  ma.type = "text/javascript";
  //ma.async = true;///同步异步
  ma.src = "https://www.ljxfw.gov.cn/publicjs/cookieHm.js"; //这个是请求用户行为分析的js地址
  var s = document.getElementsByTagName("script")[1];
  s.parentNode.insertBefore(ma, s);
})();

//百度统计
var _hmt = _hmt || [];
(function () {
  var hm = document.createElement("script");

  $.ajax({
    type: "get",
    url: "https://www.ljxfw.gov.cn/json/btCode.json",
    async: false,
    dataTpye: "text",
    success: function (res) {
      let jsonKey =
        location.pathname.split("/")[1] == ""
          ? "base"
          : location.pathname.split("/")[1];
      hm.src = "https://hm.baidu.com/hm.js?" + res.obj[jsonKey];
      var s = document.getElementsByTagName("script")[document.getElementsByTagName("script").length-1];
      s.parentNode.insertBefore(hm, s);
    },
    error: function (err) {
//    console.info(err);
    },
  });
})();

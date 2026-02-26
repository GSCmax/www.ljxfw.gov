/*
 * url-ajax请求地址，前缀自己需根据接口文档写在common.js中,不能更改common中任何配置
 * params-传回后端的参数
 * callback-回调方法
 * method-默认GET请求
 * sync-默认异步请求
 * filter-解决id是long型数据缺失问题-----common.ajaxDataFilter
 */



//要闻聚焦
var highItem = '';
var highItemImg = '';
$('#hightLights').html(''); //要闻聚焦右侧列表，列表取后面三个栏目的列表
$('#hightLightsImg').html(''); //要闻聚焦左侧轮播图,图片取后面三个栏目的图片
var tabIndex=0;
var callbackJ = {
	layeralert:function(){
		// 视频直播系统
		common.ajaxUtil(common.fullModel + "/friendlinkListAPI/getValidVideoLiveInfo", {}, function(data){
			if (data.length >= 1) {
				var html = 	'<div class="modal fade" id="zhibo" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
					'<div class="modal-dialog"><div class="modal-content" style="max-height:500px;overflow-y:auto"><div class="modal-header">'+
					'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>'+
					'<h4 class="modal-title" id="myModalLabel">视频直播系统'+
//					'<a href="https://www.ljxfw.gov.cn/ljxfwWeb/shouce.pdf" download="shouce" style="font-size:16px;font-weight: 600;float: right;display: inline-block;margin-right: 20px;">查看操作手册</a>'+
					'</h4></div><div class="modal-body clearfix">';
//					'<div class="col-sm-12 videoLiveList clearfix"><span>全省第二批主题教育推进会议</span><a href="http://live.vhall.com/108628108" class="btn btn-info btn-sm" target="_blank" >点击进入</a></div>'
//					'<div class="col-sm-12 videoLiveList clearfix"><span>全省国有企业党支部书记培训</span><a href="http://live.vhall.com/773043752" class="btn btn-info btn-sm"  target="_blank">点击进入</a></div>'+
				for (var i = 0 ; i < data.length ; i++) {
					html += '<div class="col-sm-12 videoLiveList clearfix"><span>' + data[i].title + '</span><a href="' + data[i].link_url + '" class="btn btn-info btn-sm" target="_blank" >点击进入</a></div>';
				}
				html += '</div><div class="modal-footer">'+
						'<a href="https://djypt.ljxfw.gov.cn/ljxfw_manager/public/upload/20220526/%E8%A7%86%E9%A2%91%E7%9B%B4%E6%92%AD%E7%94%B3%E8%AF%B7%E6%93%8D%E4%BD%9C%E6%89%8B%E5%86%8C.docx"  target="_blank" style="float:left;color:#337ab7;font-weight:600;height:30px;line-height:30px;font-size:16px;">视频直播申请手册 下载</a>'+
						'<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button></div></div></div></div>';
				$('#footer').after(html);
				$('#zhibo').modal();
			} else {
				layer.alert("暂无直播",{
					icon: 0,shade: 0.5,
					title:"视频直播系统",
					content: '<div><p>暂无直播</p><p><a href="https://www.ljxfw.gov.cn/ljxfwWeb/shouce.pdf" target="_blank" download="shouce" style="font-size:16px;font-weight: 600;display: inline-block;margin-right: 20px;">查看操作手册</a></p></div>'
				});
			}
			
		})
		
	},
	huiyialert:function(){
		// 视频会议系统
			var html = 	'<div class="modal fade" id="sphy" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
				'<div class="modal-dialog"><div class="modal-content" style="max-height:500px;overflow-y:auto"><div class="modal-header">'+
				'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>'+
				'<h4 class="modal-title" id="myModalLabel">视频会议系统'+
				'</h4></div><div class="modal-body clearfix">'+
				'<div class="col-sm-12 videoLiveList clearfix"><span>龙江先锋网视频会议系统</span><a download="龙江先锋网视频会议系统" href="https://videopro.weidijia.cn/download/" class="btn btn-info btn-sm" target="_blank" >点击下载</a></div>'+
				'<div class="col-sm-12 videoLiveList clearfix"><span>好信云视频会议系统</span><a download="好信云视频会议系统" href="https://www.haoxin.cn/dwd/dwd" class="btn btn-info btn-sm"  target="_blank">点击下载</a></div>'+
				'</div><div class="modal-footer">'+
					'<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button></div></div></div></div>';
			$('#footer').after(html);
			$('#sphy').modal();
			
		
		
	},
	dyalert:function(){
		// 党支部管理员操作手册
		var html = 	'<div class="modal fade" id="dangyuan" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
					'<div class="modal-dialog"><div class="modal-content" style="max-height:500px;overflow-y:auto"><div class="modal-header">'+
					'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>'+
					'<h4 class="modal-title" id="myModalLabel">站点操作指南'+
					'</h4></div><div class="modal-body clearfix">';
			html += '<div class="col-sm-12 videoLiveList clearfix"><span>党支部管理员操作手册</span><a href="https://www.ljxfw.gov.cn/ljxfw_manager/public/upload/20210819/shouce1.docx" download="党支部管理员操作手册" class="btn btn-info btn-sm" target="_blank" >点击下载</a></div>';
			html += '<div class="col-sm-12 videoLiveList clearfix"><span>党委管理员操作手册（外网）</span><a href="https://www.ljxfw.gov.cn/ljxfw_manager/public/upload/20210819/shouce3.docx" download="党委管理员操作手册（外网）"  class="btn btn-info btn-sm" target="_blank" >点击下载</a></div>';
			html += '<div class="col-sm-12 videoLiveList clearfix"><span>各级党委管理员操作手册（内网）</span><a href="https://www.ljxfw.gov.cn/ljxfw_manager/public/upload/20210819/shouce2.docx" download="各级党委管理员操作手册（内网）"  class="btn btn-info btn-sm" target="_blank" >点击下载</a></div>';
			html += '<div class="col-sm-12 videoLiveList clearfix"><span>终端教育站点</span><a href="https://www.ljxfw.gov.cn/ljxfw_manager/public/upload/20210819/shipin.zip" download="终端教育站点"  class="btn btn-info btn-sm" target="_blank" >点击下载</a></div>';
			html += '</div><div class="modal-footer">'+
					'<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button></div></div></div></div>';
			$('#footer').after(html);
			$('#dangyuan').modal();
		
	},
	dyalert2:function(){
		// 党支部管理员操作手册
		var html = 	'<div class="modal fade" id="shouceDang" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
					'<div class="modal-dialog"><div class="modal-content" style="max-height:500px;overflow-y:auto"><div class="modal-header">'+
					'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>'+
					'<h4 class="modal-title" id="myModalLabel">云平台操作手册'+
					'</h4></div><div class="modal-body clearfix">';
			html += '<div class="col-sm-12 videoLiveList clearfix"><span>党员用户操作手册</span><a href="https://www.ljxfw.gov.cn/ljxfw_manager/public/upload/20211214/dangyuanshouce.docx" download="党员用户操作手册" class="btn btn-info btn-sm" target="_blank" >点击下载</a></div>';
			html += '<div class="col-sm-12 videoLiveList clearfix"><span>党支部用户操作手册</span><a href="https://www.ljxfw.gov.cn/ljxfw_manager/public/upload/20211214/dangzhibushouce.docx" download="党支部用户操作手册"  class="btn btn-info btn-sm" target="_blank" >点击下载</a></div>';
			html += '<div class="col-sm-12 videoLiveList clearfix"><span>党委用户操作手册</span><a href="https://www.ljxfw.gov.cn/ljxfw_manager/public/upload/20211214/dangweishouce.docx" download="党委用户操作手册"  class="btn btn-info btn-sm" target="_blank" >点击下载</a></div>';
			html += '</div><div class="modal-footer">'+
					'<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button></div></div></div></div>';
			$('#footer').after(html);
			$('#shouceDang').modal();
		
	},
	//头条
	leadnews: function (data) {
		var itemHtml = '';
		$('#leadNews').html('');
		if (data[0] != null && data[0] != undefined && data[0] != '' && data[0].length != 0) {
		
			itemHtml += '<img src="images/index/home_new_img.png" /><h1>'
			if(data[0].linkurl =='' ||data[0].linkurl ==null || data[0].linkurl ==undefined){
				var headInfoTitle = data[0].title;
				if (data[0].simple_title != '' && data[0].simple_title != null && data[0].simple_title != undefined) {
					headInfoTitle = data[0].simple_title;
				}
				// itemHtml +='<a href="' + common.webUrl + 'organizationGardenDetails.html?htmlPage=HighRiseVoice&pid=' + commonParams.importNew + '&sid=' + data[0].parent_id + '&infoId=' + data[0].outside_id + '" target="_blank">' + headInfoTitle + '</h1><p>' + data[0].description + '</p></a>'
				itemHtml +='<a href="' + common.webUrl + 'organizationGardenDetails.html?htmlPage=HighRiseVoice&pid=' + commonParams.importNew + '&sid=' + data[0].parent_id + '&infoId=' + data[0].outside_id + '" target="_blank">' + headInfoTitle + '</h1></a>'
				
			}else{
				itemHtml +='<a href="' + data[0].linkurl + '" target="_blank">' + data[0].title + '</h1><p>' + data[0].description + '</p></a>'
				
			}

		}		
		$('#leadNews').append(itemHtml);
	},
	//TODO 改版去掉 顶部专题
	// topicTop: function (data) {
	// 	$('#topicTop').html('');
	// 	var itemHtml = '';
	// 	if (data != null && data != undefined && data != '' && data.length != 0) {
	// 		for (var i = 0; i < data.length; i++) {
	// 			itemHtml += '<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 phone_marb"><a href="' + data[i].link_url + '" target="_blank"><img onerror=common.imageError(this,"images/index/noImgSm.png") src="' + common.tempUrl + data[i].img_url + '"></a></div>'
	// 			if (i >= 3) {break;};
	// 		}
	// 	}
	// 	$("#topicTop").append(itemHtml);
	// },
	//TODO 改版顶部专题
	topicTop: function (data) {
		$('#topicTop1').html('');
		var itemHtml = '';
		if (data != null && data != undefined && data != '' && data.length != 0) {
			for (var i = 0; i < data.length; i++) {
				itemHtml +=`<div class="swiper-slide"> 
							<a href="${data[i].link_url }" target="_blank"><img src="${ common.tempUrl + data[i].img_url}"></a>
						</div>`
				if (i >= 3) {break;};
			}
		}
		$("#topicTop1").append(itemHtml);
		guanggao01()
	},
	//TODO 改版横幅
	topicHengfu: function (data) {
		$('#topicHengfu').html('');
		var itemHtml = '';
		if (data != null && data != undefined && data != '' && data.length != 0) {
			for (var i = 0; i < data.length; i++) {
				itemHtml +=`<div class="swiper-slide"> 
							<a href="${data[i].link_url }" target="_blank"><img src="${ common.tempUrl + data[i].img_url}"></a>
						</div>`
				if (i >= 3) {break;};
			}
		}
		$("#topicHengfu").append(itemHtml);
		guanggao02()
	},
	//中部
	topicMid: function (data) {
		$('#topicMid').html('');
		var itemHtml = '';
		if (data != null && data != undefined && data != '' && data.length != 0) {
			for (var i = 0; i < 3; i++) {//这个位置只能放两个图
				if (data[i].title.indexOf('直播') >-1 ) {
//						itemHtml += '<li ondata-toggle="modal" data-target="#zhibo"><a href="javascript:void(0);"><img onerror=common.imageError(this,"images/index/noImgSm.png") src="' + common.tempUrl + data[i].img_url + '"></a></li>';
						itemHtml += '<a  onclick=callbackJ.layeralert() href="javascript:void(0);"><img onerror=common.imageError(this,"images/index/noImgSm.png") src="' + common.tempUrl + data[i].img_url + '"></a>';
				}else if (data[i].title.indexOf('会议') >-1 ) {
						itemHtml += '<a onclick=callbackJ.huiyialert() href="javascript:void(0);"><img onerror=common.imageError(this,"images/index/noImgSm.png") src="' + common.tempUrl + data[i].img_url + '"></a>';
//					
				} else {
					itemHtml += '<a href="' + data[i].link_url + '" target="_blank"><img onerror=common.imageError(this,"images/index/noImgSm.png") src="' + common.tempUrl + data[i].img_url + '"></a>';
				}
				
				if (i >= 12) {break;};
			}
		}
		$("#topicMid").append(itemHtml);

	},
	//下部专题
	topicBottom: function (data) {
		$('#topicBottom').html('');
		var itemHtml = '';
		if (data != null && data != undefined && data != '' && data.length != 0) {
			for (var i = 0; i < data.length; i++) {
				if (data[i].title.indexOf('直播') >-1 ) {
//						itemHtml += '<li ondata-toggle="modal" data-target="#zhibo"><a href="javascript:void(0);"><img onerror=common.imageError(this,"images/index/noImgSm.png") src="' + common.tempUrl + data[i].img_url + '"></a></li>';
						itemHtml += '<a  onclick=callbackdaohang.layeralert() href="javascript:void(0);"><img onerror=common.imageError(this,"images/index/noImgSm.png") src="' + common.tempUrl + data[i].img_url + '"></a>';
				}
// 				else if (data[i].title.indexOf('会议') >-1 ) {
// 						itemHtml += '<a onclick=callbackJ.huiyialert() href="javascript:void(0);"><img onerror=common.imageError(this,"images/index/noImgSm.png") src="' + common.tempUrl + data[i].img_url + '"></a>';
// //					
// 				} 
				else {
					itemHtml += '<a href="' + data[i].link_url + '" target="_blank"><img onerror=common.imageError(this,"images/index/noImgSm.png") src="' + common.tempUrl + data[i].img_url + '"></a>';
				}
				
				if (i >= 12) {break;};
			}
		}
		$("#topicBottom").append(itemHtml);
	},
	//高层声音
	highRise: function (data) {
		$('#myTab').show();
		$('#highRiseImg').html('');
		$('#highRise').html('');
		$('#importantNews').html('');
		$('#importantNewsImg').html('');//龙江要闻
		$("#apiUrl").html('');
		$('#leaderActivities').html('');
		$('#leaderActivitiesImg').html('');
		$('#dlhImg').html('');
		$('#dlh').html('');
		
		var data=[data[1],data[2],data[3],data[0]]
		
		var paramBLD={siteId:0,
			imgPageSize:1,
			infoClassId:'47F355887F3037B0124ACC50F07A8AD9,2118D5B6ACF7144B9147610820CE1F4D',
			pageNo:1,
			pageSize:1}
		
		//中组部栏目
		common.ajaxUtil(common.fullModel + '/infoListAPI/getDefaultInformationList',
		{
			siteId:0,
			nodeId:'633C8BCC999F98C1FD870445E01F4CA5',
			pageNo:1,
			pageSize:1
		}, function(res){
			//部领导活动
			common.ajaxUtil(common.fullModel + '/infoListAPI/getImageAndInfoByInfoClass',
			paramBLD, function(resB){
			//要闻聚焦
			data[3].infoList.splice(3, 1, data[3].infoList[2]);//把data数据里的第四条换成第三条数据
			data[3].infoList.splice(2, 1, res.result[0]);//把data数据里的第三条换成中组部的一条数据
			data[3].infoList.splice(4, 1, resB.infoList[0]);//获取部领导活动的信息数据 放在第5条
			// data[3].ImgInfo.splice(2, 1, resB.ImgInfo[0]);
			if(data[3] !=null ||data[3] != ''||data[3].length !=0){
				var itemHtml = '';
				var imgHtml = '';
				var highItem = '';
				var highItemImg = '';
				
				
				//右侧列表
				if (data[3].infoList != null && data[3].infoList != undefined && data[3].infoList != '' && data[3].infoList.length != 0) {
					for (var i = 0; i < data[3].infoList.length; i++) {
		//				var title = common.filterHTMLTag(data[3].infoList[i].title);
						var uptime = data[3].infoList[i].uptime;
						var dateYm = uptime.slice(0, 7);
						var dateD = uptime.slice(8, 10);			
						if (data[3].infoList[i].linkurl == '' || data[3].infoList[i].linkurl == null || data[3].infoList[i].linkurl == undefined) {
							itemHtml += '<li class="' + (i == 0 ? 'active' : '') + '">';
							itemHtml += '<div class="data"><span>' + dateD + '</span><span class="ie8Time">' + dateYm + '</span></div>'
							itemHtml += '<div class="text"><h4><a href="' + common.webUrl + 'organizationGardenDetails.html?htmlPage=HighRiseVoice&pid=' + commonParams.importNew + '&sid=' + commonParams.highRise + '&infoId=' + data[3].infoList[i].outside_id + '" target="_blank">' + (data[3].infoList[i].simple_title == '' || data[3].infoList[i].simple_title == null ? common.filterHTMLTag(data[3].infoList[i].title) :common.filterHTMLTag(data[3].infoList[i].simple_title)) + '</a></h4><p><a href="' + common.webUrl + 'organizationGardenDetails.html?htmlPage=HighRiseVoice&pid=' + commonParams.importNew + '&sid=' + commonParams.highRise + '&infoId=' + data[3].infoList[i].outside_id + '" target="_blank">' + data[3].infoList[i].description + '</a></p></div>';
							itemHtml += '</li>';
							if (i <= 1) {
								highItem += '<li class="' + (i == 0 ? 'active' : '') + '">';
								highItem += '<div class="data"><span>' + dateD + '</span><span class="ie8Time">' + dateYm + '</span></div>'
								highItem += '<div class="text"><h4><a href="' + common.webUrl + 'organizationGardenDetails.html?htmlPage=HighRiseVoice&pid=' + commonParams.importNew + '&sid=' + commonParams.highRise + '&infoId=' + data[3].infoList[i].outside_id + '" target="_blank">' + (data[3].infoList[i].simple_title == '' || data[3].infoList[i].simple_title == null ? common.filterHTMLTag(data[3].infoList[i].title) :common.filterHTMLTag(data[3].infoList[i].simple_title)) + '</a></h4><p><a href="' + common.webUrl + 'organizationGardenDetails.html?htmlPage=HighRiseVoice&pid=' + commonParams.importNew + '&sid=' + commonParams.highRise + '&infoId=' + data[3].infoList[i].outside_id + '" target="_blank">' + data[3].infoList[i].description + '</p></a></div>';
								highItem += '</li>';
							}
						} else {
							itemHtml += '<li class="' + (i == 0 ? 'active' : '') + '">';
							itemHtml += '<div class="data"><span>' + dateD + '</span><span class="ie8Time">' + dateYm + '</span></div>'
							itemHtml += '<div class="text"><h4><a href="' + data[3].infoList[i].linkurl + '" target="_blank">' + (data[3].infoList[i].simple_title == '' || data[3].infoList[i].simple_title == null ? common.filterHTMLTag(data[3].infoList[i].title) :common.filterHTMLTag(data[3].infoList[i].simple_title)) + '</a></h4><p><a href="' + data[3].infoList[i].linkurl + '" target="_blank">' + data[3].infoList[i].description + '</a></p></div>';
							itemHtml += '</li>';
							if (i <= 1) {
								highItem += '<li class="' + (i == 0 ? 'active' : '') + '">';
								highItem += '<div class="data"><span>' + dateD + '</span><span class="ie8Time">' + dateYm + '</span></div>'
								highItem += '<div class="text"><h4><a href="' + data[3].infoList[i].linkurl + '" target="_blank">' + (data[3].infoList[i].simple_title == '' || data[3].infoList[i].simple_title == null ? common.filterHTMLTag(data[3].infoList[i].title) :common.filterHTMLTag(data[3].infoList[i].simple_title)) + '</a></h4><p><a href="' + data[3].infoList[i].linkurl + '" target="_blank">' + data[3].infoList[i].description + '</a></p></div>';
								highItem += '</li>';
							}
						}
						if (i >= 4) {break;};
					}
				}
				//$("#highRise").append(itemHtml);
				$("#hightLights").append(itemHtml); //要闻聚焦列表数据前两条
				
				if(data[3] !=null ||data[3] != ''||data[3].length !=0){
					var itemHtml = '';
					var imgHtml = '';
					var highItem = '';
					var highItemImg = '';
					//左侧图片区域
					if (data[3].ImgInfo != null && data[3].ImgInfo != undefined && data[3].ImgInfo != '' && data[3].ImgInfo.length != 0) {
				
						//TODO 去掉后两个轮播图，只留一个 for(var i=0;i<data[3].ImgInfo.length;i++){
						// for(var i=0;i<1;i++){
						if(data[3].ImgInfo.length < 2){
							$('#pagination').css('display', 'none')
						}
						for(var i=0;i<data[3].ImgInfo.length;i++){
							imgHtml += '<div class="swiper-slide">'
							if(data[3].ImgInfo[i].linkurl ==''||data[3].ImgInfo[i].linkurl ==null||data[3].ImgInfo[i].linkurl ==undefined){
								imgHtml += '<a href="' + common.webUrl + 'organizationGardenDetails.html?htmlPage=HighRiseVoice&pid=' + commonParams.importNew + '&sid=' + commonParams.highRisey + '&infoId=' + data[3].ImgInfo[i].outside_id + '" target="_blank"><img onerror=common.imageError(this,"images/index/noImgBig.png") src="' + (common.imgUrl + data[3].ImgInfo[i].picurl) + '"><p class="tp_title"><span>' + data[3].ImgInfo[i].title + '</span></p></a></div>';
								
							}else{
								imgHtml += '<a href="' +  data[3].ImgInfo[i].linkurl + '" target="_blank"><img onerror=common.imageError(this,"images/index/noImgBig.png") src="' + (common.imgUrl + data[3].ImgInfo[i].picurl) + '"><p class="tp_title"><span>' + data[3].ImgInfo[i].title + '</span></p></a></div>';
							}
						}
					} else {
						imgHtml += '<div class="tabSwiperTitle"><img onerror=common.imageError(this,"images/index/noImgBig.png") src="images/index/noImgBig.png" /><p class="tp_title tp_title1"><span></span> </p></div>'
					}
					
					$('#hightLightsImg').html(imgHtml);
					var swiper1 = new Swiper('.swiper1', {
						loop: true,
						autoplayDisableOnInteraction: false,
						autoplay: 3000,
						paginationClickable: true,
						pagination: '.pagination', //分页容器的css选择器
						observer: true,
						observeParents: true
					});
				}
			}
			
		}, 'GET', true)
			
		}, 'GET', true);
     
//		if(data[3] !=null ||data[3] != ''||data[3].length !=0){
//				var itemHtml = '';
//				var imgHtml = '';
//				var highItem = '';
//				var highItemImg = '';
//				//左侧图片区域
//				if (data[3].ImgInfo != null && data[3].ImgInfo != undefined && data[3].ImgInfo != '' && data[3].ImgInfo.length != 0) {
//			
//					for(var i=0;i<data[3].ImgInfo.length;i++){
//						imgHtml += '<div class="swiper-slide">'
//						if(data[3].ImgInfo[i].linkurl ==''||data[3].ImgInfo[i].linkurl ==null||data[3].ImgInfo[i].linkurl ==undefined){
//							imgHtml += '<a href="' + common.webUrl + 'organizationGardenDetails.html?htmlPage=HighRiseVoice&pid=' + commonParams.importNew + '&sid=' + commonParams.highRisey + '&infoId=' + data[3].ImgInfo[i].outside_id + '" target="_blank"><img onerror=common.imageError(this,"images/index/noImgBig.png") src="' + (common.imgUrl + data[3].ImgInfo[i].picurl) + '"><p class="tp_title"><span>' + data[3].ImgInfo[i].title + '</span></p></a></div>';
//							
//						}else{
//							imgHtml += '<a href="' +  data[3].ImgInfo[i].linkurl + '" target="_blank"><img onerror=common.imageError(this,"images/index/noImgBig.png") src="' + (common.imgUrl + data[3].ImgInfo[i].picurl) + '"><p class="tp_title"><span>' + data[3].ImgInfo[i].title + '</span></p></a></div>';
//						}
//					}
//				} else {
//					imgHtml += '<div class="tabSwiperTitle"><img onerror=common.imageError(this,"images/index/noImgBig.png") src="images/index/noImgBig.png" /><p class="tp_title tp_title1"><span></span> </p></div>'
//				}
//				
//				$('#hightLightsImg').html(imgHtml);
//			
//			}
		
	
		//tab跳转
		var listHtml = 'HighRiseVoice.html'; //跳转页面
		$('#highLightsTab').attr({
			"href": listHtml + "?pid=" + commonParams.importNew + "&sid=null"
		});
		$('#highRiseTab').attr({
			"href": listHtml + "?pid=" + commonParams.importNew + "&sid=" + commonParams.highRisey
		});
		
		$('#myTab li').mouseover(function(){
			if(tabIndex!=0 && $(this).index()==0){
				setTimeout(function(){
					var span=document.querySelector('.pagination').querySelectorAll('span');
										
					for(var i=0;i<span.length;i++){
						if(span[i].className.indexOf('swiper-active-switch')>-1) {
							if(i<span.length-1) var num=i+1;
							else var num=0;
							span[num].click();
							break;
						}
					}
				},1000)
			}
			tabIndex=$(this).index()
			
		});
	
		//鼠标移上列表把默认选中去掉
		$('#highRise li').mouseover(function(){
			$(this).siblings().removeClass('active');
		});
		if(data[0] !=null ||data[0] != ''||data[0].length !=0){
			var itemHtml = '';
			var imgHtml = '';
			var highItem = '';
			var highItemImg = '';
			//左侧图片区域
			if (data[0].ImgInfo != null && data[0].ImgInfo != undefined && data[0].ImgInfo != '' && data[0].ImgInfo.length != 0) {
				if (data[0].ImgInfo[0].linkurl == '' || data[0].ImgInfo[0].linkurl == null || data[0].ImgInfo[0].linkurl == undefined) {
					imgHtml += '<div class="tabSwiperTitle"><a href="' + common.webUrl + 'organizationGardenDetails.html?htmlPage=HighRiseVoice&pid=' + commonParams.importNew + '&sid=' + commonParams.highRisey + '&infoId=' + data[0].ImgInfo[0].outside_id + '" target="_blank"><img onerror=common.imageError(this,"images/index/noImgBig.png") src="' + (common.imgUrl + data[0].ImgInfo[0].picurl) + '" /><p class="tp_title tp_title1"><span>' + data[0].ImgInfo[0].title + '</span></p></a></div>';
					highItemImg += '<div class="swiper-slide"><a href="' + common.webUrl + 'organizationGardenDetails.html?htmlPage=HighRiseVoice&pid=' + commonParams.importNew + '&sid=' + commonParams.highRisey + '&infoId=' + data[0].ImgInfo[0].outside_id + '" target="_blank"><img onerror=common.imageError(this,"images/index/noImgBig.png") src="' + (common.imgUrl + data[0].ImgInfo[0].picurl) + '"><p class="tp_title"><span>' + data[0].ImgInfo[0].title + '</span></p></a></div>';
	
				} else {
					imgHtml += '<div class="tabSwiperTitle"><a href="' + data[0].ImgInfo[0].linkurl + '" target="_blank"><img onerror=common.imageError(this,"images/index/noImgBig.png") src="' + (common.imgUrl + data[0].ImgInfo[0].picurl) + '" /><p class="tp_title tp_title1"><span>' + data[0].ImgInfo[0].title + '</span></p></a></div>';
					highItemImg += '<div class="swiper-slide"><a href="' + data[0].ImgInfo[0].linkurl + '" target="_blank"><img onerror=common.imageError(this,"images/index/noImgBig.png") src="' + (common.imgUrl + data[0].ImgInfo[0].picurl) + '"><p class="tp_title"><span>' + data[0].ImgInfo[0].title + '</span></p></a></div>';
				}
			} else {
				imgHtml += '<div class="tabSwiperTitle"><img onerror=common.imageError(this,"images/index/noImgBig.png") src="images/index/noImgBig.png" /><p class="tp_title tp_title1"><span></span> </p></div>'
			}
			$("#highRiseImg").append(imgHtml);
			$("#importantNewsImg").append(imgHtml);//龙江要闻 都用高层声音的图
			$("#apiUrl").append(imgHtml);//部领导活动 都用高层声音的图
			//$('#hightLightsImg').append(highItemImg);
			//右侧列表
			if (data[0].infoList != null && data[0].infoList != undefined && data[0].infoList != '' && data[0].infoList.length != 0) {
				//改版显示四条，接口直接返回5条数据，不用后端改了，所以就 -1 
				for (var i = 0; i < data[0].infoList.length - 1; i++) {
	//				var title = common.filterHTMLTag(data[0].infoList[i].title);
					var uptime = data[0].infoList[i].uptime;
					var dateYm = uptime.slice(0, 7);
					var dateD = uptime.slice(8, 10);			
					if (data[0].infoList[i].linkurl == '' || data[0].infoList[i].linkurl == null || data[0].infoList[i].linkurl == undefined) {
						itemHtml += '<li class="' + (i == 0 ? 'active' : '') + '">';
						itemHtml += '<div class="data"><span>' + dateD + '</span><span class="ie8Time">' + dateYm + '</span></div>'
						itemHtml += '<div class="text"><h4><a href="' + common.webUrl + 'organizationGardenDetails.html?htmlPage=HighRiseVoice&pid=' + commonParams.importNew + '&sid=' + commonParams.highRise + '&infoId=' + data[0].infoList[i].outside_id + '" target="_blank">' + (data[0].infoList[i].simple_title == '' || data[0].infoList[i].simple_title == null ? common.filterHTMLTag(data[0].infoList[i].title) :common.filterHTMLTag(data[0].infoList[i].simple_title)) + '</a></h4><p><a href="' + common.webUrl + 'organizationGardenDetails.html?htmlPage=HighRiseVoice&pid=' + commonParams.importNew + '&sid=' + commonParams.highRise + '&infoId=' + data[0].infoList[i].outside_id + '" target="_blank">' + data[0].infoList[i].description + '</a></p></div>';
						itemHtml += '</li>';
						if (i <= 1) {
							highItem += '<li class="' + (i == 0 ? 'active' : '') + '">';
							highItem += '<div class="data"><span>' + dateD + '</span><span class="ie8Time">' + dateYm + '</span></div>'
							highItem += '<div class="text"><h4><a href="' + common.webUrl + 'organizationGardenDetails.html?htmlPage=HighRiseVoice&pid=' + commonParams.importNew + '&sid=' + commonParams.highRise + '&infoId=' + data[0].infoList[i].outside_id + '" target="_blank">' + (data[0].infoList[i].simple_title == '' || data[0].infoList[i].simple_title == null ? common.filterHTMLTag(data[0].infoList[i].title) :common.filterHTMLTag(data[0].infoList[i].simple_title)) + '</a></h4><p><a href="' + common.webUrl + 'organizationGardenDetails.html?htmlPage=HighRiseVoice&pid=' + commonParams.importNew + '&sid=' + commonParams.highRise + '&infoId=' + data[0].infoList[i].outside_id + '" target="_blank">' + data[0].infoList[i].description + '</p></a></div>';
							highItem += '</li>';
						}
					} else {
						itemHtml += '<li class="' + (i == 0 ? 'active' : '') + '">';
						itemHtml += '<div class="data"><span>' + dateD + '</span><span class="ie8Time">' + dateYm + '</span></div>'
						itemHtml += '<div class="text"><h4><a href="' + data[0].infoList[i].linkurl + '" target="_blank">' + (data[0].infoList[i].simple_title == '' || data[0].infoList[i].simple_title == null ? common.filterHTMLTag(data[0].infoList[i].title) :common.filterHTMLTag(data[0].infoList[i].simple_title)) + '</a></h4><p><a href="' + data[0].infoList[i].linkurl + '" target="_blank">' + data[0].infoList[i].description + '</a></p></div>';
						itemHtml += '</li>';
						if (i <= 1) {
							highItem += '<li class="' + (i == 0 ? 'active' : '') + '">';
							highItem += '<div class="data"><span>' + dateD + '</span><span class="ie8Time">' + dateYm + '</span></div>'
							highItem += '<div class="text"><h4><a href="' + data[0].infoList[i].linkurl + '" target="_blank">' + (data[0].infoList[i].simple_title == '' || data[0].infoList[i].simple_title == null ? common.filterHTMLTag(data[0].infoList[i].title) :common.filterHTMLTag(data[0].infoList[i].simple_title)) + '</a></h4><p><a href="' + data[0].infoList[i].linkurl + '" target="_blank">' + data[0].infoList[i].description + '</a></p></div>';
							highItem += '</li>';
						}
					}
					if (i >= 4) {break;};
				}
			}
			$("#highRise").append(itemHtml);
		//	$("#hightLights").append(highItem); //要闻聚焦列表数据前两条
		}
	
		//tab跳转
		var listHtml = 'HighRiseVoice.html'; //跳转页面
		$('#highLightsTab').attr({
			"href": listHtml + "?pid=" + commonParams.importNew + "&sid=null"
		});
		$('#highRiseTab').attr({
			"href": listHtml + "?pid=" + commonParams.importNew + "&sid=" + commonParams.highRisey
		});
		//鼠标移上列表把默认选中去掉
		$('#highRise li').mouseover(function(){
			
			$(this).siblings().removeClass('active');
		});
		
		//龙江要闻（张庆伟）
		if(data[1] !=null ||data[1] != ''||data[1].length !=0){
			var itemHtml = '';
			var imgHtml = '';
			var highItem = '';
			var highItemImg = '';
			//左侧图片区域
			if (data[1].ImgInfo != null && data[1].ImgInfo != undefined && data[1].ImgInfo != '' && data[1].ImgInfo.length != 0) {
				if (data[1].ImgInfo[0].linkurl == '' || data[1].ImgInfo[0].linkurl == null || data[1].ImgInfo[0].linkurl == undefined) {
					imgHtml += '<div class="tabSwiperTitle"><a href="' + common.webUrl + 'organizationGardenDetails.html?htmlPage=HighRiseVoice&pid=' + commonParams.importNew + '&sid=' + commonParams.importantNewsTab + '&infoId=' + data[1].ImgInfo[0].outside_id + '" target="_blank"><img onerror=common.imageError(this,"images/index/noImgBig.png") src="' + (common.imgUrl  + data[1].ImgInfo[0].picurl) + '" /><p class="tp_title tp_title1"><span>' + data[1].ImgInfo[0].title + '</span> </p></a></div>';
					highItemImg += '<div class="swiper-slide"><a href="' + common.webUrl + 'organizationGardenDetails.html?htmlPage=HighRiseVoice&pid=' + commonParams.importNew + '&sid=' + commonParams.importantNewsTab + '&infoId=' + data[1].ImgInfo[0].outside_id + '" target="_blank"><img onerror=common.imageError(this,"images/index/noImgBig.png") src="' + (common.imgUrl + data[1].ImgInfo[0].picurl) + '"><p class="tp_title"><span>' + data[1].ImgInfo[0].title + '</span></p></a></div>';
				} else {
					imgHtml += '<div class="tabSwiperTitle"><a href="' + data[1].ImgInfo[0].linkurl + '" target="_blank"><img onerror=common.imageError(this,"images/index/noImgBig.png") src="' + (common.imgUrl + data[1].ImgInfo[0].picurl) + '" /><p class="tp_title tp_title1"><span>' + data[1].ImgInfo[0].title + '</span> </p></a></div>';
					highItemImg += '<div class="swiper-slide"><a href="' + data[1].ImgInfo[0].linkurl + '" target="_blank"><img onerror=common.imageError(this,"images/index/noImgBig.png") src="' + (common.imgUrl + data[1].ImgInfo[0].picurl) + '"><p class="tp_title"><span>' + data[1].ImgInfo[0].title + '</span></p></a></div>';
				}
	
			} else {
				imgHtml += '<div class="tabSwiperTitle"><img onerror=common.imageError(this,"images/index/noImgBig.png") src="images/index/noImgBig.png" /><p class="tp_title tp_title1"><span></span> </p></div>'
			}
			// $("#importantNewsImg").append(imgHtml);
			//$('#hightLightsImg').append(highItemImg);
			//右侧列表
			if (data[1].infoList != null && data[1].infoList != undefined && data[1].infoList != '' && data[1].infoList.length != 0) {
				//改版显示四条，接口直接返回5条数据，不用后端改了，所以就 -1 
				for (var i = 0; i < data[1].infoList.length - 1; i++) {
					var uptime = data[1].infoList[i].uptime;
					var dateYm = uptime.slice(0, 7);
					var dateD = uptime.slice(8, 10);
	
					if (data[1].infoList[i].linkurl == '' || data[1].infoList[i].linkurl == null || data[1].infoList[i].linkurl == undefined) {
						itemHtml += '<li class="' + (i == 0 ? 'active' : '') + '">';
						itemHtml += '<div class="data"><span>' + dateD + '</span><span class="ie8Time">' + dateYm + '</span></div>'
						itemHtml += '<div class="text"><h4><a href="' + common.webUrl + 'organizationGardenDetails.html?htmlPage=HighRiseVoice&pid=' + commonParams.importNew + '&sid=' + commonParams.importantNewsTab + '&infoId=' + data[1].infoList[i].outside_id + '" target="_blank">' + (data[1].infoList[i].simple_title == '' || data[1].infoList[i].simple_title == null ? common.filterHTMLTag(data[1].infoList[i].title) :common.filterHTMLTag(data[1].infoList[i].simple_title)) + '</a></h4><p><a href="' + common.webUrl + 'organizationGardenDetails.html?htmlPage=HighRiseVoice&pid=' + commonParams.importNew + '&sid=' + commonParams.importantNewsTab + '&infoId=' + data[1].infoList[i].outside_id + '" target="_blank">' + data[1].infoList[i].description + '</a></p></div>';
						itemHtml += '</li>';
						if (i <= 1) {
							highItem += '<li>';
							highItem += '<div class="data"><span>' + dateD + '</span><span class="ie8Time">' + dateYm + '</span></div>'
							highItem += '<div class="text"><h4><a href="' + common.webUrl + 'organizationGardenDetails.html?htmlPage=HighRiseVoice&pid=' + commonParams.importNew + '&sid=' + commonParams.importantNewsTab + '&infoId=' + data[1].infoList[i].outside_id + '" target="_blank">' + (data[1].infoList[i].simple_title == '' || data[1].infoList[i].simple_title == null ? common.filterHTMLTag(data[1].infoList[i].title) :common.filterHTMLTag(data[1].infoList[i].simple_title)) + '</a></h4><p><a href="' + common.webUrl + 'organizationGardenDetails.html?htmlPage=HighRiseVoice&pid=' + commonParams.importNew + '&sid=' + commonParams.importantNewsTab + '&infoId=' + data[1].infoList[i].outside_id + '" target="_blank">' + data[1].infoList[i].description + '</a></p></div>';
							highItem += '</li>';
						}
					} else {
						itemHtml += '<li class="' + (i == 0 ? 'active' : '') + '">';
						itemHtml += '<div class="data"><span>' + dateD + '</span><span class="ie8Time">' + dateYm + '</span></div>'
						itemHtml += '<div class="text"><h4><a href="' + data[1].infoList[i].linkurl + '" target="_blank">' + (data[1].infoList[i].simple_title == '' || data[1].infoList[i].simple_title == null ? common.filterHTMLTag(data[1].infoList[i].title) :common.filterHTMLTag(data[1].infoList[i].simple_title)) + '</a></h4><p><a href="' + data[1].infoList[i].linkurl + '" target="_blank">' + data[1].infoList[i].description + '</a></p></div>';
						itemHtml += '</li>';
						if (i <= 1) {
							highItem += '<li>';
							highItem += '<div class="data"><span>' + dateD + '</span><span class="ie8Time">' + dateYm + '</span></div>'
							highItem += '<div class="text"><h4><a href="' + data[1].infoList[i].linkurl + '" target="_blank">' + (data[1].infoList[i].simple_title == '' || data[1].infoList[i].simple_title == null ? common.filterHTMLTag(data[1].infoList[i].title) :common.filterHTMLTag(data[1].infoList[i].simple_title)) + '</a></h4><p><a href="' + data[1].infoList[i].linkurl + '" target="_blank">' + data[1].infoList[i].description + '</a></p></div>';
							highItem += '</li>';
						}
					}
	
					if (i >= 4) { break;};
				}
			}
			$("#importantNews").append(itemHtml);
			//$("#hightLights").append(highItem); //要闻聚焦列表数据中间两条
		}
		
		//tab跳转
		var listHtml = 'HighRiseVoice.html'; //跳转页面
		$('#importantNewsTab').attr({
			"href": listHtml + "?pid=" + commonParams.importNew + "&sid=" + commonParams.importantNewsy
		});
		//鼠标移上列表把默认选中去掉
		$('#importantNews li').mouseover(function(){
			$(this).siblings().removeClass('active');
		});
		
		
		//部领导活动（栏目）
		common.ajaxUtil(common.fullModel + '/infoListAPI/getImageAndInfoByInfoClass',
		paramBLD, function(res){
			
		if(res !=null ||res != ''||res.length !=0){
			var itemHtml = '';
			var imgHtml = '';
			var highItem = '';
			var highItemImg = '';
			//左侧图片区域
			if (res.ImgInfo != null && res.ImgInfo != undefined && res.ImgInfo != '' && res.ImgInfo.length != 0) {
				if (res.ImgInfo[0].linkurl == '' ||res.ImgInfo[0].linkurl == null || res.ImgInfo[0].linkurl == undefined) {
				
					imgHtml += '<div class="tabSwiperTitle">'
					imgHtml += '<a href="' + common.webUrl + 'organizationGardenDetails.html?htmlPage=HighRiseVoice&pid=' + commonParams.importNew + '&sid=' + commonParams.leaderActiveTab + '&infoId=' + res.ImgInfo[0].outside_id + '" target="_blank">'
					imgHtml += '<img onerror=common.imageError(this,"images/index/noImgBig.png") src="' + (common.imgUrl + res.ImgInfo[0].picurl) + '" /><p class="tp_title tp_title1"><span>' + res.ImgInfo[0].title + '</span> </p></a></div>';
					highItemImg += '<div class="swiper-slide"><a href="' + common.webUrl + 'organizationGardenDetails.html?htmlPage=HighRiseVoice&pid=' + commonParams.importNew + '&sid=' + commonParams.leaderActiveTab + '&infoId=' + res.ImgInfo[0].outside_id + '" target="_blank"><img onerror=common.imageError(this,"images/index/noImgBig.png") src="' + (common.imgUrl + res.ImgInfo[0].picurl) + '"><p class="tp_title"><span>' + res.ImgInfo[0].title + '</span></p></a></div>';
				} else {
					
					imgHtml += '<div class="tabSwiperTitle"><a href="' + res.ImgInfo[0].linkurl + '" target="_blank"><img onerror=common.imageError(this,"images/index/noImgBig.png") src="' + (common.imgUrl + res.ImgInfo[0].picurl) + '" /><p class="tp_title tp_title1"><span>' + res.ImgInfo[0].title + '</span> </p></a></div>';
					highItemImg += '<div class="swiper-slide"><a href="' + res.ImgInfo[0].linkurl + '" target="_blank"><img onerror=common.imageError(this,"images/index/noImgBig.png") src="' + (common.imgUrl + res.ImgInfo[0].picurl) + '"><p class="tp_title"><span>' + res.ImgInfo[0].title + '</span></p></a></div>';
				}
	
			} else {
				imgHtml += '<div class="tabSwiperTitle"><img onerror=common.imageError(this,"images/index/noImgBig.png") src="images/index/noImgBig.png" /><p class="tp_title tp_title1"><span></span> </p></div>'
			}
			$("#leaderActivitiesImg").append(imgHtml);
			// $("#apiUrl").append(imgHtml);
//			 $('#hightLightsImg').append(highItemImg);

			//右侧列表
			if (res.infoList != null && res.infoList != undefined && res.infoList != '' && res.infoList.length != 0) {
				//改版显示四条，接口直接返回5条数据，不用后端改了，所以就 -1 
				for (var i = 0; i < res.infoList.length - 1; i++) {
					var uptime = res.infoList[i].uptime;
					var dateYm = uptime.slice(0, 7);
					var dateD = uptime.slice(8, 10);
					if (res.infoList[i].linkurl == '' || res.infoList[i].linkurl == null || res.infoList[i].linkurl == undefined) {
						itemHtml += '<li class="' + (i == 0 ? 'active' : '') + '">';
						itemHtml += '<div class="data"><span>' + dateD + '</span><span class="ie8Time">' + dateYm + '</span></div>'
						itemHtml += '<div class="text"><h4><a href="' + common.webUrl + 'organizationGardenDetails.html?htmlPage=HighRiseVoice&pid=' + commonParams.importNew + '&sid=' + commonParams.leaderActiveTab + '&infoId=' + res.infoList[i].outside_id + '" target="_blank">' + (res.infoList[i].simple_title == '' || res.infoList[i].simple_title == null ? common.filterHTMLTag(res.infoList[i].title) :common.filterHTMLTag(res.infoList[i].simple_title)) + '</a></h4><p><a href="' + common.webUrl + 'organizationGardenDetails.html?htmlPage=HighRiseVoice&pid=' + commonParams.importNew + '&sid=' + commonParams.leaderActiveTab + '&infoId=' + res.infoList[i].outside_id + '" target="_blank">' + res.infoList[i].description + '</a></p></div>';
						itemHtml += '</li>';
						if (i <= 0) {
							highItem += '<li>';
							highItem += '<div class="data"><span>' + dateD + '</span><span class="ie8Time">' + dateYm + '</span></div>'
							highItem += '<div class="text"><h4><a href="' + common.webUrl + 'organizationGardenDetails.html?htmlPage=HighRiseVoice&pid=' + commonParams.importNew + '&sid=' + commonParams.leaderActiveTab + '&infoId=' + res.infoList[i].outside_id + '" target="_blank">' + (res.infoList[i].simple_title == '' || res.infoList[i].simple_title == null ? common.filterHTMLTag(res.infoList[i].title) :common.filterHTMLTag(res.infoList[i].simple_title)) + '</a></h4><p><a href="' + common.webUrl + 'organizationGardenDetails.html?htmlPage=HighRiseVoice&pid=' + commonParams.importNew + '&sid=' + commonParams.leaderActiveTab + '&infoId=' + res.infoList[i].outside_id + '" target="_blank">' + res.infoList[i].description + '</a></p></div>';
							highItem += '</li>';
						}
					} else {
						itemHtml += '<li class="' + (i == 0 ? 'active' : '') + '">';
						itemHtml += '<div class="data"><span>' + dateD + '</span><span class="ie8Time">' + dateYm + '</span></div>'
						itemHtml += '<div class="text"><h4><a href="' + res.infoList[i].linkurl + '" target="_blank">' + (res.infoList[i].simple_title == '' || res.infoList[i].simple_title == null ? common.filterHTMLTag(res.infoList[i].title) :common.filterHTMLTag(res.infoList[i].simple_title)) + '</a></h4><p><a href="' + res.infoList[i].linkurl + '" target="_blank">' + res.infoList[i].description + '</a></p></div>';
						itemHtml += '</li>';
						if (i <= 0) {
							highItem += '<li>';
							highItem += '<div class="data"><span>' + dateD + '</span><span class="ie8Time">' + dateYm + '</span></div>'
							highItem += '<div class="text"><h4><a href="' + res.infoList[i].linkurl + '" target="_blank">' + (res.infoList[i].simple_title == '' || res.infoList[i].simple_title == null ? common.filterHTMLTag(res.infoList[i].title) :common.filterHTMLTag(res.infoList[i].simple_title)) + '</a></h4><p><a href="' + res.infoList[i].linkurl + '" target="_blank">' + res.infoList[i].description + '</a></p></div>';
							highItem += '</li>';
						}
					}
	
					if (i >= 4) {break;};
				}
			}
			$("#leaderActivities").append(itemHtml);
		//	$("#hightLights").append(highItem); //要闻聚焦列表数据最后一条
			//tab跳转
			var listHtml = 'HighRiseVoice.html'; //跳转页面
			$('#leaderActivitiesTab').attr({"href": listHtml + "?pid=" + commonParams.importNew + "&sid=" + commonParams.leaderActiveTab});
			//鼠标移上列表把默认选中去掉
			$('#leaderActivities li,#hightLights li').mouseover(function(){
				$(this).siblings().removeClass('active');
			})
			
		}
		
		})
		
		initSize();
		$('#myTab').show();
//		var swiper1 = new Swiper('.swiper1', {
//			loop: true,
//			autoplayDisableOnInteraction: false,
//			autoplay: 3000,
//			paginationClickable: true,
//			pagination: '.pagination', //分页容器的css选择器
//			observer: true,
//			observeParents: true
//		});
		
     //党代会
     common.ajaxUtil(common.fullModel + '/infoListAPI/getHomePageImageAndInfo', paramsJ.ddhData, callbackJ.ddhData, 'GET', true);
     

	},
	ddhData(data){
		
		//data=data[0]
		
		if(data !=null ||data != ''||data.length !=0){
		
			var itemHtml = '';
								var imgHtml = '';
								var highItem = '';
								var highItemImg = '';
								//左侧图片区域
								if (data.ImgInfo != null && data.ImgInfo != undefined && data.ImgInfo != '' && data.ImgInfo.length != 0) {
									if (data.ImgInfo[0].linkurl == '' || data.ImgInfo[0].linkurl == null || data.ImgInfo[0].linkurl == undefined) {
										imgHtml += '<div class="tabSwiperTitle"><a href="' + common.webUrl + 'organizationGardenDetails.html?htmlPage=HighRiseVoice&pid=' + commonParams.importNew + '&sid=' + commonParams.dlhTab + '&infoId=' + data.ImgInfo[0].outside_id + '" target="_blank"><img onerror=common.imageError(this,"images/index/noImgBig.png") src="' + (common.imgUrl + data.ImgInfo[0].picurl) + '" /><p class="tp_title tp_title1"><span>' + data.ImgInfo[0].title + '</span> </p></a></div>';
										highItemImg += '<div class="swiper-slide"><a href="' + common.webUrl + 'organizationGardenDetails.html?htmlPage=HighRiseVoice&pid=' + commonParams.importNew + '&sid=' + commonParams.dlhTab + '&infoId=' + data.ImgInfo[0].outside_id + '" target="_blank"><img onerror=common.imageError(this,"images/index/noImgBig.png") src="' + (common.imgUrl + data.ImgInfo[0].picurl) + '"><p class="tp_title"><span>' + data.ImgInfo[0].title + '</span></p></a></div>';
									} else {
										imgHtml += '<div class="tabSwiperTitle"><a href="' + data.ImgInfo[0].linkurl + '" target="_blank"><img onerror=common.imageError(this,"images/index/noImgBig.png") src="' + (common.imgUrl + data.ImgInfo[0].picurl) + '" /><p class="tp_title tp_title1"><span>' + data.ImgInfo[0].title + '</span> </p></a></div>';
										highItemImg += '<div class="swiper-slide"><a href="' + data.ImgInfo[0].linkurl + '" target="_blank"><img onerror=common.imageError(this,"images/index/noImgBig.png") src="' + (common.imgUrl + data.ImgInfo[0].picurl) + '"><p class="tp_title"><span>' + data.ImgInfo[0].title + '</span></p></a></div>';
									}
						
								} else {
									imgHtml += '<div class="tabSwiperTitle"><img onerror=common.imageError(this,"images/index/noImgBig.png") src="images/index/noImgBig.png" /><p class="tp_title tp_title1"><span></span> </p></div>'
								}
								$("#dlhImg").append(imgHtml);
							
								//右侧列表
								if (data.infoList != null && data.infoList != undefined && data.infoList != '' && data.infoList.length != 0) {
						
									for (var i = 0; i < data.infoList.length; i++) {
										var uptime = data.infoList[i].uptime;
										var dateYm = uptime.slice(0, 7);
										var dateD = uptime.slice(8, 10);
										if (data.infoList[i].linkurl == '' || data.infoList[i].linkurl == null || data.infoList[i].linkurl == undefined) {
											itemHtml += '<li class="' + (i == 0 ? 'active' : '') + '">';
											itemHtml += '<div class="data"><span>' + dateD + '</span><span class="ie8Time">' + dateYm + '</span></div>'
											itemHtml += '<div class="text"><h4><a href="' + common.webUrl + 'organizationGardenDetails.html?htmlPage=HighRiseVoice&pid=' + commonParams.importNew + '&sid=' + commonParams.dlhTab + '&infoId=' + data.infoList[i].outside_id + '" target="_blank">' + (data.infoList[i].simple_title == '' || data.infoList[i].simple_title == null ? common.filterHTMLTag(data.infoList[i].title) :common.filterHTMLTag(data.infoList[i].simple_title)) + '</a></h4><p><a href="' + common.webUrl + 'organizationGardenDetails.html?htmlPage=HighRiseVoice&pid=' + commonParams.importNew + '&sid=' + commonParams.leaderActiveTab + '&infoId=' + data.infoList[i].outside_id + '" target="_blank">' + data.infoList[i].description + '</a></p></div>';
											itemHtml += '</li>';
											if (i <= 0) {
												highItem += '<li>';
												highItem += '<div class="data"><span>' + dateD + '</span><span class="ie8Time">' + dateYm + '</span></div>'
												highItem += '<div class="text"><h4><a href="' + common.webUrl + 'organizationGardenDetails.html?htmlPage=HighRiseVoice&pid=' + commonParams.importNew + '&sid=' + commonParams.dlhTab + '&infoId=' + data.infoList[i].outside_id + '" target="_blank">' + (data.infoList[i].simple_title == '' || data.infoList[i].simple_title == null ? common.filterHTMLTag(data.infoList[i].title) :common.filterHTMLTag(data.infoList[i].simple_title)) + '</a></h4><p><a href="' + common.webUrl + 'organizationGardenDetails.html?htmlPage=HighRiseVoice&pid=' + commonParams.importNew + '&sid=' + commonParams.leaderActiveTab + '&infoId=' + data.infoList[i].outside_id + '" target="_blank">' + data.infoList[i].description + '</a></p></div>';
												highItem += '</li>';
											}
										} else {
											itemHtml += '<li class="' + (i == 0 ? 'active' : '') + '">';
											itemHtml += '<div class="data"><span>' + dateD + '</span><span class="ie8Time">' + dateYm + '</span></div>'
											itemHtml += '<div class="text"><h4><a href="' + data.infoList[i].linkurl + '" target="_blank">' + (data.infoList[i].simple_title == '' || data.infoList[i].simple_title == null ? common.filterHTMLTag(data.infoList[i].title) :common.filterHTMLTag(data.infoList[i].simple_title)) + '</a></h4><p><a href="' + data.infoList[i].linkurl + '" target="_blank">' + data.infoList[i].description + '</a></p></div>';
											itemHtml += '</li>';
											if (i <= 0) {
												highItem += '<li>';
												highItem += '<div class="data"><span>' + dateD + '</span><span class="ie8Time">' + dateYm + '</span></div>'
												highItem += '<div class="text"><h4><a href="' + data.infoList[i].linkurl + '" target="_blank">' + (data.infoList[i].simple_title == '' || data.infoList[i].simple_title == null ? common.filterHTMLTag(data.infoList[i].title) :common.filterHTMLTag(data.infoList[i].simple_title)) + '</a></h4><p><a href="' + data.infoList[i].linkurl + '" target="_blank">' + data.infoList[i].description + '</a></p></div>';
												highItem += '</li>';
											}
										}
						
										if (i >= 4) {break;};
									}
								}
							
								$("#dlh").append(itemHtml);
								
								//tab跳转
								var listHtml = 'HighRiseVoice.html'; //跳转页面
									$('#dlhTab').attr({"href": listHtml + "?pid=" + commonParams.importNew + "&sid=" + commonParams.dlhTab});
								//鼠标移上列表把默认选中去掉
								$('#dlh li,#hightLights li').mouseover(function(){
									$(this).siblings().removeClass('active');
								})
								
								
						
		}
		
	}
}

var paramsJ = {
	//头条
	leadnews: {
		siteId: commonParams.siteId
	},
	// 高层声音（习大大）
	highRise: {
		siteId: commonParams.siteId,
		nodeId: commonParams.highRise + "," + commonParams.importantNews + "," +commonParams.leaderActivities + "," + commonParams.zhongId,
		imgPageSize: 1,
		infoPageSize:4
	},
	//党代会
	ddhData: {
		siteId: commonParams.siteId,
		nodeId:commonParams.dlhTab,
		imgPageSize: 1,
		infoPageSize: 5
	},
	//龙江要闻（张庆伟）
	importantNews: {
		siteId: commonParams.siteId,
		nodeId: commonParams.importantNews,
		imgPageSize: 1,
		infoPageSize: 4
	},
	//部领导活动（栏目）
	leaderActivities: {
		siteId: commonParams.siteId,
		nodeId: commonParams.leaderActivities,
		imgPageSize: 1,
		infoPageSize: 4
	}
}

$(function () {
//	$('#myTab').show();
	common.ajaxUtil(common.fullModel + '/infoListAPI/getBannerInfo', paramsJ.highRise, callbackJ.highRise, 'GET', true);
	
	//获取头条
	common.ajaxUtil(common.fullModel + '/infoListAPI/getHomePageHeadlineNews', paramsJ.leadnews, callbackJ.leadnews, 'GET', true);

	//TODO 改版去掉 获取顶部专题
	// common.ajaxUtil(common.fullModel + '/specialListAPI/getSpecialListByType', {type: 1}, callbackJ.topicTop, 'GET', true);
	

	//TODO顶部type 是1
	common.ajaxUtil(common.fullModel + '/specialListAPI/getSpecialListByType', {type: 1}, callbackJ.topicTop, 'GET', true);
	//TODO横幅type 是4
	common.ajaxUtil(common.fullModel + '/specialListAPI/getSpecialListByType', {type: 4}, callbackJ.topicHengfu, 'GET', true);
	//获中
	common.ajaxUtil(common.fullModel + '/specialListAPI/getSpecialListByType', {type: 2},callbackJ.topicMid, 'GET', true);
	//下
	common.ajaxUtil(common.fullModel + '/specialListAPI/getSpecialListByType', {type: 3},  callbackJ.topicBottom, 'GET', true);
	
	

	

	// 高层声音（习大大）
	//common.ajaxUtil(common.fullModel + '/infoListAPI/getHomePageImageAndInfo', paramsJ.highRise, callbackJ.highRise, 'GET', true);

	//龙江要闻（张庆伟）
//	common.ajaxUtil(common.fullModel + '/infoListAPI/getHomePageImageAndInfo', paramsJ.importantNews, callbackJ.importantNews, 'GET', true);

	//部领导活动（栏目）
//	common.ajaxUtil(common.fullModel + '/infoListAPI/getHomePageImageAndInfo', paramsJ.leaderActivities, callbackJ.leaderActivities, 'GET', true);
})


// TODO新增

function guanggao01(){
    // 获取轮播图数量
    const slides = document.querySelectorAll('.swiper_guanggao01 .swiper-slide');
    let swiperConfig = {
        loop: slides.length > 1,
        autoplayDisableOnInteraction: false,
        autoplay: slides.length > 1 ? 3000 : false,
        paginationClickable: slides.length > 1,
        observer: true,
        observeParents: true
    };

    // 当轮播图数量大于 1 时才设置分页器
    if (slides.length > 1) {
        swiperConfig.pagination = '#pagination_guanggao01';
    }

    let swiper = new Swiper('.swiper_guanggao01', swiperConfig);
}
function guanggao02(){
    // 获取轮播图数量
    const slides = document.querySelectorAll('.swiper_guanggao02 .swiper-slide');
    let swiperConfig = {
        loop: slides.length > 1,
        autoplayDisableOnInteraction: false,
        autoplay: slides.length > 1 ? 3000 : false,
        paginationClickable: slides.length > 1,
        observer: true,
        observeParents: true
    };

    // 当轮播图数量大于 1 时才设置分页器
    if (slides.length > 1) {
        swiperConfig.pagination = '#pagination_guanggao02';
    }

    let swiper = new Swiper('.swiper_guanggao02', swiperConfig);
}
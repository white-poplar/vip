function start(){
    var videoUrl = $('input').val();
	if(urlPass(videoUrl)){
        // 设置 sessionStorage
        sessionStorage.setItem("videoUrl", videoUrl);
		var url = "http://mv.688ing.com/player?url="+videoUrl;
        layui.use('layer', function(){
			  layer.open({
			  type: 2
			  ,title: "视频播放器"
              ,scrollbar: false
			  ,area: ['700px','550px']
			  ,content: url
			}); 
		});
	}else{
    	msg();
    }
}
function show(){
  	layui.use(['layer','element'], function(){
    	var index = layer.open({
            skin: 'layui-layer-molv'
            ,title:'打赏我，请我吃包辣条！'
  			,content: '<span style="display:block;text-align:center;font-size:20px;">微信扫一扫</span><img style="display:block;margin:0 auto;height:200px;width:200px;" src="images/wxpay.jpg"><span style="display:block;font-size:14px;text-align:center;margin-top:10px;">不打赏也可播放，感谢捐助</span>'
  			,area: '220px'
          	,scrollbar: false
          	,btn: ['直接播放']
          	,btnAlign: 'c'
  			,yes: function(index, layero){
              	layer.close(index);
   				start();
  			}
		});
    });
}

function msg(){
  	layui.use('layer', function(){
    	layer.msg('播放地址 (｡•́︿•̀｡)',{icon: 2});
    });
}

function urlPass(url){
	var reg=/^(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?$/;
    if(!reg.test(url)){
        return false;
    }
    return true;
}

function videoUrlSet() {
    var videoUrl = sessionStorage.getItem("videoUrl");
    if(videoUrl != null && videoUrl != ""){
        $('input').val(videoUrl);
    }
}

videoUrlSet();

// http://www.wmxz.wang/admin.php?url=  2019-2-12 20:50:54
// http://app.baiyug.cn:2019/vip/index.php?url=  2019-3-3 21:50:13
// http://mv.688ing.com/player?url= 2019-6-12 11:49:15

(function(){
    // 当同一方法中有多个ajax时, 要使用顺序执行, 默认是异步执行. asyns: false;
    var now;
    $.ajax({
        url: "http://api.lacknb.cn/api/time",
        method: "GET",
        dataType: "json",
        success: function(datas){
            now = datas.t
        },
        async: false
    });
    $.ajax({
        url: "http://api.lacknb.cn/api/one",
        data: {"token": (now / 9527).toString(16).split(".")[0], "type": "jsonp"}, 
        method: "GET",
        dataType: "jsonp",
        jsonpCallback: "one",
        success: function(data){
            var datas = data.datas
            console.log(datas);
            for (var i = 0; i < datas.length; i++){
                $('#max').append('<div class="img"><img src="' + datas[i].img +'" alt="摄影"></div><div class="text_container"><div class="text">' + datas[i].text + '</div></div><br><br>')
            }
        },
        error: function(error){
            console.log(4)
        },
        async: false
    });

}());
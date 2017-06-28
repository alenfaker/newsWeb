define(["jquery","artTemplate","text!tpl/newsControlTpl.html"],function($,art,newsControlTpl){
    return function (account) {
        // console.log(111111);
         // 获取新闻列表

        var page = (page || "1") -0;

            $.ajax({
            url:"http://127.0.0.1:9090/api/getnews",
            type: "get",
            data: {
                uname: "gaochao@itcast.cn",
                page: page,
            },
            success: function(data) {
                // console.log(data);
               var dat = JSON.parse(data);
            //    console.log(dat);

            //  console.log(Math.ceil(dat.totalLength / 5));
            var pageCount = Math.ceil(dat.totalLength / 5);
            var pageC = [];
            for(var i = 0; i < pageCount;i++) {
                pageC.push({peg:i+1});
            }
             dat.pageCount = pageC;
             console.log(dat);
                // console.log(typeof(datas));
         var newsControl = art.render(newsControlTpl,dat);
            console.log(newsControl);
             $newsControl = $(newsControl);

               //关键字搜索新闻
    //   $newsControl.on("click","#basic-addon2",function(){
    //     // alert(1);
    //       $.ajax({
    //         url:"http://127.0.0.1:9090/api/getkeynews",
    //         type: "get",
    //         data: {
    //             uname: account,
    //             page: page,
    //             keys: $("#newsControl .keyword").val(),
    //         },
    //         success: function(data) {
    //             console.log(data);
    //         }
    //     });
    //   })  
        $(".right-container").append( $newsControl);
            }
        });
       
       
    }
    // console.log(11111)
})
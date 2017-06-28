define(["jquery", "artTemplate", "text!tpl/addNewsTpl.html", "UEconfig", "UEditor", ], function ($, art, addNewsTpl) {
    return function (account) {
        // console.log(111111);
        // console.log(addNewsTpl);
        var addNews = art.render(addNewsTpl);
        var $addNews = $(addNews);
        // $("#addNews").remove();
       var  title = $("#addNews .title").val();
       var  describes = $("#addNews .describes").val();
       var  categorys = $("#addNews .categorys").val();

       var  content = $("#addNews .title").val();
        
       
        $addNews.appendTo($(".right-container"));
        //ue编辑器
        // console.log(UE);
        var ue = UE.getEditor('addUe'); 
        var content;
        ue.ready(function () {
            // ue.initialFrameHeight = 420;
            $("#addNews .btn-rest-text").click(function(){
                // ue.reset()
                // alert(1);
        //   UE.getEditor('editor').focus();
                content = ue.getContent();   
            });
        });
       $addNews.find("#submitBtn").on("click",function(e){
           e.preventDefault();
        //    alert(1);
            // console.log(account+$("#addNews .title").val()+"||"+$("#addNews .describes").val()+"||"+ $("#addNews .categorys").val()+"||"+ue.getContent());
            // e.preventDefault();
        //     var formData = $(this).serialize();
        //     var reg = /category=([\u4e00-\u9fa5_a-zA-Z0-9]*)/;
        //   var  cate1 = reg.exec(formData)[0];
        // //   console.log(cate1);
        //     console.log(formData);
        //     // console.log(categorys);
        //     return false;
         var  reg =/<img\b[^]*src\s*=\s*("[^>"]*")[^>]*>/ig; 
        //  var reg1 = /http||https:['"]?[^'"]*['"]?/g;
        var reg1 = /https:['"]?[^'"]*['"]?/g;
        //  console.log(ue.getContent());
        var imgString = reg.exec(ue.getContent())[0];
        // var acc =  '<img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=49292017,22064401&fm=28&gp=0.jpg"/><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3771287340,4264471813&fm=117&gp=0.jpg"/><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1511928397,1744182508&fm=28&gp=0.jpg"/>';
        // console.log(acc.match(reg1));

        var imArr = imgString.match(reg1);
        console.log(imArr);
                // console.log(imgString);
            //    while(reg1.exec(acc) != null) {
            //        imArr.push(reg1.exec(acc));
            //    }
            //    console.log(imArr);
            $.ajax({
                url: "http://127.0.0.1:9090/api/addnews",
                type: "post",
                data: {
                    title: '$("#addNews .title").val()',
                    describes: '$("#addNews .describes").val()',
                    content: ue.getContent(),
                    uname: account,
                    categorys: '$("#addNews .categorys").val()',
                    imgArr: imArr,
                },
                success: function(data) {
                    console.log(data);
                }
            });
        });   
    }
    // console.log(11111)
})
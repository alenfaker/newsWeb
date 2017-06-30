define(["jquery", "artTemplate", "text!tpl/editNewsTpl.html","kindeditor"], function ($, art, editNewsTpl) {
    return function (timestamp) {
        console.log(timestamp);
        $.ajax({
            url: "http://127.0.0.1:9090/api/getchangenews",
            type: "get",
            data: {
                uname: "gaochao@itcast.cn",
                timestamp: timestamp,
            },
            success: function (data) {
                console.log(data);
                var dat = jsoDat(data);
                console.log(dat[0]);
                var editNews = art.render(editNewsTpl,dat[0]);
                var $editNews = $(editNews);
                $("#editNewsModal").remove();
                // console.log($editNews.find(".categorys").attr("data-categorys"));
                var categorys = $editNews.find(".categorys").attr("data-categorys");
                var options = $editNews.find(".categorys").children();
                // console.log(options);
                       options.each(function(index,ele){
                        //    console.log(ele);
                        //    console.log($(ele).val());
                            if($(ele).val() == categorys) {
                                $(ele).attr("selected","selected");
                            }
                       })
                    // console.log( $("#editNewsModal"))
                $editNews.modal().appendTo($(".right-container"));
                    
               window.editor = K.create('#editor_id');
            }
        });

    }


    //格式化回来的数据
    function jsoDat(param) {
        var dat = JSON.parse(param);
        //    console.log(dat);

        //  console.log(Math.ceil(dat.totalLength / 5));
        var pageCount = Math.ceil(dat.totalLength / 5);
        var pageC = [];
        for (var i = 0; i < pageCount; i++) {
            pageC.push({
                peg: i + 1
            });
        }
        dat.pageCount = pageC;
        // console.log(dat);
        return dat;
    }
})
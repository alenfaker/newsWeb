define(["jquery", "artTemplate","text!tpl/newsControlTpl.html","editNews/editNews"], function ($, art,newsControlTpl,editNews) {
    return function (account) {
        // console.log(111111);
        // 获取新闻列表
        var page;
        getNews(page, function (dat) {
            $(".right-container").append($newsControl);
            // console.log(dat);
            $("#newsControl .pageControlBtn").children("li").on("click", function () {
                // alert(1);
                getNews($(this).text(), function (dat) {
                    addLi(dat);
                    // console.log(dat);
                    // var newLi = dat.datas;
                    // var str;
                    // console.log(newLi.length)
                    // $("#newsControl .newsList").empty();
                    // for (var i = 0; i < newLi.length; i++) {
                    //     $('<li> <div class="cont"><h3>' + newLi[i].title + '</h3><p>' + newLi[i].describes + '</p>' +
                    //         '<button class="btnDel btn btn-primary pull-right">删除</button>' +
                    //         '<button class="btnEdit btn btn-success pull-right">修改</button>' +
                    //         '</div></li>').appendTo($("#newsControl .newsList"));
                    // }

                });
            })
            // 删除新闻
            $("#newsControl").on("click", ".btnDel", function () {
                // alert(1);
              

            })
            //编辑新闻
            $("#newsControl").on("click", ".btnEdit", function () {
                // alert(1);
                  var timestamp = $(this).parent().attr("data-date");
                editNews(timestamp);
                // console.log(timestamp);
                // $.ajax(
                //     {
                //         url: "http://127.0.0.1:9090/api/getchangenews",
                //         type: "get",
                //         data: {
                //             uname: "gaochao@itcast.cn",
                //             timestamp: timestamp,
                //         },
                //         success: function(data) {
                //             console.log(data);
                //         }
                //     }
                // );
            })
            //关键字搜索新闻
            $("#newsControl").on("click", "#basic-addon2", function () {
                // alert(1);
                var key = $(".keyword").val()
                // console.log(account);
                // console.log(key);
                // console.log(page);
                $.ajax({
                    url: "http://127.0.0.1:9090/api/getkeynews",
                    type: "get",
                    data: {
                        uname: "gaochao@itcast.cn",
                        page: 1,
                        keys: key,
                    },
                    success: function (data1) {
                        // console.log(data);
                        var dat1 = jsoDat(data1);
                        console.log(dat1);
                        //  var searchLi = dat1.datas;
                        $(".pageControlBtn").empty();
                        var pageTotal = Math.ceil(dat1.totalLength / 5);
                            console.log(pageTotal);
                        for (var i = 0; i < pageTotal; i++) {
                            $("<li>" + (i + 1) + "</li>").appendTo($(".pageControlBtn"));
                        }
                        addLi(dat1);
                    }
                });
            })
        });



        //  获取数据
        function getNews(page, callback) {
            page = (page || "1") - 0;
            $.ajax({
                url: "http://127.0.0.1:9090/api/getnews",
                type: "get",
                data: {
                    uname: "gaochao@itcast.cn",
                    page: page,
                },
                success: function (data) {
                    // console.log(data);
                    // var dat = JSON.parse(data);
                    // //    console.log(dat);

                    // //  console.log(Math.ceil(dat.totalLength / 5));
                    // var pageCount = Math.ceil(dat.totalLength / 5);
                    // var pageC = [];
                    // for (var i = 0; i < pageCount; i++) {
                    //     pageC.push({
                    //         peg: i + 1
                    //     });
                    // }
                    // dat.pageCount = pageC;
                    // console.log(dat);
                    // console.log(typeof(datas));
                    // console.log(jsoDat (data));
                    var dat = jsoDat(data);
                    var newsControl = art.render(newsControlTpl, dat);
                    // console.log(newsControl);
                    $newsControl = $(newsControl);
                    callback(dat);
                    // console.log()
                    // //关键字搜索新闻
                    // $newsControl.on("click", "#basic-addon2", function () {
                    //     alert(1);
                    //     $.ajax({
                    //         url: "http://127.0.0.1:9090/api/getkeynews",
                    //         type: "get",
                    //         data: {
                    //             uname: account,
                    //             page: page,
                    //             keys: $("#newsControl .keyword").val(),
                    //         },
                    //         success: function (data) {
                    //             console.log(data);
                    //         }
                    //     });
                    // })
                    // $newsControl.find(".pageControlBtn").children("li").on("click", function () {
                    //     // alert(1);
                    //     // alert($(this).text());
                    //     getNews($(this).text(), function (dat) {
                    //         // console.log(dat);
                    //         var newLi = dat.datas;
                    //         var str;
                    //         console.log(newLi.length)
                    //         $("#newsControl .newsList").empty();
                    //         for (var i = 0; i < newLi.length; i++) {
                    //             $('<li> <div class="cont"><h3>' + newLi[i].title + '</h3><p>' + newLi[i].describes + '</p>' +
                    //                 '<button class="btnDel btn btn-primary pull-right">删除</button>' +
                    //                 '<button class="btnEdit btn btn-success pull-right">修改</button>' +
                    //                 '</div></li>').appendTo($("#newsControl .newsList"));
                    //         }
                    // //         // 删除新闻
                    // //         $("#newsControl").on("click", ".btnDel", function () {
                    // //             alert(1);
                    // //         })
                    // //         //编辑新闻
                    // //         $("#newsControl").on("click", ".btnEdit", function () {
                    // //             alert(1);
                    // //             return false;
                    // //         })
                    // //         console.log(str);
                    //     });
                    // })
                    // // 删除新闻
                    // $newsControl.find(".btnDel").on("click", function () {
                    //     alert(1);
                    // })
                    // //编辑
                    // $newsControl.find(".btnEdit").on("click", function () {
                    //     alert(1);
                    // })
                    // $("#newsControl").on("click", ".btnDel",function () {
                    //     alert(1);
                    // })
                    // $("#newsControl").on("click",".btnEdit", function () {
                    //     alert(1);
                    // })
                    //   $(".right-container").empty();
                    // console.log($newsControl.find(".lis li"));
                    // callback(dat);
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

        // 局部添加新闻li标签
        function addLi(objResult) {
            var newLi = objResult.datas;
            // console.log(newLi.length)
            $("#newsControl .newsList").empty();
            for (var i = 0; i < newLi.length; i++) {
                $('<li> <div class="cont" data-date= "'+ newLi[i].date +'"><h3>' + newLi[i].title + '</h3><p>' + newLi[i].describes + '</p>' +
                    '<button class="btnDel btn btn-primary pull-right">删除</button>' +
                    '<button class="btnEdit btn btn-success pull-right">修改</button>' +
                    '</div></li>').appendTo($("#newsControl .newsList"));
            }
        }
    }
    // console.log(11111)
})
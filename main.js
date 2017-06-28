//配置路径
require.config({
    baseUrl: "./js",
    paths: {
       jquery: "./lib/jquery-2.1.4",
       bootstrap: "../assets/bootstrap/js/bootstrap.min",
       cookie: "./lib/jquery.cookie", 
       artTemplate: "./lib/template-web",
       text:  "./lib/text",
       tpl: "../tpls",
       //UE主文件
       UEconfig: "../assets/UEditor/ueditor.config",
       UEditor: "../assets/UEditor/ueditor.all.min",
       //UE副文件
    },
    shim: {
        bootstrap: {
            deps: ["jquery"],
        },
        UEditor: {
             deps: ["UEconfig"]
        }
    }
}
);
//文件引入
require(["jquery","personalCenter/personalFile","addNews/addNews","newsControl/newsControl","changePassword/changePassword","bootstrap","common/checklogin"],function($,personalFile,addNews,newsControl,changePassword){
    // console.log(0);
    var account = $.cookie("uname");
    $(".user-info").text(account);
    // console.log(account)
    //个人信息
    $(".personal-file").click(function(){
        // alert(1)
        $(".right-container").empty();
        personalFile(account);
    });
    //添加新闻
     $(".add-news").click(function(){
        // alert(1)
        $(".right-container").empty();
        addNews(account);
    });
     //新闻操作
     $(".news-control").click(function(){
        // alert(1)
        $(".right-container").empty();
        newsControl(account);
    });
     //更改密码
     $(".change-password").click(function(){
        // alert(1)
        $(".right-container").empty();
        changePassword(account);
    });
});


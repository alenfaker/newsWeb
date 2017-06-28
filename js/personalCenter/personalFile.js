define(["jquery","artTemplate","text!tpl/personalFileTpl.html"],function($,art,personalFileTpl){
    return function (account) {
        // console.log(111111);
        // console.log(personalFileTpl);
        var personalFile = art.render(personalFileTpl);
        var $personalFile = $(personalFile);
        var date = new Date();
        $personalFile.find(".text-hello").text("亲爱的"+account+"欢迎你！，现在是"+date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+":"+date.getHours()+":"+date.getMinutes());
        $("#personal-file").remove();
        //  $(".right-container").css("background","#fff");
        $personalFile.appendTo($(".right-container")).modal();
        //  $(".right-container").css("background","#666");
        // $(".right-container").attr("background","#fff").append($personalFile);
    }
    // console.log(11111)
});
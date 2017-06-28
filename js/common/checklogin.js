define(["jquery","cookie"],function($){
      // 验证是否登录
    var userName = $.cookie("uname");
    console.log(123);
    console.log(userName);
    if(!userName) {
        window.location.href ="login.html";
    }
});
define(["jquery","common/api","artTemplate","text!tpl/changePassword.html"],function($,API,art,changePasswordTpl){
    return function (account) {
        // console.log(changePasswordTpl);
        // console.log(111111);
        console.log(account);
        var changePassword = art.render(changePasswordTpl);
        var $changePassword = $(changePassword);
        // console.log($changePassword);
        //   var password =  $("#editPswd .password").val();
        //   var updatapwd =  $("#editPswd .updatapwd").val();
          var formString =  $("#editPswd .password").val()+"&"+$("#editPswd .updatapwd").val();
            $changePassword.on("submit","form",function(e){
                // alert(111);
                    e.preventDefault();
                 console.log($("#editPswd .password").val()+"&"+$("#editPswd .updatapwd").val()+"&"+"&accout="+account);
                
                // formData = formString+"&accout="+account;
                // console.log(formData);
                if($("#editPswd .password").val()) {
                    // API.changePasword(account,$("#editPswd .password").val(),$("#editPswd .updatapwd").val(),function(data){
                    //     console.log(11111111);
                    // })
                    $.ajax({
                        url: "http://127.0.0.1:9090/api/updatapwd",
                        type: "get",
                        data: {
                            password: $("#editPswd .password").val(),
                            updatapwd: $("#editPswd .updatapwd").val(),
                            account: account,
                        },
                        success: function(data) {
                            // console.log(data);
                            if(data == "true") {
                                alert("密码修改成功");
                                $("#editPswd .password").val("");
                                $("#editPswd .updatapwd").val("");
                            }
                        }
                    });
                } else {
                    alert("请正确输入");
                }
                return false;
            })
        $(".right-container").append($changePassword);
    }
    // console.log(11111)
});
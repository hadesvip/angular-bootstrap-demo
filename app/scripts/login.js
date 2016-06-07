/**
 * Created by wy33082 on 2016/6/6.
 */
$.backstretch("../images/login-backgroup.jpg");

$(function () {
    $(".login-form").submit(function () {
        var username = $(".form-username").val();
        var password = $(".form-password").val();
        var url = "";
        var data = {"username": username, "password": password};
        $.post(url, data, function (data) {
            var result = data.result;
            if(result=='ok'){
                //页面跳转

            }else{
                //弹出提示框
                $("#tipModal").modal("show");
            }

        });

    });
});
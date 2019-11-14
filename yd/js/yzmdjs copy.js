// JavaScript Document
$(function () {
    //一对一
    $('#dosubmit').click(function(){
        var info = {};

        info.name=$("#name").val();
        info.subject=$("#subject").val();
        info.number=$("#tel").val();
        info.code=$("#codema").val();

        if (info.name== ''){
            alert('请填写姓名');
            return false;
        }
        if($("#subject option:selected").val()==0){
            alert('请选择专业名称');
            return false;
        }
        if (info.number== ''){
            alert('请填写手机号码');
            return false;
        }
        var reg = /^0?1[3465789]\d{9}$/; //手机号正则
        if(!reg.test(info.number)) { //验证手机号是否正确
            alert('请填写正确的手机号！');
            return false;
        }
        if (info.code== ''){
            alert('请填写验证码');
            return false;
        }

        $.ajax({
            url:"http://www.kaoyan365.cn/index.php?m=formguide&c=forms&a=show&formid=116&action=jsonp&siteid=1&verify=true",
            data:{info:info},
            dataType:"jsonp",
            type:"GET",
            success:function(json){
                console.log(json);
                if(json.status==1){
                    alert(json.msg);
                }else if(json.status==-1){
                    alert("请勿重复提交");
                }else{
                    alert(json.msg);
                }
            }
        })
    })
    $("#getyzm").click(function(event) {
        var phone = $("#tel").val();
        $.ajax({
            url: 'http://www.kaoyan365.cn/index.php?m=formguide&c=forms&a=sendmsg&phone='+phone+'+&formid=72&pro=cll',
            type: 'GET',
            dataType: 'jsonp',
            data: {phone: phone},
            success: function(json) {
                if (json.status == 1) {
                    $('#daojishi').css('display','inline-block')
                    $('#getyzm').css('display','none')
                    runcount(60)
                    alert('发送成功')
                } else {
                    alert(json.msg);
                }
            }
        })
    })
    //抽奖
    $('#dosubmit1').click(function(){
        var info = {};

        info.name=$("#name1").val();
        info.number=$("#tel1").val();
        info.code=$("#codema1").val();
        info.address=$("#address1").val();

        if (info.name== ''){
            alert('请填写姓名');
            return false;
        }
        if (info.number== ''){
            alert('请填写手机号码');
            return false;
        }
        var reg = /^0?1[3465789]\d{9}$/; //手机号正则
        if(!reg.test(info.number)) { //验证手机号是否正确
            alert('请填写正确的手机号！');
            return false;
        }
        if (info.code== ''){
            alert('请填写验证码');
            return false;
        }
        if (info.address== ''){
            alert('请填写地址');
            return false;
        }

        $.ajax({
            url:"http://www.kaoyan365.cn/index.php?m=formguide&c=forms&a=show&formid=117&action=jsonp&siteid=1&verify=true",
            data:{info:info},
            dataType:"jsonp",
            type:"GET",
            success:function(json){
                console.log(json);
                if(json.status==1){
                    alert(json.msg);
                    $('#wprized1').hide();
                }else if(json.status==-1){
                    alert("请勿重复提交");
                }else{
                    alert(json.msg);
                }
            }
        })
    })
    $("#getyzm1").click(function(event) {
        var phone = $("#tel1").val();
        $.ajax({
            url: 'http://www.kaoyan365.cn/index.php?m=formguide&c=forms&a=sendmsg&phone='+phone+'+&formid=72&pro=cll',
            type: 'GET',
            dataType: 'jsonp',
            data: {phone: phone},
            success: function(json) {
                if (json.status == 1) {
                    $('#daojishi1').css('display','inline-block')
                    $('#getyzm1').css('display','none')
                    runcount(60)
                    alert('发送成功')
                }else{
                    alert(json.msg);
                }
            }
        })
    })
})



function runcount(t) {
    if(t==0){
        $('#daojishi').css('display','none');
        $('#getyzm').show();
        $('#daojishi1').css('display','none');
        $('#getyzm1').show();
    }else {
        document.getElementById('daojishi').innerHTML = t + 'S';
        document.getElementById('daojishi1').innerHTML = t + 'S';
        t--;
        setTimeout(function() {
            runcount(t)
        }, 1000);
        $('#getyzm').hide()
        $('#getyzm1').hide()
    }
}



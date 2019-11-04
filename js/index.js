$(function(){
  // 锚点
  $('#nav a').each(function(){
    $(this).on('click',function(){
      var href = $(this).attr('href');
      $("html").stop().animate({scrollTop: $(href).offset().top},1000);
      return false;
    })
  });
  //定时换banner
  function time1(){
    var timestamp1 = (new Date("2019/11/5 24:00:00")).getTime();
    var timestamp2 = (new Date("2019/11/10 24:00:00")).getTime();
    var timestamp3 = (new Date("2019/11/13 24:00:00")).getTime();
    var timestamp4 = (new Date("2019/11/17 24:00:00")).getTime();
    var oNow = new Date();
    var iNow = oNow.getTime();

    if(iNow<timestamp1){
      $('#banner img').attr('src','images/banner1.jpg');
    }else if(iNow >=timestamp1 && iNow < timestamp2){
      $('#banner img').attr('src','images/banner1.jpg');
    }else if(iNow >=timestamp2 && iNow < timestamp3){
      $('#banner img').attr('src','images/banner2.jpg');
    }else if(iNow >=timestamp3 && iNow < timestamp4){
      $('#banner img').attr('src','images/banner3.jpg');
    }else if(iNow >=timestamp4){
      $('#banner img').attr('src','images/banner3.jpg');
      clearInterval(timer);
    }
  }

  time1();
  clearInterval(timer);
  var timer = setInterval(function(){
    time1();
  },1000);

  //定时换banner
  /* function time(){
    var D,H,M,s;
    var oTarget = new Date();
    oTarget.setFullYear(2019,10,2);
    oTarget.setHours(15,59,0,0);
    var iTarget = oTarget.getTime();
    var oNow = new Date();
    var iNow = oNow.getTime();
    s = parseInt((iTarget-iNow)/1000);
    D = parseInt(s/86400);
    s%=86400;
    H=parseInt(s/3600);
    s%=3600;
    M=parseInt(s/60);
    s%=60;

    if(D>7){
      $('#banner img').attr('src','images/banner1.jpg');
    }else if(D<=7 && D>4){
      $('#banner img').attr('src','images/banner2.jpg');
    }else if(D<=4 &&D>0){
      $('#banner img').attr('src','images/banner3.jpg');
    }else if(D<=0 && H <=0 && M<=0 && s<=0){
      clearInterval(timer);
    }
  }
  time();
  clearInterval(timer);
  var timer = setInterval(function(){
    time();
  },1000); */

  //倒计时
  function time3(date,num,str){
    var D,H,M,s;
    var oS = document.getElementById('countdown');
    var oTarget = new Date();
    oTarget.setFullYear(2019,10,Number(date));
    oTarget.setHours(24,0,0,0);
    var iTarget = oTarget.getTime();
    var oNow = new Date();
    var iNow = oNow.getTime();
    s = parseInt((iTarget-iNow)/1000);

    D = parseInt(s/86400);
    s%=86400;
    H=parseInt(s/3600);
    s%=3600;
    M=parseInt(s/60);
    s%=60;
    //console.log(D)
    if(D<Number(num)){
      $('#timeEnd').show();
      oS.innerHTML=str + D +'天'+H +'时'+ M +'分'+ s +'秒';
    }
    if(s<0){
      if(Number(date) == 17){
        oS.innerHTML = '活动已结束';
        clearInterval(timer3);
      }else{
        $('#timeEnd').hide();
      }
    }
  }
  time3(10,2,'距离活动开始：');
  time3(13,2,'距离活动仅剩天数：');
  time3(17,4,'距离返场结束仅剩：');
  clearInterval(timer3);
  var timer3 = setInterval(function(){
    time3(10,2,'距离活动开始：');
    time3(13,2,'距离活动仅剩天数：');
    time3(17,4,'距离返场结束仅剩：');
  },1000);



  //1元抢课
  $('#btngItem1 .times').each(function(){
    $(this).find('.timeq').on('click',function(){
      var index = $(this).parent().index();
      console.log(index)
      $(this).parent().find('.quantime').addClass('activeT');
      $(this).parent().siblings().find('.quantime').removeClass('activeT');
      $(this).addClass('activeB');
      $(this).parent().siblings().find('.timeq').removeClass('activeB');
      $('#cwgItem1 .course_area').eq(index).css('display','flex').siblings().css('display','none');
    })
  })

  //秒杀课
  function msk(){
    var timestamp1 = (new Date("2019/11/5 24:00:00")).getTime();
    var timestamp2 = (new Date("2019/11/6 24:00:00")).getTime();
    var timestamp3 = (new Date("2019/11/7 24:00:00")).getTime();
    var timestamp4 = (new Date("2019/11/8 24:00:00")).getTime();
    var timestamp5 = (new Date("2019/11/9 24:00:00")).getTime();
    var timestamp6 = (new Date("2019/11/10 24:00:00")).getTime();
    var oNow = new Date();
    var iNow = oNow.getTime();

    if(iNow<timestamp1){
      $('.zhuangtai').addClass('wks');
      $('.car_button').addClass('po_ev').css('color','#ccc');
    }else if(iNow>=timestamp1 && iNow<timestamp2){
      
    }else if(iNow>=timestamp2 && iNow<timestamp3){
      
    }else if(iNow>=timestamp3 && iNow<timestamp4){
      
    }else if(iNow>=timestamp4 && iNow<timestamp5){
      
    }else if(iNow>=timestamp5 && iNow<timestamp6){
      
    }else if(iNow>=timestamp6){
      
    }
  }

  msk();
  clearInterval(timer);
  var timer = setInterval(function(){
    msk();
  },1000);
});
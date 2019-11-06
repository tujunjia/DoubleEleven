$(function(){
  // 锚点
  $('#nav a').each(function(){
    $(this).on('click',function(){
      var href = $(this).attr('href');
      $("html").stop().animate({scrollTop: $(href).offset().top},1000);
      return false;
    })
  });
  
  $('#backToTop').on('click',function(){
    var href = $(this).attr('href');
    $("html").stop().animate({scrollTop: $(href).offset().top},1000);
    return false;
  })
  //定时换banner+视频
  function time1(){
    var timestamp1 = (new Date("2019/11/5 24:00:00")).getTime();
    var timestamp2 = (new Date("2019/11/10 24:00:00")).getTime();
    var timestamp3 = (new Date("2019/11/13 24:00:00")).getTime();
    var timestamp4 = (new Date("2019/11/17 24:00:00")).getTime();
    var oNow = new Date();
    var iNow = oNow.getTime();

    if(iNow<timestamp1){
      $('#banner img').attr('src','images/banner1.jpg');
      $('#zgVideo1').show();
      $('#zgVideo2').hide();
      $('#zgVideo3').hide();
    }else if(iNow >=timestamp1 && iNow < timestamp2){
      $('#banner img').attr('src','images/banner1.jpg');
      $('#zgVideo1').show();
      $('#zgVideo2').hide();
      $('#zgVideo3').hide();
    }else if(iNow >=timestamp2 && iNow < timestamp3){
      $('#banner img').attr('src','images/banner2.jpg');
      $('#zgVideo1').hide();
      $('#zgVideo2').show();
      $('#zgVideo3').hide();
    }else if(iNow >=timestamp3 && iNow < timestamp4){
      $('#banner img').attr('src','images/banner3.jpg');
      $('#zgVideo1').hide();
      $('#zgVideo2').hide();
      $('#zgVideo3').show();
    }else if(iNow >=timestamp4){
      $('#banner img').attr('src','images/banner3.jpg');
      $('#zgVideo1').hide();
      $('#zgVideo2').hide();
      $('#zgVideo3').show();
      clearInterval(timer1);
    }
  }

  time1();
  clearInterval(timer1);
  var timer1 = setInterval(function(){
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
  function tab(id,conid){
    $(id+' .times').each(function(){
      $(this).find('.timeq').on('click',function(){
        var index = $(this).parent().index();
        console.log(index)
        $(this).parent().find('.quantime').addClass('activeT');
        $(this).parent().siblings().find('.quantime').removeClass('activeT');
        $(this).addClass('activeB');
        $(this).parent().siblings().find('.timeq').removeClass('activeB');
        $(conid+' .course_area').eq(index).css('display','flex').siblings().css('display','none');
      })
    })
  }
  tab('#btngItem1','#cwgItem1');
  tab('#btngItem2','#cwgItem2');
  tab('#btngItem3','#cwgItem3');
  tab('#btngItem4','#cwgItem4');

  //6-10秒杀课
  function msk1(){
    var timestamp1 = (new Date("2019/11/5 24:00:00")).getTime();
    var timestamp2 = (new Date("2019/11/6 24:00:00")).getTime();
    var timestamp3 = (new Date("2019/11/7 24:00:00")).getTime();
    var timestamp4 = (new Date("2019/11/8 24:00:00")).getTime();
    var timestamp5 = (new Date("2019/11/9 24:00:00")).getTime();
    var timestamp6 = (new Date("2019/11/10 24:00:00")).getTime();
    var oNow = new Date();
    var iNow = oNow.getTime();
    if(iNow<timestamp1){
      $('#cwgItem1 .zhuangtai').eq(0).addClass('wks');
      $('#cwgItem1 .zhuangtai').eq(1).addClass('wks');
      $('#cwgItem1 .zhuangtai').eq(2).addClass('wks');
      $('#cwgItem1 .zhuangtai').eq(3).addClass('wks');
      $('#cwgItem1 .zhuangtai').eq(4).addClass('wks');
      $('#cwgItem1 .zhuangtai').eq(5).addClass('wks');

      $('.car_button').eq(0).addClass('po_ev').css('color','#ccc');
      $('.car_button').eq(1).addClass('po_ev').css('color','#ccc');
      $('.car_button').eq(2).addClass('po_ev').css('color','#ccc');
      $('.car_button').eq(3).addClass('po_ev').css('color','#ccc');
      $('.car_button').eq(4).addClass('po_ev').css('color','#ccc');
      $('.car_button').eq(5).addClass('po_ev').css('color','#ccc');
    }else if(iNow>=timestamp1 && iNow<timestamp2){ //6号
      $('#cwgItem1 .zhuangtai').eq(0).removeClass('wks');
      $('#cwgItem1 .zhuangtai').eq(1).addClass('wks');
      $('#cwgItem1 .zhuangtai').eq(2).addClass('wks');
      $('#cwgItem1 .zhuangtai').eq(3).addClass('wks');
      $('#cwgItem1 .zhuangtai').eq(4).addClass('wks');
      $('#cwgItem1 .zhuangtai').eq(5).addClass('wks');
      $('.car_button').eq(0).removeClass('po_ev').css('color','#ee060b');
      $('.car_button').eq(1).addClass('po_ev').css('color','#ccc');
      $('.car_button').eq(2).addClass('po_ev').css('color','#ccc');
      $('.car_button').eq(3).addClass('po_ev').css('color','#ccc');
      $('.car_button').eq(4).addClass('po_ev').css('color','#ccc');
      $('.car_button').eq(5).addClass('po_ev').css('color','#ccc');
    }else if(iNow>=timestamp2 && iNow<timestamp3){ //7号
      $('#cwgItem1 .zhuangtai').eq(0).addClass('ysq');
      $('#cwgItem1 .zhuangtai').eq(1).removeClass('wks');
      $('#cwgItem1 .zhuangtai').eq(2).addClass('wks');
      $('#cwgItem1 .zhuangtai').eq(3).addClass('wks');
      $('#cwgItem1 .zhuangtai').eq(4).addClass('wks');
      $('#cwgItem1 .zhuangtai').eq(5).addClass('wks');
      $('.car_button').eq(0).addClass('po_ev').css('color','#ccc');
      $('.car_button').eq(1).removeClass('po_ev').css('color','#ee060b');
      $('.car_button').eq(2).addClass('po_ev').css('color','#ccc');
      $('.car_button').eq(3).addClass('po_ev').css('color','#ccc');
      $('.car_button').eq(4).addClass('po_ev').css('color','#ccc');
      $('.car_button').eq(5).addClass('po_ev').css('color','#ccc');
    }else if(iNow>=timestamp3 && iNow<timestamp4){ //8号
      $('#cwgItem1 .zhuangtai').eq(0).addClass('ysq');
      $('#cwgItem1 .zhuangtai').eq(1).addClass('ysq');
      $('#cwgItem1 .zhuangtai').eq(2).removeClass('wks');
      $('#cwgItem1 .zhuangtai').eq(3).addClass('wks');
      $('#cwgItem1 .zhuangtai').eq(4).addClass('wks');
      $('#cwgItem1 .zhuangtai').eq(5).addClass('wks');
      $('.car_button').eq(0).addClass('po_ev').css('color','#ccc');
      $('.car_button').eq(1).addClass('po_ev').css('color','#ccc');
      $('.car_button').eq(2).removeClass('po_ev').css('color','#ee060b');
      $('.car_button').eq(3).addClass('po_ev').css('color','#ccc');
      $('.car_button').eq(4).addClass('po_ev').css('color','#ccc');
      $('.car_button').eq(5).addClass('po_ev').css('color','#ccc');
    }else if(iNow>=timestamp4 && iNow<timestamp5){ //9号
      $('#cwgItem1 .zhuangtai').eq(0).addClass('ysq');
      $('#cwgItem1 .zhuangtai').eq(1).addClass('ysq');
      $('#cwgItem1 .zhuangtai').eq(2).addClass('ysq');
      $('#cwgItem1 .zhuangtai').eq(3).removeClass('wks');
      $('#cwgItem1 .zhuangtai').eq(4).addClass('wks');
      $('#cwgItem1 .zhuangtai').eq(5).addClass('wks');
      $('.car_button').eq(0).addClass('po_ev').css('color','#ccc');
      $('.car_button').eq(1).addClass('po_ev').css('color','#ccc');
      $('.car_button').eq(2).addClass('po_ev').css('color','#ccc');
      $('.car_button').eq(3).removeClass('po_ev').css('color','#ee060b');
      $('.car_button').eq(4).addClass('po_ev').css('color','#ccc');
      $('.car_button').eq(5).addClass('po_ev').css('color','#ccc');
    }else if(iNow>=timestamp5 && iNow<timestamp6){ //10号
      $('#cwgItem1 .zhuangtai').eq(0).addClass('ysq');
      $('#cwgItem1 .zhuangtai').eq(1).addClass('ysq');
      $('#cwgItem1 .zhuangtai').eq(2).addClass('ysq');
      $('#cwgItem1 .zhuangtai').eq(3).addClass('ysq');
      $('#cwgItem1 .zhuangtai').eq(4).removeClass('wks');
      $('#cwgItem1 .zhuangtai').eq(5).addClass('wks');
      $('.car_button').eq(0).addClass('po_ev').css('color','#ccc');
      $('.car_button').eq(1).addClass('po_ev').css('color','#ccc');
      $('.car_button').eq(2).addClass('po_ev').css('color','#ccc');
      $('.car_button').eq(3).addClass('po_ev').css('color','#ccc');
      $('.car_button').eq(4).removeClass('po_ev').css('color','#ee060b');
      $('.car_button').eq(5).addClass('po_ev').css('color','#ccc');
    }else if(iNow>=timestamp6){
      clearInterval(timer2);
    }
  }
  msk1();
  clearInterval(timer4);
  var timer4 = setInterval(function(){
    msk1();
  },1000);


  //11号当天秒杀课
  function msk2(){
    var timestamp1 = (new Date("2019/11/11 11:00:00")).getTime();
    var timestamp2 = (new Date("2019/11/11 13:00:00")).getTime();
    var timestamp3 = (new Date("2019/11/11 15:00:00")).getTime();
    var timestamp4 = (new Date("2019/11/11 17:00:00")).getTime();
    var timestamp5 = (new Date("2019/11/11 19:00:00")).getTime();
    var timestamp6 = (new Date("2019/11/11 21:00:00")).getTime();
    var timestamp7 = (new Date("2019/11/11 23:00:00")).getTime();
    var timestamp8 = (new Date("2019/11/11 24:00:00")).getTime();

    var oNow = new Date();
    var iNow = oNow.getTime();
    if(iNow<timestamp1){ //11点前
      $('#cwgItem2 .zhuangtai').eq(0).addClass('wks');
      $('#cwgItem2 .zhuangtai').eq(1).addClass('wks');
      $('#cwgItem2 .zhuangtai').eq(2).addClass('wks');
      $('#cwgItem2 .zhuangtai').eq(3).addClass('wks');
      $('#cwgItem2 .zhuangtai').eq(4).addClass('wks');
      $('#cwgItem2 .zhuangtai').eq(5).addClass('wks');
      $('#cwgItem2 .zhuangtai').eq(6).addClass('wks');

      $('#cwgItem2 .car_button').eq(0).addClass('po_ev').css('color','#ccc');
      $('#cwgItem2 .car_button').eq(1).addClass('po_ev').css('color','#ccc');
      $('#cwgItem2 .car_button').eq(2).addClass('po_ev').css('color','#ccc');
      $('#cwgItem2 .car_button').eq(3).addClass('po_ev').css('color','#ccc');
      $('#cwgItem2 .car_button').eq(4).addClass('po_ev').css('color','#ccc');
      $('#cwgItem2 .car_button').eq(5).addClass('po_ev').css('color','#ccc');
      $('#cwgItem2 .car_button').eq(6).addClass('po_ev').css('color','#ccc');
    }else if(iNow>=timestamp1 && iNow<timestamp2){ //11-13
      $('#cwgItem2 .zhuangtai').eq(0).removeClass('wks');
      $('#cwgItem2 .zhuangtai').eq(1).addClass('wks');
      $('#cwgItem2 .zhuangtai').eq(2).addClass('wks');
      $('#cwgItem2 .zhuangtai').eq(3).addClass('wks');
      $('#cwgItem2 .zhuangtai').eq(4).addClass('wks');
      $('#cwgItem2 .zhuangtai').eq(5).addClass('wks');
      $('#cwgItem2 .zhuangtai').eq(6).addClass('wks');

      $('#cwgItem2 .car_button').eq(0).removeClass('po_ev').css('color','#ee060b');
      $('#cwgItem2 .car_button').eq(1).addClass('po_ev').css('color','#ccc');
      $('#cwgItem2 .car_button').eq(2).addClass('po_ev').css('color','#ccc');
      $('#cwgItem2 .car_button').eq(3).addClass('po_ev').css('color','#ccc');
      $('#cwgItem2 .car_button').eq(4).addClass('po_ev').css('color','#ccc');
      $('#cwgItem2 .car_button').eq(5).addClass('po_ev').css('color','#ccc');
      $('#cwgItem2 .car_button').eq(6).addClass('po_ev').css('color','#ccc');
    }else if(iNow>=timestamp2 && iNow<timestamp3){ //13-15
      $('#cwgItem2 .zhuangtai').eq(0).addClass('ysq');
      $('#cwgItem2 .zhuangtai').eq(1).removeClass('wks');
      $('#cwgItem2 .zhuangtai').eq(2).addClass('wks');
      $('#cwgItem2 .zhuangtai').eq(3).addClass('wks');
      $('#cwgItem2 .zhuangtai').eq(4).addClass('wks');
      $('#cwgItem2 .zhuangtai').eq(5).addClass('wks');
      $('#cwgItem2 .zhuangtai').eq(6).addClass('wks');
      $('#cwgItem2 .car_button').eq(0).addClass('po_ev').css('color','#ccc');
      $('#cwgItem2 .car_button').eq(1).removeClass('po_ev').css('color','#ee060b');
      $('#cwgItem2 .car_button').eq(2).addClass('po_ev').css('color','#ccc');
      $('#cwgItem2 .car_button').eq(3).addClass('po_ev').css('color','#ccc');
      $('#cwgItem2 .car_button').eq(4).addClass('po_ev').css('color','#ccc');
      $('#cwgItem2 .car_button').eq(5).addClass('po_ev').css('color','#ccc');
      $('#cwgItem2 .car_button').eq(6).addClass('po_ev').css('color','#ccc');
    }else if(iNow>=timestamp3 && iNow<timestamp4){ //15-17
      $('#cwgItem2 .zhuangtai').eq(0).addClass('ysq');
      $('#cwgItem2 .zhuangtai').eq(1).addClass('ysq');
      $('#cwgItem2 .zhuangtai').eq(2).removeClass('wks');
      $('#cwgItem2 .zhuangtai').eq(3).addClass('wks');
      $('#cwgItem2 .zhuangtai').eq(4).addClass('wks');
      $('#cwgItem2 .zhuangtai').eq(5).addClass('wks');
      $('#cwgItem2 .zhuangtai').eq(6).addClass('wks');
      $('#cwgItem2 .car_button').eq(0).addClass('po_ev').css('color','#ccc');
      $('#cwgItem2 .car_button').eq(1).addClass('po_ev').css('color','#ccc');
      $('#cwgItem2 .car_button').eq(2).removeClass('po_ev').css('color','#ee060b');
      $('#cwgItem2 .car_button').eq(3).addClass('po_ev').css('color','#ccc');
      $('#cwgItem2 .car_button').eq(4).addClass('po_ev').css('color','#ccc');
      $('#cwgItem2 .car_button').eq(5).addClass('po_ev').css('color','#ccc');
      $('#cwgItem2 .car_button').eq(6).addClass('po_ev').css('color','#ccc');
    }else if(iNow>=timestamp4 && iNow<timestamp5){ //17-19
      $('#cwgItem2 .zhuangtai').eq(0).addClass('ysq');
      $('#cwgItem2 .zhuangtai').eq(1).addClass('ysq');
      $('#cwgItem2 .zhuangtai').eq(2).addClass('ysq');
      $('#cwgItem2 .zhuangtai').eq(3).removeClass('wks');
      $('#cwgItem2 .zhuangtai').eq(4).addClass('wks');
      $('#cwgItem2 .zhuangtai').eq(5).addClass('wks');
      $('#cwgItem2 .zhuangtai').eq(6).addClass('wks');
      $('#cwgItem2 .car_button').eq(0).addClass('po_ev').css('color','#ccc');
      $('#cwgItem2 .car_button').eq(1).addClass('po_ev').css('color','#ccc');
      $('#cwgItem2 .car_button').eq(2).addClass('po_ev').css('color','#ccc');
      $('#cwgItem2 .car_button').eq(3).removeClass('po_ev').css('color','#ee060b');
      $('#cwgItem2 .car_button').eq(4).addClass('po_ev').css('color','#ccc');
      $('#cwgItem2 .car_button').eq(5).addClass('po_ev').css('color','#ccc');
      $('#cwgItem2 .car_button').eq(6).addClass('po_ev').css('color','#ccc');
    }else if(iNow>=timestamp5 && iNow<timestamp6){ //19-21
      $('#cwgItem2 .zhuangtai').eq(0).addClass('ysq');
      $('#cwgItem2 .zhuangtai').eq(1).addClass('ysq');
      $('#cwgItem2 .zhuangtai').eq(2).addClass('ysq');
      $('#cwgItem2 .zhuangtai').eq(3).addClass('ysq');
      $('#cwgItem2 .zhuangtai').eq(4).removeClass('wks');
      $('#cwgItem2 .zhuangtai').eq(5).addClass('wks');
      $('#cwgItem2 .zhuangtai').eq(6).addClass('wks');
      $('#cwgItem2 .car_button').eq(0).addClass('po_ev').css('color','#ccc');
      $('#cwgItem2 .car_button').eq(1).addClass('po_ev').css('color','#ccc');
      $('#cwgItem2 .car_button').eq(2).addClass('po_ev').css('color','#ccc');
      $('#cwgItem2 .car_button').eq(3).addClass('po_ev').css('color','#ccc');
      $('#cwgItem2 .car_button').eq(4).removeClass('po_ev').css('color','#ee060b');
      $('#cwgItem2 .car_button').eq(5).addClass('po_ev').css('color','#ccc');
      $('#cwgItem2 .car_button').eq(6).addClass('po_ev').css('color','#ccc');
    }else if(iNow>=timestamp6 && iNow<timestamp7){ //21-23
      $('#cwgItem2 .zhuangtai').eq(0).addClass('ysq');
      $('#cwgItem2 .zhuangtai').eq(1).addClass('ysq');
      $('#cwgItem2 .zhuangtai').eq(2).addClass('ysq');
      $('#cwgItem2 .zhuangtai').eq(3).addClass('ysq');
      $('#cwgItem2 .zhuangtai').eq(4).addClass('ysq');
      $('#cwgItem2 .zhuangtai').eq(5).removeClass('wks');
      $('#cwgItem2 .zhuangtai').eq(6).addClass('wks');
      $('#cwgItem2 .car_button').eq(0).addClass('po_ev').css('color','#ccc');
      $('#cwgItem2 .car_button').eq(1).addClass('po_ev').css('color','#ccc');
      $('#cwgItem2 .car_button').eq(2).addClass('po_ev').css('color','#ccc');
      $('#cwgItem2 .car_button').eq(3).addClass('po_ev').css('color','#ccc');
      $('#cwgItem2 .car_button').eq(4).addClass('po_ev').css('color','#ccc');
      $('#cwgItem2 .car_button').eq(5).removeClass('po_ev').css('color','#ee060b');
      $('#cwgItem2 .car_button').eq(6).addClass('po_ev').css('color','#ccc');
    }else if(iNow>=timestamp7 && iNow<timestamp8){ //23-24
      $('#cwgItem2 .zhuangtai').eq(0).addClass('ysq');
      $('#cwgItem2 .zhuangtai').eq(1).addClass('ysq');
      $('#cwgItem2 .zhuangtai').eq(2).addClass('ysq');
      $('#cwgItem2 .zhuangtai').eq(3).addClass('ysq');
      $('#cwgItem2 .zhuangtai').eq(4).addClass('ysq');
      $('#cwgItem2 .zhuangtai').eq(5).addClass('ysq');
      $('#cwgItem2 .zhuangtai').eq(6).removeClass('wks');
      $('#cwgItem2 .car_button').eq(0).addClass('po_ev').css('color','#ccc');
      $('#cwgItem2 .car_button').eq(1).addClass('po_ev').css('color','#ccc');
      $('#cwgItem2 .car_button').eq(2).addClass('po_ev').css('color','#ccc');
      $('#cwgItem2 .car_button').eq(3).addClass('po_ev').css('color','#ccc');
      $('#cwgItem2 .car_button').eq(4).addClass('po_ev').css('color','#ccc');
      $('#cwgItem2 .car_button').eq(5).addClass('po_ev').css('color','#ccc');
      $('#cwgItem2 .car_button').eq(6).removeClass('po_ev').css('color','#ee060b');
    }else if(iNow>=timestamp8){
      $('#cwgItem2 .zhuangtai').eq(0).addClass('ysq');
      $('#cwgItem2 .zhuangtai').eq(1).addClass('ysq');
      $('#cwgItem2 .zhuangtai').eq(2).addClass('ysq');
      $('#cwgItem2 .zhuangtai').eq(3).addClass('ysq');
      $('#cwgItem2 .zhuangtai').eq(4).addClass('ysq');
      $('#cwgItem2 .zhuangtai').eq(5).addClass('ysq');
      $('#cwgItem2 .zhuangtai').eq(6).addClass('ysq');;
      $('#cwgItem2 .car_button').eq(0).addClass('po_ev').css('color','#ccc');
      $('#cwgItem2 .car_button').eq(1).addClass('po_ev').css('color','#ccc');
      $('#cwgItem2 .car_button').eq(2).addClass('po_ev').css('color','#ccc');
      $('#cwgItem2 .car_button').eq(3).addClass('po_ev').css('color','#ccc');
      $('#cwgItem2 .car_button').eq(4).addClass('po_ev').css('color','#ccc');
      $('#cwgItem2 .car_button').eq(5).addClass('po_ev').css('color','#ccc');
      $('#cwgItem2 .car_button').eq(6).addClass('po_ev').css('color','#ccc');
      clearInterval(timer2);
    }
  }
  msk2();
  clearInterval(timer5);
  var timer5 = setInterval(function(){
    msk2();
  },1000);


  //12号-13号当天秒杀课
  function msk3(){
    var timestamp1 = (new Date("2019/11/11 24:00:00")).getTime();
    var timestamp2 = (new Date("2019/11/12 24:00:00")).getTime();
    var timestamp3 = (new Date("2019/11/13 24:00:00")).getTime();

    var oNow = new Date();
    var iNow = oNow.getTime();
    if(iNow<timestamp1){ //12号前
      $('#cwgItem3 .zhuangtai').eq(0).addClass('wks');
      $('#cwgItem3 .zhuangtai').eq(1).addClass('wks');

      $('#cwgItem3 .car_button').eq(0).addClass('po_ev').css('color','#ccc');
      $('#cwgItem3 .car_button').eq(1).addClass('po_ev').css('color','#ccc');
    }else if(iNow>=timestamp1 && iNow<timestamp2){ //12
      $('#cwgItem3 .zhuangtai').eq(0).removeClass('wks');
      $('#cwgItem3 .zhuangtai').eq(1).addClass('wks');

      $('#cwgItem3 .car_button').eq(0).removeClass('po_ev').css('color','#ee060b');
      $('#cwgItem3 .car_button').eq(1).addClass('po_ev').css('color','#ccc');
    }else if(iNow>=timestamp2 && iNow<timestamp3){ //13
      $('#cwgItem3 .zhuangtai').eq(0).addClass('ysq');
      $('#cwgItem3 .zhuangtai').eq(1).removeClass('wks');
      $('#cwgItem3 .car_button').eq(0).addClass('po_ev').css('color','#ccc');
      $('#cwgItem3 .car_button').eq(1).removeClass('po_ev').css('color','#ee060b');
    }else if(iNow>=timestamp3){ //13号以后
      $('#cwgItem3 .zhuangtai').eq(0).addClass('ysq');
      $('#cwgItem3 .zhuangtai').eq(1).addClass('ysq');
      $('#cwgItem3 .car_button').eq(0).addClass('po_ev').css('color','#ccc');
      $('#cwgItem3 .car_button').eq(1).addClass('po_ev').css('color','#ccc');
      clearInterval(timer6);
    } 
  }
  msk3();
  clearInterval(timer6);
  var timer6 = setInterval(function(){
    msk3();
  },1000);

  //14号-17号当天秒杀课
  function msk4(){
    var timestamp1 = (new Date("2019/11/13 24:00:00")).getTime();
    var timestamp2 = (new Date("2019/11/14 24:00:00")).getTime();
    var timestamp3 = (new Date("2019/11/15 24:00:00")).getTime();
    var timestamp4 = (new Date("2019/11/16 24:00:00")).getTime();
    var timestamp5 = (new Date("2019/11/17 24:00:00")).getTime();

    var oNow = new Date();
    var iNow = oNow.getTime();
    if(iNow<timestamp1){ //14号前
      $('#cwgItem4 .zhuangtai').eq(0).addClass('wks');
      $('#cwgItem4 .zhuangtai').eq(1).addClass('wks');
      $('#cwgItem4 .zhuangtai').eq(2).addClass('wks');
      $('#cwgItem4 .zhuangtai').eq(3).addClass('wks');

      $('#cwgItem4 .car_button').eq(0).addClass('po_ev').css('color','#ccc');
      $('#cwgItem4 .car_button').eq(1).addClass('po_ev').css('color','#ccc');
      $('#cwgItem4 .car_button').eq(2).addClass('po_ev').css('color','#ccc');
      $('#cwgItem4 .car_button').eq(3).addClass('po_ev').css('color','#ccc');
    }else if(iNow>=timestamp1 && iNow<timestamp2){ //14
      $('#cwgItem4 .zhuangtai').eq(0).removeClass('wks');
      $('#cwgItem4 .zhuangtai').eq(1).addClass('wks');
      $('#cwgItem4 .zhuangtai').eq(2).addClass('wks');
      $('#cwgItem4 .zhuangtai').eq(3).addClass('wks');

      $('#cwgItem4 .car_button').eq(0).removeClass('po_ev').css('color','#ee060b');
      $('#cwgItem4 .car_button').eq(1).addClass('po_ev').css('color','#ccc');
      $('#cwgItem4 .car_button').eq(2).addClass('po_ev').css('color','#ccc');
      $('#cwgItem4 .car_button').eq(3).addClass('po_ev').css('color','#ccc');
    }else if(iNow>=timestamp2 && iNow<timestamp3){ //15
      $('#cwgItem4 .zhuangtai').eq(0).addClass('ysq');
      $('#cwgItem4 .zhuangtai').eq(1).removeClass('wks');
      $('#cwgItem4 .zhuangtai').eq(2).addClass('wks');
      $('#cwgItem4 .zhuangtai').eq(3).addClass('wks');

      $('#cwgItem4 .car_button').eq(0).addClass('po_ev').css('color','#ccc');
      $('#cwgItem4 .car_button').eq(1).removeClass('po_ev').css('color','#ee060b');
      $('#cwgItem4 .car_button').eq(2).addClass('po_ev').css('color','#ccc');
      $('#cwgItem4 .car_button').eq(3).addClass('po_ev').css('color','#ccc');
    }else if(iNow>=timestamp3 && iNow<timestamp4){ //16
      $('#cwgItem4 .zhuangtai').eq(0).addClass('ysq');
      $('#cwgItem4 .zhuangtai').eq(1).addClass('wks');
      $('#cwgItem4 .zhuangtai').eq(2).removeClass('wks');
      $('#cwgItem4 .zhuangtai').eq(3).addClass('wks');

      $('#cwgItem4 .car_button').eq(0).addClass('po_ev').css('color','#ccc');
      $('#cwgItem4 .car_button').eq(1).addClass('po_ev').css('color','#ccc');
      $('#cwgItem4 .car_button').eq(2).removeClass('po_ev').css('color','#ee060b');
      $('#cwgItem4 .car_button').eq(3).addClass('po_ev').css('color','#ccc');
    }else if(iNow>=timestamp4 && iNow<timestamp5){ //17
      $('#cwgItem4 .zhuangtai').eq(0).addClass('ysq');
      $('#cwgItem4 .zhuangtai').eq(1).addClass('ysq');
      $('#cwgItem4 .zhuangtai').eq(2).addClass('ysq');
      $('#cwgItem4 .zhuangtai').eq(3).removeClass('wks');

      $('#cwgItem4 .car_button').eq(0).addClass('po_ev').css('color','#ccc');
      $('#cwgItem4 .car_button').eq(1).addClass('po_ev').css('color','#ccc');
      $('#cwgItem4 .car_button').eq(2).addClass('po_ev').css('color','#ccc');
      $('#cwgItem4 .car_button').eq(3).removeClass('po_ev').css('color','#ee060b');
    }else if(iNow>=timestamp5){
      $('#cwgItem4 .zhuangtai').eq(0).addClass('ysq');
      $('#cwgItem4 .zhuangtai').eq(1).addClass('ysq');
      $('#cwgItem4 .zhuangtai').eq(2).addClass('ysq');
      $('#cwgItem4 .zhuangtai').eq(3).addClass('ysq');

      $('#cwgItem4 .car_button').eq(0).addClass('po_ev').css('color','#ccc');
      $('#cwgItem4 .car_button').eq(1).addClass('po_ev').css('color','#ccc');
      $('#cwgItem4 .car_button').eq(2).addClass('po_ev').css('color','#ccc');
      $('#cwgItem4 .car_button').eq(3).addClass('po_ev').css('color','#ccc');
      clearInterval(timer7)
    }
  }
  msk4();
  clearInterval(timer7);
  var timer7 = setInterval(function(){
    msk4();
  },1000);

  //秒杀课定时显示按钮及内容
  function msbtn(){
    var timestamp1 = (new Date("2019/11/10 24:00:00")).getTime();
    var timestamp2 = (new Date("2019/11/11 24:00:00")).getTime();
    var timestamp3 = (new Date("2019/11/13 24:00:00")).getTime();
    var timestamp4 = (new Date("2019/11/17 24:00:00")).getTime();
    var oNow = new Date();
    var iNow = oNow.getTime();

    if(iNow<=timestamp1){
      $('#cwgItem1').show();
      $('#cwgItem2').hide();
      $('#cwgItem3').hide();
      $('#cwgItem4').hide();
      $('#btngItem1').css('display','flex');
      $('#btngItem2').css('display','none');
      $('#btngItem3').css('display','none');
      $('#btngItem4').css('display','none');
    }else if(iNow>timestamp1 && iNow<=timestamp2){
      $('#cwgItem1').hide();
      $('#cwgItem2').show();
      $('#cwgItem3').hide();
      $('#cwgItem4').hide();
      $('#btngItem1').css('display','none');
      $('#btngItem2').css('display','flex');
      $('#btngItem3').css('display','none');
      $('#btngItem4').css('display','none');
    }else if(iNow>timestamp2 && iNow<=timestamp3){
      $('#cwgItem1').hide();
      $('#cwgItem2').hide();
      $('#cwgItem3').show();
      $('#cwgItem4').hide();
      $('#btngItem1').css('display','none');
      $('#btngItem2').css('display','none');
      $('#btngItem3').css('display','flex');
      $('#btngItem4').css('display','none');
    }else if(iNow>timestamp3 && iNow<=timestamp4){
      $('#cwgItem1').hide();
      $('#cwgItem2').hide();
      $('#cwgItem3').hide();
      $('#cwgItem4').show();
      $('#btngItem1').css('display','none');
      $('#btngItem2').css('display','none');
      $('#btngItem3').css('display','none');
      $('#btngItem4').css('display','flex');
    }else if(iNow>timestamp4){
      $('#cwgItem1').hide();
      $('#cwgItem2').hide();
      $('#cwgItem3').hide();
      $('#cwgItem4').show();
      $('#btngItem1').css('display','none');
      $('#btngItem2').css('display','none');
      $('#btngItem3').css('display','none');
      $('#btngItem4').css('display','flex');
    }

  }
  msbtn();
  clearInterval(timer2);
  var timer2 = setInterval(function(){
    msbtn();
  },1000);









  //公共课DOM方法
  function publicDOM(id,dataArr){
    $(id).empty();
    $(dataArr).each(function(i,n){
      var clHtml = '<li class="cl_item">'
                    +'<span class="ecibodyItem ecibodyItem1"><em class="chkbx"></em>'+n.subject+'</span>'
                    +'<span class="ecibodyItem ecibodyItem2"><a href="'+n.courseHref+'" class="cl_name">'+n.courseName+'</a></span>'
                    +'<span class="ecibodyItem ecibodyItem3" data-type="'+n.courseType+'">'+n.prise+'</span>'
                    +'<span class="ecibodyItem ecibodyItem4"><a href="'+n.playHref+'" class="play"></a></span>'
                    +'<span class="ecibodyItem ecibodyItem5"><em onclick="NTKF.im_openInPageChat\(\'kf_10176_1522033629076\'\)" class="consult"></em></span>'
                  +'</li>';
      $(id).append(clHtml);
    });
  }
  //21公共课DOM
  publicDOM('#public21',publicCourse21);


  //专业课二级内容DOM方法
  function majorDOM(pid,data){
    $(pid).empty();
    var ulhtml;
    $(data).each(function(i,n){
      if(pid == '#eciBody0'){
        ulhtml = '<ul class="courseList clhidden" id="courseList_0'+i+'">';
      }else if(pid == '#eciBody1'){
        ulhtml = '<ul class="courseList clhidden" id="courseList_1'+i+'">';
      }
      $(pid).append(ulhtml);
      $(n).each(function(j,m){
        var clHtml = '<li class="cl_item">'
                    +'<span class="ecibodyItem ecibodyItem1"><em class="chkbx"></em>'+m.subject+'</span>'
                    +'<span class="ecibodyItem ecibodyItem2"><a href="'+m.courseHref+'" class="cl_name">'+m.courseName+'</a></span>'
                    +'<span class="ecibodyItem ecibodyItem3" data-type="'+m.courseType+'">'+m.prise+'</span>'
                    +'<span class="ecibodyItem ecibodyItem4"><a href="'+m.playHref+'" class="play"></a></span>'
                    +'<span class="ecibodyItem ecibodyItem5"><em onclick="NTKF.im_openInPageChat\(\'kf_10176_1522033629076\'\)" class="consult"></em></span>'
                  +'</li>';
        if(pid == '#eciBody0'){
          $('#courseList_0'+i).append(clHtml);
        }else if(pid == '#eciBody1'){
          $('#courseList_1'+i).append(clHtml);
        }
      });
      $(pid).find('.courseList').eq(0).css('display','block');
    });
  }
  //21专业课DOM
  majorDOM('#eciBody1',majorCourse21);


  //专业课按钮DOM方法
  function majorBtn(btngroupid,majorBtns){
    $(btngroupid).empty();
    $(majorBtns).each(function(i,n){
      var spanHtml = '<span class="eciBGItem">'+n+'</span>';
      $(btngroupid).append(spanHtml);
    });
    $(btngroupid).find('.eciBGItem:first-child').addClass('active');
  }
  majorBtn('#eciBtnGroup1',majorBtns21);


  //21公共课与专业课切换
  $('#eciTabsBtn1 .eciBtnItem').each(function(){
    $(this).on('click',function(){
      $(this).addClass('active').siblings().removeClass('active');
      var index = $(this).index();
      console.log('21公共课与专业课切换===='+index);
      $('#eciTabsCon1 .eciConItem').eq(index).show().siblings().hide();

      if(index == 0){
        $('.ecitabsfoot').hide();
      }
      if(index == 1){
        $('#eciBody1').find('.chkbx').removeClass('chkbx_g');
        $('.eFoot_l').hide();
        $('#dazhe').html('');
        $('.sprint').attr('href','javascript:;').removeClass('spirit_opa');
      }
      if(index == 2){
        $('#public21').find('.chkbx').removeClass('chkbx_g');
        $('.eFoot_l').hide();
        $('#dazhe').html('');
        $('.sprint').attr('href','javascript:;').removeClass('spirit_opa');
      }
    })
  });

  //21专业课按钮切换
  $('#eciBtnGroup1 .eciBGItem').each(function(){
    $(this).on('click',function(){
      $(this).addClass('active').siblings().removeClass('active');
      var index = $(this).index();
      console.log('21专业课二级切换==='+index);
      $('#eciBody1 .courseList').eq(index).show().siblings().hide();
      ccc(index);
    })
  });

  //21公共课选课方法
  function publicSel2(){
    $('#public21').find('.chkbx').each(function(i,n){
      $(this).on('click',function(){
        //控制英语一、英语二、数学一、数学二、数学三、管综、经综、日语与下边组合两组
        //var index = $(this).index();

        console.log($('#public21').find('.chkbx').eq(i).parent().text());
        console.log('21公共课的选线下标：'+i);

        var thisFa = $($(this).parent().parent().siblings().eq(0).children()[0]);
        console.log(thisFa)

        var hasC = $(this).hasClass("chkbx_g");
        console.log('21公共课的勾选情况：'+hasC);
        if(i == 0 && hasC ==false){
          $(this).addClass("chkbx_g");
          $('#public21').find('.chkbx').eq(6).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(9).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(10).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(11).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(12).removeClass('chkbx_g');
        }else if(i == 1 && hasC ==false){
          $(this).addClass("chkbx_g");
          $('#public21').find('.chkbx').eq(2).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(6).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(9).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(10).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(11).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(12).removeClass('chkbx_g');
        }else if(i == 2 && hasC ==false){
          $(this).addClass("chkbx_g");
          $('#public21').find('.chkbx').eq(1).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(9).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(10).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(11).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(12).removeClass('chkbx_g');
        }else if(i == 3 && hasC ==false){
          $(this).addClass("chkbx_g");
          $('#public21').find('.chkbx').eq(4).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(5).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(6).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(9).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(10).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(11).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(12).removeClass('chkbx_g');
        }else if(i == 4 && hasC ==false){
          $(this).addClass("chkbx_g");
          $('#public21').find('.chkbx').eq(3).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(5).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(6).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(9).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(10).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(11).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(12).removeClass('chkbx_g');
        }else if(i == 5 && hasC ==false){
          $(this).addClass("chkbx_g");
          $('#public21').find('.chkbx').eq(3).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(4).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(6).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(9).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(10).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(11).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(12).removeClass('chkbx_g');
        }else if(i == 6 && hasC ==false){
          $(this).addClass("chkbx_g");
          $('#public21').find('.chkbx').eq(0).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(1).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(3).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(4).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(5).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(7).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(8).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(9).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(10).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(11).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(12).removeClass('chkbx_g');
        }else if(i == 7 && hasC ==false){
          $(this).addClass("chkbx_g");
          $('#public21').find('.chkbx').eq(0).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(1).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(2).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(3).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(4).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(5).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(6).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(8).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(9).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(10).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(11).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(12).removeClass('chkbx_g');
        }else if(i == 8 && hasC ==false){
          $(this).addClass("chkbx_g");
          $('#public21').find('.chkbx').eq(0).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(1).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(2).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(3).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(4).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(5).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(6).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(7).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(9).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(10).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(11).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(12).removeClass('chkbx_g');
        }else if(i == 9 && hasC ==false){
          $(this).addClass("chkbx_g");
          $('#public21').find('.chkbx').eq(0).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(1).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(2).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(3).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(4).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(5).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(6).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(7).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(8).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(12).removeClass('chkbx_g');
        }else if(i == 10 && hasC ==false){
          $(this).addClass("chkbx_g");
          $('#public21').find('.chkbx').eq(0).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(1).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(2).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(3).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(4).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(5).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(6).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(7).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(8).removeClass('chkbx_g');
        }else if(i == 11 && hasC ==false){
          $(this).addClass("chkbx_g");
          $('#public21').find('.chkbx').eq(0).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(1).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(2).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(3).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(4).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(5).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(6).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(7).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(8).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(12).removeClass('chkbx_g');
        }else if(i == 12 && hasC ==false){
          $(this).addClass("chkbx_g");
          $('#public21').find('.chkbx').eq(0).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(1).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(2).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(3).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(4).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(5).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(6).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(7).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(8).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(9).removeClass('chkbx_g');
          $('#public21').find('.chkbx').eq(11).removeClass('chkbx_g');
        }else{
          $(this).removeClass('chkbx_g');
        }
        //存储选框的布尔值
        var eqsel0 = $('#public21').find('.chkbx').eq(0).hasClass("chkbx_g");
        var eqsel1 = $('#public21').find('.chkbx').eq(1).hasClass("chkbx_g");
        var eqsel2 = $('#public21').find('.chkbx').eq(2).hasClass("chkbx_g");
        var eqsel3 = $('#public21').find('.chkbx').eq(3).hasClass("chkbx_g");
        var eqsel4 = $('#public21').find('.chkbx').eq(4).hasClass("chkbx_g");
        var eqsel5 = $('#public21').find('.chkbx').eq(5).hasClass("chkbx_g");
        var eqsel6 = $('#public21').find('.chkbx').eq(6).hasClass("chkbx_g");
        var eqsel7 = $('#public21').find('.chkbx').eq(7).hasClass("chkbx_g");
        var eqsel8 = $('#public21').find('.chkbx').eq(8).hasClass("chkbx_g");
        var eqsel9 = $('#public21').find('.chkbx').eq(9).hasClass("chkbx_g");
        var eqsel10 = $('#public21').find('.chkbx').eq(10).hasClass("chkbx_g");
        var eqsel11 = $('#public21').find('.chkbx').eq(11).hasClass("chkbx_g");
        var eqsel12 = $('#public21').find('.chkbx').eq(12).hasClass("chkbx_g");

        //各门公共课价格
        var couprise0 = $('#public21').find('.chkbx').eq(0).parent().next().next().text();
        var couprise1 = $('#public21').find('.chkbx').eq(1).parent().next().next().text();
        var couprise2 = $('#public21').find('.chkbx').eq(2).parent().next().next().text();
        var couprise3 = $('#public21').find('.chkbx').eq(3).parent().next().next().text();
        var couprise4 = $('#public21').find('.chkbx').eq(4).parent().next().next().text();
        var couprise5 = $('#public21').find('.chkbx').eq(5).parent().next().next().text();
        var couprise6 = $('#public21').find('.chkbx').eq(6).parent().next().next().text();
        var couprise7 = $('#public21').find('.chkbx').eq(7).parent().next().next().text();
        var couprise8 = $('#public21').find('.chkbx').eq(8).parent().next().next().text();
        var couprise9 = $('#public21').find('.chkbx').eq(9).parent().next().next().text();
        var couprise10 = $('#public21').find('.chkbx').eq(10).parent().next().next().text();
        var couprise11 = $('#public21').find('.chkbx').eq(11).parent().next().next().text();
        var couprise12 = $('#public21').find('.chkbx').eq(12).parent().next().next().text();
        //精品网课优惠
        function dbPrise1(pTxt){
          console.log(pTxt)
          if(pTxt>=500 && pTxt<1000){
            $('#dazhe').html('500减100');
          }else if(pTxt>=1000 && pTxt<2000){
            $('#dazhe').html('1000减200');
          }else if(pTxt>=2000 && pTxt<3000){
            $('#dazhe').html('2000减300');
          }else if(pTxt>=3000 && pTxt<4000){
            $('#dazhe').html('3000减400');
          }else if(pTxt>4000){
            $('#dazhe').html('4000减500');
          }
        }
        var yhTxt;
        if(eqsel0 == true && eqsel1 == false && eqsel2 == false && eqsel3 == false && eqsel4 == false && eqsel5 == false && eqsel6 == false && eqsel7 == false && eqsel8 == false){  //选政治
          $('.eFoot_l').show();
          yhTxt = Number(couprise0);
          dbPrise1(yhTxt)
          $('.sprint').attr('href','http://e.kaoyan365.cn/class-58328/').addClass('spirit_opa');
        }else if(eqsel0 == false && eqsel1 == true && eqsel2 == false && eqsel3 == false && eqsel4 == false && eqsel5 == false && eqsel6 == false && eqsel7 == false && eqsel8 == false){ //选英语一
          $('.eFoot_l').show();
          yhTxt = Number(couprise1);
          dbPrise1(yhTxt)
          $('.sprint').attr('href','http://e.kaoyan365.cn/class-58329/').addClass('spirit_opa');
        }else if(eqsel0 == false && eqsel1 == false && eqsel2 == true && eqsel3 == false && eqsel4 == false && eqsel5 == false && eqsel6 == false && eqsel7 == false && eqsel8 == false){  //选英语二
          $('.eFoot_l').show();
          yhTxt = Number(couprise2);
          dbPrise1(yhTxt)
          $('.sprint').attr('href','http://e.kaoyan365.cn/class-58331/').addClass('spirit_opa');
        }else if(eqsel0 == false && eqsel1 == false && eqsel2 == false && eqsel3 == true && eqsel4 == false && eqsel5 == false && eqsel6 == false && eqsel7 == false && eqsel8 == false){  //选数学一
          $('.eFoot_l').show();
          yhTxt = Number(couprise3);
          dbPrise1(yhTxt)
          $('.sprint').attr('href','http://e.kaoyan365.cn/class-58333/').addClass('spirit_opa');
        }else if(eqsel0 == false && eqsel1 == false && eqsel2 == false && eqsel3 == false && eqsel4 == true && eqsel5 == false && eqsel6 == false && eqsel7 == false && eqsel8 == false){  //数学二
          $('.eFoot_l').show();
          yhTxt = Number(couprise4);
          dbPrise1(yhTxt)
          $('.sprint').attr('href','http://e.kaoyan365.cn/class-58335/').addClass('spirit_opa');
        }else if(eqsel0 == false && eqsel1 == false && eqsel2 == false && eqsel3 == false && eqsel4 == false && eqsel5 == true && eqsel6 == false && eqsel7 == false && eqsel8 == false){  //数学三
          $('.eFoot_l').show();
          yhTxt = Number(couprise5);
          dbPrise1(yhTxt)
          $('.sprint').attr('href','http://e.kaoyan365.cn/class-58336/').addClass('spirit_opa');
        }else if(eqsel0 == false && eqsel1 == false && eqsel2 == false && eqsel3 == false && eqsel4 == false && eqsel5 == false && eqsel6 == true && eqsel7 == false && eqsel8 == false){  //管综
          $('.eFoot_l').show();
          yhTxt = Number(couprise6);
          dbPrise1(yhTxt)
          $('.sprint').attr('href','http://e.kaoyan365.cn/class-58338/').addClass('spirit_opa');
        }else if(eqsel0 == false && eqsel1 == false && eqsel2 == false && eqsel3 == false && eqsel4 == false && eqsel5 == false && eqsel6 == false && eqsel7 == true && eqsel8 == false){  //经综
          $('.eFoot_l').show();
          yhTxt = Number(couprise7);
          dbPrise1(yhTxt)
          $('.sprint').attr('href','http://e.kaoyan365.cn/class-58344/').addClass('spirit_opa');
        }else if(eqsel0 == false && eqsel1 == false && eqsel2 == false && eqsel3 == false && eqsel4 == false && eqsel5 == false && eqsel6 == false && eqsel7 == false && eqsel8 == true){   //日语
          $('.eFoot_l').show();
          yhTxt = Number(couprise8);
          dbPrise1(yhTxt)
          $('.sprint').attr('href','http://e.kaoyan365.cn/class-58346/').addClass('spirit_opa');;
        }else if(eqsel0 == true && eqsel1 == true && eqsel2 == false && eqsel3 == false && eqsel4 == false && eqsel5 == false && eqsel6 == false && eqsel7 == false && eqsel8 == false){   //政治+英语一
          $('.eFoot_l').show();
          yhTxt = Number(couprise0) + Number(couprise1);
          dbPrise1(yhTxt - 400)
          $('.sprint').attr('href','http://e.kaoyan365.cn/class-58378/').addClass('spirit_opa');;
        }else if(eqsel0 == true && eqsel1 == false && eqsel2 == true && eqsel3 == false && eqsel4 == false && eqsel5 == false && eqsel6 == false && eqsel7 == false && eqsel8 == false){   //政治+英语二
          $('.eFoot_l').show();
          yhTxt = Number(couprise0) + Number(couprise2);
          dbPrise1(yhTxt - 400)
          $('.sprint').attr('href','http://e.kaoyan365.cn/class-58381/').addClass('spirit_opa');;
        }else if(eqsel0 == true && eqsel1 == false && eqsel2 == false && eqsel3 == true && eqsel4 == false && eqsel5 == false && eqsel6 == false && eqsel7 == false && eqsel8 == false){   //政治+数学一
          $('.eFoot_l').show();
          yhTxt = Number(couprise0) + Number(couprise3);
          dbPrise1(yhTxt - 400)
          $('.sprint').attr('href','http://e.kaoyan365.cn/class-58386/').addClass('spirit_opa');;
        }else if(eqsel0 == true && eqsel1 == false && eqsel2 == false && eqsel3 == false && eqsel4 == true && eqsel5 == false && eqsel6 == false && eqsel7 == false && eqsel8 == false){   //政治+数学二
          $('.eFoot_l').show();
          yhTxt = Number(couprise0) + Number(couprise4);
          dbPrise1(yhTxt - 400)
          $('.sprint').attr('href','http://e.kaoyan365.cn/class-58391/').addClass('spirit_opa');;
        }else if(eqsel0 == true && eqsel1 == false && eqsel2 == false && eqsel3 == false && eqsel4 == false && eqsel5 == true && eqsel6 == false && eqsel7 == false && eqsel8 == false){   //政治+数学三
          $('.eFoot_l').show();
          yhTxt = Number(couprise0) + Number(couprise5);
          dbPrise1(yhTxt - 400)
          $('.sprint').attr('href','http://e.kaoyan365.cn/class-58393/').addClass('spirit_opa');;
        }else if(eqsel0 == false && eqsel1 == true && eqsel2 == false && eqsel3 == true && eqsel4 == false && eqsel5 == false && eqsel6 == false && eqsel7 == false && eqsel8 == false){   //英语一+数学一
          $('.eFoot_l').show();
          yhTxt = Number(couprise1) + Number(couprise3);
          dbPrise1(yhTxt - 400)
          $('.sprint').attr('href','http://e.kaoyan365.cn/class-58395/').addClass('spirit_opa');;
        }else if(eqsel0 == false && eqsel1 == true && eqsel2 == false && eqsel3 == false && eqsel4 == true && eqsel5 == false && eqsel6 == false && eqsel7 == false && eqsel8 == false){   //英语一+数学二
          $('.eFoot_l').show();
          yhTxt = Number(couprise1) + Number(couprise4);
          dbPrise1(yhTxt - 400)
          $('.sprint').attr('href','http://e.kaoyan365.cn/class-58399/').addClass('spirit_opa');;
        }else if(eqsel0 == false && eqsel1 == true && eqsel2 == false && eqsel3 == false && eqsel4 == false && eqsel5 == true && eqsel6 == false && eqsel7 == false && eqsel8 == false){   //英语一+数学三
          $('.eFoot_l').show();
          yhTxt = Number(couprise1) + Number(couprise5);
          dbPrise1(yhTxt - 400)
          $('.sprint').attr('href','http://e.kaoyan365.cn/class-58401/').addClass('spirit_opa');;
        }else if(eqsel0 == false && eqsel1 == false && eqsel2 == true && eqsel3 == true && eqsel4 == false && eqsel5 == false && eqsel6 == false && eqsel7 == false && eqsel8 == false){   //英语二+数学一
          $('.eFoot_l').show();
          yhTxt = Number(couprise2) + Number(couprise3);
          dbPrise1(yhTxt - 400)
          $('.sprint').attr('href','http://e.kaoyan365.cn/class-58407/').addClass('spirit_opa');;
        }else if(eqsel0 == false && eqsel1 == false && eqsel2 == true && eqsel3 == false && eqsel4 == true && eqsel5 == false && eqsel6 == false && eqsel7 == false && eqsel8 == false){   //英语二+数学二
          $('.eFoot_l').show();
          yhTxt = Number(couprise2) + Number(couprise4);
          dbPrise1(yhTxt - 400)
          $('.sprint').attr('href','http://e.kaoyan365.cn/class-58411/').addClass('spirit_opa');;
        }else if(eqsel0 == false && eqsel1 == false && eqsel2 == true && eqsel3 == false && eqsel4 == false && eqsel5 == true && eqsel6 == false && eqsel7 == false && eqsel8 == false){   //英语二+数学三
          $('.eFoot_l').show();
          yhTxt = Number(couprise2) + Number(couprise5);
          dbPrise1(yhTxt - 400)
          $('.sprint').attr('href','http://e.kaoyan365.cn/class-58412/').addClass('spirit_opa');;
        }else if(eqsel0 == true && eqsel1 == true && eqsel2 == false && eqsel3 == true && eqsel4 == false && eqsel5 == false && eqsel6 == false && eqsel7 == false && eqsel8 == false){   //政治+英语一+数学一
          $('.eFoot_l').show();
          yhTxt = Number(couprise0) + Number(couprise1) + Number(couprise3);
          dbPrise1(yhTxt - 600)
          $('.sprint').attr('href','http://e.kaoyan365.cn/class-58413/').addClass('spirit_opa');;
        }else if(eqsel0 == true && eqsel1 == true && eqsel2 == false && eqsel3 == false && eqsel4 == true && eqsel5 == false && eqsel6 == false && eqsel7 == false && eqsel8 == false){   //政治+英语一+数学二
          $('.eFoot_l').show();
          yhTxt = Number(couprise0) + Number(couprise1) + Number(couprise4);
          dbPrise1(yhTxt - 600)
          $('.sprint').attr('href','http://e.kaoyan365.cn/class-58414/').addClass('spirit_opa');;
        }else if(eqsel0 == true && eqsel1 == true && eqsel2 == false && eqsel3 == false && eqsel4 == false && eqsel5 == true && eqsel6 == false && eqsel7 == false && eqsel8 == false){   //政治+英语一+数学三
          $('.eFoot_l').show();
          yhTxt = Number(couprise0) + Number(couprise1) + Number(couprise5);
          dbPrise1(yhTxt - 600)
          $('.sprint').attr('href','http://e.kaoyan365.cn/class-58415/').addClass('spirit_opa');;
        }else if(eqsel0 == true && eqsel1 == false && eqsel2 == true && eqsel3 == true && eqsel4 == false && eqsel5 == false && eqsel6 == false && eqsel7 == false && eqsel8 == false){   //政治+英语二+数学一
          $('.eFoot_l').show();
          yhTxt = Number(couprise0) + Number(couprise2) + Number(couprise3);
          dbPrise1(yhTxt - 600)
          $('.sprint').attr('href','http://e.kaoyan365.cn/class-58419/').addClass('spirit_opa');;
        }else if(eqsel0 == true && eqsel1 == false && eqsel2 == true && eqsel3 == false && eqsel4 == true && eqsel5 == false && eqsel6 == false && eqsel7 == false && eqsel8 == false){   //政治+英语二+数学二
          $('.eFoot_l').show();
          yhTxt = Number(couprise0) + Number(couprise2) + Number(couprise4);
          dbPrise1(yhTxt - 600)
          $('.sprint').attr('href','http://e.kaoyan365.cn/class-58420/').addClass('spirit_opa');;
        }else if(eqsel0 == true && eqsel1 == false && eqsel2 == true && eqsel3 == false && eqsel4 == false && eqsel5 == true && eqsel6 == false && eqsel7 == false && eqsel8 == false){   //政治+英语二+数学三
          $('.eFoot_l').show();
          yhTxt = Number(couprise0) + Number(couprise2) + Number(couprise5);
          dbPrise1(yhTxt - 600)
          $('.sprint').attr('href','http://e.kaoyan365.cn/class-58421/').addClass('spirit_opa');;
        }else if(eqsel0 == false && eqsel1 == false && eqsel2 == true && eqsel3 == false && eqsel4 == false && eqsel5 == false && eqsel6 == true && eqsel7 == false && eqsel8 == false){   //英语二+管综
          $('.eFoot_l').show();
          yhTxt = Number(couprise2) + Number(couprise6);
          dbPrise1(yhTxt - 400)
          $('.sprint').attr('href','http://e.kaoyan365.cn/class-58423/').addClass('spirit_opa');;
        }else if(eqsel9 == true && eqsel10 == false && eqsel11 == false && eqsel12 == false){   //政治VIP
          $('.eFoot_l').show();
          yhTxt = Number(couprise9);
          dbPrise1(yhTxt)
          $('.sprint').attr('href','http://e.kaoyan365.cn/class-74466/').addClass('spirit_opa');
        }else if(eqsel9 == false && eqsel10 == true && eqsel11 == false && eqsel12 == false){   //英语VIP
          $('.eFoot_l').show();
          yhTxt = Number(couprise10);
          dbPrise1(yhTxt)
          $('.sprint').attr('href','http://e.kaoyan365.cn/class-74467/').addClass('spirit_opa');
        }else if(eqsel9 == false && eqsel10 == false && eqsel11 == true && eqsel12 == false){   //数学VIP
          $('.eFoot_l').show();
          yhTxt = Number(couprise11);
          dbPrise1(yhTxt)
          $('.sprint').attr('href','http://e.kaoyan365.cn/class-74468/').addClass('spirit_opa');
        }else if(eqsel9 == false && eqsel10 == false && eqsel11 == false && eqsel12 == true){   //管综VIP
          $('.eFoot_l').show();
          yhTxt = Number(couprise12);
          dbPrise1(yhTxt)
          $('.sprint').attr('href','http://e.kaoyan365.cn/class-74469/').addClass('spirit_opa');
        }else if(eqsel9 == true && eqsel10 == false && eqsel11 == true && eqsel12 == false){   //政治VIP + 数学VIP
          $('.eFoot_l').show();
          yhTxt = Number(couprise9) + Number(couprise11);
          dbPrise1(yhTxt - 680)
          $('.sprint').attr('href','http://e.kaoyan365.cn/class-74490/').addClass('spirit_opa');
        }else if(eqsel9 == true && eqsel10 == true && eqsel11 == false && eqsel12 == false){   //政治VIP + 英语VIP
          $('.eFoot_l').show();
          yhTxt = Number(couprise9) + Number(couprise10);
          dbPrise1(yhTxt - 680)
          $('.sprint').attr('href','http://e.kaoyan365.cn/class-74487/').addClass('spirit_opa');
        }else if(eqsel9 == false && eqsel10 == true && eqsel11 == true && eqsel12 == false){   //英语VIP + 数学VIP
          $('.eFoot_l').show();
          yhTxt = Number(couprise10) + Number(couprise11);
          dbPrise1(yhTxt - 680)
          $('.sprint').attr('href','http://e.kaoyan365.cn/class-74485/').addClass('spirit_opa');
        }else if(eqsel9 == false && eqsel10 == true && eqsel11 == false && eqsel12 == true){   //英语VIP + 管综VIP
          $('.eFoot_l').show();
          yhTxt = Number(couprise10) + Number(couprise12);
          dbPrise1(yhTxt - 380)
          $('.sprint').attr('href','http://e.kaoyan365.cn/class-74491/').addClass('spirit_opa');
        }else if(eqsel9 == true && eqsel10 == true && eqsel11 == true && eqsel12 == false){   //政治VIP + 英语VIP + 数学VIP
          $('.eFoot_l').show();
          yhTxt = Number(couprise9) + Number(couprise10) + Number(couprise11);
          dbPrise1(yhTxt - 1060)
          $('.sprint').attr('href','http://e.kaoyan365.cn/class-74492/').addClass('spirit_opa');
        }else{
          $('.eFoot_l').hide();
          $('#dazhe').html('');
          $('.sprint').attr('href','javascript:;').removeClass('spirit_opa');
        }
      })
      
    })
  }
  publicSel2()
  //21专业课内部选课方法
  function ccc(index){
    $('#courseList_1'+index).find('.cl_item').each(function(i,n){
      //$('#courseList_0'+index).find('.cl_item').find('.chkbx').removeClass('chkbx_g');
      $(this).find('.chkbx').on('click',function(){
        //$(this).toggleClass("chkbx_g");
        var idx = $(this).parent().parent().index();
        var hasC = $(this).hasClass("chkbx_g");
        console.log('按钮:::'+index+'==='+idx)
        console.log('hasC+++'+hasC);
        if(hasC == true){
          $('.eFoot_l').hide();
          $(this).removeClass('chkbx_g');
          $('.sprint').attr('href','javascript:;').removeClass('spirit_opa');
        }else{
          var chkbxC = $(this).parent().parent().siblings().children();
          var chkbxCfa = $(this).parent().parent().parent().siblings().children();

          $(this).addClass('chkbx_g');

          $(chkbxC).children().removeClass('chkbx_g');
          $(chkbxCfa).find('.chkbx').removeClass('chkbx_g');
          var couHref = $(majorCourse21[index])[idx].courseHref;
          $('.sprint').attr('href',''+couHref+'').addClass('spirit_opa');
          //获取价格
          var couprise = $('#courseList_0'+index).find('.chkbx').eq(idx).parent().next().next().text();
          var dataType = $('#courseList_0'+index).find('.chkbx').eq(idx).parent().next().next().attr('data-type');
          //精品网课优惠
          function dbPrise1(pTxt){
            console.log(pTxt)
            if(pTxt>=500 && pTxt<1000){
              $('#dazhe').html('500减100');
            }else if(pTxt>=1000 && pTxt<2000){
              $('#dazhe').html('1000减200');
            }else if(pTxt>=2000 && pTxt<3000){
              $('#dazhe').html('2000减300');
            }else if(pTxt>=3000 && pTxt<4000){
              $('#dazhe').html('3000减400');
            }else if(pTxt>4000){
              $('#dazhe').html('4000减500');
            }
          }
          if(dataType == 'boutique'){
            $('.eFoot_l').show();
            dbPrise1(couprise)
          }
        }
      })
    });
  }
  ccc(0)


  //向上广告
  function info(){
    //复制第一个li
    var fadeItem =$("#fadetop>.fadeItem:eq(0)").clone();
    
    //使用animate对li的外边距进行调整从而达到向上滚动的效果
    $("#fadetop>.fadeItem:eq(0)").animate({marginTop:"-173px"},2000,function(){
      //对已经消失的li进行删除
      $("#fadetop>.fadeItem:eq(0)").remove();
      //把复制后的li插入到最后
      $("#fadetop").append(fadeItem);
    })
  }


  //每隔两秒进行一次滚动
  clearInterval(timing);
  var timing =setInterval(info,2000);
  
  $(".fadeItem").hover(
    function(){
      clearInterval(timing);
    },
    function(){
      timing = setInterval(info,2000);
    }
  )
    

  //禁止滚动条滚动
  function unScroll() {
    var top = $(document).scrollTop();
    $(document).on('scroll.unable',function (e) {
        $(document).scrollTop(top);
    })
  }

  //移除禁止滚动条滚动
  function removeUnScroll() {
    $(document).unbind("scroll.unable");
  }

  $('.closeBtn').on('click',function(){
    $('#wprized').hide();
    $('#wprized1').hide();
    removeUnScroll()
  })
});
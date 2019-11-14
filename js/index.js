$(function(){
  // 锚点
  $('#nav a').each(function(){
    $(this).on('click',function(){
      var href = $(this).attr('href');
      $("html").stop().animate({scrollTop: $(href).offset().top},1000);
      return false;
    })
  });
  
  /* $('#backToTop').on('click',function(){
    var href = $(this.hash).attr('href');
    $("html").stop().animate({scrollTop: $(href).offset().top},1000);
    return false;
  }) */

  $("#backToTop").click(function(event){
    event.preventDefault();
    
    var pos = $(this.hash).offset().top;
    $('html,body').animate({scrollTop:pos},1000);
  });
  //定时换banner+视频
  function time1(){
    //var timestamp1 = (new Date("2019/11/10 24:00:00")).getTime();
    var oCurr1 = new Date();
    oCurr1.setFullYear(2019,10,10);
    oCurr1.setHours(24,0,0,0);
    var timestamp1 = oCurr1.getTime();
    //var timestamp2 = (new Date("2019/11/11 24:00:00")).getTime();
    var oCurr2 = new Date();
    oCurr2.setFullYear(2019,10,11);
    oCurr2.setHours(24,0,0,0);
    var timestamp2 = oCurr2.getTime();
    //var timestamp3 = (new Date("2019/11/13 24:00:00")).getTime();
    var oCurr3 = new Date();
    oCurr3.setFullYear(2019,10,13);
    oCurr3.setHours(24,0,0,0);
    var timestamp3 = oCurr3.getTime();
    //var timestamp4 = (new Date("2019/11/17 24:00:00")).getTime();
    var oCurr4 = new Date();
    oCurr4.setFullYear(2019,10,17);
    oCurr4.setHours(24,0,0,0);
    var timestamp4 = oCurr4.getTime();

    var oNow = new Date();
    var iNow = oNow.getTime();

    if(iNow<timestamp1){   //10号之前
      $('#banner img').attr('src','images/banner1.jpg');
      $('#zgVideo1').show();
      $('#zgVideo2').hide();
      $('#zgVideo3').hide();
    }else if(iNow >=timestamp1 && iNow < timestamp2){  //11号当天
      $('#banner img').attr('src','images/banner2.jpg');
      $('#zgVideo1').hide();
      $('#zgVideo2').show();
      $('#zgVideo3').hide();
    }else if(iNow >=timestamp2 && iNow < timestamp3){  //12-13号
      $('#banner img').attr('src','images/banner2.jpg');
      $('#zgVideo1').show();
      $('#zgVideo2').hide();
      $('#zgVideo3').hide();
    }else if(iNow >=timestamp4){  //13号-17号
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
        clearInterval(timerrr);
        clearInterval(cleartime);
        var cleartime = setTimeout(function(){
          current()
        },10000);
      })
    })
  }
  tab('#btngItem1','#cwgItem1');
  tab('#btngItem2','#cwgItem2');
  tab('#btngItem3','#cwgItem3');
  tab('#btngItem4','#cwgItem4');

  //当天
  function current(){
    /* 6-10号 */
    //var currentTime1 = (new Date("2019/11/6 24:00:00")).getTime(); //6号
    var oCurr1 = new Date();
    oCurr1.setFullYear(2019,10,6);
    oCurr1.setHours(24,0,0,0);
    var currentTime1 = oCurr1.getTime();

    //var currentTime2 = (new Date("2019/11/7 24:00:00")).getTime(); //7号
    var oCurr2 = new Date();
    oCurr2.setFullYear(2019,10,7);
    oCurr2.setHours(24,0,0,0);
    var currentTime2 = oCurr2.getTime();
    //var currentTime3 = (new Date("2019/11/8 24:00:00")).getTime(); //8号
    var oCurr3 = new Date();
    oCurr3.setFullYear(2019,10,8);
    oCurr3.setHours(24,0,0,0);
    var currentTime3 = oCurr3.getTime();
    //var currentTime4 = (new Date("2019/11/9 24:00:00")).getTime(); //9号
    var oCurr4 = new Date();
    oCurr4.setFullYear(2019,10,9);
    oCurr4.setHours(24,0,0,0);
    var currentTime4 = oCurr4.getTime();
    //var currentTime5 = (new Date("2019/11/10 24:00:00")).getTime(); //10号
    var oCurr5 = new Date();
    oCurr5.setFullYear(2019,10,10);
    oCurr5.setHours(24,0,0,0);
    var currentTime5 = oCurr5.getTime();
    //var currentTime6 = (new Date("2019/11/11 24:00:00")).getTime(); //11号
    var oCurr6 = new Date();
    oCurr6.setFullYear(2019,10,11);
    oCurr6.setHours(24,0,0,0);
    var currentTime6 = oCurr6.getTime();

    /* 11号当天 */
    //11点
    var oCurr11 = new Date();
    oCurr11.setFullYear(2019,10,11);
    oCurr11.setHours(11,0,0,0);
    var currentTime11 = oCurr11.getTime();
    //13点
    var oCurr21 = new Date();
    oCurr21.setFullYear(2019,10,11);
    oCurr21.setHours(13,0,0,0);
    var currentTime21 = oCurr21.getTime();
    //15点
    var oCurr31 = new Date();
    oCurr31.setFullYear(2019,10,11);
    oCurr31.setHours(15,0,0,0);
    var currentTime31 = oCurr31.getTime();
    //17点
    var oCurr41 = new Date();
    oCurr41.setFullYear(2019,10,11);
    oCurr41.setHours(17,0,0,0);
    var currentTime41 = oCurr41.getTime();
    //19点
    var oCurr51 = new Date();
    oCurr51.setFullYear(2019,10,11);
    oCurr51.setHours(19,0,0,0);
    var currentTime51 = oCurr51.getTime();
    //21点
    var oCurr61 = new Date();
    oCurr61.setFullYear(2019,10,11);
    oCurr61.setHours(21,0,0,0);
    var currentTime61 = oCurr61.getTime();  
    //23点
    var oCurr71 = new Date();
    oCurr71.setFullYear(2019,10,11);
    oCurr71.setHours(23,0,0,0);
    var currentTime71 = oCurr71.getTime();    
    /* 12-13号 */
    //12号
    var oCurr12 = new Date();
    oCurr12.setFullYear(2019,10,12);
    oCurr12.setHours(24,0,0,0);
    var currentTime12 = oCurr12.getTime();

    //13号
    var oCurr22 = new Date();
    oCurr22.setFullYear(2019,10,13);
    oCurr22.setHours(24,0,0,0);
    var currentTime22 = oCurr22.getTime();

    /* 14-17号 */
    //14号
    var oCurr13 = new Date();
    oCurr13.setFullYear(2019,10,14);
    oCurr13.setHours(24,0,0,0);
    var currentTime13 = oCurr13.getTime();

    //15号
    var oCurr23 = new Date();
    oCurr23.setFullYear(2019,10,15);
    oCurr23.setHours(24,0,0,0);
    var currentTime23 = oCurr23.getTime();
    //16号
    var oCurr33 = new Date();
    oCurr33.setFullYear(2019,10,16);
    oCurr33.setHours(24,0,0,0);
    var currentTime33 = oCurr33.getTime();
    //17号
    var oCurr43 = new Date();
    oCurr43.setFullYear(2019,10,17);
    oCurr43.setHours(24,0,0,0);
    var currentTime43 = oCurr43.getTime();

    var iNow = (new Date()).getTime();
    /* 6-10条件 */
    if(iNow<currentTime1){
      // $($('#btngItem1 .times').eq(0).find('.quantime')).addClass('activeT').siblings().find('.quantime').removeClass('activeT');
      // $($('#btngItem1 .times').eq(0).find('.timeq')).addClass('activeB').siblings().find('.timeq').removeClass('activeB');
      $('#btngItem1 .times').eq(0).find('.quantime').addClass('activeT');
      $('#btngItem1 .times').eq(0).find('.timeq').addClass('activeB');
      $('#btngItem1 .times').eq(0).siblings().find('.quantime').removeClass('activeT');
      $('#btngItem1 .times').eq(0).siblings().find('.timeq').removeClass('activeB');

      $('#cwgItem1 .course_area').eq(0).css('display','flex').siblings().css('display','none');

      /* $('#btngItem1 .times').each(function(){
        $(this).find('.timeq').on('click',function(){
          var index = $(this).parent().index();
          console.log(index)
          $(this).parent().find('.quantime').addClass('activeT');
          $(this).parent().siblings().find('.quantime').removeClass('activeT');
          $(this).addClass('activeB');
          $(this).parent().siblings().find('.timeq').removeClass('activeB');
          $(conid+' .course_area').eq(index).css('display','flex').siblings().css('display','none');
        })
      }) */
    }else if(iNow>=currentTime1 && iNow<currentTime2){
      $('#btngItem1 .times').eq(1).find('.quantime').addClass('activeT');
      $('#btngItem1 .times').eq(1).find('.timeq').addClass('activeB');
      $('#btngItem1 .times').eq(1).siblings().find('.quantime').removeClass('activeT');
      $('#btngItem1 .times').eq(1).siblings().find('.timeq').removeClass('activeB');

      $('#cwgItem1 .course_area').eq(1).css('display','flex').siblings().css('display','none');
    }else if(iNow>=currentTime2 && iNow<currentTime3){
      $('#btngItem1 .times').eq(2).find('.quantime').addClass('activeT');
      $('#btngItem1 .times').eq(2).find('.timeq').addClass('activeB');
      $('#btngItem1 .times').eq(2).siblings().find('.quantime').removeClass('activeT');
      $('#btngItem1 .times').eq(2).siblings().find('.timeq').removeClass('activeB');

      $('#cwgItem1 .course_area').eq(2).css('display','flex').siblings().css('display','none');
    }else if(iNow>=currentTime3 && iNow<currentTime4){
      $('#btngItem1 .times').eq(3).find('.quantime').addClass('activeT');
      $('#btngItem1 .times').eq(3).find('.timeq').addClass('activeB');
      $('#btngItem1 .times').eq(3).siblings().find('.quantime').removeClass('activeT');
      $('#btngItem1 .times').eq(3).siblings().find('.timeq').removeClass('activeB');

      $('#cwgItem1 .course_area').eq(3).css('display','flex').siblings().css('display','none');
    }else if(iNow>=currentTime4 && iNow<currentTime5){
      $('#btngItem1 .times').eq(4).find('.quantime').addClass('activeT');
      $('#btngItem1 .times').eq(4).find('.timeq').addClass('activeB');
      $('#btngItem1 .times').eq(4).siblings().find('.quantime').removeClass('activeT');
      $('#btngItem1 .times').eq(4).siblings().find('.timeq').removeClass('activeB');

      $('#cwgItem1 .course_area').eq(4).css('display','flex').siblings().css('display','none');
    }else if(iNow>=currentTime5 && iNow<currentTime6){
      $('#btngItem1 .times').eq(5).find('.quantime').addClass('activeT');
      $('#btngItem1 .times').eq(5).find('.timeq').addClass('activeB');
      $('#btngItem1 .times').eq(5).siblings().find('.quantime').removeClass('activeT');
      $('#btngItem1 .times').eq(5).siblings().find('.timeq').removeClass('activeB');

      $('#cwgItem1 .course_area').eq(5).css('display','flex').siblings().css('display','none');
    }
    /* 11号当天条件 */
    if(iNow<currentTime11){
      $('#btngItem2 .times').eq(0).find('.quantime').addClass('activeT');
      $('#btngItem2 .times').eq(0).find('.timeq').addClass('activeB');
      $('#btngItem2 .times').eq(0).siblings().find('.quantime').removeClass('activeT');
      $('#btngItem2 .times').eq(0).siblings().find('.timeq').removeClass('activeB');

      $('#cwgItem2 .course_area').eq(0).css('display','flex').siblings().css('display','none');
    }else if(iNow>=currentTime11 && iNow<currentTime21){
      $('#btngItem2 .times').eq(0).find('.quantime').addClass('activeT');
      $('#btngItem2 .times').eq(0).find('.timeq').addClass('activeB');
      $('#btngItem2 .times').eq(0).siblings().find('.quantime').removeClass('activeT');
      $('#btngItem2 .times').eq(0).siblings().find('.timeq').removeClass('activeB');

      $('#cwgItem2 .course_area').eq(0).css('display','flex').siblings().css('display','none');
    }else if(iNow>=currentTime21 && iNow<currentTime31){
      $('#btngItem2 .times').eq(1).find('.quantime').addClass('activeT');
      $('#btngItem2 .times').eq(1).find('.timeq').addClass('activeB');
      $('#btngItem2 .times').eq(1).siblings().find('.quantime').removeClass('activeT');
      $('#btngItem2 .times').eq(1).siblings().find('.timeq').removeClass('activeB');

      $('#cwgItem2 .course_area').eq(1).css('display','flex').siblings().css('display','none');
    }else if(iNow>=currentTime31 && iNow<currentTime41){
      $('#btngItem2 .times').eq(2).find('.quantime').addClass('activeT');
      $('#btngItem2 .times').eq(2).find('.timeq').addClass('activeB');
      $('#btngItem2 .times').eq(2).siblings().find('.quantime').removeClass('activeT');
      $('#btngItem2 .times').eq(2).siblings().find('.timeq').removeClass('activeB');

      $('#cwgItem2 .course_area').eq(2).css('display','flex').siblings().css('display','none');
    }else if(iNow>=currentTime41 && iNow<currentTime51){
      $('#btngItem2 .times').eq(3).find('.quantime').addClass('activeT');
      $('#btngItem2 .times').eq(3).find('.timeq').addClass('activeB');
      $('#btngItem2 .times').eq(3).siblings().find('.quantime').removeClass('activeT');
      $('#btngItem2 .times').eq(3).siblings().find('.timeq').removeClass('activeB');

      $('#cwgItem2 .course_area').eq(3).css('display','flex').siblings().css('display','none');
    }else if(iNow>=currentTime51 && iNow<currentTime61){
      $('#btngItem2 .times').eq(4).find('.quantime').addClass('activeT');
      $('#btngItem2 .times').eq(4).find('.timeq').addClass('activeB');
      $('#btngItem2 .times').eq(4).siblings().find('.quantime').removeClass('activeT');
      $('#btngItem2 .times').eq(4).siblings().find('.timeq').removeClass('activeB');

      $('#cwgItem2 .course_area').eq(4).css('display','flex').siblings().css('display','none');
    }else if(iNow>=currentTime61 && iNow<currentTime71){
      $('#btngItem2 .times').eq(5).find('.quantime').addClass('activeT');
      $('#btngItem2 .times').eq(5).find('.timeq').addClass('activeB');
      $('#btngItem2 .times').eq(5).siblings().find('.quantime').removeClass('activeT');
      $('#btngItem2 .times').eq(5).siblings().find('.timeq').removeClass('activeB');

      $('#cwgItem2 .course_area').eq(5).css('display','flex').siblings().css('display','none');
    }else if(iNow>=currentTime71){
      $('#btngItem2 .times').eq(6).find('.quantime').addClass('activeT');
      $('#btngItem2 .times').eq(6).find('.timeq').addClass('activeB');
      $('#btngItem2 .times').eq(6).siblings().find('.quantime').removeClass('activeT');
      $('#btngItem2 .times').eq(6).siblings().find('.timeq').removeClass('activeB');

      $('#cwgItem2 .course_area').eq(6).css('display','flex').siblings().css('display','none');
    }
    /* 12-13条件 */
    if(iNow<currentTime12){
      $('#btngItem3 .times').eq(0).find('.quantime').addClass('activeT');
      $('#btngItem3 .times').eq(0).find('.timeq').addClass('activeB');
      $('#btngItem3 .times').eq(0).siblings().find('.quantime').removeClass('activeT');
      $('#btngItem3 .times').eq(0).siblings().find('.timeq').removeClass('activeB');

      $('#cwgItem3 .course_area').eq(0).css('display','flex').siblings().css('display','none');
    }else if(iNow>=currentTime12 && iNow<currentTime22){
      $('#btngItem3 .times').eq(1).find('.quantime').addClass('activeT');
      $('#btngItem3 .times').eq(1).find('.timeq').addClass('activeB');
      $('#btngItem3 .times').eq(1).siblings().find('.quantime').removeClass('activeT');
      $('#btngItem3 .times').eq(1).siblings().find('.timeq').removeClass('activeB');

      $('#cwgItem3 .course_area').eq(1).css('display','flex').siblings().css('display','none');
    } 
    /* 14-17条件 */
    if(iNow<currentTime13){
      $('#btngItem4 .times').eq(0).find('.quantime').addClass('activeT');
      $('#btngItem4 .times').eq(0).find('.timeq').addClass('activeB');
      $('#btngItem4 .times').eq(0).siblings().find('.quantime').removeClass('activeT');
      $('#btngItem4 .times').eq(0).siblings().find('.timeq').removeClass('activeB');

      $('#cwgItem4 .course_area').eq(0).css('display','flex').siblings().css('display','none');
    }else if(iNow>=currentTime13 && iNow<currentTime23){
      $('#btngItem4 .times').eq(1).find('.quantime').addClass('activeT');
      $('#btngItem4 .times').eq(1).find('.timeq').addClass('activeB');
      $('#btngItem4 .times').eq(1).siblings().find('.quantime').removeClass('activeT');
      $('#btngItem4 .times').eq(1).siblings().find('.timeq').removeClass('activeB');

      $('#cwgItem4 .course_area').eq(1).css('display','flex').siblings().css('display','none');
    }else if(iNow>=currentTime23 && iNow<currentTime33){
      $('#btngItem4 .times').eq(2).find('.quantime').addClass('activeT');
      $('#btngItem4 .times').eq(2).find('.timeq').addClass('activeB');
      $('#btngItem4 .times').eq(2).siblings().find('.quantime').removeClass('activeT');
      $('#btngItem4 .times').eq(2).siblings().find('.timeq').removeClass('activeB');

      $('#cwgItem4 .course_area').eq(2).css('display','flex').siblings().css('display','none');
    }else if(iNow>=currentTime33 && iNow<currentTime43){
      $('#btngItem4 .times').eq(3).find('.quantime').addClass('activeT');
      $('#btngItem4 .times').eq(3).find('.timeq').addClass('activeB');
      $('#btngItem4 .times').eq(3).siblings().find('.quantime').removeClass('activeT');
      $('#btngItem4 .times').eq(3).siblings().find('.timeq').removeClass('activeB');

      $('#cwgItem4 .course_area').eq(3).css('display','flex').siblings().css('display','none');
    }
  }
  current();
  clearInterval(timerrr);
  var timerrr = setInterval(function(){
    current();
  },1000);

  //6-10秒杀课
  function msk1(){
    //var timestamp1 = (new Date("2019/11/6 19:00:00")).getTime();
    var oCurr1 = new Date();
    oCurr1.setFullYear(2019,10,6);
    oCurr1.setHours(19,0,0,0);
    var timestamp1 = oCurr1.getTime();
    //var timestamp2 = (new Date("2019/11/6 19:30:00")).getTime();
    var oCurr2 = new Date();
    oCurr2.setFullYear(2019,10,6);
    oCurr2.setHours(19,30,0,0);
    var timestamp2 = oCurr2.getTime();

    //var timestamp3 = (new Date("2019/11/7 19:00:00")).getTime();
    var oCurr3 = new Date();
    oCurr3.setFullYear(2019,10,7);
    oCurr3.setHours(19,0,0,0);
    var timestamp3 = oCurr3.getTime();
    //var timestamp4 = (new Date("2019/11/7 19:30:00")).getTime();
    var oCurr4 = new Date();
    oCurr4.setFullYear(2019,10,7);
    oCurr4.setHours(19,30,0,0);
    var timestamp4 = oCurr4.getTime();

    //var timestamp5 = (new Date("2019/11/8 19:00:00")).getTime();
    var oCurr5 = new Date();
    oCurr5.setFullYear(2019,10,8);
    oCurr5.setHours(19,0,0,0);
    var timestamp5 = oCurr5.getTime();
    //var timestamp6 = (new Date("2019/11/8 19:30:00")).getTime();
    var oCurr6 = new Date();
    oCurr6.setFullYear(2019,10,8);
    oCurr6.setHours(19,30,0,0);
    var timestamp6 = oCurr6.getTime();

    //var timestamp7 = (new Date("2019/11/9 19:00:00")).getTime();
    var oCurr7 = new Date();
    oCurr7.setFullYear(2019,10,9);
    oCurr7.setHours(19,0,0,0);
    var timestamp7 = oCurr7.getTime();
    //var timestamp8 = (new Date("2019/11/9 19:30:00")).getTime();
    var oCurr8 = new Date();
    oCurr8.setFullYear(2019,10,9);
    oCurr8.setHours(19,30,0,0);
    var timestamp8 = oCurr8.getTime();

    //var timestamp9 = (new Date("2019/11/10 19:00:00")).getTime();
    var oCurr9 = new Date();
    oCurr9.setFullYear(2019,10,10);
    oCurr9.setHours(19,0,0,0);
    var timestamp9 = oCurr9.getTime();
    //var timestamp10 = (new Date("2019/11/10 19:30:00")).getTime();
    var oCurr10 = new Date();
    oCurr10.setFullYear(2019,10,10);
    oCurr10.setHours(19,30,0,0);
    var timestamp10 = oCurr10.getTime();

    //var timestamp11 = (new Date("2019/11/11 19:00:00")).getTime();
    var oCurr11 = new Date();
    oCurr11.setFullYear(2019,10,11);
    oCurr11.setHours(19,0,0,0);
    var timestamp11 = oCurr11.getTime();
    //var timestamp12 = (new Date("2019/11/11 19:30:00")).getTime();
    var oCurr12 = new Date();
    oCurr12.setFullYear(2019,10,11);
    oCurr12.setHours(19,30,0,0);
    var timestamp12 = oCurr12.getTime();



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
    }else if(iNow>=timestamp2 && iNow<timestamp3){ //6-7
      $('#cwgItem1 .zhuangtai').eq(0).addClass('ysq');
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
    }else if(iNow>=timestamp3 && iNow<timestamp4){ //7号
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
    }else if(iNow>=timestamp4 && iNow<timestamp5){ //7-8
      $('#cwgItem1 .zhuangtai').eq(0).addClass('ysq');
      $('#cwgItem1 .zhuangtai').eq(1).addClass('ysq');
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
    }else if(iNow>=timestamp5 && iNow<timestamp6){ //8号
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
    }else if(iNow>=timestamp6 && iNow<timestamp7){ //8-9
      $('#cwgItem1 .zhuangtai').eq(0).addClass('ysq');
      $('#cwgItem1 .zhuangtai').eq(1).addClass('ysq');
      $('#cwgItem1 .zhuangtai').eq(2).addClass('ysq');
      $('#cwgItem1 .zhuangtai').eq(3).addClass('wks');
      $('#cwgItem1 .zhuangtai').eq(4).addClass('wks');
      $('#cwgItem1 .zhuangtai').eq(5).addClass('wks');
      $('.car_button').eq(0).addClass('po_ev').css('color','#ccc');
      $('.car_button').eq(1).addClass('po_ev').css('color','#ccc');
      $('.car_button').eq(2).addClass('po_ev').css('color','#ccc');
      $('.car_button').eq(3).addClass('po_ev').css('color','#ccc');
      $('.car_button').eq(4).addClass('po_ev').css('color','#ccc');
      $('.car_button').eq(5).addClass('po_ev').css('color','#ccc');
    }else if(iNow>=timestamp7 && iNow<timestamp8){ //9号
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
    }else if(iNow>=timestamp8 && iNow<timestamp9){ //9-10
      $('#cwgItem1 .zhuangtai').eq(0).addClass('ysq');
      $('#cwgItem1 .zhuangtai').eq(1).addClass('ysq');
      $('#cwgItem1 .zhuangtai').eq(2).addClass('ysq');
      $('#cwgItem1 .zhuangtai').eq(3).addClass('ysq');
      $('#cwgItem1 .zhuangtai').eq(4).addClass('wks');
      $('#cwgItem1 .zhuangtai').eq(5).addClass('wks');
      $('.car_button').eq(0).addClass('po_ev').css('color','#ccc');
      $('.car_button').eq(1).addClass('po_ev').css('color','#ccc');
      $('.car_button').eq(2).addClass('po_ev').css('color','#ccc');
      $('.car_button').eq(3).addClass('po_ev').css('color','#ccc');
      $('.car_button').eq(4).addClass('po_ev').css('color','#ccc');
      $('.car_button').eq(5).addClass('po_ev').css('color','#ccc');
    }else if(iNow>=timestamp9 && iNow<timestamp10){ //10号
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
    }else if(iNow>=timestamp9 && iNow<timestamp10){ //10-11
      $('#cwgItem1 .zhuangtai').eq(0).addClass('ysq');
      $('#cwgItem1 .zhuangtai').eq(1).addClass('ysq');
      $('#cwgItem1 .zhuangtai').eq(2).addClass('ysq');
      $('#cwgItem1 .zhuangtai').eq(3).addClass('ysq');
      $('#cwgItem1 .zhuangtai').eq(4).addClass('ysq');
      $('#cwgItem1 .zhuangtai').eq(5).addClass('wks');
      $('.car_button').eq(0).addClass('po_ev').css('color','#ccc');
      $('.car_button').eq(1).addClass('po_ev').css('color','#ccc');
      $('.car_button').eq(2).addClass('po_ev').css('color','#ccc');
      $('.car_button').eq(3).addClass('po_ev').css('color','#ccc');
      $('.car_button').eq(4).addClass('po_ev').css('color','#ccc');
      $('.car_button').eq(5).addClass('po_ev').css('color','#ccc');
    }else if(iNow>=timestamp11 && iNow<timestamp12){ //11号
      $('#cwgItem1 .zhuangtai').eq(0).addClass('ysq');
      $('#cwgItem1 .zhuangtai').eq(1).addClass('ysq');
      $('#cwgItem1 .zhuangtai').eq(2).addClass('ysq');
      $('#cwgItem1 .zhuangtai').eq(3).addClass('ysq');
      $('#cwgItem1 .zhuangtai').eq(4).addClass('ysq');
      $('#cwgItem1 .zhuangtai').eq(5).removeClass('wks');
      $('.car_button').eq(0).addClass('po_ev').css('color','#ccc');
      $('.car_button').eq(1).addClass('po_ev').css('color','#ccc');
      $('.car_button').eq(2).addClass('po_ev').css('color','#ccc');
      $('.car_button').eq(3).addClass('po_ev').css('color','#ccc');
      $('.car_button').eq(4).addClass('po_ev').css('color','#ccc');
      $('.car_button').eq(5).removeClass('po_ev').css('color','#ee060b');
    }else if(iNow>=timestamp12){
      clearInterval(timer2);
    }else{

    }
  }
  msk1();
  clearInterval(timer4);
  var timer4 = setInterval(function(){
    msk1();
  },1000);


  //11号当天秒杀课
  function msk2(){
    //var timestamp1 = (new Date("2019/11/11 11:00:00")).getTime();
    var oCurr1 = new Date();
    oCurr1.setFullYear(2019,10,11);
    oCurr1.setHours(11,0,0,0);
    var timestamp1 = oCurr1.getTime();
    //var timestamp2 = (new Date("2019/11/11 13:00:00")).getTime();
    var oCurr2 = new Date();
    oCurr2.setFullYear(2019,10,11);
    oCurr2.setHours(13,0,0,0);
    var timestamp2 = oCurr2.getTime();
    //var timestamp3 = (new Date("2019/11/11 15:00:00")).getTime();
    var oCurr3 = new Date();
    oCurr3.setFullYear(2019,10,11);
    oCurr3.setHours(15,0,0,0);
    var timestamp3 = oCurr3.getTime();
    //var timestamp4 = (new Date("2019/11/11 17:00:00")).getTime();
    var oCurr4 = new Date();
    oCurr4.setFullYear(2019,10,11);
    oCurr4.setHours(17,0,0,0);
    var timestamp4 = oCurr4.getTime();
    //var timestamp5 = (new Date("2019/11/11 19:00:00")).getTime();
    var oCurr5 = new Date();
    oCurr5.setFullYear(2019,10,11);
    oCurr5.setHours(19,0,0,0);
    var timestamp5 = oCurr5.getTime();
    //var timestamp6 = (new Date("2019/11/11 21:00:00")).getTime();
    var oCurr6 = new Date();
    oCurr6.setFullYear(2019,10,11);
    oCurr6.setHours(21,0,0,0);
    var timestamp6 = oCurr6.getTime();
    //var timestamp7 = (new Date("2019/11/11 23:00:00")).getTime();
    var oCurr7 = new Date();
    oCurr7.setFullYear(2019,10,11);
    oCurr7.setHours(23,0,0,0);
    var timestamp7 = oCurr7.getTime();
    //var timestamp8 = (new Date("2019/11/11 24:00:00")).getTime();
    var oCurr8 = new Date();
    oCurr8.setFullYear(2019,10,11);
    oCurr8.setHours(24,0,0,0);
    var timestamp8 = oCurr8.getTime();

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
    
    var oCurr1 = new Date();
    oCurr1.setFullYear(2019,10,12);
    oCurr1.setHours(19,0,0,0);
    var timestamp1 = oCurr1.getTime();
    
    var oCurr2 = new Date();
    oCurr2.setFullYear(2019,10,12);
    oCurr2.setHours(19,30,0,0);
    var timestamp2 = oCurr2.getTime();
    
    var oCurr3 = new Date();
    oCurr3.setFullYear(2019,10,13);
    oCurr3.setHours(19,0,0,0);
    var timestamp3 = oCurr3.getTime();

    var oCurr4 = new Date();
    oCurr4.setFullYear(2019,10,13);
    oCurr4.setHours(19,30,0,0);
    var timestamp4 = oCurr4.getTime();

    var oNow = new Date();
    var iNow = oNow.getTime();


    console.log('aaa+++'+iNow);
    console.log('timestamp4+++'+timestamp4);
    if(iNow<timestamp1){ 
      $('#cwgItem3 .zhuangtai').eq(0).addClass('wks');
      $('#cwgItem3 .zhuangtai').eq(1).addClass('wks');

      $('#cwgItem3 .car_button').eq(0).addClass('po_ev').css('color','#ccc');
      $('#cwgItem3 .car_button').eq(1).addClass('po_ev').css('color','#ccc');
    }else if(iNow>=timestamp1 && iNow<timestamp2){ 
      $('#cwgItem3 .zhuangtai').eq(0).removeClass('wks');
      $('#cwgItem3 .zhuangtai').eq(1).addClass('wks');

      $('#cwgItem3 .car_button').eq(0).removeClass('po_ev').css('color','#ee060b');
      $('#cwgItem3 .car_button').eq(1).addClass('po_ev').css('color','#ccc');
    }else if(iNow>=timestamp2 && iNow<timestamp3){ 
      $('#cwgItem3 .zhuangtai').eq(0).addClass('ysq');
      $('#cwgItem3 .zhuangtai').eq(1).addClass('wks');
      $('#cwgItem3 .car_button').eq(0).addClass('po_ev').css('color','#ccc');
      $('#cwgItem3 .car_button').eq(1).addClass('po_ev').css('color','#ccc');
    }else if(iNow>=timestamp3 && iNow<timestamp4){ 
      $('#cwgItem3 .zhuangtai').eq(0).addClass('ysq');
      $('#cwgItem3 .zhuangtai').eq(1).removeClass('ysq');
      $('#cwgItem3 .car_button').eq(0).addClass('po_ev').css('color','#ccc');
      $('#cwgItem3 .car_button').eq(1).removeClass('po_ev').css('color','#ee060b');
    }else if(iNow>=timestamp4){
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
    
    var oCurr1 = new Date();
    oCurr1.setFullYear(2019,10,14);
    oCurr1.setHours(19,0,0,0);
    var timestamp1 = oCurr1.getTime();
    
    var oCurr2 = new Date();
    oCurr2.setFullYear(2019,10,14);
    oCurr2.setHours(19,30,0,0);
    var timestamp2 = oCurr2.getTime();
    
    var oCurr3 = new Date();
    oCurr3.setFullYear(2019,10,15);
    oCurr3.setHours(19,0,0,0);
    var timestamp3 = oCurr3.getTime();
    
    var oCurr4 = new Date();
    oCurr4.setFullYear(2019,10,15);
    oCurr4.setHours(19,30,0,0);
    var timestamp4 = oCurr4.getTime();
    
    var oCurr5 = new Date();
    oCurr5.setFullYear(2019,10,16);
    oCurr5.setHours(19,0,0,0);
    var timestamp5 = oCurr5.getTime();
    
    var oCurr6 = new Date();
    oCurr6.setFullYear(2019,10,16);
    oCurr6.setHours(19,30,0,0);
    var timestamp6 = oCurr6.getTime();
    
    var oCurr7 = new Date();
    oCurr7.setFullYear(2019,10,17);
    oCurr7.setHours(19,0,0,0);
    var timestamp7 = oCurr7.getTime();
    
    var oCurr8 = new Date();
    oCurr8.setFullYear(2019,10,17);
    oCurr8.setHours(19,30,0,0);
    var timestamp8 = oCurr8.getTime();

    var oNow = new Date();
    var iNow = oNow.getTime();
    if(iNow<timestamp1){ //14号7:00前
      $('#cwgItem4 .zhuangtai').eq(0).addClass('wks');
      $('#cwgItem4 .zhuangtai').eq(1).addClass('wks');
      $('#cwgItem4 .zhuangtai').eq(2).addClass('wks');
      $('#cwgItem4 .zhuangtai').eq(3).addClass('wks');

      $('#cwgItem4 .car_button').eq(0).addClass('po_ev').css('color','#ccc');
      $('#cwgItem4 .car_button').eq(1).addClass('po_ev').css('color','#ccc');
      $('#cwgItem4 .car_button').eq(2).addClass('po_ev').css('color','#ccc');
      $('#cwgItem4 .car_button').eq(3).addClass('po_ev').css('color','#ccc');
    }else if(iNow>=timestamp1 && iNow<timestamp2){ 
      $('#cwgItem4 .zhuangtai').eq(0).removeClass('wks');
      $('#cwgItem4 .zhuangtai').eq(1).addClass('wks');
      $('#cwgItem4 .zhuangtai').eq(2).addClass('wks');
      $('#cwgItem4 .zhuangtai').eq(3).addClass('wks');

      $('#cwgItem4 .car_button').eq(0).removeClass('po_ev').css('color','#ee060b');
      $('#cwgItem4 .car_button').eq(1).addClass('po_ev').css('color','#ccc');
      $('#cwgItem4 .car_button').eq(2).addClass('po_ev').css('color','#ccc');
      $('#cwgItem4 .car_button').eq(3).addClass('po_ev').css('color','#ccc');
    }else if(iNow>=timestamp2 && iNow<timestamp3){ 
      $('#cwgItem4 .zhuangtai').eq(0).addClass('ysq');
      $('#cwgItem4 .zhuangtai').eq(1).addClass('wks');
      $('#cwgItem4 .zhuangtai').eq(2).addClass('wks');
      $('#cwgItem4 .zhuangtai').eq(3).addClass('wks');

      $('#cwgItem4 .car_button').eq(0).addClass('po_ev').css('color','#ccc');
      $('#cwgItem4 .car_button').eq(1).addClass('po_ev').css('color','#ccc');
      $('#cwgItem4 .car_button').eq(2).addClass('po_ev').css('color','#ccc');
      $('#cwgItem4 .car_button').eq(3).addClass('po_ev').css('color','#ccc');
    }else if(iNow>=timestamp3 && iNow<timestamp4){ 
      $('#cwgItem4 .zhuangtai').eq(0).addClass('ysq');
      $('#cwgItem4 .zhuangtai').eq(1).removeClass('wks');
      $('#cwgItem4 .zhuangtai').eq(2).addClass('wks');
      $('#cwgItem4 .zhuangtai').eq(3).addClass('wks');

      $('#cwgItem4 .car_button').eq(0).addClass('po_ev').css('color','#ccc');
      $('#cwgItem4 .car_button').eq(1).removeClass('po_ev').css('color','#ee060b');
      $('#cwgItem4 .car_button').eq(2).addClass('po_ev').css('color','#ccc');
      $('#cwgItem4 .car_button').eq(3).addClass('po_ev').css('color','#ccc');
    }else if(iNow>=timestamp4 && iNow<timestamp5){
      $('#cwgItem4 .zhuangtai').eq(0).addClass('ysq');
      $('#cwgItem4 .zhuangtai').eq(1).addClass('ysq');
      $('#cwgItem4 .zhuangtai').eq(2).addClass('wks');
      $('#cwgItem4 .zhuangtai').eq(3).addClass('wks');

      $('#cwgItem4 .car_button').eq(0).addClass('po_ev').css('color','#ccc');
      $('#cwgItem4 .car_button').eq(1).addClass('po_ev').css('color','#ccc');
      $('#cwgItem4 .car_button').eq(2).addClass('po_ev').css('color','#ccc');
      $('#cwgItem4 .car_button').eq(3).addClass('po_ev').css('color','#ccc');
    }else if(iNow>=timestamp5 && iNow<timestamp6){
      $('#cwgItem4 .zhuangtai').eq(0).addClass('ysq');
      $('#cwgItem4 .zhuangtai').eq(1).addClass('ysq');
      $('#cwgItem4 .zhuangtai').eq(2).removeClass('wks');
      $('#cwgItem4 .zhuangtai').eq(3).addClass('ysq');

      $('#cwgItem4 .car_button').eq(0).addClass('po_ev').css('color','#ccc');
      $('#cwgItem4 .car_button').eq(1).addClass('po_ev').css('color','#ccc');
      $('#cwgItem4 .car_button').eq(2).removeClass('po_ev').css('color','#ee060b');
      $('#cwgItem4 .car_button').eq(3).addClass('po_ev').css('color','#ccc');
    }else if(iNow>=timestamp6 && iNow<timestamp7){
      $('#cwgItem4 .zhuangtai').eq(0).addClass('ysq');
      $('#cwgItem4 .zhuangtai').eq(1).addClass('ysq');
      $('#cwgItem4 .zhuangtai').eq(2).addClass('ysq');
      $('#cwgItem4 .zhuangtai').eq(3).addClass('wks');

      $('#cwgItem4 .car_button').eq(0).addClass('po_ev').css('color','#ccc');
      $('#cwgItem4 .car_button').eq(1).addClass('po_ev').css('color','#ccc');
      $('#cwgItem4 .car_button').eq(2).addClass('po_ev').css('color','#ccc');
      $('#cwgItem4 .car_button').eq(3).addClass('po_ev').css('color','#ccc');
    }else if(iNow>=timestamp7 && iNow<timestamp8){
      $('#cwgItem4 .zhuangtai').eq(0).addClass('ysq');
      $('#cwgItem4 .zhuangtai').eq(1).addClass('ysq');
      $('#cwgItem4 .zhuangtai').eq(2).addClass('ysq');
      $('#cwgItem4 .zhuangtai').eq(3).removeClass('wks');

      $('#cwgItem4 .car_button').eq(0).addClass('po_ev').css('color','#ccc');
      $('#cwgItem4 .car_button').eq(1).addClass('po_ev').css('color','#ccc');
      $('#cwgItem4 .car_button').eq(2).addClass('po_ev').css('color','#ccc');
      $('#cwgItem4 .car_button').eq(3).removeClass('po_ev').css('color','#ee060b');
    }else if(iNow>=timestamp8){
      $('#cwgItem4 .zhuangtai').eq(0).addClass('ysq');
      $('#cwgItem4 .zhuangtai').eq(1).addClass('ysq');
      $('#cwgItem4 .zhuangtai').eq(2).addClass('ysq');
      $('#cwgItem4 .zhuangtai').eq(3).addClass('ysq');

      $('#cwgItem4 .car_button').eq(0).addClass('po_ev').css('color','#ccc');
      $('#cwgItem4 .car_button').eq(1).addClass('po_ev').css('color','#ccc');
      $('#cwgItem4 .car_button').eq(2).addClass('po_ev').css('color','#ccc');
      $('#cwgItem4 .car_button').eq(3).addClass('po_ev').css('color','#ccc');
      clearInterval(timer7);
    }
  }
  msk4();
  clearInterval(timer7);
  var timer7 = setInterval(function(){
    msk4();
  },1000);

  //秒杀课定时显示按钮及内容
  function msbtn(){
    //var timestamp1 = (new Date("2019/11/10 24:00:00")).getTime();
    var oCurr1 = new Date();
    oCurr1.setFullYear(2019,10,10);
    oCurr1.setHours(24,0,0,0);
    var timestamp1 = oCurr1.getTime();
    //var timestamp2 = (new Date("2019/11/11 24:00:00")).getTime();
    var oCurr2 = new Date();
    oCurr2.setFullYear(2019,10,11);
    oCurr2.setHours(24,0,0,0);
    var timestamp2 = oCurr2.getTime();
    //var timestamp3 = (new Date("2019/11/13 24:00:00")).getTime();
    var oCurr3 = new Date();
    oCurr3.setFullYear(2019,10,13);
    oCurr3.setHours(24,0,0,0);
    var timestamp3 = oCurr3.getTime();
    //var timestamp4 = (new Date("2019/11/17 24:00:00")).getTime();
    var oCurr4 = new Date();
    oCurr4.setFullYear(2019,10,17);
    oCurr4.setHours(24,0,0,0);
    var timestamp4 = oCurr4.getTime();
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
                    +'<span class="ecibodyItem ecibodyItem3"><i>'+n.prise+'</i>'+n.lprise+'</span>'
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
                    +'<span class="ecibodyItem ecibodyItem3" data-type="'+m.courseType+'"><i>'+m.prise+'</i>'+m.lprise+'</span>'
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
      $('#eciBody1 .courseList').eq(index).siblings().find('.chkbx').removeClass('chkbx_g')
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
            $('#dazhe').html('中公11.11，考研好课节');
          }else if(pTxt>=1000 && pTxt<2000){
            $('#dazhe').html('中公11.11，考研好课节');
          }else if(pTxt>=2000 && pTxt<3000){
            $('#dazhe').html('中公11.11，考研好课节');
          }else if(pTxt>=3000 && pTxt<4000){
            $('#dazhe').html('中公11.11，考研好课节');
          }else if(pTxt>4000){
            $('#dazhe').html('中公11.11，考研好课节');
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
        //console.log('按钮:::'+index+'==='+idx)
        console.log('hasC=='+hasC);
        if(hasC == true){
          $('.eFoot_l').hide();
          $(this).removeClass('chkbx_g');
          $(this).hasClass("chkbx_g") == false;
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
    $("#fadetop>.fadeItem:eq(0)").animate({marginTop:"-1.62rem"},2000,function(){
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
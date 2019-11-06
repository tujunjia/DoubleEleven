//禁止滚动条滚动
function unScroll() {
  var top = $(document).scrollTop();
  $(document).on('scroll.unable',function (e) {
      $(document).scrollTop(top);
  })
}
$(function() {
  var speed = 150, //跑马灯速度
    click = true, //阻止多次点击
    img_index = -1, //阴影停在当前奖品的序号
    circle = 0, //跑马灯跑了多少次
    maths;//取一个随机数;
    //num = $('.red').text();

  $('.start').click(function() {
    
    if(click) {
      click = false;
      maths = parseInt((Math.random() * 10) + 80);
      if(maths == 87){
        maths += 1;
      }
      //maths = parseInt(Math.random() * 100);
      console.log('maths==='+maths)
      //maths_f(maths);
      light();
    } else {
      return false;
    }
  });

  //不用加概率
  /* $('.start').click(function() {
    if(click&&num>0) {
      click = false;
      maths = parseInt((Math.random() * 10) + 80);
      console.log('maths==='+maths)
      light();
     } else {
       return false;
     }
  }); */

  //加概率
  /* $('.start').click(function() {
    if(click&&num>0) {
      click = false;
      maths = (Math.random() * 100);
      console.log(maths)
      maths_f(maths);
    } else {
       return false;
    } 
  }); */

  //概率
  /* function maths_f(maths){
    if(maths>0&&maths<2){
      console.log('恭喜获得奖品1')
    }else if(maths>=2&&maths<=4){
      console.log('恭喜获得奖品2')
    }else if(maths>=4&&maths<8){
      console.log('恭喜获得奖品3')
    }else if(maths>=8&&maths<9){
      console.log('恭喜获得奖品4')
    }else if(maths>=9&&maths<21){
      console.log('恭喜获得奖品5')
    }else if(maths>=21&&maths<22){
      console.log('恭喜获得奖品6')
    }else if(maths>=22&&maths<30){
      console.log('恭喜获得奖品7')
    }else if(maths>=30&&maths<100){
      console.log('恭喜获得奖品8')
    }
    light();
  } */

  function light() {
    img();
    circle++;
    console.log('circle:::'+circle)
    var timer = setTimeout(light, speed);

    if(circle > 0 && circle < 5) {
      speed -= 10;
    } else if(circle > 5 && circle < 20) {
      speed -= 5;
    } else if(circle > 50 && circle < 70) {
      speed += 5
    } else if(circle > 70 && circle < maths) {
      speed += 10
    } else if(circle == maths) {
      var text = $('.gift_div .gift:eq(' + img_index + ')').text();
      
      console.log(circle + maths, 'aaa', img_index, $('.gift_div .gift:eq(' + img_index + ')').text())
      clearTimeout(timer);
      if(img_index ==0 || img_index == 1 || img_index == 3 || img_index == 4 || img_index == 7){
        if(img_index ==0){
          $('#wprized').find('img').attr('src','images/zj30.png');
          $('#wprized').find('.lqBtn').attr('href','http://e.kaoyan365.cn/mycoupon/lingqu/p/9ec40da8060f8944602dffa36637fd57/')
        }else if(img_index == 1){
          $('#wprized').find('img').attr('src','images/zj70.png');
          $('#wprized').find('.lqBtn').attr('href','http://e.kaoyan365.cn/mycoupon/lingqu/p/2568de68677d83d269d8a1c226059f3a/')
        }else if(img_index == 3){
          $('#wprized').find('img').attr('src','images/zj50.png');
          $('#wprized').find('.lqBtn').attr('href','http://e.kaoyan365.cn/mycoupon/lingqu/p/e15453327ef464f09c516907a7c638b3/')
        }else if(img_index == 4){
          $('#wprized').find('img').attr('src','images/jp_zzsyz.png');
          $('#wprized').find('.lqBtn').attr('href','http://e.kaoyan365.cn/mycoupon/lingqu/p/ee6d0fa59d907beaffcf23f32b4b700c/')
        }else if(img_index == 7){
          $('#wprized').find('img').attr('src','images/jp_kyqpx.png');
          $('#wprized').find('.lqBtn').attr('href','http://e.kaoyan365.cn/mycoupon/lingqu/p/14dff5f4ffbcda94e21cef894e6e5a9c/')
        }
        setTimeout(function() {
          //alert('恭喜获得' + text)
          $('#wprized').show();
          unScroll()
        }, 300)
      }else if(img_index == 2 || img_index == 5){
        setTimeout(function() {
          //alert('恭喜获得' + text)
          $('#wprized1').show();
          unScroll()
        }, 300)
      }
      click = true;
      speed = 150;
      circle = 0;
      img_index = -1;
      //num--;
      //$('.red').text(num)
    }
  }
  
  function img() {
    if(img_index < 7) {
      img_index++;
      //console.log('img_index=='+img_index)
    } else if(img_index == 7) {
      img_index = 0;
    }
    $('.gift_div .gift:eq(' + img_index + ')').addClass('gift_b').siblings().removeClass('gift_b');
  }
});
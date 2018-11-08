  //手機板導航欄



    $(document).ready(function(){

$('.es-loader').load('examschedule.html');
$('.menubanner-slider').bxSlider({
         
          maxSlides : 50,
			moveSlides : 2,
          mode:'fade',
          controls: false,
          easing: 'swing',
          auto:true,
          responsive:true,
          pager:false,
          infiniteLoop : true,
           touchEnabled : true,

      });

$('.vz-slider').bxSlider({

      						auto : false,
                      controls: true,
						infiniteLoop : true,
						responsive : true,
						slideWidth : 320,
						slideMargin : 30,
						/*minSlides: 1,*/
						maxSlides : 50,
						moveSlides : 2,
						controls : true,
						pager : false,
						prevText : '',
						nextText : '',
						touchEnabled : true,
                      hideControlOnEnd: true,
                      pagerType: 'short',
  });

$('.exz-slider').bxSlider({

						auto : false,
                        mode:'fade',
                      controls: true,
						infiniteLoop : true,
						responsive : true,
						/*minSlides: 1,*/
						maxSlides : 50,
						moveSlides : 2,
						controls : true,
						pager : false,
						prevText : '',
						nextText : '',
              		  touchEnabled : true,


  });


        
        
          


     //考試時間表RWD設定
        
        //延遲監聽次數
var timer
$(window).resize(function(){
    
    window.clearTimeout(timer)
    
      timer = window.setTimeout(function() {
             swipeReLoad();
          console.log('examschedule-reload' + $(window).width());
    }, 1000)
    
});
        
        
        
    function swipeReLoad(){

 if($(window).width()>1600) {
$('.es-loader').load('examschedule.html');
let esSwipe = new Swiper('.swiper-container', {
      slidesPerView: 5,
      spaceBetween: 0,
      centeredSlides: true,
    });
     
}else if($(window).width()>1200) {
        $('.es-loader').load('examschedule.html');
 let esSwipe = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 0,
      centeredSlides: true,
    });

         }else {
        $('.es-loader').load('examschedule.html');
let esSwipe = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: true,
    });

         }};   
        
        
        //整頁手機板換頁家仔class
        
        /*
         function PageSwipeLoad(){
 console.log($(window).width());
 if($(window).width()>780) {
locaion.reload()

     
}else if($(window).width()>1200) {
    


         }else{


         }};   
        */

    });


        
        
        








        

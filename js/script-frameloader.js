  //手機板導航欄



    $(document).ready(function(){
        
        
$('.header').load('header.html');
$('.index-block').load('index.html');    
$('.product-block').load('productDetail.html');    
$('.footer').load('footer.html');    

    


 var PS = new Swiper('.pageSwiper', {
      spaceBetween: 0,

     //按下後跟隨手指滑動的效果 false即滑動成功後才有效果呈現
     followFinger:false,
     
     //ratio比率 越小越難滑動
     touchRatio : 0.1,
     
     //單位px 滑動大於該數值才生效
    threshold : 10,

     //自適應高度
    autoHeight: true,
     
     //hash網址功能
      hashNavigation: {
        watchState: true,
      },
//允許滑動的手勢角度
touchAngle : 10,
     //虛擬Slider 不渲染當前focus視窗內的slider

    });
        
        

        
        
        
        

        
    });


        
        








        

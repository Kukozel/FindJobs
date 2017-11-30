 function PlayImg(id,time){
        var ii=0,me=this;
        var imgs=$(id+' img'),L=imgs.length,tir,w=imgs[0].offsetWidth;

        function fn(t){
             var t=(t||1)==1?1:L-1;
             var n=$(imgs[(ii+t)%L]);
             n.show().css({left:0,opacity:1});
             clearTimeout(tir);
             $(imgs[ii]).animate({ left:w*(t==1?1:-1),opacity:0 },1000,function(){
                $(this).removeClass('act').hide();
                n.addClass('act');
                ii= (ii+t )%L;
                tir=setTimeout(fn,time);
             });
        }
      
        tir=setTimeout(fn,time);
        
    }
    

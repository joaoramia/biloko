$(document).ready(function(){
    $.ajaxSetup({ cache: true });

    window.fbAsyncInit = function() {
      FB.init({
        appId      : '370981806602348',
        xfbml      : true,
        version    : 'v2.8'
      });
      FB.AppEvents.logPageView();
    };

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "//connect.facebook.net/pt_BR/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));

    $(document).on('mouseover', '.mejs__controls', function(){
        // $(this).css('opacity', 1);
    })

    $(document).on('mouseleave', '.mejs__controls', function(){
        if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            // $(this).css('opacity', 0);
        }
    })

    $(document).click(function(e) {
        if (!$(e.target).is('a')) {
            $('.collapse').collapse('hide');
        }
    });

});

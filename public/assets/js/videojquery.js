$(document).ready(function(){
    $.ajaxSetup({ cache: true });
    $.getScript('//connect.facebook.net/en_US/sdk.js', function(){
      FB.init({
        appId: '370981806602348',
        version: 'v2.8' // or v2.1, v2.2, v2.3, ...
      });
      $('#loginbutton,#feedbutton').removeAttr('disabled');
      FB.getLoginStatus(function(){
        console.log('status updated')
      });
    });

    $(document).on('mouseover', '.mejs__controls', function(){
        $(this).css('opacity', 1);
    })

    $(document).on('mouseleave', '.mejs__controls', function(){
        if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            // $(this).css('opacity', 0);
        }
    })
    $('video').on('play', function() {
       console.log('playing')
    });
});

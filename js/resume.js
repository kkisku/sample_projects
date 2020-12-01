//$(document).ready(function(){
//    $('home').click(function(){
//$('#home12').fadeIn(slow);
//    });
//});
$(document).ready(function(){
    $('#kk').click(function(){
         $('#home11').toggleClass("animated slideInLeft delay-10s");
         $('#home12').toggleClass("animated slideInRight delay-10s");
    });
    $('#ulnav').children('li:nth-child(1)').click(function(){
         $('#nav1').toggleClass("animated zoomIn delay-10s");
    });
    $('#ulnav').children('li:nth-child(2)').click(function(){
         $('#nav21').toggleClass("animated slideInLeft delay-10s");
         $('#nav22').toggleClass("animated slideInRight delay-10s");
    });
    $('#ulnav').children('li:nth-child(3)').click(function(){
         $('#eduSection1').toggleClass("animated slideInLeft delay-10s");
         $('#eduSection2').toggleClass("animated slideInRight delay-10s");
    });
    $('#ulnav').children('li:nth-child(4)').click(function(){
         $('#exper1').toggleClass("animated slideInLeft delay-10s");
         $('#exper2').toggleClass("animated flipInX delay-10s");
         $('#exper3').toggleClass("animated slideInRight delay-10s");
    });
    $('#ulnav').children('li:nth-child(5)').click(function(){
         $('#mainSkill').toggleClass("animated pulse delay-10s");
         $('#skill1').toggleClass("animated slideInLeft delay-10s");
         $('#skill2').toggleClass("animated slideInRight delay-10s");
    });
});
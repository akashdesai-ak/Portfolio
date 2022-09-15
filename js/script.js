$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500, 
      'linear'
    );

  });

});


// emailjs
function sendMail(){
  var params = {
      from_name : document.getElementById("name").value,
      email : document.getElementById("email").value,
      phone : document.getElementById("phone").value,
      message : document.getElementById("message").value
  }
  emailjs.send("service_oo9qvi1","template_xce8zzf",params).then((result) => {
      alert('Message sent successfully')
  }).catch((err) => {
      alert(err);
  });
}
 

 var typed3 = new Typed('#typed3', {
    strings: ['I am a data programmer', 'I am a web developer', 'I am a entrepreneur', 'I am a machine learning enthusiast','and I love Hiking and kayaking'],
    typeSpeed: 40,
    backSpeed: 20,
    smartBackspace: true, // this is a default
    loop: true
  });

  var typed2 = new Typed('#typed2', {
    strings: ['Saurav Kharb'],
    typeSpeed: 30,
    backSpeed: 0,
    cursorChar:'',
    fadeOut: true,
    loop: false
  });
 $("#demo01").animatedModal();
    $(document).ready(function() {
  $('.expandable-box').click(function(e) {
    if($(this).hasClass('open')) {
      $('.expandable-box.out').not($(this)).removeClass('out');
      $(this).removeClass('open');
    }
    else {
      $('.expandable-box').not($(this)).addClass('out');
      $(this).addClass('open');
    }
  });
});

 

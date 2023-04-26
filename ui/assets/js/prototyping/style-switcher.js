$(".navbar-right li a").click(function() { 
  $("link").attr("href", $(this).attr('rel'));
  $(this).closest('li').addClass('active');
  $('.navbar-right li a').not(this).closest('li').removeClass('active');
  return false;
});
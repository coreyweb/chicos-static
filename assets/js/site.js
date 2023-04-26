// header search hide/show toggle. remove after header redesign
// desktop
$('.icons-close, #endeca-search').click(function() {
  var txt = $('#endeca-search-form').is(':visible') ? '<i class="fa fa-fw fa-search"></i>' : '<i class="fa fa-fw fa-times"></i>';
  $('#endeca-search-form').slideToggle(200);
  $('.search-icon-wrap').html(txt).text();
  return false;
});
// tablet
$('.icon-search').click(function() {
  var txt = $('#endeca-search-form').is(':visible') ? '<i class="fa fa-fw fa-search"></i>' : '<i class="fa fa-fw fa-times"></i>';
  $('#endeca-search-form').slideToggle(200);
  $(this).html(txt).text();
  return false;
})

// modal gallery toggle

$('#product-img').click(function() {
  $('.modal-gallery').toggleClass('modal-gallery-zoom');
  var _this = $(this);
  var current = _this.attr("src");
  var swap = _this.attr("data-img-swap");     
  _this.attr('src', swap).attr("data-img-swap",current);   
});
$(function() {
  $('.faq-q').on('click', function() {
    var $item = $(this).closest('.faq-item');
    if ($item.hasClass('open')) {
      $item.removeClass('open');
      $item.find('.faq-a').addClass('hidden').removeClass('block');
    } else {
      $('.faq-item').removeClass('open');
      $('.faq-a').addClass('hidden').removeClass('block');
      $item.addClass('open');
      $item.find('.faq-a').removeClass('hidden').addClass('block');
    }
  });
}); 
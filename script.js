  
  /* Pop-Up de tarjetas de informacion amenazas comunes */
  
$(document).ready(function () {
  $('.card').hover(
    function () {
      $(this).css({
        'transform': 'scale(1.05)',
        'transition': 'transform 0.3s ease'
      });
    },
    function () {
      $(this).css('transform', 'scale(1)');
    }
  );
});
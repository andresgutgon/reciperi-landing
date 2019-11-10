$(".js-scrollTo").on('click', function(e) {
  e.preventDefault();
  var $element = $(this);
  var oldText = $element.text();
  var target = $element.attr('href');
  var plan = $element.data('plan');

  // https://github.com/rampatra/animatescroll.js
  $('#form').animatescroll({
    scrollSpeed: 1000,
    easing: 'easeInOutBack',
    onScrollStart: function () {
      $element.text('Mostrando...');
      if (plan) {
        $('.js-plan-input').val(plan);
      }
    },
    onScrollEnd: function () {
      $element.text(oldText);
    }
  });
});

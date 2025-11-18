

// event: page ready
$(document).ready(function () {

  // Helper: check if browser is narrow
  function isNarrow() {
    // "Narrow" = under 900px (matches your CSS breakpoint)
    return $(window).width() < 900;
  }

  // NAVIGATION: show/hide on load + resize
  function updateNavVisibility() {
    if (isNarrow()) {
      // Narrow: hide nav
      $('#primary-nav').addClass('hidden');
    } else {
      // Wide: show nav
      $('#primary-nav').removeClass('hidden');
    }
  }

  // When the page first loads
  updateNavVisibility();

  // event: resize browser window
  $(window).on('resize', function () {
    updateNavVisibility();
  });

  // HAMBURGER: toggle nav on narrow screens
  // event: click element (#nav-toggle)
  $('#nav-toggle').on('click', function () {
    // action: element has css class
    if ($('#primary-nav').hasClass('hidden')) {
      // action: remove css class
      $('#primary-nav').removeClass('hidden');
      // (optional accessibility) open state
      $('#nav-toggle').attr('aria-expanded', 'true');
    } else {
      // action: add css class
      $('#primary-nav').addClass('hidden');
      // (optional accessibility) closed state
      $('#nav-toggle').attr('aria-expanded', 'false');
    }
  });

  // MODAL 1: ClientSignal EQ

  // event: click element (#see-more) → open modal
  $('#see-more').on('click', function () {
    // action: remove css class from #pop-up
    $('#pop-up').removeClass('hidden');
  });

  // event: click element (#back) → close modal
  $('#back').on('click', function () {
    // action: add css class to #pop-up
    $('#pop-up').addClass('hidden');
  });
  // MODAL 2: AiDIY

  // event: click element (#see-more-aidiy) → open modal
  $('#see-more-aidiy').on('click', function () {
    $('#pop-up-aidiy').removeClass('hidden');
  });

  // event: click element (#back-aidiy) → close modal
  $('#back-aidiy').on('click', function () {
    $('#pop-up-aidiy').addClass('hidden');
  });

});

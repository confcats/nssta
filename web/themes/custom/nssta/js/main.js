(function($) {
  // Sticky header
  $('body').addClass('top');

  $(window).bind('scroll', function() {
    var offset = window.pageYOffset;
    var toolbarBar = $('.toolbar-bar').outerHeight();
    var toolbarTray = 0;
    if ($('.toolbar-tray').is(':visible')) {
      toolbarTray = $('.toolbar-tray-horizontal').outerHeight();
    }
    var adminOffset = toolbarBar + toolbarTray;
    var headerOffset = $('.header').outerHeight();

    if (offset > 0) {
      $('body').removeClass('top');
      $('.user-logged-in .header').css('top', adminOffset);
      $('.hero').css('margin-top', headerOffset);
    } else {
      $('body').addClass('top');
      $('.user-logged-in .header').css('top', '0');
      $('.hero').css('margin-top', '0');
    }
  });

  // Initialize hero background image
  var backgroundImage = $.trim($('.block-views-blockhero-image-block').text());
  if (backgroundImage.length > 0) {
    $('body').addClass('hero-image');
    $('.hero-image .hero').css('background-image', 'url('+backgroundImage+')');
  }

  // Mobile menu trigger events
  $('.mobile-menu img').click(function() {
    $(this).toggleClass('active');
    $(this).siblings().removeClass('active');
  });

  $('.mobile-searchButton').click(function() {
    $('.header').addClass('mobile-secondary-trigger mobile-primary-trigger');
    $('.header').toggleClass('mobile-search-trigger');
  });

  $('.mobile-memberButton').click(function() {
    if (!$('body').hasClass('user-logged-in')) {
      var login = window.location.protocol + "//" + window.location.host + "/user/login";
      window.location.href = login;
    }
    $('.header').addClass('mobile-search-trigger mobile-primary-trigger');
    $('.header').toggleClass('mobile-secondary-trigger');
  });

  $('.mobile-menuButton').click(function() {
    $('.header').addClass('mobile-search-trigger mobile-secondary-trigger');
    $('.header').toggleClass('mobile-primary-trigger');
  });

})(jQuery); // Fully reference jQuery after this point.

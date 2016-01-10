$(function () {
  $('[data-typer-targets]').typer();
});
$(document)
  .ready(function() {

    // fix menu when passed
    $('.masthead')
      .visibility({
        once: false,
        onBottomPassed: function() {
          $('.fixed.menu').transition('fade in');
        },
        onBottomPassedReverse: function() {
          $('.fixed.menu').transition('fade in');
        }
      })
    ;

    // create sidebar and attach to menu open
    $('.ui.sidebar')
      .sidebar('attach events', '.toc.item')
    ;

    // fix main menu to page on passing
    $('.main.menu').visibility({
      type: 'fixed'
    });

    // show dropdown on hover
    $('.main.menu  .ui.dropdown').dropdown({
      on: 'hover'
    });

    $('.text.menu  .ui.dropdown').dropdown({
      on: 'hover'
    });

  })
;

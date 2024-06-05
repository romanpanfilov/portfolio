$(document).ready(function(){

// var $grid = $('.grid').isotope({
//   itemSelector: '.element-item',
//   layoutMode: 'fitRows'
// });

// filter functions
var filterFns = {
  // show if number is greater than 50


  // animations: function() {
  //   var number = $(this).find('.name').text();
  //   return parseInt( number, 10 ) > 50;
  // },


  // show if name ends with -ium

   animations: function() {
    var name = $(this).find('.name').text();
    return name.match( /animations$/ );
  },
  artwok: function() {
    var name = $(this).find('.name').text();
    return name.match( /artwok$/ );
  },
  branding: function() {
    var name = $(this).find('.name').text();
    return name.match( /branding$/ );
  },
  mockup: function() {
    var name = $(this).find('.name').text();
    return name.match( /mockup$/ );
  },

};
// bind filter button click
$('.filters-button-group').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});

  });

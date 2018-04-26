$(document).ready(function() {
  // Code here will run when the page has loaded.
  $('input[type=radio][name=fontname]').change(function(e) {
    $('#canvas').css('font-family', e.target.value);
    console.log(e.target.value);
  })

  $('#textcolor').change(function(e) {
    $('#canvas').css('color', e.target.value);
  });

  $('#bgcolor').change(function(e) {
    $('#canvas').css('background-color', e.target.value);
  });

});

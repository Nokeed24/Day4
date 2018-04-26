$(document).ready(function() {

  var canvas = $('#canvas');
  // Code here will run when the page has loaded.
  $('input[type=radio][name=fontname]').change(function(e) {
    canvas.css('font-family', e.target.value);
    console.log(e.target.value);
  })

  $('#textcolor').change(function(e) {
    canvas.css('color', e.target.value);
  });

  $('#bgcolor').change(function(e) {
    canvas.css('background-color', e.target.value);
  });

  $('#textsize').change(function(e) {
    canvas.css('font-size', e.target.value+"px");
  });

  $('#lineheight').change(function(e) {
    console.log("You want to change the line height to " + e.target.value);
    canvas.css('line-height', e.target.value+"px");
  });

  $('#textpadding').change(function(e) {
    canvas.css('padding', e.target.value+"px");
  });

});

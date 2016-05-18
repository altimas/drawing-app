//Problem: No user interaction casuses no change to application.
//Solution: When user interacts, cause changes appropriately. 

//Variables
var color = $('.selected').css('background-color');
            //document.getElementsByTagName('canvas')[0]
var context = $('canvas')[0].getContext('2d');
var $canvas =$('canvas');
var lastEvent;
var mouseDown = false;

//When Clicking on control list items
$('.controls').on('click', 'li', function() {
  
  //Deselect sibling elements
  $(this).siblings().removeClass('selected');
  //Select clicked element. 
  $(this).addClass('selected');
  
  //Cache current color
  color = $(this).css('background-color');
                        
});
  


//When New color is pressed
$('#revealColorSelect').click(function () {
  //Show color select or hide the color select
  $('#colorSelect').toggle();
});
 
  //update the new color Span
 function changeColor() {
   var r = $('#red').val();
   var g = $('#green').val();
   var b = $('#blue').val();
   $('#newColor').css('background-color', 'rgb(' + r + ',' + g +',' + b +')');
 }

//When colorsliders change
$('input[type=range]').change(changeColor);


//when Add Color is pressed
$('#addNewColor').click(function() {
  
  //Append the color to the controls
  var $newColor = $('<li></li>');
  $newColor.css('background-color', $('#newColor').css('background-color'));
  $('.controls ul').append($newColor);
  
  //Select the new color
  $newColor.click();
    

});
    

//On mouse events on the canvas
  $canvas.mousedown(function(e) {
    lastEvent = e;
    mouseDown = true;
    
  }).mousemove(function(e) { 
     //Draw lines
    if(mouseDown) {
    context.beginPath();
    context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
    context.lineTo(e.offsetX, e.offsetY);
      context.strokeStyle = color;
    context.stroke();
    lastEvent = e;
    }
  }).mouseup(function() {
    mouseDown = false;
  }).mouseleave(function() {
    $canvas.mouseup();
  });
   



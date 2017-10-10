// This is the function to resize the window according to the "leftover" space so that we can actually see the whole page

function resizeDiv() {
var vpw = $(window).width();
var vph = $(window).height();
var ss = $('#header').height();

$('#back').css({'height': (vph-ss)});
    console.log(vph-ss);    
}


$(document).ready(function() {
    
    
// this is to only show the lines of sub menu that have text on it    
$('.down td').each( function () {
    console.log($(this).html());
    
    if ($(this).html()=="")
    {
        $(this).css({visibility: 'hidden'});
        console.log('not visible');
    }
    
});
    
    /*----------------------------------------when hover on the menu, it will show the submenu-----------------------------------------*/
    $('#opt01 th').hover( function() {
        var no = +$(this).index();
        
        console.log('no '+no);
      
        //I WANT TO OPTIMIZE THIS SEARCH METHOD...
       
        if( no === 1)
            {
                  console.log(no +'.1');
                   $('.down').children('.c').css({visibility: 'visible'});
            }
        if( no === 2)
            {
                 console.log(no +'.2');
                   $('.down').children('.p').css({visibility: 'visible'});
            }
            
        
     
        }, function() {
        var no = +$(this).index();
        
        console.log('no '+no);
      
        //I WANT TO OPTIMIZE THIS SEARCH METHOD...
       
        if( no === 1)
            {
                  console.log(no +'.1');
                   $('.down').children('.c').css({visibility: 'hidden'});
            }
        if( no === 2)
            {
                 console.log(no +'.2');
                   $('.down').children('.p').css({visibility: 'hidden'});
            }
            
        
     
        });
    
$('td.c').hover( function() {

        $('.down').children('.c').css({visibility: 'visible'});
},  function () {
    $('.down').children('.c').css({visibility: 'hidden'});
});
    
$('td.p').hover(function () {
        
    $('.down').children('.p').css({visibility: 'visible'});
    
}, function () {
    $('.down').children('.p').css({visibility: 'hidden'});
});
   

    //will resize the main div to the viewport area available
resizeDiv();
    
    
});


// if the window is resized it will adjust to the viewport height area 
$(window).onresize = function(event) {
resizeDiv();
}


// This is the function to resize the window according to the "leftover" space so that we can actually see the whole page
var vph = $(window).height();

function resizeDiv() {
var vpw = $(window).width();
var ss = $('#header').height();

$('#back').css({'height': (vph-ss)});
    console.log(vph-ss);    
}




// first function for the products table click and show
function hide_me( fat, son) {
    var f = $('#'+ fat);
    var s = $('#'+ son);
    
      f.toggleClass('actv');
    
    if(s.siblings().is(':hidden'))
        {
            s.toggle().css('opacity','1');
        }
    else
        {
            if(s.css('opacity') == 0)
                s.css('opacity', '1');
            
            else
                s.css('opacity','0');
        }
    
}
    

// second function for the products table click and show

function other_me (fat, son){
    var f = $('#'+ fat);
    var s = $('#'+ son);
    
     f.toggleClass('actv');
    
    if(s.is(':hidden'))
        {
            if ( s.siblings().is(':visible') && s.siblings().css('opacity') == 1)
                s.show();
            else if( s.siblings().is(':hidden') && s.siblings().css('opacity') == 1)
                {
                    s.siblings().show().css('opacity','0');
                    s.show();
                }
        }
    
    else
        {
            if(s.siblings().is(':visible') && s.siblings().css('opacity') == '1')
                {
                    s.hide();
                }
            else if(s.siblings().is(':visible') && s.siblings().css('opacity') == '0')
                {
                    s.siblings().css('opacity','1').hide();
                    s.hide();
                }
        }
    
}

    
    



function what(el1)
{
    var t = $('#'+ el1);
    t.closest().toggleClass('actv');
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
    
//when hover on the menu, it will show the submenu
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
        
        console.log('no '+ no);
      
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
    
//Keeps the submenu visible after showing them (after hovering the menu bar)
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
   
//when loading the html page the div elements will appear sliding
   
    $('#home').show('drop', 500);
    
   /* $('#about').show(
        effect: 'blind',
        duration: 2000 , 
        complete: function (){
           
            
        }
    });*/
    
    $('#about').fadeTo(1000, 1, 'linear');
    
//prevents from jumping to the top of the page ------!!!!!
   
    

//will highlight when people choose one of the categories for products
    $('#products td').mouseenter(function(){
        $(this).addClass('hovered_td');
        console.log('just added');
    }).mouseleave(function() {
        $(this).removeClass('hovered_td');
        console.log('just removed');
    });
    


//effect for presenting the products categories    
  /*  $('#products').show({
        effect: 'clip',
        duration: 3000,
        finish: function () {
            window.scrollTo(window.scrollX, window.scrollY);

        }
    });*/
    
    $('#products').fadeTo(1000, 1);
    
    
// if the user confirms payment it will show a new page thanking for the purchase
    $('#confirm').click(function() {
        $('#tu').show();
    })
    
//if the user tries to change the order it will show the 404 page
    $('#change_btn').click(function() {
        window.location.href = "..//html/fourohfour.html";
    })
    
    
//scroll spy in navbar
    
    
    if( $('#home').is(':visible'))
        {
            $('#opt01 th a').css({color: '#dddddd'});
            console.log("we're home ");
           $('#opt01 th a:eq(0)').css({color: '#fcd87e'});
        }
    
    
    else if ($('#about').is(':visible'))
        {
            $('#opt01 th a').css({color: '#dddddd'});
             console.log("we're on about coffee ");
           $('#opt01 th a:eq(1)').css({color: '#fcd87e'})
        }
    
    
    else if ($('#products').is(':visible'))
        {
            $('#opt01 th a').css({color: '#dddddd'});
             console.log("we're on products ");
           $('#opt01 th a:eq(2)').css({color: '#fcd87e'})
        }
    
    
    else if ($('#order').is(':visible'))
        {
            $('#opt01 th a').css({color: '#dddddd'});
             console.log("we're on order ");
           $('#opt01 th a:eq(3)').css({color: '#fcd87e'})
        }
    
    else
        {
            $('#opt01 th a').css({color: '#dddddd'});
             console.log("we're somewhere else ");
        }
    
    
    
// hides the size buttons on the products page . must make them visible later
    $('.sm, .md, .bg').hide();
    
// switch case for the products page
//when the user clicks on one of the products name it will show it the div where the explanation, pictures and buy button appear
    
    $('td').click( function() {
        switch( $(this).attr('id')) {
            case 'p01':
                hide_me('p01','perc');
                break;
                
            case 'c01':
                other_me('c01', 'caft');
                break;
                
            case 'e01':
                hide_me('e01', 'expr');
                break;  
                
            case 'f01':
                other_me('f01', 'filt');
                break;
                
            case 'b01':
                hide_me('b01','bean');
                break;  
                
            case 'g01':
                other_me('g01', 'ground');
                break; 
                
            case 'd01':
                hide_me('d01','pod');
                break;  
            
            case 'a01':
                other_me('a01', 'caps');
                break;  
            
            case 'm01':
                hide_me('m01','milk');
                break;  
            
            case 'o01':
                other_me('o01', 'cfil');
                break;  
            
            case 'i01':
                hide_me('i01','grind');
                break;  
            
            case 'j01':
                other_me('j01', 'jug');
                break;  
            
            case 'u01':
                hide_me('u01','cup');
                break;  
            
            case 's01':
                other_me('s01', 'spoon');
                break;
                
            default:
                console.log('you clicked a td element');
            
    }
    });
    
    
    //shows the ammount buttons when the buy button is clicked on the products page
     $('.b').click( function() {
         $(this).nextAll('.sm,.md,.bg').toggle();
     })
   
   
    //if the user selects one of the amount quantities from the products page it will show a message informing that the item was added to the cart
    $('.sm, .md, .bg').click( function() {
        $(this).siblings('button').hide();
        $(this).prop('disabled', true);
        $(this).closest('.choose').append('<span id="it"> Item added to cart</span>');
        //$('<span id="it"> Item added to cart</span>').appendTo( '.choose');
    })
});


// loading page to show to user in between pages and stuff

    $(window).load(function() {
	   $(".loader").fadeOut("slow");
    });
    
// if the window is resized it will adjust to the viewport height area 
    $(window).onresize = function(event) {
            resizeDiv();
    }

    




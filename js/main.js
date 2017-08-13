jQuery(document).ready(function($) 
{
	
	// scroll indicator
	// $('body').progressScroll({
	// 	backgroundColor: "#3498DB",
	// 	height : "5px",
	// });
	
	// Vertical navigation
	//var dotCounter = $('p.f-inter').length;


init();
function init(){
	$('p.f-inter').each(function( index ) {
	  	$('nav ul').append('<li></li>');


	});

	$('nav ul li').on('click', function(e) {
		$('nav ul li').removeClass('is-active');
		$(this).addClass('is-active');
		//alert($(this).index());
		// SCROLL TO AN ELEMENT FUNCTION
	    $('html, body').animate({
	       scrollTop:$('p.f-inter:eq(' + $(this).index() + ')').offset().top
	    }, 1);
	});


}

$('.slider').owlCarousel({
    margin:10,
    loop:true,
    items:1,
    lazyLoad: true,
    nav: false,
    navText: ['<i class="fa fa-caret-left" aria-hidden="true"></i>','<i class="fa fa-caret-right" aria-hidden="true"></i>']
})





	
	

	

	// $(".button").on('click', function(e) {
	// 	$('.button').removeClass('is-active');
	// 	$(this).addClass('is-active');
	// 	// alert('hello');
	// 	// $(".iframe").load('http://theurltoload.com')
	// 	// e.preventDefault();
	// 	e.preventDefault();
	// 	var $el = $(this);
	// 	// alert($el.attr('map-url'));
	// 	$(".iframe").attr("src", $el.attr('map-url'));
	// });











	// THIS IS EXECUTED WHEN EVERYTHING IS LOADED
	// var everythingLoaded = setInterval(function() {
	//   if (/loaded|complete/.f-inter(document.readyState)) {
	//     clearInterval(everythingLoaded);
	//   }
	// }, 10);

	// USE THIS IF SOMETHING CANT LOAD CORRECTLY
	// $(window).load(function(){
	// });

	// THIS IS DONE AT EVERY SCROLL
	// $(window).scroll(function (event) {
 //    });

    // SCROLL TO AN ELEMENT FUNCTION
    //$('html, body').animate({
    //    scrollTop:$('.element').offset().top
    //}, 1000);

    // SCROLL TO A CALCULATED HEIGHT
	//$('html, body').animate({
    //      scrollTop:$(scrollHeight).offset().top
    //}, 1000);

    // SIMPLE CLICK
 //    $(".menu").click(function(){
	// });
	
    // SET A DELAY IN A FUNCTION
	// setTimeout(function() 
	// {
	// }, 250);

	// KEEP A DIV SQUARE HACK
	// var largeur = $('.un-quart').width();
	// $('.un-quart').height(largeur);

 //   	$(window).resize(function(){
 //   		var largeur = $('.un-quart').width();
 //   		$('.un-quart').height(largeur);
 //    });

   	// THIS IS EXECUTED ON RESIZE
   	// $(window).resize(function(){

    // });

   	// THIS IS EXECUTED DEPENDING ON WINDOW WIDTH
	// if($(window).width() > 500)
	// {
	// }

});

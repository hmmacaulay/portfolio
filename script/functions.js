
//$("element").on("event", function() {

//});

// change hover state to work 
var print = console.log
print("pprint error!");

$("h1").css("color","blue");

$("body").on("click", function() {
    print("checking that jquery works");
})

//main page hover states 
//work
$('.menu_work').hover(function() {
    print("in the work hover function");
    $('.hero_image').css({"background-image":"url(website_images/work.png)", "background-color": "#FFF2B2"});
});
//about
$('.menu_abt').hover(function() {
    print("in the work hover function");
    $('.hero_image').css({"background-image":"url(website_images/about_bckgrnd.png)", "background-color": "#F6F2F3"});
});
//misc
$('.menu_misc').hover(function() {
    print("in the work hover function");
    $('.hero_image').css({"background-image":"url(website_images/misc.png)", "background-color": "#DAECAB"});
});


///about hover 

$('#hamburger').click(function() {
    print("in function");

    // $(".about_me_body").addClass("active");
    // if ($(".about_me_body").hasClass("active")) {
    //     print("in if statement");
        $(".about_me_body").css("height","100vh");
        $("pageContentGrid").css("opacity","1");
    
    // } else {
    //     $(".about_me_body").css("height","0vh");
    //     $("pageContentGrid").css("opacity","0");
    // }

});
//animations (need to basically create divs for background colors and have them fade in and out)
// $('.menu_work').hover(function() {
//     $('.hero_image').css({"opacity":"0"});
//     $('.hero_image').css({"background-image":"url(website_images/work.png)", "background-color": "#FFF2B2"});
//     $('.hero_image').animate({"opacity":"1"});
// });

// $('.menu_work').on("click", function(){
//     console.log("in the work function");
//     $('.hero_image').css("background-image", "url(../website_images/work.png)");
// });

// console.log("heres your second error!");

// $(".menu_work").mouseover(function() {
//     console.log("in the mouseover function");
//     $(".hero_image").css("background-image", "url(../website_images/work.png)");
// });
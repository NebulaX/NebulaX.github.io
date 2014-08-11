$(document).ready(function(){
    $("#logo").click(function() {
	goin();
    });
});


function goin(){
    // Fades logo
    $(".outer").fadeOut();
    $("#carina").fadeIn();
}

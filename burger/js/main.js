$(function(){
	
$("#first-cover").click(function(){
	$("#site-cover").css("background-image","url(img/1.jpg)")
	$("#second-cover > div").addClass("clicker-down")
	$("#first-cover > div").addClass("clicker-up")
	$("#second-cover > div").removeClass("clicker-up")
	$("#first-cover > div").removeClass("clicker-down")
})


$("#second-cover").click(function(){
	$("#site-cover").css("background-image","url(img/2.jpg)")
	$("#second-cover > div").addClass("clicker-up")
	$("#first-cover > div").addClass("clicker-down")
	$("#second-cover > div").removeClass("clicker-down")
	$("#first-cover > div").removeClass("clicker-up")
})













})
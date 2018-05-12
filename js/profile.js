
$(document).ready(function(){
    console.log("loaded");
    alert("loaded");
    $('.m_btn').click(function(){
    $('#nav').stop().slideToggle();
});

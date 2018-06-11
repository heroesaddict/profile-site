
$(document).ready(function(){
    console.log("loaded");
    alert("loaded");
    $('.m_btn').click(function(){
    $('#nav').stop().slideToggle();
});
  // Add smooth scrolling to all links in navbar + footer link
  $(".sidenav a").on('click', function(event) {
    var hash = this.hash;
    if (hash) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function() {
        window.location.hash = hash;
      });
    }

  });

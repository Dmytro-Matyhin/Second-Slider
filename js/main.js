const toggle = document.getElementsByClassName("navbar-toggle");

toggle[0].addEventListener("click", function(event) {
  event.preventDefault();
  this.classList.toggle("is-active");
});

$('.bxslider').bxSlider({
  auto: true,
  autoControls: true,
  stopAutoOnClick: true,
  pager: true,
  slideWidth: 1000
});
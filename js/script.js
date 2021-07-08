// team-slider
$(document).ready(function () {
  $('.team-content').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
  });


  // project-venobox
  $('.project-venobox').venobox({
    spinner: 'wandering-cubes',
  });
})
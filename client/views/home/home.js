Template.home.onRendered(function(){
  
  $('.js-slick-slide').slick({
    dots: true,
    infinite: false,
    speed: 300,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('a').click(function() {
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    return false;
  });

  $('body').scrollspy({ target: '.js-scroll-spy' });
});

Template.home.helpers({
  jobs: () => [
    {
      name: 'Knotable',
      desc: 'A service for collaboration',
      url: 'http://beta.knotable.com/',
      imgPath: 'images/projects/knotable.png'
    },
    {
      name: 'ComicEnglish',
      desc: 'Service for learning foreign languages in a gaming form',
      url: 'http://comicenglish.com/',
      imgPath: 'images/projects/comic.png'
    },
    {
      name: 'Pollen',
      desc: 'An app for spreading ideas via email campaigns',
      url: 'http://www.pollenpost.com',
      imgPath: 'images/projects/pollen.png'
    }
  ]
});


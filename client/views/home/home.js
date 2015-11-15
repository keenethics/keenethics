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
  ],
  employees: () => [
    {
      name:    'Maks S.',
      title:   'Chief of The Astronaut Office',
      desc:    `His responsibilities includes the coordination, scheduling, and
                control of all activities involving Keenethics astronauts.`,
      imgPath: 'images/team/maks_s.png'
    },
    {
      name:    'Alex P.',
      title:   'Chief of Meteor Flight Research Center',
      desc:    `He has spent the third-longest time in Meteor.js space of any
                person. He supervises research and development of Meteor flights.`,
      imgPath: 'images/team/alex_p.png'
    },
    {
      name:    'Michael "Rich"',
      title:   'Meteor.js Astronaut',
      desc:    `He is a Space Meteor.js Developer who has logged over 12 hours of
                moonwalk time over three Meteor Shuttle missions.`,
      imgPath: 'images/team/michael_rich.png'
     },
     {
       name:    'Yara M.',
       title:   'Meteor.js Astronaut',
       desc:    `She is the first woman to have flown on Keenethics orbit,
                 having been selected from more than five finalists to pilot
                 Keen project applicants.`,
       imgPath: 'images/team/yara_m.png'
     },
     {
       name:    'Kate "Kay"',
       title:   'Interstellar Communicator',
       desc:    `She is good in orbital and interplanetary communication.
                 She even can talk with creatures from outer space.`,
       imgPath: 'images/team/kate_kay.png'
     }
  ]

});

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

  $("a[href^='#']").click(function() {
    var target    = $($.attr(this, 'href'));
    var scrollTop = target.offset() && target.offset().top;
    if(!scrollTop) return;
    $('html, body').animate({scrollTop}, 500);
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
      desc:    `His responsibilities are coordination, scheduling, 
                and control of all Keenethics astronauts’ activities.`,
      imgPath: 'images/team/maks_s.jpg'
    },
    {
      name:    'Alex P.',
      title:   'Chief of Meteor Flight Research Center',
      desc:    `He has spent the third-longest time in Meteor.js space of any
                person. He supervises research and development of Meteor flights.`,
      imgPath: 'images/team/alex_p.jpg'
    },
    {
      name:    'Michael "Rich"',
      title:   'Meteor.js Astronaut',
      desc:    `He is a Space Meteor.js Developer who has logged over 12 hours of
                moonwalk time over three Meteor Shuttle missions.`,
      imgPath: 'images/team/michael_rich.jpg'
     },
    {
      name:    'Yara M.',
      title:   'Meteor.js Astronaut',
      desc:    `She is the first woman to have flown in Keenethics space,
                having been selected from more than five finalists to pilot
                Keen project applicants.`,
      imgPath: 'images/team/yara_m.jpg'
    },
    {
      name:    'Kate "Kay"',
      title:   'Interstellar Communicator',
      desc:    `She is good in orbital and interplanetary communication.
                She can even talk with creatures from outer space.`,
      imgPath: 'images/team/kate_kay.jpg'
    },
    {
      name:    'Vlad O.',
      title:   'Full-stack Pilot-Cosmonaut',
      desc:    `He has the Medal "For Merit in Space Exploration" for achievements 
                in outer space researching, development and reconnaissance.`,
      imgPath: 'images/team/vlad_o.jpg'
    },
    {
      name:    'Taras Y.',
      title:   'Meteor.js astronaut',
      desc:    `He was chosen from the final pool of 13 candidates 
                to fly on Reaction Commerce first manned space mission.`,
      imgPath: 'images/team/taras_y.jpg'
    },
    {
      name:    'Nazar Y.',
      title:   'Meteor.js aeronautical engineer',
      desc:    `He has logged a total of 723 hours in Meteor space. 
                He has flew as a pilot of 7 Meteor Shuttle missions.`,
      imgPath: 'images/team/nazar_y.jpg'
    },
    {
      name:    'Sergey G.',
      title:   'Meteor.js astronaut',
      desc:    `He was a member of two missions to the International Space Station, spending 
                more than a year in total in space. During his missions he did three spacewalks 
                lasting more than 18 hours in total.`,
      imgPath: 'images/team/sergei_g.jpg'
    }
  ]
});

Template._homeHeader.events({
  "click #login-lock": function() {
    $('#login-sign-in-link').trigger("click");
  }
});

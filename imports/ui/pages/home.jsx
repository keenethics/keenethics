import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';

import HomeHeader from '../components/homeHeader';
import ListIconsTechnologies from '../components/listIconsTechnologies';
import SlideInfo from '../components/slideInfo';
import SlideServices from '../components/slideServices';
import SlidePortfolio from '../components/slidePortfolio';
import SlideTeam from '../components/slideTeam';
import SlidePartners from '../components/slidePartners';
import SlideContacts from '../components/slideContacts';
import SlideNews from '../components/slideNews';

import Modal from '../components/modal';

import { sendContacts } from '../../api/events';

export default class HomePage extends React.Component {

  componentDidMount() {
    Meteor.call('getPosts', (error, result) => {
      if (result) {
        render(<HomePage Posts={result} />, document.getElementById('react-root'));
      }
    });
  }

  getJobs() {
    return [
      {
        name: 'Knotable',
        desc: 'A service for collaboration',
        url: 'http://beta.knotable.com/',
        imgPath: 'images/projects/knotable.png',
      },
      {
        name: 'ComicEnglish',
        desc: 'Service for learning foreign languages in a gaming form',
        url: 'http://comicenglish.com/',
        imgPath: 'images/projects/comic.png',
      },
      {
        name: 'Pollen',
        desc: 'An app for spreading ideas via email campaigns',
        url: 'http://www.pollenpost.com',
        imgPath: 'images/projects/pollen.png',
      },
      {
        name: 'Prix',
        desc: 'A machine-learning system based service for generating revenue',
        reference: '"We were impressed with Keenethics form the get-go. They really get startups and are able to work without perfect project-plans - making clever and reasonable assumptions as they go and clarifying when the need arises. Great team, solid communication and fast-paced, high-quality development."',
        referenceAuthor: 'Jens Munch, Founder of [preeh]',
        url: 'http://www.prix.ai/',
        imgPath: 'images/projects/prix.png',
      },
      {
        name: 'My grass grow',
        desc: 'Application that helps farmers to graze cows and make related calculations',
        reference: '“Despite the physical distance and never meeting each other in person, Keenethics has built a complicated dairy industry related webapp for us. I found the cooperation in the development of this tool good, honest and straightforward”',
        referenceAuthor: 'Wim Honkoop, Bedrijfsplanning B.V. The Netherlands',
        url: 'http://52.48.81.242/signIn',
        imgPath: 'images/projects/grass-grow.png',
      },
      {
        name: 'Knotel',
        desc: 'A service for booking workspaces',
        url: 'https://knotel.com/',
        imgPath: 'images/projects/knotel.png',
      },
    ];
  }

  getEmployees() {
    return [
      {
        name: 'Maks S.',
        title: 'Chief of The Astronaut Office',
        desc: `His responsibilities are coordination, scheduling,
                  and control of all Keenethics astronauts’ activities.`,
        imgPath: 'images/team/maks_s.jpg',
      },
      {
        name: 'Alex P.',
        title: 'Chief of Meteor Flight Research Center',
        desc: `He has spent the third-longest time in Meteor.js space of any
                  person. He supervises research and development of Meteor flights.`,
        imgPath: 'images/team/alex_p.jpg',
      },
      {
        name: 'Michael O.',
        title: 'Full-Stack js Midshipman',
        desc: `Space Meteor.js Developer who has logged around 700 hours of moonwalk time on Upwork
                                                    over five successful Meteor Shuttle missions.`,
        imgPath: 'images/team/michael_rich.jpg',
      },
      {
        name: 'Yara M.',
        title: 'Meteor.js Astronaut',
        desc: `She is the first woman to have flown in Keenethics space,
                  having been selected from more than five finalists to pilot
                  Keen project applicants.`,
        imgPath: 'images/team/yara_m.jpeg',
      },
      {
        name: 'Vlad O.',
        title: 'Full-stack js Corvette capt',
        desc: `Has a medal "For Merit in Space Exploration" for achievements in outer space
                                                    researching, development and reconnaissance.`,
        imgPath: 'images/team/vlad_o.jpg',
      },
      {
        name: 'Taras Y.',
        title: 'Meteor.js Midshipman',
        desc: `Was chosen from a final pool of 13 candidates to fly on Reaction Commerce first
                                                                            manned space mission.`,
        imgPath: 'images/team/taras_y.jpg',
      },
      {
        name: 'Sergey G.',
        title: 'Full-stack js Capt-lieutenant',
        desc: `A Strong pilot with cool UX and UI feeling and game development background. Leads
                                                              gamification at Keenethics flagship.`,
        imgPath: 'images/team/sergei_g.jpg',
      },
      {
        name: 'Andrew T.',
        title: 'Meteor.js Astronaut',
        desc: `Ph. D, he has firm and scientific approach to problem-solving and he used
                  to be a pilot on several shuttle missions.`,
        imgPath: 'images/team/andrew_t.jpg'
      },
      {
        name: 'Maksym F.',
        title: 'Full-stack js Astronaut',
        desc: `Space gamer. He is also one of the pilots who flies on one of the biggest Meteor
                  Shuttle mission in the world.`,
        imgPath: 'images/team/maksym_f.jpeg'
      },
      {
        name: 'Maryna Y.',
        title: 'Full-stack js Astronaut',
        desc: `Space hot fire-show amateur, got an honors diploma in the flight school,
                acts as a hot second pilot in the hot shuttle mission.`,
        imgPath: 'images/team/maryna_y.png'
      },
      {
        name: 'Misha F.',
        title: 'Full-stack js Astronaut',
        desc: `Has space banking background and is good at front-end and mobile fields.`,
        imgPath: 'images/team/misha_f.jpg'
      },
      {
        name: 'Nazar K.',
        title: 'Meteor.js Astronaut',
        desc: `Strong Pilot with will of adamant and suspended approach.
                                                Fond of space rockclimbing.`,
        imgPath: 'images/team/nazar_k.jpg'
      },
      {
        name: 'Oleh Jedi',
        title: 'Full-stack js Capt-lieutenant',
        desc: `Manually assembled his shuttle and flies it at the highest speeds
              (20-30 times faster than light). Used to carry out experimental shuttle missions.`,
        imgPath: 'images/team/oleh_z.jpg',
      },
      {
        name: 'Sofia I.',
        title: 'Steward',
        desc: `She has necessary organizational skills and she is good in orbital and interplanetary
                        communication. She can even talk with creatures from outer space.`,
        imgPath: 'images/team/sofia_i.jpg',
      },
      {
        name: 'Alex B.',
        title: 'Full-Stack js Midshipman',
        desc: `Best student of Astronaut Training Center.
                        He is JavaScript enthusiast, React evangelist, Space archeologist.`,
        imgPath: 'images/team/alex_b.jpeg',
      },
      {
        name: 'Misha P.',
        title: 'Full-stack js Capt-lieutenant',
        desc: `Honorable and experienced combattant in Meteor space,
                        has been working during many  years in our space sector.`,
        imgPath: 'images/team/misha_p.jpeg',
      },
      {
        name: 'Arsen T.',
        title: 'Full-Stack js Midshipman',
        desc: `Space sweet Karmaman astronaut. He knows how to keep your Karma clean.`,
        imgPath: 'images/team/arsen_t.jpg',
      },
      {
        name: 'Igor V.',
        title: 'Full-Stack js Midshipman',
        desc: `The youngest midshipman from outer space. Cool and steady even when approaching black hole.`,
        imgPath: 'images/team/igor_v.jpeg',
      },
      {
        name: 'Taras B.',
        title: 'Full-Stack js Midshipman',
        desc: `Best sailor on duty. He does his work while the rest of spacecraft members are asleep.`,
        imgPath: 'images/team/taras_b.jpeg',
      },
      {
        name: 'Yura G.',
        title: 'Full-stack js Midshipman',
        desc: `Participated in large battles as a Rookie and dreams  about leading his own squad`,
        imgPath: 'images/team/ura_g.jpeg',
      },
      {
        name: 'Alex H.',
        title: 'International Mission Specialist',
        desc: `Intergalactic diplomat who speaks several alien languages. He is in constant search of new life forms outside our galaxy in order to establish contact and exchange resources.`,
        imgPath: 'images/team/alex_h.jpeg',
      },


      {
        name: 'Mykola M.',
        title: 'Full-stack js Midshipman',
        desc: `Space illusionist, together with Stanley Kubrick he produced all the layouts for
              US Apollo missions at the time when there was no HTML/CSS.
              He is now carrying out full-stack missions in outer space.`,
        imgPath: 'images/team/mykola_m.jpg',
      },

      {
        name: 'Oleksandr S.',
        title: 'Mission support officer',
        desc: `Knows the structure of the ship by heart. He has a unique feeling that helps him find breakages and ensure astronauts safety.`,
        imgPath: 'images/team/sasha_s.jpg',
      },
      {
        name: 'Yurii S.',
        title: 'Full-stack js Midshipman',
        desc: `Was able to capture new alien ship on his first flight. Due to excellent communicative skills, first comes into contact with unknown galactic creatures.`,
        imgPath: 'images/team/yurii_s.jpg',
      },
      {
        name: 'Rostyk T.',
        title: 'Full-stack js Astronaut',
        desc: `Was create AI-bots powered space craft. You may never be sure whether you are talking to him, or to his AI.`,
        imgPath: 'images/team/rostyk_t.jpg',
      },
      {
        name: 'Volodiy A.',
        title: 'Full-stack js Engineer',
        desc: `He was able to transform his shuttle into cluster of micro-ships that are able to self-repair. This cluster is the most resilient fleet in the world.`,
        imgPath: 'images/team/volodiy_a.jpg',
      },
      {
        name: 'Taras P.',
        title: 'Full-stack js Astronaut',
        desc: `He has a diligent approach to every task. He is patient having long commutes to the station every day. Fond of remote missions in deep space.`,
        imgPath: 'images/team/taras_p.jpg',
      },

    ];
  }


  render() {
    return (
      <div>
        <HomeHeader />
        <main className="main" role="main">
          <ListIconsTechnologies />
          <SlideInfo />
          <SlideServices />
          <SlidePortfolio jobs={this.getJobs()} />
          <SlideTeam employees={this.getEmployees()} />
          <SlideNews Posts={this.props.Posts} />
          <SlidePartners />
          <SlideContacts onSubmit={sendContacts} />

        </main>

        <Modal />
      </div>
    );
  }
}

HomePage.propTypes = {
  Posts: React.PropTypes.array.isRequired,
};

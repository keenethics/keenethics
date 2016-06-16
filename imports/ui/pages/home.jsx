import React from 'react';

import HomeHeader from '../components/homeHeader';
import ListIconsTechnologies from '../components/listIconsTechnologies';
import SlideInfo from '../components/slideInfo';
import SlideServices from '../components/slideServices';
import SlidePortfolio from '../components/slidePortfolio';
import SlideTeam from '../components/slideTeam';
import SlidePartners from '../components/slidePartners';
import SlideContacts from '../components/slideContacts';

import Modal from '../components/modal';

import { sendContacts } from '../../api/events';

export default class HomePage extends React.Component {

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
        title: 'Meteor.js Astronaut',
        desc: `He is a Space Meteor.js Developer who has logged over 12 hours of
                  moonwalk time over three Meteor Shuttle missions.`,
        imgPath: 'images/team/michael_rich.jpg',
      },
      {
        name: 'Yara M.',
        title: 'Meteor.js Astronaut',
        desc: `She is the first woman to have flown in Keenethics space,
                  having been selected from more than five finalists to pilot
                  Keen project applicants.`,
        imgPath: 'images/team/yara_m.jpg',
      },
      {
        name: 'Kate "Kay"',
        title: 'Interstellar Communicator',
        desc: `She is good in orbital and interplanetary communication.
                  She can even talk with creatures from outer space.`,
        imgPath: 'images/team/kate_kay.jpg',
      },
      {
        name: 'Vlad O.',
        title: 'Full-stack Pilot-Cosmonaut',
        desc: `He has the Medal "For Merit in Space Exploration" for achievements
                  in outer space researching, development and reconnaissance.`,
        imgPath: 'images/team/vlad_o.jpg',
      },
      {
        name: 'Taras Y.',
        title: 'Meteor.js astronaut',
        desc: `He was chosen from the final pool of 13 candidates
                  to fly on Reaction Commerce first manned space mission.`,
        imgPath: 'images/team/taras_y.jpg',
      },
      {
        name: 'Nazar Y.',
        title: 'Meteor.js aeronautical engineer',
        desc: `He has logged a total of 723 hours in Meteor space.
                  He has flew as a pilot of 7 Meteor Shuttle missions.`,
        imgPath: 'images/team/nazar_y.jpg',
      },
      {
        name: 'Sergey G.',
        title: 'Meteor.js astronaut',
        desc: `He was a member of two missions to the International Space Station, spending
                  more than a year in total in space. During his missions he did three spacewalks
                  lasting more than 18 hours in total.`,
        imgPath: 'images/team/sergei_g.jpg',
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
          <SlidePartners />
          <SlideContacts onSubmit={sendContacts} />
        </main>

        <Modal />
      </div>
    );
  }
}

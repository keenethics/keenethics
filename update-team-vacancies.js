const { google } = require('googleapis');
const path = require('path');

const TEAM_SHEET_ID = '1CF43Hi_vxS-kk2WGQ0km7rUEm5IMbTuD9QoFfsWW7B4';
const TEAM_RANGE = 'Sheet1';
const CREDS_FILE = 'dauntless-theme-207811-a063c4c9e36d.json';
const scopes = ['https://www.googleapis.com/auth/drive.readonly'];


const team = [
  {
    position: 'Missions control',
    key: 'spaceship',
    people: [
      {
        name: 'Oleksiy P.',
        position: 'Chief of Meteor Flight Research Center',
        description: 'He has spent the third-longest time in Meteor.js space of any person. He supervises research and development of Meteor flights.',
        avatar: 'alex_p.jpg',
      },
      {
        name: 'Max S.',
        position: 'Chief of The Astronaut Office',
        description: 'His responsibilities are coordination, scheduling, and control of all Keenethics astronauts activities.',
        avatar: 'maks_s.jpg',
      },
      {
        name: 'Viktoria M.',
        position: 'Astronaut Interaction Specialist',
        description: 'Victoria keeps track of all the movement between the missions, helps new Astronauts adopt and remain in shape over the course of their journey on our ship.',
        avatar: 'viktoria_m.jpg',
      },
      {
        name: 'Alexandr S.',
        position: 'Mission Support Officer',
        description: 'Knows the structure of the ship by heart. He has a unique feeling that helps him find breakages and ensure astronauts safety.',
        avatar: 'sasha_s.jpg',
      },
      {
        name: 'Ihor F.',
        position: 'Recruitment&Brand Mission Specialist',
        description: 'Knows no boundaries, he will find anyone anywhere. Don’t even try to hide from him.',
        avatar: 'ihor_f.jpg',
      },
      {
        name: 'Oksana P.',
        position: 'Space Pixel Commander',
        description: 'Can turn a few words or a code line into something beautiful.',
        avatar: 'oksana_p.jpg',
      },
      {
        name: 'Liuba S.',
        position: 'Spaceflight Mission Specialist',
        description: 'Discipline is her forte, she is the most punctual astronaut.',
        avatar: 'liuba_s.jpg',
      },
      {
        name: 'Artem S.',
        position: 'Mission Support Officer',
        description: '',
        avatar: 'artem_s.jpg',
      },
      {
        name: 'Ulyana L.',
        position: 'Space Talants Searcher',
        description: '',
        avatar: 'ulyana_l.jpg',
      },
      {
        name: 'Anna D.',
        position: 'Spaceflight Mission Specialist',
        description: '',
        avatar: 'anna_d.jpg',
      },
      {
        name: 'Tamara A.',
        position: 'Space Office Manager',
        description: '',
        avatar: 'tamara_a.jpg',
      },
    ],
  },
  {
    position: 'Frigate captain',
    key: 'frigate_captain',
    people: [
      {
        name: 'Vlad O.',
        position: 'Full-stack js Frigate Captain',
        description:
          'Has a medal "For Merit in Space Exploration" for achievements in outer space researching, development and reconnaissance.',
        avatar: 'vlad_o.jpg',
      },
      {
        name: 'Sergey G.',
        position: 'Full-stack js Frigate captain',
        description:
          'A Strong pilot with cool UX and UI feeling and game development background. Leads gamification at Keenethics flagship.',
        avatar: 'sergei_g.jpg',
      },
    ],
  },
  {
    position: 'Corvette capt',
    key: 'corvette_captain',
    people: [
      {
        name: 'Yara M.',
        position: 'Full-stack js Corvette Capt',
        description:
          'She is the first woman to have flown in Keenethics space, having been selected from more than five finalists to pilot Keen project applicants.',
        avatar: 'yara_m.jpg',
      },
      {
        name: 'Taras Y.',
        position: 'Full-stack js Corvette Capt',
        description:
          'Was chosen from a final pool of 13 candidates to fly on Reaction Commerce first manned space mission.',
        avatar: 'taras_y.jpg',
      },
      {
        name: 'Serhii S.',
        position: 'Full-stack js Corvette Capt ',
        description:
          'Super friendly, quiet and hard-working astronaut.',
        avatar: 'serhii_s.jpg',
      },
      {
        name: 'Yanul M.',
        position: 'Full-stack js Corvette Capt',
        description:
          'Space hot fire-show amateur, got an honors diploma in the flight school, acts as a hot second pilot in the hot shuttle mission.',
        avatar: 'maryna_y.png',
      },
      {
        name: 'Andrij T.',
        position: 'Full-stack js Corvette Capt',
        description:
          'Ph. D, he has firm and scientific approach to problem-solving and he used to be a pilot on several shuttle missions.',
        avatar: 'andrew_t.jpg',
      },
      {
        name: 'Max F.',
        position: 'Full-stack js Corvette Capt',
        description:
          'Space gamer. He is also one of the pilots who flies on one of the biggest Meteor Shuttle mission in the world.',
        avatar: 'maksym_f.jpg',
      },
      {
        name: 'Mykhailo F.',
        position: 'Full-stack js Corvette Capt',
        description:
          'Has space banking background and is good at front-end and mobile fields.',
        avatar: 'misha_f.jpg',
      },
      {
        name: 'Arsen T.',
        position: 'Full-stack js Corvette Capt',
        description:
          'Space sweet Karmaman astronaut. He knows how to keep your Karma clean.',
        avatar: 'arsen_t.jpg',
      },
      {
        name: 'Golomb Y.',
        position: 'Full-stack js Corvette Capt',
        description:
          'Participated in large battles as a Rookie and dreams about leading his own squad',
        avatar: 'ura_g.jpg',
      },
    ],
  },
  {
    position: 'Capt-lieutenant',
    key: 'capt_lieutenant',
    people: [
      {
        name: 'Ihor V.',
        position: 'Full-stack js Capt-lieutenant',
        description:
          'The youngest midshipman from outer space. Cool and steady even when approaching black hole.',
        avatar: 'igor_v.jpg',
      },
      {
        name: 'Yuriy S.',
        position: 'Full-stack js Capt-lieutenant',
        description:
          'Was able to capture new alien ship on his first flight. Due to excellent communicative skills, first comes into contact with unknown galactic creatures.',
        avatar: 'yurii_s.jpg',
      },
      {
        name: 'Volodymyr A.',
        position: 'Full-stack js Capt-lieutenant',
        description:
          'He was able to transform his shuttle into cluster of micro-ships that are able to self-repair. This cluster is the most resilient fleet in the world.',
        avatar: 'volodiy_a.jpg',
      },
      {
        name: 'Taras P.',
        position: 'Full-stack js Capt-lieutenant',
        description:
          'He has a diligent approach to every task. He is patient having long commutes to the station every day. Fond of remote missions in deep space.',
        avatar: 'taras_p.jpg',
      },
      {
        name: 'Rostyslav T.',
        position: 'Full-stack js Capt-lieutenant',
        description:
          'Was create AI-bots powered space craft. You may never be sure whether you are talking to him, or to his AI.',
        avatar: 'rostyk_t.jpg',
      },
      {
        name: 'Vlad E.',
        position: 'Full-stack js Capt-lieutenant',
        description:
          'Literally knows what «with fire and sword» means.',
        avatar: 'vlad_e.jpg',
      },
    ],
  },
  {
    position: 'Midshipman',
    key: 'midshipman',
    people: [],
  },
  {
    position: 'Astronaut',
    key: 'astronaut',
    people: [
      {
        name: 'Taras K.',
        position: 'Full-stack js Astronaut',
        description: '',
        avatar: 'taras_k.jpg',
      },
      {
        name: 'Oleh K.',
        position: 'Full-stack js Astronaut',
        description: '',
        avatar: 'oleh_k.jpg',
      },
      {
        name: 'Max S.',
        position: 'Full-stack js Astronaut',
        description: '',
        avatar: 'max_s.jpg',
      },
      {
        name: 'Vadym S.',
        position: 'Full-stack js Astronaut',
        description: '',
        avatar: 'vadym_s.jpg',
      },
      {
        name: 'Dmytro P.',
        position: 'Full-stack js Astronaut',
        description: '',
        avatar: 'dmytro_p.jpg',
      },
    ],
  },
];

// Because we get data from Google Spreadsheets as array of arrays
const arrayOfArraysToCollection = (arr) => {
  const INDEX_PROPERTIES_ROW = 0;
  const properties = arr[INDEX_PROPERTIES_ROW];
  const values = arr.slice(INDEX_PROPERTIES_ROW + 1);
  return values.map((v) => {
    const obj = {};
    properties.forEach((property, index) => {
      obj[property] = v[index];
    });
    return obj;
  });
}

async function getTeam() {
  console.log( 'getTeam started'  );
  const client = await google.auth.getClient({
    keyFile: path.join(__dirname, CREDS_FILE),
    scopes,
  });

  // const drive = google.drive({
  //   version: 'v2',
  //   auth: client,
  // });

  const sheets = google.sheets('v4');

  const table = await sheets.spreadsheets.values.get({
    auth: client,
    spreadsheetId: TEAM_SHEET_ID,
    range: TEAM_RANGE,
  });

  console.log(table.data);

  let {values} = table.data;
  values = values.filter(v => v.length > 0);

  // const driveFiles = await drive.files.list();
  // console.log(res.data);
  return Promise.resolve(arrayOfArraysToCollection(values));

}


module.exports = getTeam;

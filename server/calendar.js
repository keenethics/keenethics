const { google } = require('googleapis');
const moment = require('moment');
const getUser = require('./google-auth');

const bookingMeeting = async ({ selectedDate, selectedTime, email }) => {
  const year = moment(selectedDate).get('year');
  const month = moment(selectedDate).get('month') + 1;
  const date = moment(selectedDate).get('date');
  const startTime = moment(`${date}-${month}-${year} ${selectedTime}`, 'D/M/YYYY hh:mma').toISOString();
  const endTime = moment(`${date}-${month}-${year} ${selectedTime}`, 'D/M/YYYY hh:mma')
    .add(30, 'minute').toISOString();


  const event = {
    summary: 'Referral Meeting with Max from KeenEthics',
    location: 'Lviv, Ukraine',
    description: 'Meet with Max to discuss the opportunities of the referral program and software development cooperation',
    colorId: 1,
    organizer: {
      displayName: 'Maxim Savonin',
      email: 'maxim.savonin@keenethics.com',
    },
    start: {
      dateTime: startTime,
      timeZone: 'Europe/Kiev',
    },
    end: {
      dateTime: endTime,
      timeZone: 'Europe/Kiev',
    },
    attendees: [{ email }],
  };
  const client = await getUser();
  const calendar = google.calendar({
    version: 'v3',
    auth: client,
  });

  calendar.events.insert(
    { calendarId: 'primary', resource: event, sendUpdates: 'all' },
    (err) => { if (err) throw err; },
  );
};

const getAllCalendarEvents = async (dateString) => {
  const client = await getUser();
  const calendar = google.calendar({
    version: 'v3',
    auth: client,
  });
  const date = new Date((new Date(dateString)).toLocaleString('en-US', { timeZone: 'Europe/Kiev' }));
  const timeMin = date.toISOString();
  const timeMax = (new Date(date.setHours(18))).toISOString();

  const mainCalendarEvents = (await calendar.events.list({
    calendarId: 'max.savonin@keenethics.com',
    singleEvents: true,
    timeMin,
    timeMax,
    maxResults: 250,
    orderBy: 'startTime',
    showHiddenInvitations: true,
  })).data.items;

  const referalCalendarEvents = (await calendar.events.list({
    calendarId: 'maxim.savonin@keenethics.com',
    singleEvents: true,
    timeMin,
    timeMax,
    maxResults: 250,
    orderBy: 'startTime',
    showHiddenInvitations: true,
  })).data.items;
  return [
    ...mainCalendarEvents,
    ...referalCalendarEvents,
  ];
};

module.exports = { bookingMeeting, getAllCalendarEvents };

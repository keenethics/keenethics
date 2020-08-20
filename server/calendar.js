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
    kind: 'calendar#event',
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
    attendees: [{ email }, { email: 'maxim.savonin@keenethics.com' }],
  };
  const client = await getUser();
  const calendar = google.calendar({
    version: 'v3',
    auth: client,
  });

  calendar.events.insert(
    { calendarId: 'primary', resource: event, sendUpdates: 'all' },
    (err) => {
      // Check for errors and log them if they exist.
      if (err) return console.error('Error Creating Calender Event:', err.message);
      // Else log that the event was created.
      return console.log('Calendar event successfully created.');
    },
  );
};

const getAllCalendarEvents = async (dateString) => {
  const client = await getUser();
  const calendar = google.calendar({
    version: 'v3',
    auth: client,
  });
  const date = new Date(dateString);
  const timeMin = date.toISOString();
  const timeMax = (new Date(date.setHours(18))).toISOString();

  const res = await calendar.events.list({
    calendarId: 'max.savonin@keenethics.com',
    singleEvents: true,
    timeMin,
    timeMax,
    maxResults: 250,
    orderBy: 'startTime',
  });
  return res.data.items;
};

module.exports = { bookingMeeting, getAllCalendarEvents };

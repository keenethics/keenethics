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
  const date = new Date(dateString);
  const timeMin = date.toISOString();
  const timeMax = moment(date).add(1, 'M').toISOString();

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

  const allEvents = [
    ...mainCalendarEvents,
    ...referalCalendarEvents,
  ];

  const eventsByDays = {};
  allEvents.forEach(event => {
    const eventDate = event.start.dateTime;
    if(eventDate) {
      const eventsKey = moment(eventDate).format('YYYY-MM-DD')

      eventsByDays[eventsKey]
        ? eventsByDays[eventsKey].push(event)
        : eventsByDays[eventsKey] = [event]
    } else {
      return
    };
  });

  const dates = {}
  Object.entries(eventsByDays).forEach(([day, events]) => {
    const eventDate = moment(day, 'YYYY-MM-DD');
    const year = moment(eventDate).get('year');
    const month = moment(eventDate).get('month') + 1;
    const date = moment(eventDate).get('date');
    const startDate = moment(`${date}-${month}-${year} 9:00AM`, 'D/M/YYYY hh:mma');
    const endDate = moment(`${date}-${month}-${year} 6:00PM`, 'D/M/YYYY hh:mma');

    while (startDate < endDate) {
      let timeOption = {
        dateTime: startDate.format('YYYY-MM-DD HH:mm:ss'),
        value: startDate.format('hh:mm A'),
        label: startDate.format('hh:mm A'),
        isBooked: false,
      }

      dates[day]
      ? dates[day].push(timeOption)
      : dates[day] = [timeOption]

      startDate.add(30, 'minute');
    }

    events.forEach(({ start, end }) => {
      let eventStartTime = new Date(start.dateTime);
      let eventEndTime = new Date(end.dateTime);

      eventStartTime = eventStartTime.getMinutes() < 30
        ? new Date(eventStartTime.setMinutes(0))
        : new Date(eventStartTime.setMinutes(30));

      if (eventEndTime.getMinutes() < 30 && eventEndTime.getMinutes() !== 0) {
        eventEndTime = new Date(eventEndTime.setMinutes(30));
      }
      if (eventEndTime.getMinutes() > 30) {
        eventEndTime = new Date(eventEndTime.setMinutes(60));
      }

      dates[day].forEach(({ dateTime, isBooked }, index) => {
        const timePeriod = new Date(dateTime);
        if (timePeriod >= eventEndTime || isBooked) return;

        dates[day][index].isBooked = eventStartTime <= timePeriod && timePeriod < eventEndTime;
      });

      dates[day] = dates[day].filter(({ isBooked }) => !isBooked).map(({ dateTime, value }) => {
        const optionTime = moment(dateTime);
        return {
          value,
          dateTime: optionTime.format('YYYY-MM-DD HH:mm:ss'),
          label: optionTime.format('hh:mm A'),
        };
      });
    });

  });

  return dates;
}

module.exports = { bookingMeeting, getAllCalendarEvents };

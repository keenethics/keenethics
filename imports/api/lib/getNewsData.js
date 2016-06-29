import { Meteor } from 'meteor/meteor';

export default class GetNewsData {
  getMediumJson() {
    const url = 'https://blog.keenethics.com/?format=json';
    const result = Meteor.http.call('GET', url, {
      params: {
        timeout: 3000,
      },
      headers: {
        'cookie': 'sid=1:Ae8BWDRjWeqWqHqGt3Ik6om0Z8MYiyFSgKLtnEqcwb9GzRN5xVtNgay6WT1Yx5PU;uid=f82ad8efa94',
        'content-type': 'application/json',
      },
    });
    return result.content;
  }

  getMeetupJson() {
    const url = 'https://api.meetup.com/Lviv-Meteor-Meetup/events?&sign=true&photo-host=public&page=20&status=upcoming,past';
    const result = Meteor.http.call('GET', url, {
      params: {
        timeout: 3000,
      },
      headers: {
        'content-type': 'application/json',
      },
    });

    return result.content;
  }
}

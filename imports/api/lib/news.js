import _ from 'underscore';
import { Meteor } from 'meteor/meteor';

// function-expresion for get gson file from medium
const getMediumJson = function getMediumJson() {
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
};

// function-expresion for get gson file from meetup
const getMeetupJson = function getMeetupJson() {
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
};

// function for parsing and renurn all news from
export function fetchNews() {
  const partsMedium = getMediumJson();
  const postsMeetup = JSON.parse(getMeetupJson());

  let result = null;

  let postsMedium = partsMedium.substring(partsMedium.indexOf('"Post"'));
  postsMedium = `{${postsMedium.substring(0, postsMedium.indexOf('"Post"}}') + 8)}}`;

  let users = partsMedium.substring(partsMedium.indexOf('"User"'));
  users = `{${users.substring(0, users.indexOf('"User"}}') + 8)}}`;

  postsMedium = JSON.parse(postsMedium);
  users = JSON.parse(users);

  result = _.union(
    _.map(postsMedium.Post, value =>
      _.extend(_.pick(value, 'title'), {
        link: `https://blog.keenethics.com/${value.uniqueSlug}?source=latest`,
        authorName: users.User[value.creatorId].name,
        publishedDate: new Date(value.virtuals.firstPublishedAtEnglish).getTime(),
        imageSrc: value.virtuals.previewImage.imageId === '' ?
          '/images/news/1.png' :
          `https://cdn-images-1.medium.com/max/500/${value.virtuals.previewImage.imageId}`,
        subtitle: value.virtuals.subtitle,
        service: 'medium',
      })
    ),
    _.map(postsMeetup, value => {
      const subtitle = value.description
        .replace(/(<([^>]+)>)/ig, '')
        .replace(/(•)/ig, '').split(' ')
        .splice(0, 27).join(' ') + '...';
      return _.extend(_.pick(value, 'link'), {
        title: value.name,
        authorName: value.group.name,
        publishedDate: new Date(value.time).getTime(),
        imageSrc: '/images/news/1.png',
        subtitle,
        service: 'meetup',
      });
    })
  );
  return result;
}

export default class ParsingLib {

  parseMedium(parts) {
    let posts = parts.substring(parts.indexOf('"Post"'));
    posts = `{${posts.substring(0, posts.indexOf('"Post"}}') + 8)}}`;

    let users = parts.substring(parts.indexOf('"User"'));
    users = `{${users.substring(0, users.indexOf('"User"}}') + 8)}}`;

    posts = JSON.parse(posts);
    users = JSON.parse(users);
    _.each(posts.Post, (value, key) => {
      posts.Post[key] = _.pick(value, 'title');
      _.extend(posts.Post[key],
        {
          link: `https://blog.keenethics.com/${value.uniqueSlug}?source=latest`,
          authorName: users.User[value.creatorId].name,
          publishedDate: new Date(value.virtuals.firstPublishedAtEnglish).getTime(),
          imageSrc: value.virtuals.previewImage.imageId == '' ?
            '/images/news/1.png':
            `https://cdn-images-1.medium.com/max/500/${value.virtuals.previewImage.imageId}`,
          subtitle: value.virtuals.subtitle,
          service: 'medium',
        }
      );
    });
    return posts.Post;
  }



  parseMeetup(parts) {
    let posts = JSON.parse(parts);
    _.each(posts, (value, key) => {
      posts[key] = _.pick(value, 'link');
      _.extend(posts[key],
        {
          title: value.name,
          authorName: value.group.name,
          publishedDate: new Date(value.time).getTime(),
          imageSrc: '/images/news/1.png',
          subtitle: value.description.replace(/(<([^>]+)>)/ig,"").replace(/(•)/ig,"").split(' ').splice(0, 27).join(' ') + '...',
          service: 'meetup',
        }
      );
    });
    return posts
  }
}

function loadFixture(fixtures, collection) {
  var i;

  for (i = 0; i < fixtures.length; i+= 1) {
    //collection.remove({ });
    collection.insert(fixtures[i]);
  }
}

Meteor.startup(function () {
  //loadFixture(Fixtures['dummyFixture'], DummyCollection);

  var jobs = [{
      title: 'Knotable',
      description: 'A service for collaboration',
      link: 'http://beta.knotable.com/',
      createdAt: new Date()
    },{
      title: 'Comicenglish',
      description: 'Service for learning foreign languages in a gaming form',
      link: 'http://comicenglish.com/',
      createdAt: new Date()
    },{
      title: 'Pollen',
      description: 'An app for spreading ideas via email campaigns',
      link: 'http://www.pollenpost.com',
      createdAt: new Date()
    }];

  if(!Jobs.find().count()) {
    _.each(jobs, function(doc) {
      Jobs.insert(doc);
    });
  }

});

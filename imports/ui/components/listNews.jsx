import React from 'react';

export default class ListNews extends React.Component {

  render() {
    return (
      <div class="row list-news">
        <h5 class="-color-black -text-center">Fresh Events and News feed</h5>
      </div>
      <ul class="list-news row">
        <li class="col-xs-12 col-sm-6 col-md-3 list-news-item">
          <a href="http://www.meetup.com/Lviv-Meteor-Meetup/">
            <img src="/images/news/1.png" />
            <p class="date-meetup"><span class="-color-red meetup">Meetup</span><span>March 12 10:00 AM, Lviv</span></p>
            <h4>Meteor Girl meetup</h4>
            <p>Become a Supergirl - create a modern real-time app in just a fraction of the time. Don't miss an opportunity to learn to program with MeteorJS. Set off to the cosmic...</p>
          </a>
        </li>
        <li class="col-xs-12 col-sm-6 col-md-3 list-news-item">
          <a href="http://www.meetup.com/Lviv-Meteor-Meetup/">
            <img src="/images/news/2.png" />
            <p class="date-meetup"><span class="-color-red meetup">Meetup</span><span>January 14 7:00 PM, Lviv</span></p>
            <h4>Scaling meteor with seneca.js meetup</h4>
            <p>Happy New Year! We have an amazing news. A CTO of USA startup Gemshelf.com Tobias Jaeckel arrives to Lviv. He is building his project in Meteor. Tobias and his lead dev...</p>
          </a>
        </li>
        <li class="col-xs-12 col-sm-6 col-md-3 list-news-item">
          <a href="https://blog.keenethics.com/">
            <img src="/images/news/3.png" />
            <p class="date-meetup"><span class="medium">Medium</span><span>20 hrs ago 6 min read</span></p>
            <h4>Why i'm not staking my future on meteorjs</h4>
            <p>TLDR: After about 3 weeks of using Meteor seriously (8 hours a day), I decided that, despite its benefits, it would be shortsighted, and perhaps...</p>
          </a>
        </li>
        <li class="col-xs-12 col-sm-6 col-md-3 list-news-item">
         <a href="https://blog.keenethics.com/">
            <img src="/images/news/4.png" />
            <p class="date-meetup"><span class="medium">Medium</span><span>Day ago 3 min read</span></p>
            <h4>First experiences scaling a meteor app</h4>
            <p>Recently I went through the challenge and ordeal of having to scale my Meteor app. It's a project that had already been running in production for about a year. This summer the app became...</p>
          </a>
        </li>
      </ul>
    );
  }
}

import React from 'react';
import ListNews from 'listNews';

export default class SlideNews extends React.Component {

  render() {
    return (
      <div class="slide slide-partners" id="slide-5">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <h3 class="title -text-center">
                <span class="-color-black">Keen</span>
                <span class="-color-red">news.</span>
              </h3>
            </div>
          </div>
          <ListNews />
        </div>
      </div>
    );
  }
}

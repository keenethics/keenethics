import React from 'react';

export default class ListNavigator extends React.Component {
  componentDidMount() {
    $('.js-slick-slide').slick({
      dots: true,
      infinite: false,
      speed: 300,
      arrows: false,
      slidesToShow: 6,
      slidesToScroll: 6,
      responsive: [
        {
          breakpoint: 1548,
          settings: { slidesToShow: 6, slidesToScroll: 6 },
        },
        {
          breakpoint: 1424,
          settings: { slidesToShow: 5, slidesToScroll: 5 },
        },
        {
          breakpoint: 1200,
          settings: { slidesToShow: 4, slidesToScroll: 4, infinite: true, dots: true },
        },
        {
          breakpoint: 992,
          settings: { slidesToShow: 3, slidesToScroll: 3 },
        },
        {
          breakpoint: 768,
          settings: { slidesToShow: 1, slidesToScroll: 1 },
        },

        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    });

    $("a[href^='#']").click(function() {
      const target = $($.attr(this, 'href'));
      const scrollTop = target.offset() && target.offset().top;
      if (!scrollTop) return;
      $('html, body').animate({ scrollTop }, 500);
      return false;
    });
    $('body').scrollspy({ target: '.js-scroll-spy' });
  }

  render() {
    return (
      <ul className="list-navigation nav">
        <li className="list-navigation--item">
          <a href="#header" className="list-navigation--link">1</a>
          <div className="list-navigation--tip">
            <span className="list-navigation--text">Ethical development of keen web-apps.</span>
          </div>
        </li>
        <li className="list-navigation--item">
          <a href="#slide-1" className="list-navigation--link">2</a>
          <div className="list-navigation--tip">
            <span className="list-navigation--text">What if you have a keen idea?</span>
          </div>
        </li>
        <li className="list-navigation--item">
          <a href="#slide-2" className="list-navigation--link">3</a>
          <div className="list-navigation--tip">
            <span className="list-navigation--text">Then we have a keen approach.</span>
          </div>
        </li>
        <li className="list-navigation--item">
          <a href="#slide-3" className="list-navigation--link">4</a>
          <div className="list-navigation--tip">
            <span className="list-navigation--text">Our works.</span>
          </div>
        </li>
        <li className="list-navigation--item">
          <a href="#slide-4" className="list-navigation--link">5</a>
          <div className="list-navigation--tip">
            <span className="list-navigation--text">Our keen team.</span>
          </div>
        </li>
        <li className="list-navigation--item">
          <a href="#slide-5" className="list-navigation--link">6</a>
          <div className="list-navigation--tip">
            <span className="list-navigation--text">Keen news.</span>
          </div>
        </li>
        <li className="list-navigation--item">
          <a href="#slide-6" className="list-navigation--link">7</a>
          <div className="list-navigation--tip">
            <span className="list-navigation--text">Our partners.</span>
          </div>
        </li>
        <li className="list-navigation--item">
          <a href="#slide-7" className="list-navigation--link">8</a>
          <div className="list-navigation--tip">
            <span className="list-navigation--text">Contact us.</span>
          </div>
        </li>
      </ul>
    );
  }
}

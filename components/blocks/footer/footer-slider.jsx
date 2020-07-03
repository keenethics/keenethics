import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import Slider from 'react-slick';
import Link from 'next/link';
import PostsContext from '../../context/posts-context';

const PostItem = ({ post: { fields: { publishDate, title, slug } } }) => (
  <div className="slide-item">
    <div className="slide-date">
      {Moment(publishDate).format('D MMM, YYYY').toUpperCase()}
    </div>
    <Link as={`/blog/${slug}`} prefetch={false} href={`blog/${slug}`}>
      <a className="slide-link">
        <div>
          {title}
        </div>
      </a>
    </Link>
  </div>
);

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
};

const FooterSlider = ({
  isMobile,
  isTablet,
}) => {
  const posts = React.useContext(PostsContext) || [];

  let slidesToShow = 3;
  if (isTablet) slidesToShow = 2;
  if (isMobile) slidesToShow = 1;

  const settings = {
    className: 'footer-slider',
    slidesToShow,
    initialSlide: 0,
    rtl: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider
        {...settings}
      >
        {posts.reverse()
          .map((post) => (
            <div className="slide-container" key={post.fields.slug}>
              <PostItem post={post} />
            </div>
          ))}
      </Slider>
    </>
  );
};

FooterSlider.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  isTablet: PropTypes.bool.isRequired,
};

export default React.memo(FooterSlider);

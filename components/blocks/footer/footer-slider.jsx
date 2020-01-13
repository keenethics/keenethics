import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import Slider from 'react-slick';
import PostsContext from '../../context/posts-context';

const PostItem = ({ post }) => (

  <div className="slide-item">
    <div className="slide-date">
      {Moment(post.fields.publishDate).format('D MMM, YYYY').toUpperCase()}
    </div>
    <div className="slide-title">
      {post.fields.title}
    </div>
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
  };

  return (
    <>
      <Slider
        {...settings}
      >
        {posts.map((post) => (
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

export default FooterSlider;

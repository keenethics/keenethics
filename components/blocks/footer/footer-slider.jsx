import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import Slider from 'react-slick';
import PostsContext from '../../context/posts-context';

const PostItem = ({ post }) => (

  <div className="slide-item">
    <div className="slide-date">
      {Moment(post.fields.publishDate).format('D MMM, YYYY')}
    </div>
    <div className="slide-title">
      {post.fields.title}
    </div>
  </div>

);

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
};

const FooterSlider = () => {
  const posts = React.useContext(PostsContext) || [];
  const settings = {
    className: 'footer-slider',
    slidesToShow: 3,
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
      <div className="footer-posts">
        {posts.slice(-2).map((post) => (
          <div className="slide-container" key={post.fields.slug}>
            <PostItem post={post} />
          </div>
        ))}
      </div>
    </>
  );
};

export default FooterSlider;

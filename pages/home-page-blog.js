import React, { useContext, memo } from 'react';

import Posts from '../components/blog/posts';
import PostsContext from '../components/context/posts-context';

const KeenBlog = () => {
  const posts = useContext(PostsContext);

  return (
    <div className="block block-blog">
      <header className="block--header">
        <div className="block--header-title">
          Keen Blog
        </div>
      </header>
      <div className="block--content">
        <Posts posts={posts.slice(-2)} />
      </div>
    </div>
  );
};

export default memo(KeenBlog);

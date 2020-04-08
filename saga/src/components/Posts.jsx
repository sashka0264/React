import React from 'react';
import Post from './Post';
import { connect } from 'react-redux';

const Posts = ({ posts }) => {
  if (!posts.length) {
    return <p className="text">Постов пока нет</p>
  }

  return (
    <>
      {
        posts.map(( post, i ) => {
          return <Post post={post} key={post.id} />
        })
      }
    </>
  )
}

const mapStateToProps = ({ posts }) => ({
  posts
});

export default connect(mapStateToProps, null)(Posts);
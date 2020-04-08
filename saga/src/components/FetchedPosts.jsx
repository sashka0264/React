import React from 'react';
import Post from './Post'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsTC } from '../redux/actions';

const FetchedPosts = () => {
  const dispatch = useDispatch();
  const fetchedPosts = useSelector(({ fetchedPosts }) => ({ posts: fetchedPosts }));
  const { posts } = fetchedPosts;

  if (!posts.length) {
    return (
      <button className="btn btn-primary" onClick={ () => dispatch(fetchPostsTC()) }>
        Загрузить
      </button>
    )
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

export default FetchedPosts;
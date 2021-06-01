import React from 'react';
import { PostsWrapper } from '@pages/Posts/style';
import { IPost } from '../../typings/db';
import PostCard from '../../components/PostCard';
import axios from 'axios';


const Posts = () => {
  const posts = axios.get('http://localhost:3030/api/posts')
    .then(v => v)
    .catch(e => {
      console.log(e);
      return e;
    });
  console.log(posts);
  const post: IPost = {
    id: 1,
    title: '123dfasdfjdasfklasjdfklasjdflkasdjflkasjdfkl124512521521512512512',
    thumbnail: '1234',
    created_at: '2020-12-12',
  };
  return (
    <PostsWrapper>
      <PostCard post={post} />
      <PostCard post={post} />
      <PostCard post={post} />
      <PostCard post={post} />
      <PostCard post={post} />
      <PostCard post={post} />
      <PostCard post={post} />
      <PostCard post={post} />
      <PostCard post={post} />
      <PostCard post={post} />
      <PostCard post={post} />
      <PostCard post={post} />
      <PostCard post={post} />
      <PostCard post={post} />
    </PostsWrapper>
  );
};

export default Posts;
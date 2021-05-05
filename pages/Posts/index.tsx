import React from 'react';
import { PostsWrapper } from "@pages/Posts/style";
import { IPost } from "../../typings/db";
import PostCard from "../../components/PostCard";


const Posts = () => {
  const post: IPost = { id: 1, title: '123dfasdfjdasfklasjdfklasjdflkasdjflkasjdfkl124512521521512512512', thumbnail: '1234', created_at: '2020-12-12' }
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
  )
}

export default Posts;
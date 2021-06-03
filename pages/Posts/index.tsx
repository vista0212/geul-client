import React, { useEffect, useState } from 'react';
import { PostsWrapper } from '@pages/Posts/style';
import { IPost } from '../../typings/db';
import PostCard from '../../components/PostCard';
import axios from 'axios';


const Posts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  useEffect(() => {
    axios.get<IPost[]>('http://localhost:3030/api/posts')
      .then(({ data }) => {
        console.log({ data });
        setPosts(data);
      })
      .catch(e => console.log(e));
  }, []);
  console.log(posts);
  return (
    <PostsWrapper>
      {posts.map(post => <PostCard key={post.id} post={post} />)}
    </PostsWrapper>
  );
};

export default Posts;
import React, { useEffect, useState } from 'react';
import { PostsWrapper } from '@pages/PostListPage/style';
import { IPost } from '../../typings/db';
import PostCard from '../../components/PostCard';
import { Fetcher } from '@utils/Fetcher';


const Posts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    Fetcher.get<IPost[]>('http://localhost:3030/api/posts')
      .then(response => {
        if (!response.isSuccess) {
          setError(response.message || '게시글 목록 조회에 실패했습니다.');
          return;
        }

        setPosts(response.data);
      })
      .catch(alert);
  }, []);

  if (error) {
    alert(error);
    return <></>;
  }

  return (
    <PostsWrapper>
      {posts.map(post => <PostCard key={post.id} post={post} />)}
    </PostsWrapper>
  );
};

export default Posts;

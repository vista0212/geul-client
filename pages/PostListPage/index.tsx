import React, { useEffect, useState } from 'react';
import { PostsWrapper } from '@pages/PostListPage/style';
import { IPost } from '../../typings/db';
import PostCard from '../../components/PostCard';
import { Fetcher } from '../../web-common/src/fetch/Fetcher';
import { PostFindRequest } from '@pages/PostListPage/dto/PostFindRequest';
import { SliceResponse } from '../../web-common/src/res/SliceResponse';

const Posts = (): JSX.Element => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    Fetcher.get<SliceResponse<IPost>>('/api/post', new PostFindRequest())
      .then((response) => {
        console.log({ response });
        if (!response.isSuccess) {
          setError(response.message || '게시글 목록 조회에 실패했습니다.');
          return;
        }

        setPosts(response.data.items);
      })
      .catch((e) => {
        alert(e.message);
      });
  }, []);

  if (error) {
    alert(error);
    return <></>;
  }

  return (
    <PostsWrapper>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </PostsWrapper>
  );
};

export default Posts;

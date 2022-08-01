import React, { useEffect, useState } from 'react';
import {
  PostListSearchInput,
  PostListWrapper,
} from '@pages/PostListPage/style';
import { IPost } from '../../typings/db';
import { Fetcher } from '../../web-common/src/fetch/Fetcher';
import { PostFindRequest } from '@pages/PostListPage/dto/PostFindRequest';
import { SliceResponse } from '../../web-common/src/res/SliceResponse';
import PostItem from '../../components/PostItem';
import useInput from '../../hooks/useInput';

const PostList = (): JSX.Element => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [keyword, onChangeKeyword, setKeyword] = useInput('');
  const [error, setError] = useState('');

  useEffect(() => {
    Fetcher.get<SliceResponse<IPost>>(`/api/post`, new PostFindRequest(keyword))
      .then((response) => {
        if (!response.isSuccess) {
          setError(response.message || '게시글 목록 조회에 실패했습니다.');
          return;
        }

        setPosts(response.data.items);
      })
      .catch((e) => {
        alert(e.message);
      });
  }, [keyword]);

  if (error) {
    alert(error);
    return <></>;
  }

  return (
    <PostListWrapper>
      <PostListSearchInput
        onChange={onChangeKeyword}
        value={keyword}
        placeholder="검색어를 입력해주세요."
      />
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </PostListWrapper>
  );
};

export default PostList;

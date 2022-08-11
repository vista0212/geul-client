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
import ToastMessage from '../../components/ToastMessage';
import useDebounce from '../../hooks/useDebounce';

const PostList = (): JSX.Element => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isActive, setIsActive] = useState(false);
  const [keyword, onChangeKeyword] = useInput('');
  const [error, setError] = useState('');
  const searchDebounce = useDebounce<string>(keyword);

  useEffect(() => {
    Fetcher.get<SliceResponse<IPost>>(
      `/api/post`,
      new PostFindRequest(searchDebounce),
    )
      .then((response) => {
        if (!response.isSuccess) {
          setIsActive(true);
          setError(response.message || '게시글 목록 조회에 실패했습니다.');
          return;
        }

        setPosts(response.data.items);
      })
      .catch(() => {
        setIsActive(true);
        setError('문제가 발생했습니다.');
      });
  }, [searchDebounce]);

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
      <ToastMessage isActive={isActive} setIsActive={setIsActive}>
        {error}
      </ToastMessage>
    </PostListWrapper>
  );
};

export default PostList;

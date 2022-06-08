import React, { useState } from 'react';
import {
  GoBack,
  PostBody,
  PostHeader,
  PostTitle,
  PostWrapper,
} from '@pages/PostPage/style';
import BackArrow from '@utils/icon/back_arrow';
import Share from '@utils/icon/Share';
import Comments from '../../components/Comments';
import { IPost } from '../../typings/db';
import { useParams } from 'react-router';
import { Fetcher } from '../../web-common/src/fetch/Fetcher';
import { useQuery } from 'react-query';
import ToastMessage from '../../components/ToastMessage';
import { ApiResponse } from '../../web-common/src/res/ApiResponse';

const PostPage = (): JSX.Element => {
  const { id } = useParams<{ id: string | undefined }>();
  const [isActive, setIsActive] = useState(false);
  const { isLoading, error, data } = useQuery<ApiResponse<IPost>>(
    '',
    () => Fetcher.get<IPost>(`http://localhost:3030/api/post/${id}`),
    {
      refetchOnWindowFocus: false,
    },
  );

  const onClickShare = () => {
    navigator.clipboard.writeText(`http://localhost:3000/post/${id}`);
    setIsActive(true);
  };

  if (isLoading) {
    return <></>;
  }

  if (error || !data?.isSuccess) {
    alert(error || data?.message);
    location.href = '/';
  }

  return (
    <PostWrapper>
      <GoBack>
        <BackArrow />
        <span>뒤로가기</span>
      </GoBack>
      <PostHeader>
        <PostTitle>{data?.data.title}</PostTitle>
        <Share onClick={onClickShare} />
      </PostHeader>
      <PostBody>{data?.data.body}</PostBody>
      <Comments comments={data?.data.comments || []} post_id={Number(id)} />
      <ToastMessage setIsActive={setIsActive} isActive={isActive}>
        페이지 주소가 클립보드에 복사되었습니다 !
      </ToastMessage>
    </PostWrapper>
  );
};

export default PostPage;

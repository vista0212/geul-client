import React from 'react';
import { GoBack, PostBody, PostHeader, PostTitle, PostWrapper } from '@pages/Post/style';
import BackArrow from '@utils/icon/back_arrow';
import Share from '@utils/icon/Share';
import Comments from '../../components/Comments';
import { IPost } from '../../typings/db';
import { useParams } from 'react-router';
import { Fetcher } from '@utils/Fetcher';
import { useQuery } from 'react-query';
import { ApiResponse } from '../../typings/ApiResponse';

const Post = () => {
  const { id } = useParams<{ id: string | undefined }>();
  const { isLoading, error, data } = useQuery<ApiResponse<IPost>>(
    '', () => Fetcher.get<IPost>(`http://localhost:3030/api/posts/${id}`), {
      refetchOnWindowFocus: false,
    });

  if (isLoading) {
    return <span>로딩중</span>;
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
        <Share onClick={() => navigator.clipboard.writeText(`http://localhost:3000/post/${id}`)} />
      </PostHeader>
      <PostBody>
        {data?.data.body}
      </PostBody>
      <Comments comments={data?.data.comments || []} post_id={Number(id)} />
    </PostWrapper>
  );
};

export default Post;
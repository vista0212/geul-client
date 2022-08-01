import React, { useEffect, useState } from 'react';
import {
  PostBody,
  PostHeader,
  PostTitle,
  PostWrapper,
} from '@pages/PostPage/style';
import Share from '@utils/icon/Share';
import { IPost } from '../../typings/db';
import { useParams } from 'react-router';
import { Fetcher } from '../../web-common/src/fetch/Fetcher';
import ToastMessage from '../../components/ToastMessage';

const PostPage = (): JSX.Element => {
  const { id } = useParams<{ id: string | undefined }>();
  const [isActive, setIsActive] = useState(false);
  const [post, setPost] = useState<IPost>({} as IPost);
  const [error, setError] = useState('');

  useEffect(() => {
    Fetcher.get<IPost>(`/api/post/${id}`)
      .then((response) => {
        if (!response.isSuccess) {
          setError(response.message || '게시글 조회가 실패했습니다.');
          return;
        }

        setPost(response.data);
      })
      .catch((e) => {
        setError(e.message);
      });
  }, []);

  const onClickShare = () => {
    navigator.clipboard.writeText(
      `${process.env.REACT_APP_APP_DOMAIN}/post/${id}`,
    );
    setIsActive(true);
  };

  if (error) {
    alert(error);
    return <></>;
  }

  return (
    <PostWrapper>
      <PostHeader>
        <PostTitle>{post.title}</PostTitle>
        <Share onClick={onClickShare} />
      </PostHeader>
      <PostBody>{post.body}</PostBody>
      {/*<Comments comments={post.comments || []} post_id={Number(id)} />*/}
      <ToastMessage setIsActive={setIsActive} isActive={isActive}>
        페이지 주소가 클립보드에 복사되었습니다 !
      </ToastMessage>
    </PostWrapper>
  );
};

export default PostPage;

import React, { useEffect, useState } from 'react';
import { GoBack, PostBody, PostHeader, PostTitle, PostWrapper } from '@pages/Post/style';
import BackArrow from '@utils/icon/back_arrow';
import Share from '@utils/icon/Share';
import Comments from '../../components/Comments';
import { IComment, IPost } from '../../typings/db';
import { useParams } from 'react-router';
import { Fetcher } from '@utils/Fetcher';

const Post = () => {
  const { id } = useParams<{ id: string | undefined }>();
  const [post, setPost] = useState<IPost | undefined>(undefined);
  const [error, setError] = useState('');
  const [isFetched, setIsFetched] = useState(false);
  useEffect(() => {
    setIsFetched(false);
    setPost(undefined);
    setError('');
    const fetchData = async () => {
      try {
        const response = await Fetcher.get<IPost>(`http://localhost:3030/api/posts/${id}`);
        if (!response.isSuccess) {
          setError(response.message);
          setIsFetched(true);
          return;
        }

        setPost(response.data);
        setIsFetched(true);
      } catch (e) {
        setError(e.message);
        setIsFetched(true);
      }
    };

    fetchData();
  }, []);

  const comments: Array<IComment> = [
    { id: 1, nickname: '123', created_at: '2020.12.12', body: '안녕하세요 반갑습니다. 반갑고 반갑습니다'.repeat(100) },
    { id: 2, nickname: '123', created_at: '2020.12.12', body: '125125251' },
    { id: 3, nickname: '123', created_at: '2020.12.12', body: '125125251' },
    { id: 4, nickname: '123', created_at: '2020.12.12', body: '125125251' }];

  console.log({ isFetched, error, post });

  if (!isFetched) {
    return <></>;
  }

  if (isFetched && (error || !post)) {
    alert(error);
    location.href = '/';
  }

  return (
    <PostWrapper>
      <GoBack>
        <BackArrow />
        <span>뒤로가기</span>
      </GoBack>
      <PostHeader>
        <PostTitle>{post?.title}</PostTitle>
        <Share />
      </PostHeader>
      <PostBody>
        {post?.body}
      </PostBody>
      <Comments comments={comments} />
    </PostWrapper>
  );
};

export default Post;
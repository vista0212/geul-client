import React from 'react';
import { GoBack, PostBody, PostHeader, PostTitle, PostWrapper } from "@pages/Post/style";
import BackArrow from "@utils/icon/back_arrow";
import Share from "@utils/icon/Share";
import Comments from "../../components/Comments";
import { IComment } from "../../typings/db";

const Post = () => {
  const comments: Array<IComment> = [
    { id: 1, nickname: '123', created_at: '2020.12.12', body: '안녕하세요 반갑습니다. 반갑고 반갑습니다'.repeat(100) },
    { id: 2, nickname: '123', created_at: '2020.12.12', body: '125125251' },
    { id: 3, nickname: '123', created_at: '2020.12.12', body: '125125251' },
    { id: 4, nickname: '123', created_at: '2020.12.12', body: '125125251' }];
  return (
    <PostWrapper>
      <GoBack>
        <BackArrow />
        <span>뒤로가기</span>
      </GoBack>
      <PostHeader>
        <PostTitle>글 제목글 제목글 제목글 제목글 제목글 제목글 제목글 제목글 제목글 제목글 제목글 제목글 제목글 제목글 제목글 제목글 제목글 제목글 제목</PostTitle>
        <Share />
      </PostHeader>
      <PostBody>
        kasjdflkasdjf;lasdjkflkasdjflk;asdjfaksdl;jfaslkfjasdlk;fjad;lfkjasdlkkasjdflkasdjf;lasdjkflkasdjflk;asdjfaksdl;jfaslkfjasdlk;fjad;lfkjasdlkkasjdflkasdjf;lasdjkflkasdjflk;asdjfaksdl;jfaslkfjasdlk;fjad;lfkjasdlk
        kasjdflkasdjf;lasdjkflkasdjflk;asdjfaksdl;jfaslkfjasdlk;fjad;lfkjasdlk
      </PostBody>
      <Comments comments={comments} />
    </PostWrapper>
  )
};

export default Post;
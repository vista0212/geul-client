import React, { FC } from 'react';
import { CommentsTitle, CommentsWrapper, Input } from "./style";

interface IComments {
  comments: Array<{
    nickname: string;
    created_at: string;
    body: string;
  }>
}

const Comments: FC<IComments> = ({ comments }) => {
  return (
    <CommentsWrapper>
      <CommentsTitle>Comments</CommentsTitle>
      <Input placeholder="nickname" className="input" />
    </CommentsWrapper>
  )
}

export default Comments;
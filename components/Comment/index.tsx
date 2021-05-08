import React, { FC } from 'react';
import { IComment } from "../../typings/db";
import { CommentBody, CommentInfo, CommentLine, CommentWrapper } from "./style";

interface Props {
  comment: IComment;
}

const Comment: FC<Props> = ({ comment }) => {
  const { id, nickname, created_at, body } = comment;
  return (
    <CommentWrapper>
      <CommentInfo>
        <span>{nickname}&nbsp;({created_at})</span>
      </CommentInfo>
      <CommentLine />
      <CommentBody>{body}</CommentBody>
    </CommentWrapper>
  )
}

export default Comment;
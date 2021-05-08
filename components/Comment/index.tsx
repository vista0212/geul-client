import React, { FC } from 'react';
import { IComment } from "../../typings/db";
import { CommentBody, CommentInfo, CommentLine, CommentWrapper } from "./style";
import Pen from "@utils/icon/pen";
import TrashCan from "@utils/icon/trash_can";
import IconWrapper from "../IconWrapper";

interface Props {
  comment: IComment;
}

const Comment: FC<Props> = ({ comment }) => {
  const { id, nickname, created_at, body } = comment;
  return (
    <CommentWrapper>
      <CommentInfo>
        <span>{nickname}&nbsp;({created_at})</span>
        <div>
          <IconWrapper width={24} height={24}>
            <Pen />
          </IconWrapper>
          <IconWrapper width={24} height={24}>
            <TrashCan />
          </IconWrapper>
        </div>
      </CommentInfo>
      <CommentLine />
      <CommentBody>{body}</CommentBody>
    </CommentWrapper>
  )
}

export default Comment;
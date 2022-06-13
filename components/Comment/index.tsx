import React, { FC } from 'react';
import { IComment } from '../../typings/db';
import { CommentBody, CommentInfo, CommentLine, CommentWrapper } from './style';
import Pen from '@utils/icon/pen';
import TrashCan from '@utils/icon/trash_can';
import IconWrapper from '../IconWrapper';
import { FormatDate } from '@utils/FormatDate';

interface Props {
  comment: IComment;
}

const Comment: FC<Props> = ({ comment }) => {
  const { id, name, created_at, body } = comment;
  return (
    <CommentWrapper key={id}>
      <CommentInfo>
        <span>
          {name}&nbsp;({FormatDate.format(created_at, 'YYYY년 MM월 DD일')})
        </span>
        <div>
          <IconWrapper width={24} height={24} canClick={true}>
            <Pen />
          </IconWrapper>
          <IconWrapper width={24} height={24} canClick={true}>
            <TrashCan />
          </IconWrapper>
        </div>
      </CommentInfo>
      <CommentLine />
      <CommentBody>{body}</CommentBody>
    </CommentWrapper>
  );
};

export default Comment;

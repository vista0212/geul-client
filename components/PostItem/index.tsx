import React, { FC } from 'react';
import { IPost } from '../../typings/db';
import { Link } from 'react-router-dom';
import {
  PostItemIntroduce,
  PostItemPublishDate,
  PostItemTitle,
  PostItemWrapper,
} from './style';
import { FormatDate } from '@utils/FormatDate';

interface Props {
  post: IPost;
}

const PostItem: FC<Props> = ({ post }) => {
  return (
    <PostItemWrapper>
      <Link to={`/post/${post.id}`}>
        <PostItemTitle>{post.title}</PostItemTitle>
        <PostItemIntroduce>{post.introduction}</PostItemIntroduce>
        <PostItemPublishDate>
          {FormatDate.format(post.publishedAt, 'yyyy-MM-dd hh:mm:ss')}
        </PostItemPublishDate>
      </Link>
    </PostItemWrapper>
  );
};

export default PostItem;

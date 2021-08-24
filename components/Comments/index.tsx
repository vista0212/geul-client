import React, { FC, useCallback } from 'react';
import {
  CommentForm,
  CommentInput,
  CommentList,
  CommentsTitle,
  CommentsWrapper,
  Input,
  InputBox,
  InputWithButton,
  SubmitButton,
} from './style';
import { IComment, IPost } from '../../typings/db';
import Comment from '../Comment';
import useInput from '../../hooks/useInput';
import { Fetcher } from '@utils/Fetcher';

interface Props {
  comments: Array<IComment>;
  post_id: IPost['id']
}

const Comments: FC<Props> = ({ comments, post_id }) => {
  const [name, onChangeName, setName] = useInput('');
  const [password, onChangePassword, setPassword] = useInput('');
  const [body, onChangeBody, setBody] = useInput('');

  const onSubmit = useCallback(async (e) => {
    e.preventDefault();
    if (!name || !password || !body) {
      alert('값을 입력해주세요!');
      return;
    }
    try {
      const response = await Fetcher.post<IComment>('http://localhost:3030/api/comments', {
        name,
        password,
        post_id,
        body,
      });

      if (!response.isSuccess) {
        alert(response.message);
        return;
      }

      setName('');
      setPassword('');
      setBody('');

    } catch (e) {
      alert(e.message || '문제가 발생했습니다 !');
    }
  }, [body, name, password]);

  return (
    <CommentsWrapper>
      <CommentsTitle>Comments</CommentsTitle>
      <CommentForm onSubmit={onSubmit}>
        <InputWithButton>
          <InputBox>
            <Input placeholder="name" className="input" value={name} onChange={onChangeName} />
            <Input placeholder="password" className="input" type="password" value={password}
                   onChange={onChangePassword} />
          </InputBox>
          <SubmitButton type="submit">POST</SubmitButton>
        </InputWithButton>
        <CommentInput onChange={onChangeBody} value={body} />
      </CommentForm>
      <CommentList>
        {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
      </CommentList>
    </CommentsWrapper>
  );
};

export default Comments;
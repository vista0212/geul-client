import React, { FC, useCallback, useRef } from 'react';
import { Editor } from '@toast-ui/react-editor';
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
import './css.css';
import { IComment } from '../../typings/db';
import Comment from '../Comment';
import useInput from '../../hooks/useInput';
import axios from 'axios';

interface Props {
  comments: Array<IComment>;
}

const Comments: FC<Props> = ({ comments }) => {
  const [name, onChangeName, setName] = useInput('');
  const [password, onChangePassword, setPassword] = useInput('');
  const body = useRef<Editor>(null);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    if (!name || !password || !body) {
      alert('값을 입력해주세요!');
    }

    axios.post('http://localhost:3030/api/comments', { nickname: name, password, body })
      .then(({ data: { comment } }) => {
        setName('');
        setPassword('');
        body?.current && body.current.getInstance().reset();
        console.log({ comment });
      })
      .catch(e => console.error('댓글 작성에 실패했습니다. ', e));
  }, [body, name, password]);

  return (
    <CommentsWrapper>
      <CommentsTitle>Comments</CommentsTitle>
      <CommentForm onSubmit={onSubmit}>
        <InputWithButton>
          <InputBox>
            <Input placeholder="name" className="input" value={name} onChange={onChangeName} />
            <Input placeholder="password" className="input" value={password} onChange={onChangePassword} />
          </InputBox>
          <SubmitButton type="submit">POST</SubmitButton>
        </InputWithButton>
        <CommentInput />
      </CommentForm>
      <CommentList>
        {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
      </CommentList>
    </CommentsWrapper>
  );
};

export default Comments;
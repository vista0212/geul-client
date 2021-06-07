import React, { FC, LegacyRef, useCallback, useEffect, useRef, useState } from 'react';
import { Editor, EditorProps } from '@toast-ui/react-editor';
import {
  CommentForm,
  CommentList,
  CommentsTitle,
  CommentsWrapper,
  Input,
  InputBox,
  InputWithButton,
  SubmitButton,
} from './style';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor-only.css';
import { IComment } from '../../typings/db';
import Comment from '../Comment';
import useInput from '../../hooks/useInput';

interface Props {
  comments: Array<IComment>;
}

const Comments: FC<Props> = ({ comments }) => {
  const [nickname, onChangeNickname, setNickname] = useInput('');
  const [password, onChangePassword, setPassword] = useInput('');

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    console.log(nickname, password);

    setNickname('');
    setPassword('');
  }, [nickname, password]);

  return (
    <CommentsWrapper>
      <CommentsTitle>Comments</CommentsTitle>
      <CommentForm onSubmit={onSubmit}>
        <InputWithButton>
          <InputBox>
            <Input placeholder="nickname" className="input" value={nickname} onChange={onChangeNickname} />
            <Input placeholder="password" className="input" value={password} onChange={onChangePassword} />
          </InputBox>
          <SubmitButton type="submit">POST</SubmitButton>
        </InputWithButton>
        <Editor
          initialEditType="markdown"
          previewStyle="vertical"
          initialValue=""
          height="250px"
          useCommandShortcut={true} />
      </CommentForm>
      <CommentList>
        {comments.map(comment => <Comment comment={comment} />)}
      </CommentList>
    </CommentsWrapper>
  );
};

export default Comments;
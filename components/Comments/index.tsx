import React, { FC, LegacyRef, useCallback, useRef } from 'react';
import { Editor } from '@toast-ui/react-editor';
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
import '@toast-ui/editor-plugin-code-syntax-highlight';
import codeSyntaxHighlightPlugin from '@toast-ui/editor-plugin-code-syntax-highlight';
import 'tui-color-picker/dist/tui-color-picker.css';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import { IComment } from '../../typings/db';
import Comment from '../Comment';
import useInput from '../../hooks/useInput';

hljs.registerLanguage('javascript', javascript);

interface Props {
  comments: Array<IComment>;
}

const Comments: FC<Props> = ({ comments }) => {
  const [nickname, onChangeNickname, setNickname] = useInput('');
  const [password, onChangePassword, setPassword] = useInput('');
  const body = useRef<Editor>(null);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    if (!nickname || !password || !body) {
      alert('값을 입력해주세요!');
    }

    setNickname('');
    setPassword('');
  }, [body, nickname, password]);

  const onChangeBody = useCallback(() => {
    console.log(body?.current?.getInstance().getCurrentModeEditor());
  }, []);

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
          ref={body}
          useCommandShortcut={true}
          usageStatistics={false}
          plugins={[codeSyntaxHighlightPlugin, { hljs }]} />
      </CommentForm>
      <CommentList>
        {comments.map(comment => <Comment comment={comment} />)}
      </CommentList>
    </CommentsWrapper>
  );
};

export default Comments;
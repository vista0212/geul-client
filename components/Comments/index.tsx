import React, { FC } from 'react';
import { Editor } from "@toast-ui/react-editor";
import { CommentList, CommentsTitle, CommentsWrapper, Input, InputBox, InputWithButton, SubmitButton } from "./style";
import 'codemirror/lib/codemirror.css'
import '@toast-ui/editor/dist/toastui-editor-only.css';
import { IComment } from "../../typings/db";
import Comment from "../Comment";

interface Props {
  comments: Array<IComment>;
}

const Comments: FC<Props> = ({ comments }) => {
  return (
    <CommentsWrapper>
      <CommentsTitle>Comments</CommentsTitle>
      <InputWithButton>
        <InputBox>
          <Input placeholder="nickname" className="input" />
          <Input placeholder="password" className="input" />
        </InputBox>
        <SubmitButton>POST</SubmitButton>
      </InputWithButton>
      <Editor
        initialEditType="markdown"
        previewStyle="vertical"
        initialValue=""
        height="250px"
        useCommandShortcut={true} />
      <CommentList>
        {comments.map(comment => <Comment comment={comment} />)}
      </CommentList>
    </CommentsWrapper>
  )
}

export default Comments;
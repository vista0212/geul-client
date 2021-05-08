import React, { FC } from 'react';
import { Editor } from "@toast-ui/react-editor";
import { CommentList, CommentsTitle, CommentsWrapper, Input, SubmitButton } from "./style";
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
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', columnGap: '0.5rem' }}>
          <Input placeholder="nickname" className="input" />
          <Input placeholder="password" className="input" />
        </div>
        <SubmitButton>POST</SubmitButton>
      </div>
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
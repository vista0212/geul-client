import React from 'react';
import 'codemirror/lib/codemirror.css';
import 'highlight.js/styles/github.css';
import '@toast-ui/react-editor/dist/toastui-react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import hljs from 'highlight.js';

export type ReactEditorProps = {};

const Test = (props: ReactEditorProps) => {
  const onChange = () => {
  };

  const syntaxHighlightPlugIn = (editor: any) => {
    const { codeBlockManager } = Object.getPrototypeOf(editor).constructor;
    const languages = hljs.listLanguages();
    languages.forEach((type) => {
      const convertor = (codeText: string) =>
        hljs.highlight(codeText, { language: type }).value;
      const aliases = hljs.getLanguage(type)?.aliases || [];
      const langTypes = [type, ...aliases];

      langTypes.forEach((lang) => {
        codeBlockManager.setReplacer(lang, convertor);
      });
    });
  };

  return (
    <Editor
      initialEditType="markdown"
      previewStyle="vertical"
      height="100%"
      hideModeSwitch={true}
      events={{
        change: onChange,
      }}
      plugins={[syntaxHighlightPlugIn]}
    />
  );
};

export default Test;
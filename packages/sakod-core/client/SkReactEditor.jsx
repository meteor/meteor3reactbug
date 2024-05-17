import React, { useState } from 'react';

import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';

export default function SkReactEditor({ doc, docKey }) {
  const initialConfig = {
    namespace: 'MyEditor',
    onError(err) { console.error(err); },
    editorState: 'hello',
  };

  return (
    <>
      <LexicalComposer initialConfig={initialConfig}>
        <div className="editor-container relative">
          <div className="editor-inner">
            <RichTextPlugin
              contentEditable={
                <div>
                  <ContentEditable className="editor-input" />
                </div>
              }
              ErrorBoundary={LexicalErrorBoundary}
            />
          </div>
        </div>
      </LexicalComposer>
    </>
  );
}

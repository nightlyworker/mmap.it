import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';
import Editor from 'rich-markdown-editor';
import { Document } from '../store/editor/types';

require('./Editor.scss');

export interface Props {
    markdown: string;
    onSave: (doc: Document) => void;
    setMarkdown: (markdown: string) => void;
    readOnly?: boolean;
    activeIdx?: string | undefined;
}

const Markdown: React.FunctionComponent<Props> = (
    { 
        markdown, 
        setMarkdown, 
        onSave, 
        readOnly = false, 
        activeIdx=undefined,
    }
) => (
    <div className="markdown" id="editor">
        <Editor
            key={activeIdx}
            id={markdown}
            defaultValue={markdown}
            onSave={onSave}
            onCancel={() => console.log('Cancel triggered')}
            onChange={setMarkdown}
            readOnly={readOnly}
            activeIdx={activeIdx}
        />
    </div>
);

export default Markdown;

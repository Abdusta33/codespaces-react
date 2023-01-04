import './Draft.scss'
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

import { useState } from 'react';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";



const Draft = () => {
  const [text, setText]= useState('')
  const [editorState, setEditorState] =useState(()=>(EditorState.createEmpty()))
  const handleChange = (editorState)=>{
    setEditorState(editorState);
  }
  return (
  <>
  
    <div className='editor'>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={handleChange}
      />;
    </div>
    </>
  )
}

export default Draft;
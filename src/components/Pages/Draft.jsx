import { EditorState } from 'draft-js';
import './Draft.scss'
import React from 'react'
import { useState } from 'react';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Draft = () => {
  const [editorState, setEditorState] =useState(()=>(EditorState.createEmpty()))
  const handleChange = (editorState)=>{
    setEditorState(editorState);
  }
  return (
    <div className='editor'>
      <Editor
   
  editorState={editorState}
  toolbarClassName="toolbarClassName"
  wrapperClassName="wrapperClassName"
  editorClassName="editorClassName"
  onEditorStateChange={handleChange}
/>;
    </div>
  )
}

export default Draft;
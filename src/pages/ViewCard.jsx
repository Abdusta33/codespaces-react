import React, { useEffect } from 'react'
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

import { useState } from 'react';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { cards } from '../templets/cards'
import { useParams } from 'react-router-dom'

import CompletedCard from "../components/CompletedCard"
const ViewCard = ({ templates, setTemplates }) => {
  const { cardId } = useParams()
  const [templateCard, setTemplateCard] = useState("")

  useEffect(() => {
    const card = cards.find((card) => card.id === cardId)
    setTemplateCard(card);
  }, [cardId])


  const [text, setText] = useState('')
  const [editorState, setEditorState] = useState(() => (EditorState.createEmpty()))
  const handleChange = (editorState) => {
    setEditorState(editorState);
    setText(draftToHtml(convertToRaw(editorState.getCurrentContent())))
  }
  const handleSave = () => {
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  }
  return (
    <div className='editor'>
       <div>
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={handleChange}
        />
        <textarea
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        />
        </div>
        <button onClick={handleSave}>save template</button>
      <div>
        <CompletedCard image={templateCard?.img} text={text} />
      </div>
    </div>
  )
}

export default ViewCard
import React, { useEffect, useRef } from 'react'
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import check from '../asset/check.gif'
import './viewcard.scss'
import { useState } from 'react';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { cards } from '../templets/cards'
import { Navigate, useParams, useNavigate } from 'react-router-dom'

import CompletedCard from "../components/CompletedCard"
const ViewCard = ({ templates, setTemplates }) => {
  const { cardId } = useParams()
  const [templateCard, setTemplateCard] = useState("")
const navigate = useNavigate();
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
  const modal = useRef(null);
  const figure = useRef(null);
  const styler = ()=>{
 
     modal.current.style.visibility = 'visible';
    modal.current.style.opacity = '1';
  }
  const handleSave = () => {
  
  setTimeout(styler, 1000);
 setTimeout(()=>{
  navigate('/completed');
 }, 3000)
  //  visibility: visible;
   
  }
  return (
    <>
     <div className="modal" ref={modal}>
      <figure className="modal__figure" ref={figure}>
       <img src={check} alt="" className='modal__img'/>
       <figcaption><h2 className="modal__heading">Card Saved !!</h2></figcaption>
       </figure>
    </div>
    <h2>type your letter here</h2>
    <div className='body'>
       <div className='editor'>

        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={handleChange}
        />
        {/* <textarea
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        /> */}
        
        </div>
      
        <button onClick={handleSave} className='view__btn'>save card</button>
     
    </div>
   
   <CompletedCard image={templateCard?.img} text={text} />
    </>
  )
}

export default ViewCard
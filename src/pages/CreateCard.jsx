import React, { useEffect, useRef } from "react";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import check from "../asset/check.gif";
import "./createcard.scss";
import { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { cards } from "../templets/cards";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import hardImage from "../asset/holly2.png";
import CompletedCard from "../components/CompletedCard";
const CreateCard = ({ templates, setTemplates, onCreateTemplate }) => {
  const { cardId } = useParams();
  const [template, setTemplate] = useState({});
  const modal = useRef(null);
  const figure = useRef(null);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  useEffect(() => {
    const card = cards.find((card) => card.id === cardId);
    setTemplate({
      text: "",
      card: card,
    });
  }, [cardId]);

  const handleChange = (editorState) => {
    setEditorState(editorState);
    setTemplate((prevTemp) => {
      return {
        ...prevTemp,
        text: draftToHtml(convertToRaw(editorState.getCurrentContent())),
      };
    });
  };

  const styler = () => {
    modal.current.style.visibility = "visible";
    modal.current.style.opacity = "1";
  };

  const handleSave = () => {
  
    onCreateTemplate(template, styler)
    //;


  };


  return (
    <>
      <div className="modal" ref={modal}>
        <figure className="modal__figure" ref={figure}>
          <img src={check} alt="" className="modal__img" />
          <figcaption>
            <h2 className="modal__heading">Card Saved !!</h2>
          </figcaption>
        </figure>
      </div>
      <h2 className="text-center">type your letter here</h2>
      <div className="body">
        <div
          className="editor"
          style={{ backgroundImage: `url(${template?.card?.img})` }}
        >
          <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={handleChange}
          />
        </div>

        <button onClick={handleSave} className="view__btn">
          save card
        </button>
      </div>
    </>
  );
};

export default CreateCard;

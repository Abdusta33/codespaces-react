import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import CompletedCard from "../components/CompletedCard";
import { cards } from "../templets/cards";
const ViewCard = ({ templates }) => {
  const [template, setTemplate] = useState({});
  const { teplateId } = useParams();

  useEffect(() => {
    const findTemplate = templates.find(
      (template) => `${template?.id}` === `${teplateId}`
    );
    console.log(findTemplate);
    setTemplate({
      text: findTemplate?.text,
      card: findTemplate?.card,
    });
  }, [templates, teplateId]);

  return (
    <div>
      <CompletedCard template={template} />
    </div>
  );
};

export default ViewCard;

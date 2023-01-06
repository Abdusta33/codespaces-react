import React from "react";
import CompletedCard from "../components/CompletedCard";
import cry from '../asset/cry.gif'

const TemplateList = ({ templates }) => {
  return (
    <div>
      {templates.length ? (
        templates.map((template) => (
          <CompletedCard key={template.id} template={template} />
        ))
      ) : (
        <div>
          <h1 className="text-center">NO SAVED CARDS</h1>
          <img src={cry} alt="" />
        </div>
      )}
    </div>
  );
};

export default TemplateList;

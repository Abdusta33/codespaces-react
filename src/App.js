import { useState,useEffect } from "react";
import Home from "./pages/Home"
import CreateCard from "./pages/CreateCard"
import ViewCard from "./pages/ViewCard"
import {Routes, Route, useParams,useNavigate } from 'react-router-dom';
import './global.scss';
import Dashboard from "./components/Dashboard/Dashboard";
import CompletedCard from "./components/CompletedCard";
import TemplateList from "./pages/TemplateList";
function App() {
  const [templates, setTemplates] = useState([])
  useEffect(()=>{
    const savedTemplates = localStorage.getItem("templates")
    if(savedTemplates !== null){
      const templateJSON = JSON.parse(savedTemplates)
      setTemplates(templateJSON)
    }
  },[])

  const navigate = useNavigate();
  function onCreateTemplate(template, func){
    setTemplates((prevTemplate) => {
      const newTemplate = {
        ...template,
        id: prevTemplate?.length + 1,
      };
      const newTemplates = [...prevTemplate, newTemplate]
      localStorage.setItem("templates",JSON.stringify(newTemplates))
      return newTemplates;
    });
        func()
        setTimeout(()=>{   navigate(`/teplate/${templates.length + 1}`)}, 2000)
 
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/home' element={<Home/>} />
        <Route path='/template' element={<TemplateList templates= {templates} />} />
        <Route path='/teplate/:teplateId' element={<ViewCard templates= {templates}  />} />
        <Route path='/:cardId' element={<CreateCard  onCreateTemplate={onCreateTemplate} templates={templates} setTemplates={setTemplates} />} />
      </Routes>
    </div>
  );
}

export default App;

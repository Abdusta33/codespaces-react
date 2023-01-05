import { useState } from "react";
import Home from "./pages/Home"
import CreateCard from "./pages/CreateCard"
import ViewCard from "./pages/ViewCard"
import {Routes, Route, useParams } from 'react-router-dom';

import './global.scss';
import Dashboard from "./components/Dashboard/Dashboard";
import CompletedCard from "./components/CompletedCard";
function App() {
  const [templates, setTemplates] = useState([])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/create' element={<CreateCard />} />
        <Route path='/home' element={<Home/>} />
        <Route path='/completed' element={<CompletedCard/>} />
        <Route path='/:cardId' element={<ViewCard templates={templates} setTemplates={setTemplates} />} />
      </Routes>
    </div>
  );
}

export default App;

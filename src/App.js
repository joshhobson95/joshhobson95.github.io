import React from "react";
import {Routes, Route} from 'react-router-dom'
import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Jericho from "./components/Jericho/Jericho";
import Sunie from "./components/HelloSunie/Sunie";
import Collab from "./components/Collab/Collab";
import Pilytix from "./components/Pilytix/Pilytix";
import Shiny from "./components/ShinyChecklist/Shiny";
import Secret from "./components/Home/Secret";


function App() {
  return (
    <div className="app_wrapper">
    <div className="App">
  <Header />
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/skills' element={<Skills/>} />
  <Route path='/projects' element={<Projects/>} />
  <Route path='/jerichonursery' element={<Jericho/>} />
  <Route path='/hellosunie' element={<Sunie/>} />
  <Route path='/collaborative4you' element={<Collab/>} />
  <Route path='/pilytix' element={<Pilytix/>} />
  <Route path='/shinychecklist' element={<Shiny/>} />
  <Route path='/secret' element={<Secret/>} />
</Routes>
    </div>
    </div>
  );
}

export default App;

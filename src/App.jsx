
import React from 'react';
import Home from './components/Home';
import ReactDOM from 'react-dom';

import {  BrowserRouter , Routes,Route } from "react-router-dom"
import Header from './components/Header';

import Logic from './components/Logic';
import Front from './components/Front';

function App(){
  return <BrowserRouter>
  <Header home="🏠 Home"/>
   <Routes>
   <Route path='/' element={<Front/>}/>
    <Route path='/Home' element={<Home/>}/>
    {/* <Route path='/chatbot' element={<Chatbot/>}/> */}
    <Route path='/logic' element={<Logic/>}/>
   </Routes>
  </BrowserRouter>
}
export default App;


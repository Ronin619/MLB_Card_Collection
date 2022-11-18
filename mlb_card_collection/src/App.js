import React from 'react';
import { Route, Routes } from "react-router-dom";
import AllCards from './components/AllCards';
import AddCard from './components/AddCard';
import Home from './components/Home';

import './App.css';

export default function App() {
  return <>
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/allCards" element={<AllCards />}/>
      <Route exact path="/addCard" element={<AddCard />}/>
    </Routes>
  </>
}


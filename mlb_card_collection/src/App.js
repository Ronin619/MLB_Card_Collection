import React, { Fragment,  useState, useEffect  } from 'react';
import { Route, Routes } from "react-router-dom";
import AllCards from './components/AllCards';
import Home from './components/Home'
import './App.css';

let apiUrl = "https://mlb-card-collection-api.onrender.com";

export default function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/allCards" element={<AllCards />}/>
    </Routes>
  )
}


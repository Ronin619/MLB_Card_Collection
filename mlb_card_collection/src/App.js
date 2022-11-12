import React, { Fragment,  useState, useEffect  } from 'react';
import { Route, Routes } from "react-router-dom";
import AllCards from './components/AllCards';
import AddCard from './components/AddCard';
import DeleteCard from './components/DeleteCard';
import EditCard from './components/EditCard';
import Home from './components/Home';
import './App.css';

export default function App() {
  return <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/allCards" element={<AllCards />}/>
      <Route path="/addCard" element={<AddCard />}/>
      <Route path="/deleteCard" element={<DeleteCard />}/>
      <Route path="/editCard" element={<EditCard />}/>
    </Routes>
  </>
}


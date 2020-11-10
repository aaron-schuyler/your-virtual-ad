import './App.css';
import React, { useContext, createContext, useState } from 'react'
import Router from './components/application/router.js'

export default function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

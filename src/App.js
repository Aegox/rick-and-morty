import React from "react"
import Nav from "./components/Nav.jsx"
import Cards from "./components/Cards.jsx"
import Card from "./components/Card.jsx"
import styleApp from "./styles/App.module.css"
import {Routes, Route} from "react-router-dom"
import Favorites from "./components/Favorites.jsx"

function App() {
  return (
    <div className= {styleApp}>
      <Nav/>
      <Cards/>
      <Routes>
        <Route path="/favorites" element={<Favorites/>}/> 
      </Routes>
      
    </div>
  );
}

export default App;

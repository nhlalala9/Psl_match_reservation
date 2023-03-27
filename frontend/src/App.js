import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/home";
import Login from "./login/login.js";
import Matches from "./matches/matches"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/matches" element={<Matches/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;

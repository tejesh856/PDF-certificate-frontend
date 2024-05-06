import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Datacontext from "./Datacontext";
import Admin from "./screens/Admin";
function App() {
  return (
    <Datacontext>
      <Router>
        <div className="app bg-slate-200">
          <Routes>
            <Route exact path="/" element={<Admin />} />
          </Routes>
        </div>
      </Router>
    </Datacontext>
  );
}

export default App;

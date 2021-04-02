import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/Main";
import Navbar from "./components/Navbar";
import Portfolio from "./pages/Portfolio"


function App() {
    return (
        <Router>
        <div>
            <Navbar />
            <Route  exact path="/" component= {Main} />
            <Route  exact path="/main" component= {Main} />
            
            <Route  exact path="/portfolio" component={Portfolio} />
          
        </div>
        </Router>
    )
}

export default App;

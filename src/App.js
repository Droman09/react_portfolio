import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Main from "./pages/Main";
import Portfolio from "./pages/Portfolio"
import Navbar from "./components/Navbar";

library.add(fab)

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

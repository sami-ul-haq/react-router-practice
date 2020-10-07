import React from 'react'
import './App.css'
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom';
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'

function App() {
    return (
        <Router>

            <div className="App">

                <ul className="header">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>

                <div className="content">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                    </Switch>
                </div>
            </div>

        </Router>

    )
}

export default App;
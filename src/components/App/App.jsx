import logo from '../../logo.svg';
import './App.css';
import HelloWorld from "../HelloWorld/HelloWorld";
import React from "react";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <HelloWorld/>
            </header>
        </div>
    );
}

export default App;

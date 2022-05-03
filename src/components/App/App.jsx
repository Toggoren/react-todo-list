import { default as logo } from '../../logo.svg';
import './App.css';
import HelloWorld from "../HelloWorld/HelloWorld";
import Counter from "../Counter/Counter"
import React from "react";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <HelloWorld/>
                <Counter initial={Math.floor(Math.random() * 100) + 1}/>
            </header>
        </div>
    );
}

export default App;

import React from "react";
import './HelloWorld.css';

class HelloWorld extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            world: 'World'
        }
    }

    render() {
        return <h1 className="HelloWorld">Hello, {this.state.world}!</h1>;
    }
}

export default HelloWorld;
import React from "react";
import PropTypes from "prop-types";

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: props.initial,
        }
    }

    handleClickIncrement = () => {
        this.setState(prevState => ({counter: prevState.counter + 1}))
    }

    handleClickDecrement = () => {
        this.setState(prevState => ({counter: prevState.counter - 1}))
    }

    render() {
        const {counter} = this.state;

        return (
            <div>
                <div>{counter}</div>
                <button onClick={this.handleClickIncrement}>+1</button>
                <button onClick={this.handleClickDecrement}>-1</button>
            </div>
        )
    }
}

Counter.propTypes = {
    initial: PropTypes.number,
}

Counter.defaultProps = {
    initial: 0,
}

export default Counter;
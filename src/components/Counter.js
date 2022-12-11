import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    increment() {
        //console.log('CLICK');
        this.setState({
            count: ++this.state.count
        });  
    }

    decrement() {
        if(this.state.count > 0) {
            this.setState({
                count: --this.state.count
            })
        }
    }

    render() {
        const h2 = React.createElement('h2', {}, this.state.count);
        const buttonPlus = React.createElement('button', {title: 'Plus 1', onClick: () => {this.increment()}}, 'Increment');
        const buttonMinus = React.createElement('button', {title: 'Minus 1', onClick: () => {this.decrement()}}, 'Decrement');
        return React.createElement(React.Fragment, {}, h2, buttonMinus, buttonPlus);
    }
}

export default Counter;
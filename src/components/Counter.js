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
        // const h2 = React.createElement('h2', {title: 'Hello'}, this.state.count);
        // const buttonPlus = React.createElement('button', {title: 'Plus 1', onClick: () => {this.increment()}}, 'Increment');
        // const buttonMinus = React.createElement('button', {title: 'Minus 1', onClick: () => {this.decrement()}}, 'Decrement');
        // return React.createElement(React.Fragment, {}, h2, buttonMinus, buttonPlus);

        
        // Так тоже работает)))
        // const h2 = <h2 title = "Hello">{this.state.count}</h2>;
        // const buttonMinus = <button title = "Minus 1" onClick = {() => {this.decrement()}}>Decrement</button>;
        // const buttonPlus = <button title = "Plus 1" onClick = {() => {this.increment()}}>Increment</button>;
        // return React.createElement(React.Fragment, {}, h2, buttonMinus, buttonPlus);


        /////// Синтаксис JSX ///////
        return (<React.Fragment> 
            <h2 title = "Hello">{this.state.count}</h2>
            <button title = "Minus 1" onClick = {() => {this.decrement()}}>Decrement</button>
            <button title = "Plus 1" onClick = {() => {this.increment()}}>Increment</button>
        </React.Fragment>)
        // Вместо <React.Fragment></React.Fragment> можно оставить пустые угловые скобки, это тоже будет реакт фрагмент, и будет работать
    }
}

export default Counter;
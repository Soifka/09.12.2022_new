import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client"; // для версии с JSX кодом
import Counter from "./components/Counter";
import * as Math from "./components/Math"; 
/*
    * as в строке 5 значит, что экспортируются все функции, которые есть в Math.js, 
при этом все эти функции группируются в некий Math
*/

// const component = React.createElement(Counter);
// const root = document.querySelector('#root');
// ReactDOM.render(component, root);


///// Для версии с JSX кодом ///////
const root = createRoot(document.querySelector('#root'));
root.render(<Counter />);
////////////////////////

console.log(Math.sum(2, 5));
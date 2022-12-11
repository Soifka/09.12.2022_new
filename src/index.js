import { fromByteArray } from "ipaddr.js";
import React from "react";
import ReactDOM from "react-dom";
import Counter from "./components/Counter";
import * as Math from "./components/Math"; 
/*
    * as  значит, что экспортируется все, что есть в Math.js, при этом все импортированные функции
группируются в некий Math
*/

const component = React.createElement(Counter);
const root = document.querySelector('#root');
ReactDOM.render(component, root);

console.log(Math.sum(2, 5));
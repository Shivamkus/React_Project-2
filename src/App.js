import React from "react";
import add, { div, multy, sub } from "./List1";

function App(){
    return <ul>
    <li>add ot two numbers: = {add (12,8)}</li>
    <li>sub of two number: = {sub(20,10)}</li>
    <li>multy of two number = {multy(10,5)} </li>
    <li>div of two number = {div(12,5)} </li>
    
    </ul>
}export default App;
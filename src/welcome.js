import logo from './logo.svg';
import './App.css';

import React from 'react';


function Welcome(props){
const hit=props.hit
    
    return (
        <>
        <h2>Welcome {props.name}</h2>
        <h2>Age is {props.age}</h2>

        <button onClick={()=>alert("CLick me")}>Click Me</button>
        <button onClick={hit}>Hit Me</button>
        <button isGoal={false}>Check Goal</button>
        </>

    );
}

export default  Welcome



import React from 'react'
import { useState } from 'react'

export default function UseStateTest() {
    const [color,setColor]=useState(" Violet ")
    // const [name,setname]=useState("Audi")
    // const [modal,setModal]=useState("2014")
    // const [type,setType]=useState("sedan")
    const [car,setCar]=useState({
        cname:"Audi",
        brand:"2014",
        type:"Sedan",
        cacolor:"Blue"
    })
const updateColor=()=>{
    setCar(happy=>{
        return{...happy,cacolor:"Green"} 
    })    
}

const [switches,setSwitch]=useState("ON")
const Case=()=>{
    if(switches=="ON"){
        return setSwitch("OFf")
    }
    return setSwitch("ON")
}

const [count,setCount]=useState(0)

  return (
    <div>
    <h1>USe State</h1>
      <h3>The current State of color is {color}!</h3>
      <button type="button"  onClick={()=>setColor("Green")}>Green</button>
      <button type="button"  onClick={()=>setColor("Red")}>Red</button>
      <button type="button"  onClick={()=>setColor("BLack")}>Black</button>
      <button type="button"  onClick={()=>setColor("White")}>White</button>

      <hr></hr>
        <h3>Car Example</h3>
        <p>I have {car.cname} {car.brand}, and its type is {car.type}</p>

        <h3>Update Car Color Example</h3>
        <p>I have {car.cname} {car.brand} of {car.cacolor}, and its type is {car.type}</p>
        <button onClick={updateColor}>Click here to Green COlor</button>

        <h3>Count</h3>
        <p>Count is {count}</p>
        <button onClick={()=>setCount(count+1)}>Count</button>
        <h3>On / Off button</h3>
        <button onClick={Case}>{switches}</button>
      </div>
  )
}

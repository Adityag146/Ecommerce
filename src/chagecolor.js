import React, { useState } from 'react'

export default function Chagecolor() {
    const [valcolor,setvalcolor]=useState("PInky")
    const cars=["BMX","SUzuki","AUdi","Mercides","Jaguar"]
    return (
    <div>
      <p>I have {valcolor} Lipstick.</p>
      <button className='btn btn-primary' onClick={()=>setvalcolor("Green")}>Change Color</button>


      <ul>
        {cars.map((items)=><li>{items}</li>)}
      </ul>
    </div>
  )
}

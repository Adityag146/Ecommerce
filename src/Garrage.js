import React from 'react'

export default function Garrage(props) {
    const cars=props.cars
    const info=props.cardetail
  return (
    <div className='w-100 text-center'>
    <p >No. of Cars is   </p>
    <ul>
            {cars.map((items)=><li>{items}</li>)}
        
    </ul>
    <hr></hr>
   <h2>{info.name} modal is {info.modal}/</h2>
   

    </div>
  )
}

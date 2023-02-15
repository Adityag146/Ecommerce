import React from 'react'
import Axios from 'axios'
export default function AxiosApi() {

  let apiRes ;
  const data=()=>{
    Axios.get('https://jsonplaceholder.typicode.com/posts').then(
        (response)=>{
                 apiRes= console.log(response.data.filter((items)=>  items.id>=20 ));
                 
    })
    .catch((err) => {
      console.log(err);
    });
  }
    return (
    <div className='container'>
      <button onClick={data} className="btn btn-primary">Call API</button>
      <table>
        <tr>
          <td>USER ID</td>
          <td>ID</td>
          <td>TITLE ID</td>
          <td>BODY</td>
        </tr> 
       <tbody>{ 
              
         
          <tr>
            <td>{ }</td>
          </tr>
        } 
       
        </tbody>
      </table>
    </div>
  )
}

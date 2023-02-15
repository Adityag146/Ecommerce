import React, { Component } from 'react'

export default class conditional extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true
      }
    }
    
    render() {

        return this.state.isLoggedIn &&<p>Welcome Aditya</p>
        // return(
        //     this.state.isLoggedIn?<p>Welcome Aditya</p>:<p>Welcome Guest</p>
        // )
        // let message
        // if(this.state.isLoggedIn){
        //     message=<p>Welcome Aditya</p>
        // }else{
        //     message=<p>Welcome Guest</p>
        // }
        // return <div> {message}</div>

        // if(this.state.isLoggedIn){
        //     return <p>Welcome Aditya</p>
            
        // }else{
        //     return <p>Welcome Gusadaest</p>
            
        // }
    
  }
}

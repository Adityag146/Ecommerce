import React, { useState } from "react";

function SearchProduct(props){
    const [searchUserInput,setUserInput]=useState("")
  
    let searchInput=(e)=>{
        setUserInput(e.target.value)
        // console.log(userInput)
    }
        
    return(
        <>
            <div className="head-search">
                <input placeholder="Search" onBlur={(e)=>searchInput(e)}/>
                <i class='fas fa-search search-home-btn' onClick={()=>props.searchprod(searchUserInput)}></i>
            </div>
        </>
    )
}

export default SearchProduct;
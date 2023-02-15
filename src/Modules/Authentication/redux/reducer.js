


const  state = {
    products:[]
}



export const productReducer = (state , action) => {
  switch (action.type) {
  case "products":
    console.log(action, action.type,action.payload)
    return {products:action.payload }

  default:
    return state
  }
}


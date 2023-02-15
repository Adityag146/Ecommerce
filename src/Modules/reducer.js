const viewCartState = {
  cartproducts: [""],
};

export const CartReducer = (state = viewCartState, action) => {
  console.log(action);
  switch (action.type) {
    case "ADTC":
      return { cartproducts: state.cartproducts.push(action.payload) };
    case "RQY":
      return {
        cartproducts: state.cartproducts.map((e) => {
          if (e.id === action.payload) e.quantity = e.quantity - 1;
        }),
      };

    case "AQY":
      return {
        cartproducts: state.cartproducts.map((e) => {
          if (e.id === action.payload) e.quantity = e.quantity + 1;
        }),
      };

    case "RTC":
      return {
        cartproducts: state.cartproducts.filter((e) => e.id !== action.payload),
      };

    default:
      return state;
  }
};

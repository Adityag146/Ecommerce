// import { statee,dispatch } from "react-redux"

// import { useDispatch } from "react-redux"

const ACTIONCONSTANT = {
  ADTC: "ADTC",
  RTC: "RTC",
  AQY: "AQY",
  RQY: "RQY",
};

const addQuantity = (payload) => {
  return {
    type: ACTIONCONSTANT.AQY,
    payload,
  };
};

const removeQuantity = (payload) => {
  return {
    type: ACTIONCONSTANT.RQY,
    payload,
  };
};

const addProducts = (payload) => {
  return {
    type: ACTIONCONSTANT.ADTC,
    payload,
  };
};
const removeProducts = (payload) => {
  return {
    type: ACTIONCONSTANT.RTC,
    payload,
  };
};

const addProductQuantity = () => {
  addProducts();
};
const removeProductQunatity = () => {
  removeQuantity();
};

const addProductToCart = (info) => {
  addQuantity(info);
};

const removeProductsToCart = () => {
  removeProducts();
};

export const CartFeature = {
  addProductToCart,
  removeProductsToCart,
  addProductQuantity,
  removeProductQunatity,
};

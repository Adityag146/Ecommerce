
import React, { useEffect, useState } from "react";
import Card from "../card/card";
import { useSelector } from "react-redux";

export default function ViewCart(props) {
  const [total, setTotal] = useState(0);
  // const viewData   = useSelector(cartproducts)
  let viewData = props.selectedProducts;
  let cartTotal = 0;
  useEffect(() => {
    // console.log("I am Called",viewData)
    viewData &&
      viewData.forEach((e) => {
        cartTotal += e.price * e.quantity;
        setTotal(cartTotal);
        console.log(viewData)
      });
  }, []);
  return (
    <>
    <h2>Total:<b>{total && total}</b></h2> 
      {viewData.map((items) => {
        return (
          <>
          <div className="view-cart-items">
            <ul className="card-ul-li">
            <li>
              <Card info={items} isproductPage={false} totalval={setTotal} />
            </li>
            </ul>
          </div>
            
          </>
        );
      })}
    </>
  );
}

import React, { useEffect, useState } from "react";
import Card from "./card";

export default function ViewCart(props) {
  const [total, setTotal] = useState(0);
  let viewData = props.selectedProducts;
  let cartTotal = 0;
  useEffect(() => {
    viewData &&
      viewData.forEach((e) => {
        cartTotal += e.price;
        setTotal(cartTotal);
      });
  }, []);
  console.log(total);
  return (
    <>
    total:<b>{total}</b> 
      {viewData.map((items) => {
        return (
          <>
            <ul className="card-ul-li">
              <li>
                <Card info={items} isproductPage={false} />
              </li>
            </ul>
            
          </>
        );
      })}
    </>
  );
}

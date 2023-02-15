import React, { useState, useEffect } from "react";
import Nav from "./Appstructure/Header/Nav";
import Login from "./Authentication/Login";
import Signup from "./Authentication/Signup";
import Card from "./Appstructure/card/card";
import "../style.css";
import CartContainer from "./Appstructure/Cart/cartContainer";
import AuthContainer from "./Authentication/AuthenticationContainer";
import Footer from "./Appstructure/Footer/Footer";

export default function Body(props) {
  const [settextLogin, showTextLogin] = useState("Login");
  const [cardData, setcardData] = useState([]);
  const [cartpage, setcartPage] = useState(false);
  const [ToCart, setAddtoCart] = useState([]);

  const fetchApi = async () => {
    let apis = await fetch("https://fakestoreapi.com/products");
    setcardData(await apis.json());
  };

  const searchprod = (searchUserInput) => {
    console.log(cardData);
    console.log(searchUserInput);
    let filterData = cardData.filter(
      (filterItem) => !filterItem.title.search(searchUserInput)
    );

    setcardData(filterData);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const viewCartHandle = () => {
    setcartPage(!cartpage);
  };

  const adddToCart = (info) => {
    // console.log(info)
    let temp = ToCart;

    temp.push(info);
    // save to store as well
    setAddtoCart(temp);
  };

  const inputStyle = {
    border: "1px solid #cecece",
    background: "#fff",
    height: "40px",
    paddingLeft: "15px",
    borderRadius: "8px",
  };

  // <CardList cartHandle={addToCart} cardData={cardData} />
  return (
    <div className="container-fluid p-0" sx={{ padding: "0px" }}>
      <Nav
        loginText={settextLogin}
        viewCartHandle={viewCartHandle}
        searchprod={searchprod}
      />
      <div className="container">
        <ul className=" card-ul-li">
          {!cartpage &&
            cardData &&
            cardData.map((item) => {
              return (
                <li>
                  <Card
                    info={item}
                    adddToCart={adddToCart}
                    setAddtoCartState={setAddtoCart}
                    isproductPage={true}
                  />
                </li>
              );
            })}
        </ul>
      </div>

      {cartpage && <CartContainer selectedProducts={ToCart} />}

      {<AuthContainer inputStyle={inputStyle} />}

      <Footer />
    </div>
  );
}

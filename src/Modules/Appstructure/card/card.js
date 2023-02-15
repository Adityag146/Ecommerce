import React, { useState } from "react";
import { connect } from "react-redux";
import { CartFeature } from "../../action";
import { useDispatch } from "react-redux";
const Card = (props) => {
  const dispatch = useDispatch();
  console.log(props);
  let totalQuant = [1, 2, 3, 4, 5, 6, 7];
  const { info, isproductPage, totalval } = props;
  const [itemQunt, setItemQuant] = React.useState(0);
  const [addquant, setQuant] = useState(parseInt(info.quantity));
  // const [remQuant,setRemQuant]=useState(parseInt(info.quantity))

  const setQuantity = (e) => {
    info.quantity = e.target.value;
  };
  function quantityPlus() {
    if (addquant >= totalQuant.length) {
      return alert("Your reach to Max Quantity Level");
    }

    totalval((addquant + 1) * info.price);
    setQuant(addquant + 1);
  }
  function quantityMinus() {
    if (addquant - 1 == 0) return;
    totalval((addquant - 1) * info.price);

    setQuant(addquant - 1);
  }

  return (
    <div className="card-parent ">
      <img src={info.image} />
      <div className="quant-div">
        <p>{info.category}</p>
        {<p>quantity:{totalQuant.length}</p>}{" "}
      </div>
      <div
        className="card-head"
        style={{ display: "flex", alignItems: "center" }}
      >
        <p className="card-item-title">{info.title}</p>
        <p className="card-item-price">
          {isproductPage ? info.price : info.price * addquant}
        </p>
      </div>
      {isproductPage ? (
        <>
          <button
            className="btn btn-common"
            onClick={() => dispatch(props.addProductQuantity(info))}
          >
            Add to Cart{" "}
          </button>
          <select
            className="btn btn-common"
            onChange={(e) => {
              setQuantity(e);
            }}
          >
            {totalQuant.map((e, a) => (
              <option>{e}</option>
            ))}
          </select>
        </>
      ) : (
        <div className="buy-quant-div">
          <button className="btn btn-common">Buy Now</button>
          addquant &&
          <div className="quant-add-remove">
            <button onClick={() => quantityMinus()}>-</button>
            <p>{addquant}</p>
            <button onClick={() => quantityPlus()}>+</button>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { cartproducts: state.products };
};

const mapDispatchtoProps = () => ({ ...CartFeature });

export default connect(mapStateToProps, mapDispatchtoProps)(Card);

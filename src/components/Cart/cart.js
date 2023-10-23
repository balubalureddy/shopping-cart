import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteCart } from "../../actions";
import { IncreaseQuantity, DecreaseQuantity } from "../../actions";



function App() {
    const cart = useSelector((state) => state._todoProduct.Carts);
    let noofitems = useSelector((state) => state._todoProduct.numberCart);
    const dispatch = useDispatch();


    return (
        <div className="App">
            <h1 style={{ color: "green" }}>using Axios Library to Fetch Data</h1>
            <center className="flex-container">
                {cart.map((dataObj, index) => {
                    return (
                        <div
                            key={index}
                            style={{
                                width: "240px",
                                backgroundColor: "white",
                                padding: 2,
                                borderRadius: 10,
                                marginBlock: 10,
                            }}
                        >

                            <div>
                                <img className="thumbnail" src={dataObj.thumbnail} />
                            </div>
                            <div>
                                {dataObj.title} ({dataObj.brand})
                            </div>
                            <div>{dataObj.description}</div>
                            <div className="cost">
                                <span className="price">₹{dataObj.price} </span>
                            </div>
                            <div className="rating-stock">
                                <span className="rating">
                                    {dataObj.rating}
                                    <img
                                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg=="
                                        className="star"
                                    />
                                </span>
                                <span>stock {dataObj.stock}</span>
                                <div>
                                    <span>
                                        <button  onClick={() => dispatch(DecreaseQuantity(index--))}>-</button>
                                        {dataObj.quantity}
                                        <button  onClick={() => dispatch(IncreaseQuantity(index++))}>+</button>
                                    </span>
                                </div>
                            </div>
                            <button onClick={() => dispatch(DeleteCart(index))}>Delete</button>

                        </div>
                    );
                })}
            </center>
        </div>
    );
}

export default App;

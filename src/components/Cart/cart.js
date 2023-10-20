import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";


function App() {
    const cart = useSelector((state) => state._todoProduct.Carts);

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
                                <div>quantity {dataObj.quantity}</div>
                            </div>

                        </div>
                    );
                })}
            </center>
        </div>
    );
}

export default App;

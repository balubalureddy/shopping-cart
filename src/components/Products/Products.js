import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./products.css";
import { useDispatch, useSelector } from "react-redux";
import { AddCart, GetAllProduct, GetAboutProduct, actFetchProductsRequest } from "../../actions";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';


function App() {
  const productsData = useSelector((state) => state._todoProduct._products);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(actFetchProductsRequest());
  }, []);

  const handleAddtoCart = (data) => {
    dispatch(AddCart(data));
  }

  const handleviewproduct = (data) => {
    dispatch(GetAboutProduct(data));
    navigate(`/Products/${data.id}`);
  }

  return (
    <div className="App">
      <h1 style={{ color: "green" }}>using Axios Library to Fetch Data</h1>
      <center className="flex-container">
        {productsData.map((dataObj, index) => {
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
              <div className="products">
                <div>
                  {" "}
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
                  <Button variant="contained" onClick={() => handleAddtoCart(dataObj)}>Add To Cart</Button>
                  {/* <button onClick={() => navigate(`/Products/${dataObj.id}`)}>View</button> */}
                  <Button variant="outlined"className="btnview" onClick={() => handleviewproduct(dataObj)}>View</Button>
                  </div>

                </div>
              </div>
            </div>
          );
        })}
      </center>
    </div>
  );
}

export default App;

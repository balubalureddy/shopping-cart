import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom/client";
import "./products.css"
import { useDispatch, useSelector } from 'react-redux';
import { GetAllProduct, actFetchProductsRequest } from '../../actions';

function App() {
  const url = "https://dummyjson.com/products";
  const productsData = useSelector((state) => state._todoProduct._products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actFetchProductsRequest());
  }, []);

  return (
    <div className="App">
      <h1 style={{ color: "green" }}>using Axios Library to Fetch Data</h1>
      <center className="flex-container">
        {productsData.map((dataObj, index) => {
          return (
            <div key={index}
              style={{
                width: "240px",
                backgroundColor: "white",
                padding: 2,
                borderRadius: 10,
                marginBlock: 10,
              }}
            >
              <div className='products'>

                <div> <img className="image" src={dataObj.images[0]} /></div>
                <div>{dataObj.title} ({dataObj.brand})</div>
                <div>{dataObj.description}</div>
                <div className='cost'>
                  <span className='price'>₹{dataObj.price} </span></div>
                  <div className="rating-stock">
                  <span className="rating" >{dataObj.rating} 
                  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==" className='star' /></span>
                  <span>stock {dataObj.stock}</span></div>
              </div>

            </div>
           
  );
})}
      </center >
    </div >
  );

}


export default App;
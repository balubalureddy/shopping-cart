import axios from 'axios';
import React, { useEffect } from 'react';

const Products = (props) => {
    useEffect(()=>{
        axios({
            method: 'get',
            url: 'https://dummyjson.com/products',
            responseType: 'stream'
          })
            .then(function (response) {
              console.log(JSON.parse(response.data));
            });
    },[]);

    return (
        <div>
            Products
        </div>
    );
}

export default Products;
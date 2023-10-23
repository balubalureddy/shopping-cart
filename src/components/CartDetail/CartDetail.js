import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import "./cartdetails.css";


function App() {
    const aboutProductData = useSelector((state) => state._todoProduct.product);
    console.log(aboutProductData);




    return (
        <div className='about col-12-12' >
            <img className="abtthumbnail" src={aboutProductData.thumbnail} />
            <ul className="col col-7-12 abtdata" >
                <li className="heading list">  {aboutProductData.title} ({aboutProductData.brand})</li>
                <li className='list'> category:{aboutProductData.category}</li>
                <li className='list' >{aboutProductData.description}</li>
                <li className='list'>stock {aboutProductData.stock}</li>
                <div className="price">
                    <li className='list'>₹{aboutProductData.price}
                        (Discount : {aboutProductData.discountPercentage} %off) </li>
                <li className="ratingcart">
                    <li className='list'>{aboutProductData.rating}
                        <img
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg=="
                            className="star"
                        />
                    </li>
                </li>
                </div>

               

            </ul>
        </div>
    );
}

export default App;
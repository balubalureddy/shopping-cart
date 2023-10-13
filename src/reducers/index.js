import { combineReducers } from "redux";

const initProduct = {
    numberCart : 0,
    Cart : [],
    _products : []
}

const productReducer = (state = initProduct, action ) => {
    switch(action.type){
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                _products: action.payload
            }
        default:
            return state;
    }
}

const ShopApp = combineReducers({
    _productReducer : productReducer
})

export default ShopApp;
import { combineReducers } from 'redux';
import {GET_ALL_PRODUCT,GET_NUMBER_CART,ADD_CART, DECREASE_QUANTITY, INCREASE_QUANTITY, DELETE_CART} from  '../actions';

const initProduct = {
    numberCart:0,
    Carts:[],
    _products:[]
}

function todoProduct(state = initProduct,action){
    switch(action.type){
        case GET_ALL_PRODUCT: 
            return{
                ...state,
                _products:action.payload
            }
        case GET_NUMBER_CART:
                return{
                    ...state
                }
        case ADD_CART:
            if(state.numberCart==0){
                let cart = {
                    id:action.payload.id,
                    quantity:1,
                    title:action.payload.title,
                    images:action.payload.images,
                    price:action.payload.price,
                    rating:action.payload.rating,
                    stock:action.payload.stock,
                    thumbnail:action.payload.thumbnail,
                    discountPercentage:action.payload.discountPercentage,
                    description:action.payload.description,
                    category:action.payload.category,
                    brand:action.payload.brand
                } 
                state.Carts.push(cart); 
            }
            else{
                let check = false;
                state.Carts.map((item,key)=>{
                    if(item.id==action.payload.id){
                        state.Carts[key].quantity++;
                        check=true;
                    }
                });
                if(!check){
                    let _cart = {
                        id:action.payload.id,
                        quantity:1,
                        title:action.payload.title,
                        images:action.payload.images,
                        price:action.payload.price,
                        rating:action.payload.rating,
                        stock:action.payload.stock,
                        thumbnail:action.payload.thumbnail,
                        discountPercentage:action.payload.discountPercentage,
                        description:action.payload.description,
                        category:action.payload.category,
                        brand:action.payload.brand
                    }
                    state.Carts.push(_cart);
                }
            }
            return{
                ...state,
                numberCart:state.numberCart+1
            }
            case INCREASE_QUANTITY:
                state.numberCart++
                state.Carts[action.payload].quantity++;
              
               return{
                   ...state
               }
            case DECREASE_QUANTITY:
                let quantity = state.Carts[action.payload].quantity;
                if(quantity>1){
                    state.numberCart--;
                    state.Carts[action.payload].quantity--;
                }
              
                return{
                    ...state
                }
            case DELETE_CART:
                let quantity_ = state.Carts[action.payload].quantity;
                return{
                    ...state,
                    numberCart:state.numberCart - quantity_,
                    Carts:state.Carts.filter(item=>{
                        return item.id!=state.Carts[action.payload].id
                    })
                   
                }
        default:
            return state;
    }
}
const ShopApp = combineReducers({
    _todoProduct:todoProduct
});
export default ShopApp;
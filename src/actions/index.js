
export const FetchProductsRequest = () => {

}
export function GetAllProducts(products){
    return {
        type: 'GET_ALL_PRODUCTS',
        payload : products
    }
}
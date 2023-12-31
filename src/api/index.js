import axios from 'axios';
//mock API
let API_URL = 'https://dummyjson.com/products';
   export default function callApi(endpoint, method = 'GET', body) {
       return axios({
           method,
           url: `${API_URL}`,
           data: body
       }).catch(err => {
           console.log(err);
       });
}
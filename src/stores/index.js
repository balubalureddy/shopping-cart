import { applyMiddleware, legacy_createStore as createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import ShopApp from '../reducers';
import { useDispatch, useSelector } from 'react-redux';

const store = createStore(ShopApp,applyMiddleware(thunkMiddleware));

export default store;
import { applyMiddleware, legacy_createStore as createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import ShopApp from '../reducers';

const store = createStore(ShopApp,applyMiddleware(thunkMiddleware));

export default store;
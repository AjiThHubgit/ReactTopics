import { createStore } from 'redux';
import { storeReducer } from "../redux/product.reducer";
const store = createStore(storeReducer);
export default store;
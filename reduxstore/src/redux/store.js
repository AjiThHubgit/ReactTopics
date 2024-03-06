import { createStore } from "redux";
import { storeReducer } from "./product.reducer";
const store = createStore(storeReducer);
export default store;

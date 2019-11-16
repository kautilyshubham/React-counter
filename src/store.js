import { createStore, compose } from "redux";
import Reducer from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


 const store = createStore(Reducer, composeEnhancers());



 export default store;
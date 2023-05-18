import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducer/rootReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import cartCounter from "./middlewares/cartCounter";
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(cartCounter, thunk)))
export default store;
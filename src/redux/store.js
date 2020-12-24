//////////////////////////////////////
// The Store is Created and Bound to the Reducer
// Dispatch Function is Returned and exported
//////////////////////////////////////

import { createStore } from "redux";
import rootReducer from "./reducer";

export default createStore(rootReducer);

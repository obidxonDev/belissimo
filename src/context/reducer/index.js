import { combineReducers } from "redux";
import address from "./address";

const rootReducers = combineReducers({
   water: () => "water",
   address
})

export default rootReducers
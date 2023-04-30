import { combineReducers } from "redux";
import address from "./address";
import cart from './cart'

const rootReducers = combineReducers({
   water: () => "water",
   address,
   cart
})

export default rootReducers
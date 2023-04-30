
const cart = (state = [], action) => {
   const index  = state?.findIndex(i => i?.id === action?.payload.id)
   switch(action.type){
      case "ADD_TO_CART":
         if(index < 0){
            return state = [...state, {...action.payload, quantity: 1}]
         } else{
            return state?.map((e, id) => id === index ? {...e, quantity: e.quantity + 1} : e)
         }
      case "DEC_FROM_CART": 
         return state?.map((e, id) => id === index ? {...e, quantity: e.quantity > 1 ? e.quantity - 1 : e.quantity} : e)
      case "REMOVE_FROM_CART":
         return state = state.filter(i => i.id !== action.payload.id)
      case "REMOVE_ALL":
         return state = []
      default:
         return state
   }
}

export default cart


//          const existingCartItemIndex2 = index
//          const existingCartItem2 = state[existingCartItemIndex2];
//          if (existingCartItem2.quantity === 1) {
//             return {...state, state: state.filter((item) => item.id !== action.payload.id), };
//          } else {
//             return state?.map((e, id) => id === index ? { ...e, quantity: e.quantity > 1 ? e.quantity - 1 : e.quantity } : e)
//          }
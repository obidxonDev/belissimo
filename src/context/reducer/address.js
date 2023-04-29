const address = (state = [], action) => {
   switch(action.type){
      case "ADD_ADDRESS" : 
         return state = [...state, action.payload]
      case "REMOVE_ADDRESS": 
         return state.filter(i => i !== action.payload)
      default: 
         return state
   }
}

export default address
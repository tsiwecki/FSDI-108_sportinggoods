
/**
 *  Reducer
 *  An arrow function that receives the state and the action
 *  Must return a state or a new state
 *
 */

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":      
      var copy = [...state];
               
    
    /**
     *  if the product (action.payload) exist inside the copy (compare by id)
     *    then just update the quantity of the object that exist in copy
     *  otherwise
     *     push the product to copy
     */

          
      
    case "REMOVE_FROM_CART":
      // do something
      return state;

    default:
      return state;
  }
};

export default cartReducer;

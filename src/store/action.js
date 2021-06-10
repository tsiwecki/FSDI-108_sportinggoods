/**
 * Action:
 *  An action is a arrow function that returns an object
 * the object should contain the type (of action), may contain payload (data)
 */

export const addToCart = (product) => {
    return {
        type: "Add_TO_CART",
        payload: product
    };
};





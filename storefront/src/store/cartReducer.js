const cartInitState = {
    count: 0,
    cartProducts: [],
  };
  
  export const cartReducer = (state = cartInitState, action) => {
    const { type, payload } = action;
    switch (type) {
      case "AddToCart":
        return {
          count: state.count + 1,
          cartProducts: [...state.cartProducts, payload],
        };
      case "removeFromCart":
        const toRemove = state.cartProducts.filter(
          (product) => product.name !== payload.name
        );
        return {
          count: state.count - 1,
          cartProducts: toRemove,
        };
      default:
        return state;
    }
  };
  
  export const add = (product) => {
    return {
      type: "AddToCart",
      payload: product,
    };
  };
  
  export const remove = (product) => {
    return {
      type: "removeFromCart",
      payload: product,
    };
  };
  
  ///////////////
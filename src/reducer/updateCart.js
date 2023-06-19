const initialState = {
  cart: [],
};

const updateCart = (state = initialState, action) => {
  switch (action.type) {
    case "ADDTOCART":
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        // Update the quantity of an existing item
        const updatedCart = state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

        return { ...state, cart: updatedCart };
      } else {
        // Add a new item to the cart
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }

    case "REMOVEONE":
      const updatedCart = state.cart.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

      // Filter out items with a quantity of zero from the updated cart
      const filteredCart = updatedCart.filter((item) => item.quantity > 0);

      return { ...state, cart: filteredCart };

    case "REMOVE": {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default updateCart;

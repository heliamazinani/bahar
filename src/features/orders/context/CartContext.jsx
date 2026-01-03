import { createContext, useContext, useEffect, useReducer } from "react";

const CartContext = createContext(null);

const initialState = {
  items: JSON.parse(localStorage.getItem("cartItems")) || [],
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const exist = state.items.find((i) => i.id === action.payload.id);

      let items;
      if (exist) {
        items = state.items.map((i) =>
          i.id === action.payload.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        items = [...state.items, { ...action.payload, quantity: 1 }];
      }

      return { items };
    }

    case "REMOVE_ITEM":
      return {
        items: state.items.filter((i) => i.id !== action.payload),
      };

    case "CHANGE_QTY":
      return {
        items: state.items.map((i) =>
          i.id === action.payload.id
            ? { ...i, quantity: action.payload.qty }
            : i
        ),
      };

    case "CLEAR_CART":
      return { items: [] };

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Persist cart
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(state.items));
  }, [state.items]);

  const value = {
    items: state.items,
    addItem: (product) => dispatch({ type: "ADD_ITEM", payload: product }),
    removeItem: (id) => dispatch({ type: "REMOVE_ITEM", payload: id }),
    changeQty: (id, qty) =>
      dispatch({ type: "CHANGE_QTY", payload: { id, qty } }),
    clearCart: () => dispatch({ type: "CLEAR_CART" }),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);

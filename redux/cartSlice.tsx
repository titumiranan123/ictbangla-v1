// store/cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import toast from "react-hot-toast";

interface CartItem {
  id: string;
  name: string;
  slug: string;
  price: number;
  isDiscount: boolean;
  discount: number;
  percentage: number;
  thumbnail: string;
}

interface CartState {
  carts: CartItem[];
  users: {
    name: string;
    email: string;
    phone: string;
  };
}

const initialState: CartState = {
  carts:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("carts") || "[]")
      : [],
  users: {
    name: "",
    email: "",
    phone: "",
  },
};

const cartSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const existingItem = state.carts.find(
        (item) => item.id === action.payload.id
      );
      if (!existingItem) {
        state.carts.push(action.payload);
        toast.success("Course added to cart! 🎉");
      } else {
        toast.error("Course already in cart!");
      }
      localStorage.setItem("carts", JSON.stringify(state.carts));
    },
    removeFromCart(state, action: PayloadAction<string>) {
      state.carts = state.carts.filter((item) => item.id !== action.payload);
      localStorage.setItem("carts", JSON.stringify(state.carts));
    },
    setCheckOutCart(state, action: PayloadAction<CartItem[]>) {
      state.carts = action.payload;
    },
    removeItem(state, action: PayloadAction<string>) {
      state.carts = state.carts.filter((item) => item.id !== action.payload);
    },
    setGuestInfo(
      state,
      action: PayloadAction<{ name: string; email: string; phone: string }>
    ) {
      state.users.name = action.payload.name;
      state.users.email = action.payload.email;
      state.users.phone = action.payload.phone;
    },
    clearCart(state) {
      state.carts = [];
      localStorage.removeItem("carts");
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  setCheckOutCart,
  removeItem,
  setGuestInfo,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

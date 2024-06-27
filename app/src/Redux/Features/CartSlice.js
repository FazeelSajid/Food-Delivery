import {createSlice, nanoid} from '@reduxjs/toolkit';
import PopUp from '../../Components/PopUp';

const initialState = {
  cartItems: [],
  subtotal: 0,
  totalQuantity: 0,
  totalPrice: 0,
  serviceCharges: 5,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const {item} = action.payload;
      const cart = state.cartItems;
      state.totalQuantity++;
      state.totalPrice += item.price;
      const existingItem = cart.find(food => food.title === item.title);
      if (!existingItem) {
        cart.push({...item, totalPrice: item.price, quantity: 1});
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += item.price;
      }
      state.subtotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    },
    removeItem: (state, action) => {
      const cart = state.cartItems;
      const {id} = action.payload;
      state.totalQuantity--;

      const existingItem = cart.find(item => item.id === id);
      //  console.log(existingItem);
      if (existingItem.quantity == 1) {
        cart = cart.filter(item => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
      state.subtotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
      state.totalPrice = state.subtotal + state.serviceCharges;
    },

    updateQuantity: (state, action) => {
      const cart = state.cartItems;

      const {id, quantity} = action.payload;

      const existingItem = cart.find(item => item.id === id);
      if (existingItem) {
        state.totalPrice =
          state.totalPrice +
          (quantity - existingItem.quantity) * existingItem.price;
        state.totalQuantity += quantity - existingItem.quantity;
        existingItem.quantity = quantity;
        existingItem.totalPrice = quantity * existingItem.price;
      }
      state.subtotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
      state.totalPrice = state.subtotal + state.serviceCharges;
    },
  },
});

export const {
  addItem,
  removeItem,
  clearCart,
  incrementQuantity,
  decrementQuantity,
  updateQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;

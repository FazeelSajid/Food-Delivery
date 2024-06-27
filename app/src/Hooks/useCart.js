import { View, Text } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItem, removeItem, updateQuantity } from '../Redux/Features/CartSlice'


const useCart = () => {

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart.cartItems)
    // console.log(cart);

    const addItemToCart = (item) => {
        dispatch(addItem({item}))
    }
    const removeItemFromCart = (id) => {
        dispatch(removeItem({id}))
    }
    const updateItemQuantity = (id, quantity) => {
        // console.log(id, quantity);
        dispatch(updateQuantity({id, quantity}))
    }
    
  return {
    addItemToCart,
    removeItemFromCart,
    updateItemQuantity,
    cart
  }
}

export default useCart
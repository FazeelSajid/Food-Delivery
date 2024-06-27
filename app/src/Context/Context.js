import { createContext, useReducer, useState } from 'react';
import uuid from 'react-native-uuid';


const CartContext = createContext()

const Store = {
    cart : [],
    orders : []
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'addToCart' : 
        return {
            ...state , cart : [...state.cart, action.data]
        }
        case 'removeFromCart' :
            return {
                ...state, cart : state.cart.filter (item => item.id === action.id)
            }
        case 'clearCart' :
            return {
                ...state, cart : []
            }
        case 'placeOrder' :
            const order = {
                id : uuid.v4(),
                items : state.cart,
                totalAmount : state.cart.reduce((sum , item) => sum + item.price),
                status : 'pending',
                time: new Date().toISOString(),
                deliveryAddress : action.data
            }
            return {
                ...state,
                orders : [...state.orders, order],
                cart : []
            }
            default: 
            return state
    }
}


export const ContextProvider = ({children})=> {
    const [state, dispatch] = useReducer(cartReducer, Store)

    let addToCart = (item) =>{
        dispatch({type : 'addToCart', data: item })
    }

    let removeFromCart = (id) =>{
        dispatch({type : 'removeFromCart', data:id})
    }

    let clearCart = () =>{
        dispatch({type : 'clearCart'})
    }
    let placeOrder = (address) =>{
        dispatch({type : 'placeOrder', data: address})
    }

    const value = {
        state : state,
        addToCart : addToCart,
        removeFromCart : removeFromCart,
        clearCart : clearCart,
        placeOrder : placeOrder,
    }

    return (
        <CartContext.Provider value={value} >
            {children}
        </CartContext.Provider>
    )
}
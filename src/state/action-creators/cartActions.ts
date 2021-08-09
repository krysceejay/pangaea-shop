import {Dispatch} from 'redux'
import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_CART,
    DECREMENT_QTY,
    UPDATE_ON_CHANGE_CURRENCY
  } from '../types/cartTypes'
  import {Action, CartType} from '../actions/cart'
  import {State} from '../../state'
  import {CartState} from '../actions/cart'
  import {IProductState} from '../actions/product'

  export const addToCart = (prod: CartType) => async (dispatch: Dispatch<Action>, getState: () => State) => {
    dispatch({
        type: ADD_TO_CART,
        payload: prod,
    })
    const {cart}: CartState = getState().cart
    localStorage.setItem('cartItems', JSON.stringify(cart))
  }

  export const removeFromCart = (id: number) => async (dispatch: Dispatch<Action>, getState: () => State) => {
    dispatch({
        type: REMOVE_FROM_CART,
        payload: id,
    })

    const {cart}: CartState = getState().cart
    localStorage.setItem('cartItems', JSON.stringify(cart))
  }

  export const updateCart = (id: number) => async (dispatch: Dispatch<Action>, getState: () => State) => {
    dispatch({
        type: UPDATE_CART,
        payload: id
    })

    const {cart}: CartState = getState().cart
    localStorage.setItem('cartItems', JSON.stringify(cart))
  }

  export const decrementQty = (id: number) => async (dispatch: Dispatch<Action>, getState: () => State) => {
    dispatch({
        type: DECREMENT_QTY,
        payload: id
    })

    const {cart}: CartState = getState().cart
    localStorage.setItem('cartItems', JSON.stringify(cart))
  }

  export const updateOnChangeCurrency = () => async (dispatch: Dispatch<Action>, getState: () => State) => {

    const {cart}: CartState = getState().cart
    const {products}: IProductState = getState().products

    const filterProd = products.filter(item => cart.some(ct => ct.id === item.id))

    const newCart = cart.map(ct => {
       ct.unitprice = filterProd.find(it => ct.id === it.id)?.price || ct.unitprice
       ct.price = ct.unitprice * ct.quantity
       return ct
    })

    dispatch({
      type: UPDATE_ON_CHANGE_CURRENCY,
      payload: newCart
    })

    localStorage.setItem('cartItems', JSON.stringify(newCart))
  }
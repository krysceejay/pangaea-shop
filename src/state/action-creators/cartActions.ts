import {Dispatch} from 'redux'
import {
    ADD_TO_CART
  } from '../types/cartTypes'
  import {Action, CartType} from '../actions/cart'
  import {State} from '../../state'

  export const addToCart = (prod: CartType) => async (dispatch: Dispatch<Action>, getState: () => State) => {
    dispatch({
        type: ADD_TO_CART,
        payload: prod,
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart))
  }
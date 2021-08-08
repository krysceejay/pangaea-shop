import {
  ADD_TO_CART
} from '../types/cartTypes'
  import {Action, CartState} from '../actions/cart'

  const cartItemsFromStorage: [] = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems') || '{}').cart
  : []

  const initialState: CartState = {
    cart: cartItemsFromStorage
  }
  
  const cartReducer = (state: CartState = initialState, action: Action) => {
    const { type, payload } = action
    switch (type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: [payload, ...state.cart],
            }

        default:
            return state
    }
  }

  export default cartReducer
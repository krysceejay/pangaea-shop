import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART,
  DECREMENT_QTY,
  UPDATE_ON_CHANGE_CURRENCY
} from '../types/cartTypes'
  import {Action, CartState} from '../actions/cart'

  const cartItemsFromStorage: [] = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems') || '{}')
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

        case UPDATE_ON_CHANGE_CURRENCY:
            return {
                ...state,
                cart: payload
            }

        case REMOVE_FROM_CART:
          return {
            ...state,
            cart: state.cart.filter(ct => ct.id !== payload),
          }  

        case UPDATE_CART:
          return {
            ...state,
            cart: state.cart.map(ct =>
              ct.id === payload ? { ...ct, quantity: ct.quantity + 1, price: (ct.quantity + 1) * ct.unitprice } : ct
            )
          }

        case DECREMENT_QTY:
          return {
            ...state,
            cart: state.cart.map(ct =>
              ct.id === payload ? { ...ct, quantity: ct.quantity - 1, price: (ct.quantity - 1) * ct.unitprice} : ct
            )
          }      

        default:
            return state
    }
  }

  export default cartReducer
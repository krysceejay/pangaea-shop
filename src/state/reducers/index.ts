import {combineReducers} from 'redux'
import productReducer from './productReducers'
import cartReducer from './cartReducer'

const reducers = combineReducers({
  products: productReducer,
  cart: cartReducer
})

export default reducers

export type State = ReturnType<typeof reducers>

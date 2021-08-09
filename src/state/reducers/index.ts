import {combineReducers} from 'redux'
import productReducer from './productReducers'
import cartReducer from './cartReducer'
import currencyReducer from './currencyReducer'

const reducers = combineReducers({
  products: productReducer,
  cart: cartReducer,
  currency: currencyReducer
})

export default reducers

export type State = ReturnType<typeof reducers>

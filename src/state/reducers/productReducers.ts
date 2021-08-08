import {
    GET_PRODUCTS
  } from '../types/productTypes'
  import {Action, IProductState} from '../actions/product'

  const initialState: IProductState = {
    products: [],
    product: {},
    error: {
      msg: '',
      status: null
    }
  }
  
  const productReducer = (state: IProductState = initialState, action: Action) => {
    const { type, payload } = action
    switch (type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: payload,
            }

        default:
            return state
    }
  }

  export default productReducer
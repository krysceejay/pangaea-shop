import {Dispatch} from 'redux'
import {
    GET_PRODUCTS,
    PRODUCT_ERROR
  } from '../types/productTypes'
  import {Action} from '../actions/product'
  import api from '../../utils/api'

  export const getAllProducts = (currency: string) => async (dispatch: Dispatch<Action>) => {
    const query = `
        query {
            products {
                id
                title
                image_url
                price(currency: ${currency})
                product_options {
                  title
                  prefix
                  suffix
                  options {
                    id
                    value
                  }
                }
              }
          }
      `;
  
    try {
      const { data } = await api.post('/', {query})
        dispatch({
            type: GET_PRODUCTS,
            payload: data.data.products,
        })
    } catch (err) {
        dispatch({
            type: PRODUCT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
  }
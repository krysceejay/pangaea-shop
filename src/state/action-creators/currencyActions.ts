import {Dispatch} from 'redux'
import {
    GET_CURRENCY,
    CURRENCY_ERROR,
    UPDATE_CURRENCY
  } from '../types/currencyTypes'
  import {Action} from '../actions/currency'
  import api from '../../utils/api'


  export const getCurrency = () => async (dispatch: Dispatch<Action>) => {
    const query = `
        query {
            currency
          }
      `;
  
    try {
      const { data } = await api.post('/', {query})
        dispatch({
            type: GET_CURRENCY,
            payload: data.data.currency,
        })
    } catch (err) {
        dispatch({
            type: CURRENCY_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
  }

  export const selectCurrency = (currency: string) => async (dispatch: Dispatch<Action>) => {
    dispatch({
        type: UPDATE_CURRENCY,
        payload: currency
    })
      
  }
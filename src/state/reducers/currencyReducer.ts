import {
    GET_CURRENCY,
    UPDATE_CURRENCY
  } from '../types/currencyTypes'
  import {Action, CurrencyState} from '../actions/currency'

  const initialState: CurrencyState = {
    currencies: [],
    currency: 'AUD'
  }
  
  const currencyReducer = (state: CurrencyState = initialState, action: Action) => {
    const { type, payload } = action
    switch (type) {
        case GET_CURRENCY:
            return {
                ...state,
                currencies: payload,
            }

        case UPDATE_CURRENCY:
            return {
                ...state,
                currency: payload,
            }

        default:
            return state
    }
  }

  export default currencyReducer
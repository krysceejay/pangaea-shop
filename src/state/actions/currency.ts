  interface CurrencyAction {
    type: string
    payload?: string[]
}
  
interface ErrorAction {
    type: string
    payload?: {msg: string, status: number | null}
}

interface UpdateAction {
    type: string
    payload?: string
}

  export interface CurrencyState {
    currencies: string[],
    currency: string
  }
  
export type Action = CurrencyAction | ErrorAction | UpdateAction
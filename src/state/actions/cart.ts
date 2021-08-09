  export interface CartType {
    id: number
    image_url: string
    title: string
    unitprice: number
    quantity: number,
    price: number
  }

  export interface CartState {
    cart: CartType[] | []
  }
  
  interface CartsAction {
      type: string
      payload: CartType[]
  }
  
  interface CartAction {
      type: string
      payload: CartType
  }

  interface RemoveCartAction {
      type: string
      payload: number
  }
  
  
  export type Action = CartsAction | CartAction | RemoveCartAction
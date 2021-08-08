  export interface CartType {
    id: number
    image_url: string
    title: string
    price: number
    quantity: number
  }

  export interface CartState {
    cart: CartType[] | []
  }
  
  interface CartsAction {
      type: string
      payload?: CartType[]
  }
  
  interface CartAction {
      type: string
      payload?: CartType
  }
  
  export type Action = CartsAction | CartAction 
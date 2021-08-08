interface Options {
  id: number
  value: string
}

interface ProductOptions {
  title: string
  prefix: null | string
  suffix: null | string
  price: number
  options: Options[]
}

export interface ProductType {
  id: number
  image_url: string
  title: string
  price: number
  product_options: ProductOptions[]
}

export interface IProductState {
  products: ProductType[]
  product: ProductType | {}
  error: {
    msg: string, 
    status: number | null
  }
}

interface ProductsAction {
    type: string
    payload?: ProductType[]
}

interface ProductAction {
    type: string
    payload?: ProductType
}

interface ErrorAction {
  type: string
  payload?: {msg: string, status: number | null}
}

export type Action = ProductsAction | ProductAction | ErrorAction
import React, {useRef, forwardRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { State } from '../state'
import {CurrencyState} from '../state/actions/currency'
import {CartState} from '../state/actions/cart'
import {selectCurrency} from '../state/action-creators/currencyActions'
import {
  removeFromCart, 
  updateCart, 
  decrementQty, 
} from '../state/action-creators/cartActions'

const Cart = forwardRef<HTMLElement, {}>((props, ref) => {
    const cartRef = useRef<HTMLElement>(null)
    const dispach = useDispatch()

    const currencyList: CurrencyState = useSelector((state: State) => state.currency)
    const cartList: CartState = useSelector((state: State) => state.cart)

    const { cart } = cartList
    const { currencies, currency } = currencyList

    const hideCart = () => {
        if(ref) {
            ref.current?.classList.remove("show-cart")
        }
          
        //overlayRef.current?.classList.add("hide")
    }

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispach(selectCurrency(e.target.value))
    }

    const incrementQty = (id: number) => {
        dispach(updateCart(id))
    } 

    const decrementQuanity = (id: number) => {
        const cartItem = cart.find(ct => ct.id === id)
        cartItem?.quantity === 1 ? 
        dispach(removeFromCart(id)) :
        dispach(decrementQty(id))
    }

    const delCart = (id: number) => {
        dispach(removeFromCart(id))
    }

    const sumTotal = (): number => {
        let total = 0
        cart.forEach(it => {
            total += it.price
        })
        return total
    }

    return (
        <section id="slide-cart" ref={ref}>
            <div className="cart-head">
                <div className="cart-head-top">
                    <div className="back" onClick={hideCart}>
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </div>
                    <div className="cart-head-top-title">YOUR CART</div>
                </div>
                <div className="cart-head-currency">
                    <select value={currency} onChange={handleSelectChange}>
                        {currencies.map((cur, ind) => (
                        <option value={cur} key={ind}>{cur}</option>
                    ))}
                    </select>
                </div>
            </div>
            {cart.length === 0 ? <p className="empty-cart">There are no items in your cart.</p> :
            <div>
            <div className="cart-body">
                <div className="cart-body-wrap">
                {cart.map(ct => (
                    <div className="cart-body-wrap-item" key={ct.id}>
                        <div className="cart-details">
                            <h6>{ct.title}</h6>
                            <div className="size">Oily | 25-34</div>
                            <div className="terms">One time purchase of Two Month supply.</div>
                            <div className="quantity-price">
                                <div className="controls">
                                    <button className="minus" onClick={() => decrementQuanity(ct.id)}>
                                        &#x2212;
                                    </button>
                                    <span className="counter">{ct.quantity}</span>
                                    <button className="plus" onClick={() => incrementQty(ct.id)}>
                                        &#x2b;
                                    </button>
                                </div>
                                <div className="price">{currency} {ct.price}</div>
                            </div>
                        </div>
                        <div className="cart-img">
                            <img src={ct.image_url} alt="item" />
                        </div>
                        <span className="close-btn" onClick={() => delCart(ct.id)}>&#x2715;</span>
                    </div>
                ))}
                </div>
            </div>
            <div className="cart-sum">
                <div className="cart-sum-head">
                    <span className="sum-title">Subtotal</span>
                    <span className="sum-total">{currency} {sumTotal()}</span>
                </div>
                <button className="btn btn-sub">MAKE THIS A SUBSCRIPTION (SAVE UP TO 20%)</button>
                <button className="btn btn-checkout">PROCEED TO CHECKOUT</button>
            </div>
            </div> 
            }
        </section>
    )
})

export default Cart

import React, {useRef, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { State } from '../state'
import {getAllProducts} from '../state/action-creators/productActions'
import {addToCart, removeFromCart, updateCart, decrementQty, updateOnChangeCurrency} from '../state/action-creators/cartActions'
import {getCurrency, selectCurrency} from '../state/action-creators/currencyActions'
import {IProductState, ProductType} from '../state/actions/product'
import {CartState} from '../state/actions/cart'
import {CurrencyState} from '../state/actions/currency'

const Products: React.FC = () => {
    const cartRef = useRef<HTMLElement>(null)
    const overlayRef = useRef<HTMLDivElement>(null)
    const menuRef = useRef<HTMLDivElement>(null)

    const dispach = useDispatch()
    const productList: IProductState = useSelector((state: State) => state.products)
    const cartList: CartState = useSelector((state: State) => state.cart)
    const currencyList: CurrencyState = useSelector((state: State) => state.currency)
    
    const { products } = productList
    const { cart } = cartList
    const { currencies, currency } = currencyList

    useEffect(() => {
        dispach(getAllProducts(currency))
      }, [dispach, currency])

    useEffect(() => {
        dispach(getCurrency())
    }, [dispach])

    useEffect(() => {
        dispach(updateOnChangeCurrency())
    }, [dispach, products])

    const showMenu = () => {
        menuRef.current?.classList.add("show-menu")  
       overlayRef.current?.classList.remove("hide")  
    }

    const hideMenu = () => {
        menuRef.current?.classList.remove("show-menu")  
        overlayRef.current?.classList.add("hide")
    }

    const showCart = (prod: ProductType) => {
        cart.some(ct => ct.id === prod.id) ?
        dispach(updateCart(prod.id)) : 
        dispach(addToCart({
            id: prod.id,
            image_url: prod.image_url,
            title: prod.title,
            price: prod.price,
            unitprice: prod.price,
            quantity: 1
        }))
       cartRef.current?.classList.add("show-cart")  
       overlayRef.current?.classList.remove("hide")  
    }

    const delCart = (id: number) => {
        dispach(removeFromCart(id))
    }

    const hideCart = () => {
        cartRef.current?.classList.remove("show-cart")  
        overlayRef.current?.classList.add("hide")
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

    const sumTotal = (): number => {
        let total = 0
        cart.forEach(it => {
            total += it.price
        })
        return total
    }

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispach(selectCurrency(e.target.value))
    }
     
    return (
        <>
            <div>
                <div className="overlay hide" ref={overlayRef}></div>
                <section id="slide-cart" ref={cartRef}>
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
                    <>
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
                    </> 
                    }
                </section>
            </div>

                <nav id="main-nav">
                    <div className="nav-left-wrap" ref={menuRef}>
                        <div className="nav-left">
                            <a href="/">
                                <div className="nav-left-logo">
                                    <img src="/image/logo.png" alt="" />
                                </div>
                            </a>
                            <ul className="nav-left-links">
                                <li>Shop</li>
                                <li>Learn</li>
                            </ul>
                            <div className="back" onClick={hideMenu}>
                                <i className="fa fa-angle-left" aria-hidden="true"></i>
                            </div>
                        </div>
                        <ul className="filter-links">
                            <li>Skin</li>
                            <li>Hair & Body</li>
                            <li>Sets</li>
                            <li>Accessories</li>
                            <li>Shop All</li>
                        </ul>
                    </div>
                    <div id="dash-bar" className="menu-icon" onClick={showMenu}>
                        <span></span>
                    </div>
                    <div className="nav-right">
                        <a href="/" className="nav-right-link">Account</a>
                        <a href="/" className="nav-right-cart">
                            <img src="/image/cart.png" alt="" />
                            <span className="cart-num">{cart.length}</span>
                        </a>
                    </div>
                </nav>
            <section className="filter">
                <div className="head">
                    <h1>All Products</h1>
                    <p>A 360° look at Lumin</p>
                </div>
                <form>
                    <select className="select">
                        <option value="" disabled>Filter by</option>
                        <option value="filterby">All Products</option>
                        <option value="filterby">New Products</option>
                        <option value="filterby">Sets</option>
                        <option value="filterby">Skincare</option>
                    </select>
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                </form>
            </section>
            <section className="prod-sec">
                <div className="grid-wrap">
                    {products.map(prod => (
                         <div className="grid-wrap-single" key={prod.id}>
                            <div className="item-img">
                                <img src={prod.image_url} alt="item" />
                            </div>
                            <h3 className="item-name">{prod.title}</h3>
                            <p className="item-price">{currency} {prod.price}</p>
                            <button className="btn btn-cart" onClick={() => showCart(prod)}>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Products

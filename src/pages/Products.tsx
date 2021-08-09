import React, {useRef, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { State } from '../state'
import {getAllProducts} from '../state/action-creators/productActions'
import {addToCart, updateCart, updateOnChangeCurrency} from '../state/action-creators/cartActions'
import {getCurrency} from '../state/action-creators/currencyActions'
import {IProductState, ProductType} from '../state/actions/product'
import {CartState} from '../state/actions/cart'
import {CurrencyState} from '../state/actions/currency'
import Cart from '../components/Cart'

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
    const { currency } = currencyList

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
       //overlayRef.current?.classList.remove("hide")  
    }

    const hideMenu = () => {
        menuRef.current?.classList.remove("show-menu")  
        //overlayRef.current?.classList.add("hide")
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
     
    return (
        <>
            <div>
                <div className="overlay hide" ref={overlayRef}></div>
                    <Cart ref={cartRef} />
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
                            <span className="cart-num">{cart?.length}</span>
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

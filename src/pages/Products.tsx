import {useRef} from 'react'
import PropTypes from 'prop-types'

const Products = () => {
    const cartRef = useRef<HTMLElement>(null)
    const overlayRef = useRef<HTMLDivElement>(null)

    const showCart = () => {
       cartRef.current?.classList.add("show-cart")  
       overlayRef.current?.classList.remove("hide")  
    }
    const hideCart = () => {
        cartRef.current?.classList.remove("show-cart")  
        overlayRef.current?.classList.add("hide")
     }
    return (
        <>
            <div>
                <div className="overlay hide" ref={overlayRef}></div>
                <section id="slide-cart" ref={cartRef}>
                    <div className="cart-head">
                        <div className="cart-head-top">
                            <div className="cart-head-top-back" onClick={hideCart}>
                                <i className="fa fa-angle-right" aria-hidden="true"></i>
                            </div>
                            <div className="cart-head-top-title">YOUR CART</div>
                        </div>
                        <div className="cart-head-currency">
                            <select>
                                <option value="NOK">NOK</option>
                                <option value="filterby">PHP</option>
                                <option value="filterby">USD</option>
                                <option value="filterby">NGN</option>
                                <option value="filterby">EUR</option>
                            </select>
                        </div>
                    </div>
                    <div className="cart-body">
                        <div className="cart-body-wrap">
                            <div className="cart-body-wrap-item">
                                <div className="cart-details">
                                    <h6>Youth Management Set</h6>
                                    <div className="size">Oily | 25-34</div>
                                    <div className="terms">One time purchase of Two Month supply.</div>
                                    <div className="quantity-price">
                                        <div className="controls">
                                            <button className="minus">
                                                &#x2212;
                                            </button>
                                            <span className="counter">5</span>
                                            <button className="plus">
                                                &#x2b;
                                            </button>
                                        </div>
                                        <div className="price">NOK 1,540.00</div>
                                    </div>
                                </div>
                                <div className="cart-img">
                                    <img src="/image/charcoal-cleanser.png" alt="item" />
                                </div>
                                <span className="close-btn">&#x2715;</span>
                            </div>
                            <div className="cart-body-wrap-item">
                                <div className="cart-details">
                                    <h6>Youth Management Set</h6>
                                    <div className="size">Oily | 25-34</div>
                                    <div className="terms">One time purchase of Two Month supply.</div>
                                    <div className="quantity-price">
                                        <div className="controls">
                                            <button className="minus">
                                                &#x2212;
                                            </button>
                                            <span className="counter">5</span>
                                            <button className="plus">
                                                &#x2b;
                                            </button>
                                        </div>
                                        <div className="price">NOK 1,540.00</div>
                                    </div>
                                </div>
                                <div className="cart-img">
                                    <img src="/image/charcoal-cleanser.png" alt="item" />
                                </div>
                                <span className="close-btn">&#x2715;</span>
                            </div>
                            <div className="cart-body-wrap-item">
                                <div className="cart-details">
                                    <h6>Youth Management Set</h6>
                                    <div className="size">Oily | 25-34</div>
                                    <div className="terms">One time purchase of Two Month supply.</div>
                                    <div className="quantity-price">
                                        <div className="controls">
                                            <button className="minus">
                                                &#x2212;
                                            </button>
                                            <span className="counter">5</span>
                                            <button className="plus">
                                                &#x2b;
                                            </button>
                                        </div>
                                        <div className="price">NOK 1,540.00</div>
                                    </div>
                                </div>
                                <div className="cart-img">
                                    <img src="/image/charcoal-cleanser.png" alt="item" />
                                </div>
                                <span className="close-btn">&#x2715;</span>
                            </div>
                            <div className="cart-body-wrap-item">
                                <div className="cart-details">
                                    <h6>Youth Management Set</h6>
                                    <div className="size">Oily | 25-34</div>
                                    <div className="terms">One time purchase of Two Month supply.</div>
                                    <div className="quantity-price">
                                        <div className="controls">
                                            <button className="minus">
                                                &#x2212;
                                            </button>
                                            <span className="counter">5</span>
                                            <button className="plus">
                                                &#x2b;
                                            </button>
                                        </div>
                                        <div className="price">NOK 1,540.00</div>
                                    </div>
                                </div>
                                <div className="cart-img">
                                    <img src="/image/charcoal-cleanser.png" alt="item" />
                                </div>
                                <span className="close-btn">&#x2715;</span>
                            </div>
                            <div className="cart-body-wrap-item">
                                <div className="cart-details">
                                    <h6>Youth Management Set</h6>
                                    <div className="size">Oily | 25-34</div>
                                    <div className="terms">One time purchase of Two Month supply.</div>
                                    <div className="quantity-price">
                                        <div className="controls">
                                            <button className="minus">
                                                &#x2212;
                                            </button>
                                            <span className="counter">5</span>
                                            <button className="plus">
                                                &#x2b;
                                            </button>
                                        </div>
                                        <div className="price">NOK 1,540.00</div>
                                    </div>
                                </div>
                                <div className="cart-img">
                                    <img src="/image/charcoal-cleanser.png" alt="item" />
                                </div>
                                <span className="close-btn">&#x2715;</span>
                            </div>
                            <div className="cart-body-wrap-item">
                                <div className="cart-details">
                                    <h6>Youth Management Set</h6>
                                    <div className="size">Oily | 25-34</div>
                                    <div className="terms">One time purchase of Two Month supply.</div>
                                    <div className="quantity-price">
                                        <div className="controls">
                                            <button className="minus">
                                                &#x2212;
                                            </button>
                                            <span className="counter">5</span>
                                            <button className="plus">
                                                &#x2b;
                                            </button>
                                        </div>
                                        <div className="price">NOK 1,540.00</div>
                                    </div>
                                </div>
                                <div className="cart-img">
                                    <img src="/image/charcoal-cleanser.png" alt="item" />
                                </div>
                                <span className="close-btn">&#x2715;</span>
                            </div>
                        </div>
                    </div>
                    <div className="cart-sum">
                        <div className="cart-sum-head">
                            <span className="sum-title">Subtotal</span>
                            <span className="sum-total">UGX 1,880,000</span>
                        </div>
                        <button className="btn btn-sub">MAKE THIS A SUBSCRIPTION (SAVE UP TO 20%)</button>
                        <button className="btn btn-checkout">PROCEED TO CHECKOUT</button>
                    </div>
                </section>
            </div>
            
            <nav id="main-nav">
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
                </div>
                <div id="dash-bar" className="menu-icon">
                    <span></span>
                </div>
                <div className="nav-right">
                    <a href="/" className="nav-right-link">Account</a>
                    <a href="/" className="nav-right-cart">
                        <img src="/image/cart.png" alt="" />
                        <span className="cart-num">2</span>
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
                    <div className="grid-wrap-single">
                        <div className="item-img">
                            <img src="/image/age-management.png" alt="item" />
                        </div>
                        <h3 className="item-name">Age Management Set</h3>
                        <p className="item-price">NOK 580.00</p>
                        <button className="btn btn-cart" onClick={showCart}>Add to Cart</button>
                    </div>
                    <div className="grid-wrap-single">
                        <div className="item-img">
                            <img src="/image/age-management.png" alt="item" />
                        </div>
                        <h3 className="item-name">Age Management Set</h3>
                        <p className="item-price">NOK 580.00</p>
                        <button className="btn btn-cart" onClick={showCart}>Add to Cart</button>
                    </div>
                    <div className="grid-wrap-single">
                        <div className="item-img">
                            <img src="/image/age-management.png" alt="item" />
                        </div>
                        <h3 className="item-name">Age Management Set</h3>
                        <p className="item-price">NOK 580.00</p>
                        <button className="btn btn-cart" onClick={showCart}>Add to Cart</button>
                    </div>
                    <div className="grid-wrap-single">
                        <div className="item-img">
                            <img src="/image/age-management.png" alt="item" />
                        </div>
                        <h3 className="item-name">Age Management Set</h3>
                        <p className="item-price">NOK 580.00</p>
                        <button className="btn btn-cart" onClick={showCart}>Add to Cart</button>
                    </div>
                    <div className="grid-wrap-single">
                        <div className="item-img">
                            <img src="/image/age-management.png" alt="item" />
                        </div>
                        <h3 className="item-name">Age Management Set</h3>
                        <p className="item-price">NOK 580.00</p>
                        <button className="btn btn-cart" onClick={showCart}>Add to Cart</button>
                    </div>
                </div>
            </section>
        </>
    )
}

Products.propTypes = {

}

export default Products

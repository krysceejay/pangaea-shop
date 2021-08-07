import React from 'react'
import PropTypes from 'prop-types'

const Products = props => {
    return (
        <>
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
                        <option value="filterby">Filter by</option>
                        <option value="filterby">All Products</option>
                        <option value="filterby">New Products</option>
                        <option value="filterby">Sets</option>
                        <option value="filterby">Skincare</option>
                    </select>
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
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
                        <button className="btn btn-cart">Add to Cart</button>
                    </div>
                    <div className="grid-wrap-single">
                        <div className="item-img">
                            <img src="/image/age-management.png" alt="item" />
                        </div>
                        <h3 className="item-name">Age Management Set</h3>
                        <p className="item-price">NOK 580.00</p>
                        <button className="btn btn-cart">Add to Cart</button>
                    </div>
                    <div className="grid-wrap-single">
                        <div className="item-img">
                            <img src="/image/age-management.png" alt="item" />
                        </div>
                        <h3 className="item-name">Age Management Set</h3>
                        <p className="item-price">NOK 580.00</p>
                        <button className="btn btn-cart">Add to Cart</button>
                    </div>
                    <div className="grid-wrap-single">
                        <div className="item-img">
                            <img src="/image/age-management.png" alt="item" />
                        </div>
                        <h3 className="item-name">Age Management Set</h3>
                        <p className="item-price">NOK 580.00</p>
                        <button className="btn btn-cart">Add to Cart</button>
                    </div>
                    <div className="grid-wrap-single">
                        <div className="item-img">
                            <img src="/image/charcoal-cleanser.png" alt="item" />
                        </div>
                        <h3 className="item-name">Age Management Set</h3>
                        <p className="item-price">NOK 580.00</p>
                        <button className="btn btn-cart">Add to Cart</button>
                    </div>
                    <div className="grid-wrap-single">
                        <div className="item-img">
                            <img src="/image/age-management.png" alt="item" />
                        </div>
                        <h3 className="item-name">Age Management Set</h3>
                        <p className="item-price">NOK 580.00</p>
                        <button className="btn btn-cart">Add to Cart</button>
                    </div>
                    <div className="grid-wrap-single">
                        <div className="item-img">
                            <img src="/image/charcoal-cleanser.png" alt="item" />
                        </div>
                        <h3 className="item-name">Age Management Set</h3>
                        <p className="item-price">NOK 580.00</p>
                        <button className="btn btn-cart">Add to Cart</button>
                    </div>
                    <div className="grid-wrap-single">
                        <div className="item-img">
                            <img src="/image/age-management.png" alt="item" />
                        </div>
                        <h3 className="item-name">Age Management Set</h3>
                        <p className="item-price">NOK 580.00</p>
                        <button className="btn btn-cart">Add to Cart</button>
                    </div>
                    <div className="grid-wrap-single">
                        <div className="item-img">
                            <img src="/image/charcoal-cleanser.png" alt="item" />
                        </div>
                        <h3 className="item-name">Age Management Set</h3>
                        <p className="item-price">NOK 580.00</p>
                        <button className="btn btn-cart">Add to Cart</button>
                    </div>
                    <div className="grid-wrap-single">
                        <div className="item-img">
                            <img src="/image/age-management.png" alt="item" />
                        </div>
                        <h3 className="item-name">Age Management Set</h3>
                        <p className="item-price">NOK 580.00</p>
                        <button className="btn btn-cart">Add to Cart</button>
                    </div>
                    <div className="grid-wrap-single">
                        <div className="item-img">
                            <img src="/image/age-management.png" alt="item" />
                        </div>
                        <h3 className="item-name">Age Management Set</h3>
                        <p className="item-price">NOK 580.00</p>
                        <button className="btn btn-cart">Add to Cart</button>
                    </div>
                </div>
            </section>
        </>
    )
}

Products.propTypes = {

}

export default Products

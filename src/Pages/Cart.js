import React from 'react'
import CartProduct from '../Components/CartProduct'
import Product from '../Components/Product'

function Cart(props) {
  return (
    <div className="cart">
      <div className="products">
        {
          props.addedProds.map(prod => {

            return (
              <CartProduct data={prod} key={prod.id} removeCart={() => props.removeCartFunc(prod.id)} />
            )
          })
        }
      </div>
      <div className="payment">
        <div className="voucher">

          <input type="text" name="voucher" placeholder='Voucher Code' />
          <button className="redeem" style={{ backgroundColor: '#33A0FF',borderRadius: '0px 4px 4px 0px',opacity: '1',color:'white',border:'none',font:' normal normal 600 14px/22px Proxima Nova'}}>Redeem</button>
        </div>
        <div className="checkout">

          <ul>
            <li><span>Subtotal</span> <span>${props.totalAmount}</span></li>
            <li><span>Shipping Fee</span> <span>$20</span></li>
            <li><span>Coupon</span> <span>no</span></li>
            <li><h1><span>Total</span> <span>${props.totalAmount+20}</span></h1></li>
          </ul>
          <button style={{ backgroundColor: '#33A0FF',opacity: '1'}}>Checkout</button>
      </div>
    </div>
    </div >
  )
}

export default Cart
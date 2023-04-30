import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineDelete } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Cart() {
  const selector = useSelector(c => c.cart)
  const dispatch = useDispatch()
  console.log(selector);
  return (
    selector.length >= 1 ?
      <div className='cart__container container'>
        <div className="cart__pro__data">
          {
            selector?.map(e => <div className='cart__pro' key={e.id}>
              <div className="cart__data">
                <img width={100} src={e.img} alt="" />
                <h4>{e.title} <p className='pr'>{e.price} so'm</p></h4>
              </div>
              <div className="cart__price">
                <div className="btns">
                  <button onClick={() => dispatch({ type: "DEC_FROM_CART", payload: e })}>-</button>
                  <p>{e.quantity}</p>
                  <button onClick={() => dispatch({ type: "ADD_TO_CART", payload: e })}>+</button>
                </div>
                <p onClick={() => dispatch({type: "REMOVE_FROM_CART", payload: e})}><AiOutlineDelete/> Delete</p>
              </div>
            </div>)
          }
        </div>
        <div className="cart__delivery">
          <div className="promo__code">
            <input type="text" placeholder='Promokodni Kiriting'/>
            <button>Qo'llash</button>
          </div>
          <div className="cart__deliver">
            <div className="del">
              <p>Yetkazib Berish</p>
              <p>Bepul</p>
            </div>
            <div className="pri">
              <h4>Umumiy Narx</h4>
              <h4>129398</h4>
            </div>
            <button>Keyingisi</button>
          </div>
        </div>
      </div>
      :
      <div className='cart__empty'>
        <img src="https://bellissimo.uz/images/emptystate/empty-cart-icon.svg" alt="" />
        <h1>Hozircha Sizning Savatchangiz Bo'sh</h1>
        <Link to="/">Menyuni Korish</Link>
      </div>
  )
}

export default Cart
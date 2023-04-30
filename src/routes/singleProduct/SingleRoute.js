import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { PRODUCT } from '../../static/static'
import '../home/Home.css'

function SingleRoute() {
   // const params = useParams()
   const dispatch = useDispatch()

   // const singleProduct = PRODUCT.find(i => i.id === params.id)
   // console.log(singleProduct);

   const data = useLocation()?.state
   // console.log(data);

   return (
      <div>

         <div to="/" className="single__product__container">
            <div className="single__product__div">
               <div className="single__product">
                  <Link to="/" className='back__home'>
                     <AiOutlineArrowLeft />
                  </Link>
                  <img src={data.img} alt="" />
                  <div className="product__data">
                     <h1>{data.title}</h1>
                     <h3>{data.desc}</h3>
                     <p>{data.price} so'm</p>
                     <button onClick={() => dispatch({type: "ADD_TO_CART", payload: data})}>Savatga Qo'shish</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default SingleRoute
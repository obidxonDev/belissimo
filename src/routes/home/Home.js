import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { useDispatch, useSelector } from 'react-redux';
import { PRODUCT } from '../../static/static'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import './Home.css'
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

function Home() {
   const [deliveryId, setDeliveryId] = useState(0)
   const [deliveryLoc, setDeliveryLoc] = useState(false)
   const [branch, setBranch] = useState(false)
   const [selectedLoc, setSelectedLoc] = useState(null)
   const [selectedBranch, setSelectedBranch] = useState(null)
   const [productId, setProductId] = useState(0)
   const [singlePro, setSinglePro] = useState(false)

   const singleProduct = PRODUCT.find(pro => {return pro.id === productId})
   // console.log(singleProduct);
   // console.log(productId);

   const user = localStorage.getItem("email")



   const selector = useSelector(s => s.address)

   const delivery = [
      {
         id: 0,
         title: "Yetkazib Berish"

      },
      {
         id: 1,
         title: "Olib Ketish"
      }
   ]
   const delivery__location = [
      {
         id: 0,
         title: "Yetkazib Berish Manzilini Tanlang"

      },
      {
         id: 1,
         title: "Filialni Tanlang"
      }
   ]
   const branches = [
      {
         id: 0,
         branch: "toshkent"
      },
      {
         id: 1,
         branch: "namangan"
      },
      {
         id: 2,
         branch: "fargona"
      },
      {
         id: 3,
         branch: "chirchiq"
      },
   ]

   function getLoc(e) {
      setSelectedLoc(e)
      setDeliveryLoc(false)
   }

   function setLoc(e) {
      setDeliveryId(e.id)
      setSelectedLoc(null)
      setSelectedBranch(null)
   }

   function getBranch(e) {
      setSelectedBranch(e)
      setBranch(false)
   }
   function setSingleProduct(e){
      setProductId(e.id)
      setSinglePro(true)
   }

   return (
      <div className='home'>
         <div className="swiper">
            <Swiper
               slidesPerView={"auto"}
               spaceBetween={-100}
               pagination={{
                  clickable: true,
               }}
               modules={[Pagination]}
               className="mySwiper"
               loop={true}
            >
               <SwiperSlide><img src="https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Fd4b91bb9-d2fe-42da-ab82-27aa778e7d6b_uz.jpg&w=1920&q=75" alt="" /></SwiperSlide>
               <SwiperSlide><img src="https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F6fc5ae62-bca2-4a3b-a40a-1d23beb7e0ef_uz.jpg&w=1920&q=75" alt="" /></SwiperSlide>
               <SwiperSlide><img src="https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Fdc00d3a5-d682-4111-8fe5-cdba9bbf3f9f_uz.jpg&w=1920&q=75" alt="" /></SwiperSlide>
               <SwiperSlide><img src="https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Ffadbc348-c936-474a-9091-48b0134a4bab_uz.jpg&w=1920&q=75" alt="" /></SwiperSlide>
            </Swiper>
         </div>
         <div className="main__delivery__container container">
            <div className="delivery__type">
               {
                  delivery.map(e => <div
                     key={e.id}
                     className='delivery__item' style={deliveryId === e.id ? { backgroundColor: "white" } : null}
                     onClick={() => setLoc(e)}>
                     <p>{e.title}</p>
                  </div>)
               }
            </div>
            <div className="adress" >
               <div className='adress_div'>

                  {
                     selectedLoc
                        ?
                        <h4 onClick={() => setDeliveryLoc(true)}>
                           {selectedLoc.street} Ko'chasi {selectedLoc.home}-uy
                        </h4>
                        :
                        delivery__location.map(e => <div
                           key={e.id}
                           style={deliveryId === e.id ? { display: "flex" } : { display: "none" }}
                           onClick={() => deliveryId === 0 ? setDeliveryLoc(true) : setBranch(true)}>
                           <h4 >{e.title}</h4>
                        </div>)
                  }

                  <div className="delivery__location" style={deliveryLoc ? { display: "flex" } : { display: "none" }}>
                     {user ?
                        <div className='delivery__box'>
                           <AiOutlineClose onClick={() => setDeliveryLoc(false)} />
                           <h3>Manzilni Tanlang</h3>
                           {
                              selector.map(e => <div className='addre' key={e.id}>
                                 <span onClick={() => getLoc(e)}> {e.street} Ko'chasi {e.home}-uy</span>
                              </div>
                              )
                           }
                           <Link className='link__to__address' to="/addAdress">Manzil Qo'shish</Link>
                        </div>
                        :
                        <div className='redirect__login'>
                           <h2>Siz Ro'yxatdan O'tmagansiz</h2>
                           <p>Manzil Qo'shish Uchun Tizimga Kiring</p>
                           <Link to="/login">Kirish</Link>
                        </div>
                     }
                  </div>
                  <div className="delivery__branch" style={branch ? { display: "flex" } : { display: "none" }}>
                     <div className="branches__div">
                        <h3>Filialni Tanlang</h3>
                        <AiOutlineClose onClick={() => setBranch(false)} />
                        <div className="branches">
                           {
                              branches.map(e => <div className='p' onClick={() => getBranch(e)}>
                                 {e.branch} Filiali
                              </div>)
                           }
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="tabs__container container">
            <div className="tabs">
               <span>Kombo</span>
               <span>Pitsa</span>
               <span>Gazaklar</span>
               <span>Ichimliklar</span>
               <span>Salatlar</span>
               <span>Desertlar</span>
               <span>Souslar</span>
            </div>
            <div className="cart">
               <Link to="/cart">SavatCha</Link>
            </div>
         </div>
         <div className="main__products container">
            <div className="kombo">
               <h1>kombo</h1>
               <div className="kombo__product">
                  {
                     PRODUCT.map(e => <div onClick={() => setSingleProduct(e)} className='product'>
                        <img src={e.img} alt="" />
                        <h3>{e.desc}</h3>
                        <p>{e.price}</p>
                     </div>)
                  }
               </div>
            </div>
         </div>
         <div className="single__product__container">
            <div className="single__product">
               {/* {
                  singleProduc?.map(e => <div>

                  </div>)
               } */}
            </div>
         </div>
      </div>
   )
}

export default Home
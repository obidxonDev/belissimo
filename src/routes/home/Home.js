import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import './Home.css'

function Home() {
   const [deliveryId, setDeliveryId] = useState(0)
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
                     className='delivery__item'  style={deliveryId === e.id ? {backgroundColor: "white"}: null} 
                     onClick={() => setDeliveryId(e.id)}>
                     <p>{e.title}</p>
                  </div>)
               }
            </div>
            <div className="adress" >
               <div>
                  {
                     delivery__location.map(e => <div 
                           key={e.id}
                           style={deliveryId === e.id ? {display: "flex"} : {display: "none"}} 
                           onClick={() => deliveryId === 0 ?  console.log("karta") : console.log("div")} >
                        <h4>{e.title}</h4>
                     </div>)
                  }
               </div>
            </div>
         </div>
      </div>
   )
}

export default Home
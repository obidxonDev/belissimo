import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
   const [loc, setLoc] = useState(false)
   const [locId, setLocId] = useState(0)
   const isUser = localStorage.getItem("email")

   const viloyat = [
      {
         id: 0,
         loc: "Rossiya"
      },
      {
         id: 1,
         loc: "Qatar"
      },
      {
         id: 2,
         loc: "Xitoy"
      },
      {
         id: 3,
         loc: "Hindiston"
      },
      {
         id: 4,
         loc: "Italiya"
      },
      {
         id: 5,
         loc: "Yaponiya"
      },
      {
         id: 6,
         loc: "Ukraina"
      },
      {
         id: 7,
         loc: "Belarussia"
      },
   ]

   return (
      <React.Fragment>
         <div className='navbar container'>
            <div className="logo">
               <img src="https://bellissimo.uz/_next/image?url=%2Fimages%2Flogo.png&w=320&q=75" alt="" />
            </div>
            <div className="location">
               <h3>Shahar: <span onClick={() => setLoc(!loc)} className='selected__loc'>{viloyat[locId].loc}</span></h3>
            </div>
            <div className="call__center">
               <img src="https://bellissimo.uz/images/phone.svg" alt="" />
               <h2>1174</h2>
               <p className='delivery__title'>40 daqiqada tekin yetkazib beramiz<br /> yoki pitsa bepul</p>
            </div>
            <div className="xalal">
               <img src="https://bellissimo.uz/_next/image?url=%2Fimages%2Fhalal.png&w=64&q=75" alt="" />
            </div>
            <div className="language">O'zbek</div>
            {isUser ?
               <div>
                  <Link to="/profil">Profil</Link>
               </div>
               :
               <div className="login"> 
                  <Link to="/login">Kirish</Link>
               </div>
            }
         </div>
         <div className="viloyatlar" onClick={() => setLoc(false)} style={loc ? { display: "flex" } : { display: "none" }} >
            {
               viloyat.map((e, id) => <div className='viloyatlar__box' key={id}>
                  <p onClick={() => setLocId(e.id)}> {e.loc} </p>
               </div>)
            }
         </div>
      </React.Fragment>
   )
}

export default Navbar
import React from 'react'
import { Link } from 'react-router-dom'
import './Profil.css'

function Profil() {
  return (
    <div className='profil container'>
      <div className="add__adress">
         <h1>Sizning Manzillaringiz</h1>

         <Link to="/addAdress">Manzil Qo'shish</Link>
      </div>
    </div>
  )
}

export default Profil
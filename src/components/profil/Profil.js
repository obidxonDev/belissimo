import React from 'react'
import { Link } from 'react-router-dom'
import './Profil.css'
import { useSelector, useDispatch } from 'react-redux'
import { AiOutlineClose } from 'react-icons/ai'

function Profil() {
  const selector = useSelector(s => s.address)
  const dispatch = useDispatch()

  console.log(selector);
  return (
    <div className='profil container'>
      <div className="add__adress">
        <h1>Sizning Manzillaringiz</h1>
        <div className="addresses">
          {
            selector.map(e => <div key={e.id}>
              <span>{e.street} Ko'chasi {e.home}-uy <AiOutlineClose onClick={() => dispatch({type: "REMOVE_ADDRESS", payload: e})}/></span>
            </div>
            )
          }
        </div>
        <Link to="/addAdress">Manzil Qo'shish</Link>
      </div>
    </div>
  )
}

export default Profil
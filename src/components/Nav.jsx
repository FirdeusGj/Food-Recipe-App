import React from 'react'
import './Nav.css'

export default function Nav() {
  return (
    <div className='nav'>
        <figure className='nav__img'>
        <img src="https://icons-for-free.com/iconfiles/png/512/meal-1320568026248944827.png" alt="" />
        </figure>
        <div className='nav__links'>
            <h1>Search</h1>
            <h1>Home</h1>
        </div>
    </div>
  )
}

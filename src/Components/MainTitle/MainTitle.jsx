import React from 'react'
import s from './MainTitle.module.css'
import Navbar from '../Navbar/Navbar'
import MobileMenu from '../MobileMenu'
import NavbarDark from '../NavbarDark/NavbarDark'


function MainTitle() {
  return (
    <>
      <div className={s.mainBack}>
        <NavbarDark/>
        <div className={s.ad}>
          <div>
            <h1>Last season discount</h1>
            <h2>30%</h2>
          </div>
          <button className={s.button}>Shop now</button>
        </div>
      </div>
      <MobileMenu/>
    </>
  )
}

export default MainTitle
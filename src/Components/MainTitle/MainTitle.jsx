import React from 'react'
import s from './MainTitle.module.css'
import Navbar from '../Navbar/Navbar'
import MobileMenu from '../MobileMenu'
import NavbarDark from '../NavbarDark/NavbarDark'
import text from '../../Server/texts.json'


function MainTitle() {

  const currentLanguage = "ru"
  const takeText = (key) => text[key][currentLanguage]

  return (
    <>
      <div className={s.mainBack}>
        <NavbarDark/>
        <div className={s.ad}>
          <div>
            <h1>{takeText("header.title")}</h1>
            <h2>30%</h2>
          </div>
          <button className={s.button}>{takeText("header.button")}</button>
        </div>
      </div>
      <MobileMenu/>
    </>
  )
}

export default MainTitle
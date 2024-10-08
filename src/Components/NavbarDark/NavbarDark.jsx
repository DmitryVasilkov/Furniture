import React, { useState } from 'react'
import language from './icons/LanguageDark.png'
import cart from './icons/ShoppingCartDark.png'
import favorite from './icons/FavoritesDark.png'
import find from './icons/SearchDark.png'
import account from './icons/LogoDark.png'
import logout from './icons/Logout.png'
import navLogo from './icons/Logo_main.png'
import s from './NavbarDark.module.css'
import MobileMenuLinks from '../MobileMenu/MobileMenuLinks'
import text from '../../Server/texts.json'

// const icons = require.context('./icons', true);
// const images = icons.keys().reduce((acc, path) => {
// acc[path.replace('./', '')] = icons(path).default;
// return acc;
// }, {});

function NavbarDark() {

    const currentLanguage = "ru"
    const takeText = (key) => text[key][currentLanguage]

    const [mobileMenuLinks, setMobileMenuLinks] = useState(false);

    const [isModalOpen, setModalOpen] = useState(false);

    const handleBurgerClick = () => {
      setMobileMenuLinks(!mobileMenuLinks);
    }

    const openModal = (e) => {
      e.preventDefault()
      setModalOpen(true)
    }

    const closeModal = () => {
      setModalOpen(false)
    }

    


    return (
      <>
        {mobileMenuLinks && <MobileMenuLinks setMobileMenuLinks={setMobileMenuLinks} />}

        <div className={s.nav}>
        <div className={s.media_wrapper}>
          <div className={`${s.burger_menu} ${mobileMenuLinks ? s.active : ''}`} onClick={handleBurgerClick}>
            <span className={s.line}></span>
            <span className={s.line}></span>
            <span className={s.line}></span>
          </div>
          <div className={s.navLogo}>
            <a href="http://">
              <img src={navLogo} alt="NavLogo" />
            </a>
          </div>
        </div>

        <div className={s.links}>
          <ul>
            <li>
              <a href="">{takeText("nav.categories")}</a>
            </li>
            <li>
              <a href="">{takeText("nav.hits")}</a>
            </li>
            <li>
              <a href="">{takeText("nav.sales")}</a>
            </li>
            <li>
              <a href="">{takeText("nav.aboutUs")}</a>
            </li>
            <li>
              <a href="">{takeText("nav.contacts")}</a>
            </li>
          </ul>
        </div>
        
        <div className={s.icons}>
          <ul>
            <li>
              <a href="">
                <img src={language} alt="language" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={account} alt="Account" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={find} alt="Search" />
              </a>
            </li>
            <li>
              <a href="" onClick={openModal}>
                <img src={cart} alt="Cart" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={favorite} alt="Favorites" />
              </a>
            </li>
          </ul>
        </div>

        {isModalOpen && (
        <div className={s.modal}>
          <div className={s.modalContent}>
            <span className={s.close} onClick={closeModal}>&times;</span>
            <p>Your cart is empty</p>
          </div>
        </div>
      )}

      </div>
      </>

      
    );
  }
  
  export default NavbarDark;



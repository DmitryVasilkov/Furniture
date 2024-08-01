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

// const icons = require.context('./icons', true);
// const images = icons.keys().reduce((acc, path) => {
// acc[path.replace('./', '')] = icons(path).default;
// return acc;
// }, {});

function NavbarDark() {

    const [mobileMenuLinks, setMobileMenuLinks] = useState(false);

    const handleBurgerClick = () => {
      setMobileMenuLinks(!mobileMenuLinks);
    };


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
              <a href="">Categories</a>
            </li>
            <li>
              <a href="">Hits</a>
            </li>
            <li>
              <a href="">Sales</a>
            </li>
            <li>
              <a href="">About us</a>
            </li>
            <li>
              <a href="">Contacts</a>
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
              <a href="">
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
      </div>
      </>

      
    );
  }
  
  export default NavbarDark;



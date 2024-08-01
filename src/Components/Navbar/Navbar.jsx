import React from 'react';
import language from './icons/Language.png';
import cart from './icons/Cart.png';
import favorite from './icons/Favorite.png';
import find from './icons/Find.png';
import account from './icons/Account.png';
import navLogo from './icons/Logo_main.png';
import s from './Navbar.module.css';

function Navbar() {

  return (
    <div className={s.nav}>
      <div className={s.navLogo}>
        <div>
          <a href="#">
            <img src={navLogo} alt="NavLogo" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={account} alt="Account" />
          </a>
        </div>
      </div>

      <div className={s.links}>
        <ul>
          <li>
            <a href="#">Categories</a>
          </li>
          <li>
            <a href="#">Hits</a>
          </li>
          <li>
            <a href="#">Sales</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
        </ul>
      </div>

      <div className={s.icons}>
        <ul>
          <li>
            <a href="#">
              <img src={language} alt="Language" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={account} alt="Account" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={find} alt="Search" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={cart} alt="Cart" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={favorite} alt="Favorites" />
            </a>
          </li>
        </ul>
      </div>

    </div>
  );
}

export default Navbar;

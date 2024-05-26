import React from 'react'
import language from './icons/Language.png'


function Navbar() {
  return (
    <nav>
        <a href="http://"></a>
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
        <ul>
            <li>
                <img src={language} alt="language" />
            </li>
            <li>
                <img src="" alt="Account" />
            </li>
            <li>
                <img src="" alt="Sarch" />
            </li>
            <li>
                <img src="" alt="Cart" />
            </li>
            <li>
                <img src="" alt="Favorites" />
            </li>
        </ul>

    </nav>
  )
}

export default Navbar
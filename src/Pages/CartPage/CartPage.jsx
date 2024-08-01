import React from 'react'
import Footer from '../../Components/Footer/Footer'
import s from './CartPage.module.css'
import Eyebrow from '../../Components/Eyebrow/Eyebrow'
import NavbarDark from '../../Components/NavbarDark/NavbarDark'

function CartPage() {
  return (
    <>
      <Eyebrow/>
      <NavbarDark/>
      <div className={s.cartContainer}>
        <div className={s.goods}>
          <div>
            <img src="" alt="" />
            <h4>Pilesos</h4>
            <p>HW346</p>
            <p>36$</p>
          </div>
          <div>
            <img src="" alt="" />
            <h4>zVEZDA</h4>
            <p>HW346</p>
            <p>36$</p>
          </div>
          <div>
            <img src="" alt="" />
            <h4>Drebeden</h4>
            <p>HW346</p>
            <p>36$</p>
          </div>
          <div>
            <img src="" alt="" />
            <h4>Lallala</h4>
            <p>HW346</p>
            <p>36$</p>
            </div>
        </div>
        <div className={s.cartCalculation}>
          <div className={s.cartCalculationWrapper}>
            <div>
              <button className={s.firstButton}>-</button>
              <p>43$</p>
              <button className={s.secondButton}>+</button>
            </div>
            <div>
              <button className={s.firstButton}>-</button>
                <p>48$</p>
              <button className={s.secondButton}>+</button>
            </div>
            <div>
              <button className={s.firstButton}>-</button>
                <p>42$</p>
              <button className={s.secondButton}>+</button>
            </div>
            <div>
              <button className={s.firstButton}>-</button>
                <p>22$</p>
              <button className={s.secondButton}>+</button>
            </div>
          </div>
          <div className={s.summary}>
            <p>sum</p>
            <button>Buy</button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default CartPage
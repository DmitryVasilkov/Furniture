import React from 'react'
import Eyebrow from '../../Components/Eyebrow/Eyebrow'
import NavbarDark from '../../Components/NavbarDark/NavbarDark'
import user from './img/user 1.png'
import choice from './img/PhotoArrow.png'
import table from './img/Table.png'
import chair from './img/Chair.png'
import s from './AccountPage.module.css'
import Footer from '../../Components/Footer/Footer'

function AccountPage() {
  return (
    <>
      <Eyebrow/>
      <NavbarDark/>
      <div className={s.account}>
        <span/>
          <p>Account</p>
        <span/>
      </div>
      <div className={s.accountDetails}>
        <div className={s.userInfo}>
          <img src={user} alt="user" />
          <div>
            <button>Upload photo</button>
            <img src={choice} alt="choice" />
          </div>
          <p>Vasya</p>
          <p>Pupkin</p>
          <p>+380671234567</p>
        </div>

        <form className={s.paymentForm}>
          <label>
            <input
              className={s.cardNumber}
              type="text"
              maxLength="19"
              placeholder="1234 5678 9101 1213"
            />
          </label>
          <div className={s.cardAdditions}>
            <label>
              <input
                type="text"
                maxLength="5"
                placeholder="MM/YY"
              />
            </label>
            <label>
              <input
                type="password"
                maxLength="3"
                placeholder="CVV ***"
              />
            </label>
          </div>
          
        </form>
      </div>
      <section>
        <h2>Order history</h2>
        <div className={s.ordersHistory}>
            <div>
              <img src={table} alt="table" />
              <h3>Kitchen wood table</h3>
              <h6>BG-132902</h6>
              <p>50.00$</p>
              <button>Buy</button>
            </div>
            <div>
              <img src={chair} alt="chair" />
              <h3>Kitchen wood chair</h3>
              <h6>BG-132902</h6>
              <p>30.00$</p>
              <button>Buy</button>
            </div>
            <div>
              <img src={table} alt="table" />
              <h3>Kitchen wood chair</h3>
              <h6>BG-132902</h6>
              <p>30.00$</p>
              <button>Buy</button>
            </div>
            <div>
              <img src={chair} alt="chair" />
              <h3>Kitchen wood table</h3>
              <h6>BG-132902</h6>
              <p>30.00$</p>
              <button>Buy</button>
            </div>
        </div>
      </section>
      <section>
        <h2>Favorites categories</h2>
        <div className={s.favoriteCategories}>
            <div>
              <img src={table} alt="table" />
              <h2>Tables</h2>
            </div>
            <div>
              <img src={chair} alt="chair" />
              <h2>Chairs</h2>
            </div>
            <div>
              <img src={table} alt="table" />
              <h2>Sofas</h2>
            </div>
            <div>
              <img src={chair} alt="chair" />
              <h2>Wardrobe</h2>
            </div>
          </div>
      </section>
      <Footer/>
    </>
  )
}

export default AccountPage
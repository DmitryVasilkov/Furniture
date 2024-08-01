import React from 'react';
import footerLogo from './img/Logo_main.png'
import amex from './img/Amex.png'
import paypal from './img/Paypal.png'
import maestro from './img/Maestro.png'
import applepay from './img/ApplePay.png'
import googlepay from './img/GooglePay.png'
import webmoney from './img/WepMoney.png'
import s from './Footer.module.css';

function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.footerContent}>
        <div>
          <p>
            Stylescape
          </p>
          <p>
            All items showcased in this store are intended for demonstration purposes. Graciously provided by <a href="#" style={{ textDecoration: 'underline' }}>Bellroy</a> for display only.
          </p>
        </div>
        <div>
          <ul>
            <li>
              <a href="#">About</a>
              </li>
            <li>
              <a href="#">Our story</a>
              </li>
            <li>
              <a href="#">Articles</a>
              </li>
            <li>
              <a href="#">Advice & Reviews</a>
              </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <a href="#">Help</a>
              </li>
            <li>
              <a href="#">Shipping information</a>
              </li>
            <li>
              <a href="#">Returns & refunds</a>
              </li>
            <li>
              <a href="#">Contact</a>
              </li>
          </ul>
        </div>
        <div className={s.formContainer}>
          <h4>Be in touch with us</h4>
          <form className={s.form}>
              <input type="email" placeholder="Enter your email" className={s.emailInput} />
              <button type="submit" className={s.subscribeButton}>&gt;</button>
          </form>
        </div>
      </div>
      <div className={s.logoAndPayments}>
        <div className={s.footerLogo}>
          <a href="http://">
            <img src={footerLogo} alt="footerLogo" />
          </a>
        </div>
        <div className={s.payments}>
          <a href="http://">
            <img src={amex} alt="Amex" />
          </a>
          <a href="http://">
            <img src={paypal} alt="PayPal" />
          </a>
          <a href="http://">
            <img src={maestro} alt="Maestro" />
          </a>
          <a href="http://">
            <img src={applepay} alt="ApplePay" />
          </a>
          <a href="http://">
            <img src={googlepay} alt="GooglePay" />
          </a>
          <a href="http://">
            <img src={webmoney} alt="WebMoney" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

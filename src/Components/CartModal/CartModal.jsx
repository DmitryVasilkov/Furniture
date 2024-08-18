// import React from 'react';
// import s from './CartModal.module.css';

// const CartModal = ({ isOpen, closeCart, cartItems }) => {

  

//   return (
//     <div className={`${s.cartModal} ${isOpen ? s.open : ''}`}>
//       <div className={s.cartHeader}>
//         <h2>Товаров 8 "256893$"</h2>
//         <button onClick={closeCart} className={s.closeButton}>X</button>
//       </div>
//       <div className={s.cartContent}>
//         {cartItems.length === 0 ? (
//           <p></p>
//         ) : (
//           cartItems.map(item => (
//             <div className={s.container}>
//               <button className={s.removeItem}>X</button>
//               <div key={item.id} className={s.cartItem}>
//                 <div>
//                   <img src={item.image} alt={item.name} className={s.cartItemImage} />
//                   <div className={s.selector}>
//                     <button>+</button>
//                     <p>4</p>
//                     <button>-</button>
//                   </div>
//                 </div>
//                 <div>
//                   <h4>{item.name}</h4>
//                   <p>{item.price}$</p>
//                 </div>
//               </div>
//             </div>
//           ))
//         )}
//         <p>Итого "256892$"</p>
//         <button className={s.order}>Order</button>
//       </div>
//     </div>
//   );
// };

// export default CartModal;





import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItem } from '../../Store/Slice/CartSlice';
import s from './CartModal.module.css';

const CartModal = ({ isOpen, closeCart, cartItems }) => {
  const dispatch = useDispatch();

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <div className={`${s.cartModal} ${isOpen ? s.open : ''}`}>
      <div className={s.cartHeader}>
        <h2>items {totalItems}</h2>
        <button onClick={closeCart} className={s.closeButton}>X</button>
      </div>
      <div className={s.cartContent}>
        {cartItems.length === 0 ? (
          <p>Bascket empty</p>
        ) : (
          cartItems.map(item => (
            <div className={s.container} key={item.id}>
              <button className={s.removeItem} onClick={() => dispatch(removeItem(item.id))}>X</button>
              <div className={s.cartItem}>
                <div>
                  <img src={item.image} alt={item.name} className={s.cartItemImage} />
                  <div className={s.selector}>
                    <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                    <p>{item.quantity}</p>
                    <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
                  </div>
                </div>
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.price}$</p>
                </div>
              </div>
            </div>
          ))
        )}
        <p>Total price: {totalPrice}$</p>
        <button className={s.order}>Order</button>
      </div>
    </div>
  );
};

export default CartModal;
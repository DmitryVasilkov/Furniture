import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import {clearCart} from "./ProductsSlice"


function Cart() {
    const cartItems = useSelector(state => state.products.cart)
    const dispatch = useDispatch()
    const checkout = async() => {
        if (cartItems.length === 0) {
            alert("Cart is empty, choose something")
            return 
        }
        const orderInfo = {
            items: cartItems,
            customer: {
                name: "Volodya",
                address: "Prospekt Lenina",
                email: "pupok@gmail.com",
            },
            item: {
                id: "5",
                name: "Kastrulya",
                price: "1200",
                category: "Office",  
            }
        }
        try {
            const responce = await fetch("/server/checkout", {
                method: "POST",
                headers: {"Content-Type": "aplication/json"},
                body: JSON.stringify(orderInfo)
            });
            if (!responce.ok) {
                throw new Error("Error to make an order")
            };
            const success = await responce.json()
            console.log('Order success', success);
            dispatch(clearCart());
            alert("Your order was successfully added")
        } catch (error) {
            console.log(error, "Error of adding item");
        }
    } 

    return  (
            <div>
                <h1>Cart</h1>
                {cartItems.length === 0 
                ? 
                (<p>Your basket is empty</p>) 
                : 
                (
                <div>
                    {cartItems.map(item => <CartItem key={item.id} item={item}/>)}
                    <button onClick={checkout}>Checkout</button>    
                </div>
                )}
            </div>
    )
}

export default Cart






// function proccess (back){
//     let result = [1,2,3,4,5]
//     for (let i=0; i < result.length; i++){
//     back(result[i]) = result[i]
//      }
//     return result;
//     }
    
    
    
//     function num(x){
//       return x*4
//     }
    
//     console.log(proccess(num))
    
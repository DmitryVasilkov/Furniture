import { useDispatch, useDispatch } from "react-redux";
import {updateItemQuantity} from './ProductsSlice'


function CartItem({item}) {
    const dispatch = useDispatch()
    const quantityChange = (e) => {
        const newQuantity = parseInt(e.target.value, 10)
        dispatch(updateItemQuantity({id: item.id, quantity: newQuantity}))
    }

    return (
            <div>
                <h3>
                    {item.name}
                </h3>
                <input type="number" value={item.quantity} onChange={quantityChange} min= "1"/>
            </div>
    )
}

export default CartItem

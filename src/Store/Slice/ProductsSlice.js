import { createSlice } from "@reduxjs/toolkit";

const getAllProducts = createSlice({
    name: 'products',
    initialState: {
        items: [],
        categories: [],
        cart: []
    },

    reducers: {
        setProducts(state, action){
            state.items = action.payload
        },
        setCategories(state, action){
            state.categories = action.payload
        },
        addToCart(state, action){
            const product = state.items.find(item => item.id === action.payload.id)
            if(product){
                state.cart.push(
                    {
                        ...product, 
                        quantity: action.payload.quantity
                    }
                )
            }

        }
    }
});

export const {
    setProducts,
    setCategories,
    addToCart,
} = getAllProducts.actions;

export default getAllProducts.reducer;
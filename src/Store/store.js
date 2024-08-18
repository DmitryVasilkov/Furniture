import { configureStore } from "@reduxjs/toolkit";
import productsReducer from './Slice/ProductsSlice'
import cartReducer from './Slice/CartSlice'




export default configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        // favorites: favoritesReducer,
        // search: searchReducer,
        // language: languageReducer,
    }
})
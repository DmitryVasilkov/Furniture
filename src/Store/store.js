import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
    reducer: {
        products: productsReducer,
        favorites: favoritesReducer,
        cart: cartReducer,
        search: searchReducer,
        language: languageReducer,
    }
})
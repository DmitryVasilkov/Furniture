import { createSlice } from "@reduxjs/toolkit";

const getAllProducts = createSlice({
    name: 'products',
    initialState: {
        items: [], //Все продукты доступные на сейчас
        categories: [], //Категории доступные на сейчас
        cart: [], //Те товары которые уже находятся в корзине
        filteredItems: [], //Отфильтрованные продукты которые прожал пользователь
        selectedCategory: [], //Выбранные категории товаров из добавленных корзину
    },

    reducers: {
        setProducts(state, action){
            state.items = action.payload
            state.filteredItems = action.payload
        },
        setCategories(state, action){
            state.categories = action.payload
        },
        setCategoryFilter(state, action){
            state.selectedCategory = action.payload
            if (action.payload === "") {
                state.filteredItems = state.items
            } else {
                state.filteredItems = state.items.filter(product => product.category === action.payload)
            }
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
        },
        updateItemQuantity(state, action){
            const cartItem = state.cart.find(item => item.id === action.payload.id)
            if (cartItem) {
                cartItem.quantity = action.payload.quantity
            }
        },
        clearCart(state){
            state.cart = []
        }
    }
});

export const {
    setProducts,
    setCategories,
    setCategoryFilter,
    addToCart,
    updateItemQuantity,
    clearCart,
} = getAllProducts.actions;

export default getAllProducts.reducer;
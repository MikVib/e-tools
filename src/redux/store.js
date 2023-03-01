import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import homeSlice from "./slicers/homeSlice";
import fakeShopSlice from "./slicers/fakeShopSlice";
import menuSlice from "./slicers/menuSlice";
import favoritesSlice from "./slicers/favoritesSlice";
import cartSlice from "./slicers/cartSlice";
import ordersSlice from "./slicers/ordersSlice";




const rootReducer = combineReducers({
    // home: homeSlice,
    shop: fakeShopSlice,
    menu: menuSlice,
    favor: favoritesSlice,
    cart: cartSlice,
    orders:ordersSlice,
});

const persistConfig = {
    key: 'root',
    storage,
    blacklist: [''],
    whiteList: ['']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store);
export default store;
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import themeReducer from './theme-reducer';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

const rootReducer = combineReducers({ 
    theme: themeReducer
})

const rootPersistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer
})

export const persistor = persistStore(store)
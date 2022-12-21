import { configureStore, combineReducers } from '@reduxjs/toolkit';
import projectFilterReducer from './project-filter-reducer';
import themeReducer from './theme-reducer';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

const rootReducer = combineReducers({ 
    project: projectFilterReducer,
    theme: themeReducer
})

const rootPersistConfig = {
    key: 'root',
    storage,
    blacklist: ['project']
}

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer
})

export const persistor = persistStore(store)
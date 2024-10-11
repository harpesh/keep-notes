import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import counterReducer from './counterslice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['keepnotes'], 
};

const reducer = combineReducers ({
  keepnotes: counterReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
});
  
const persistor = persistStore(store);

export { store, persistor };


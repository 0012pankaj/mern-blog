import { configureStore,combineReducers } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
 //use redux-persist for  store the state in a local storage so that on refresh page we dont loose our state
 //create root reducer for 1 for all reducer
const rootReducer = combineReducers({
  user: userReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
};
           //1.persist reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
 middleware: (getDefaultMiddleware) =>
   getDefaultMiddleware({ serializableCheck: false }), //middel ware to handel any error
});
                        //2 persist store
export const persistor = persistStore(store);
import {configureStore} from '@reduxjs/toolkit';
import counterSliceReducer from '../features/counter/counterSlice';
import productSliceReducer from '../features/products/productSlice';


export const store = configureStore({
  reducer: {
    counter: counterSliceReducer,
    products: productSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
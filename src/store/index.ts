import { configureStore } from "@reduxjs/toolkit";
import { groceryProductsReducer } from "./slices/features/groceryProductsSlice";

export const store = configureStore({
    reducer: {
        groceryProducts: groceryProductsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
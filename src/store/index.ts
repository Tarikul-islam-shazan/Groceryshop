import { configureStore } from "@reduxjs/toolkit";
import { groceryProductsReducer } from "./slices/features/groceryProductsSlice";
import { firestorApi } from "./apis/firestoreApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        groceryProducts: groceryProductsReducer,
        [firestorApi.reducerPath]: firestorApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(
        firestorApi.middleware,
    ), 
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
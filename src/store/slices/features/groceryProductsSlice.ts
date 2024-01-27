import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IGroceryProduct } from "../../../models";


export interface IGroceryProductState {
    data: IGroceryProduct[],
    total: number
}

export const initialState: IGroceryProductState = {
    data: [],
    total: 0
}

const groceryProductsSlice = createSlice({
    name: 'groceryProducts',
    initialState,
    reducers: {
        addGroceryProducts: (state, action: PayloadAction<IGroceryProduct>) => {
            state.data.push({
                name: action.payload.name,
                price: action.payload.price,
                productCode: action.payload.productCode
            })
        }
    }
})

export const { addGroceryProducts } = groceryProductsSlice.actions;

export const groceryProductsReducer = groceryProductsSlice.reducer;
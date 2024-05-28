import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductInfo {
  id: string;
  title: string;
  image: string;
  price: number;
  description: string;
  userId: string;
}

interface ProductState {
  products: ProductInfo[];
}

const initialState: ProductState = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<ProductInfo[]>) {
      state.products = action.payload;
    },
    addProduct(state, action: PayloadAction<ProductInfo>) {
      state.products.push(action.payload);
    },
    updateProduct(state, action: PayloadAction<ProductInfo>) {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
  },
});

export const { setProducts, addProduct, updateProduct } = productSlice.actions;

export default productSlice.reducer;

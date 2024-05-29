import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductInfo {
  _id: string;
  title: string;
  image?: string;
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
  name: "products",
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
        (product) => product._id === action.payload._id
      );
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
    clearProducts(state) {
      state.products = [];
    },
  },
});

export const { setProducts, addProduct, updateProduct, clearProducts } = productSlice.actions;

export default productSlice.reducer;

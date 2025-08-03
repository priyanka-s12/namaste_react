import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  //   initialState: { items: ['burger', 'pizza'] },
  initialState: { items: [] },
  reducers: {
    addItem: (state, action) => {
      //   console.log(action);
      //{payload: {id: '172468276', name: 'Chicken Pepperoni Pizza - Medium', category: 'Flash Sale Pizzas', description: 'Serves 1 | Yummy chicken pepperoni & 100% mozzarel…ng Gluten (Wheat), Soya and Milk & Milk Products.', imageId: 'FOOD_CATALOG/IMAGES/CMS/2025/4/19/d1ba409e-80b9-44…458d7cde_fbb1f81e-88f7-49d6-90c5-6275a29ddd79.jpg', …}, type: "cart/addItem"}
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
      state.items.length = 0;
      // return {items: 0}
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

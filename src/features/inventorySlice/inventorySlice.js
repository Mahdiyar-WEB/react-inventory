import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

let allItems = JSON.parse(localStorage.getItem("items")) ||[];
const otherCategories = JSON.parse(localStorage.getItem("category")) || [];
const initialState = {
  categories: [
    { value: "none", text: "none" },
    { value: "hats", text: "hats" },
    { value: "clothes", text: "clothes" },
    { value: "pants", text: "pants" },
    ...otherCategories
  ],
  items: JSON.parse(localStorage.getItem("items")) || [],
};

const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { payload } = action;
      const newItem = {
        id: payload.date,
        name: payload.name,
        date: payload.date,
        quantity: payload.quantity,
        category: payload.category,
      };
      state.items.push(newItem);
      allItems= [...allItems,newItem];
    },
    removeItem: (state, action) => {
      const filteredItems = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      state.items = filteredItems;
      allItems = filteredItems;
      localStorage.setItem("items",JSON.stringify(filteredItems));
    },
    addCategory: (state, action) => {
      const newCategory = {
        value: action.payload.title,
        text: action.payload.title,
        description: action.payload.description,
      };
      state.categories.push(newCategory);
    },
    searchItems: (state, action) => {
      if (action.payload.search === "") {
        state.items = allItems;
      } else {
        const filteredItems = allItems.filter((item) => {
          const { name, category } = item;
          const selectedValues = { name, category };
          return Object.values(selectedValues)
            .join(" ")
            .toLowerCase()
            .includes(action.payload.search.toLowerCase());
        });
        state.items = filteredItems;
      }
    },
    sortItems: (state, action) => {
      if (action.payload.sort === "oldest") {
        const clonedProducts = [...state.items];
        state.items = _.orderBy(clonedProducts, ["date"], ["asc"]);
      } else if (action.payload.sort === "newest") {
        const clonedProducts = [...state.items];
        state.items = _.orderBy(clonedProducts, ["date"], ["desc"]);
      }
    },
  },
});

export const { addItem, removeItem, addCategory, searchItems, sortItems } =
  inventorySlice.actions;
export default inventorySlice.reducer;

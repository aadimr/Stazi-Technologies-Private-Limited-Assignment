import { createSlice } from '@reduxjs/toolkit';
import carData from "../carData.json"

const initialState = {
  page: 1,
  limit: 6,
  searchValue: "",
  filteredCars: carData
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setPage: (state, action) => {
      console.log(action.payload)
      state.page = action.payload;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setFilteredCars: (state, action) => {
      state.filteredCars = carData.filter((items) => {
        if (!action.payload) {
          return items
        }
        else if (action.payload && items.title.toLowerCase().includes(action.payload.toLowerCase())) {
          return items;
        }
      })
    }
  },
});

export const { setPage, setLimit, setSearchValue, setFilteredCars } = paginationSlice.actions;

export default paginationSlice.reducer;

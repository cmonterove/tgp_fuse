import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCategories = createAsyncThunk('academyApp/categories/getCategories', async () => {
  const response = await axios.get('/api/academy-app/categories');
  const data2 = await response.data;
  console.log(data2)

  const data = [
    {
        "id": 0,
        "value": "bienes_inmuebles",
        "label": "Bienes inmuebles",
        "color": "#2196f3"
    },
    {
        "id": 1,
        "value": "vehiculos",
        "label": "Vehiculos",
        "color": "#ffc107"
    },
    {
        "id": 2,
        "value": "bienes_muebles",
        "label": "Bienes muebles",
        "color": "#607d8b"
    },
    {
        "id": 3,
        "value": "otros",
        "label": "Otros",
        "color": "#4caf50"
    }
]

  return data;
});

const categoriesAdapter = createEntityAdapter({});

export const { selectAll: selectCategories, selectById: selectCategoryById } =
  categoriesAdapter.getSelectors((state) => state.academyApp.categories);

const categorySlice = createSlice({
  name: 'academyApp/categories',
  initialState: categoriesAdapter.getInitialState({}),
  reducers: {},
  extraReducers: {
    [getCategories.fulfilled]: categoriesAdapter.setAll,
  },
});

export default categorySlice.reducer;

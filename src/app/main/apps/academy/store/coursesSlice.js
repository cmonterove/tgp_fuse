import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCourses = createAsyncThunk('academyApp/categories/getCourses', async () => {
  const response = await axios.get('/api/academy-app/courses');
  const data2 = await response.data;
  console.log(data2)

  const data = [
    {
        id: '15459251a6d6b397501',
        title: 'Casa',
        slug: 'basics-of-angular',
        description: 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        category: 'bienes_inmuebles',
        length: 30,
        totalSteps: 11,
        activeStep: 0,
        updated: 'Jun 28, 2017'
    },
    {
      id: '15459251a6d6b397502',
      title: 'Apartamento',
      slug: 'basics-of-angular',
      description: 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      category: 'bienes_inmuebles',
      length: 30,
      totalSteps: 11,
      activeStep: 0,
      updated: 'Jun 28, 2017'
  },
  {
    id: '15459251a6d6b397503',
    title: 'Terrenos',
    slug: 'basics-of-angular',
    description: 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'bienes_inmuebles',
    length: 30,
    totalSteps: 11,
    activeStep: 0,
    updated: 'Jun 28, 2017'
},
{
  id: '15459251a6d6b397504',
  title: 'Otros',
  slug: 'basics-of-angular',
  description: 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  category: 'bienes_inmuebles',
  length: 30,
  totalSteps: 11,
  activeStep: 0,
  updated: 'Jun 28, 2017'
},
{
  id: '15459251a6d6b397505',
  title: 'Carro',
  slug: 'basics-of-angular',
  description: 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  category: 'vehiculos',
  length: 30,
  totalSteps: 11,
  activeStep: 0,
  updated: 'Jun 28, 2017'
},
{
  id: '15459251a6d6b397506',
  title: 'Moto',
  slug: 'basics-of-angular',
  description: 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  category: 'vehiculos',
  length: 30,
  totalSteps: 11,
  activeStep: 0,
  updated: 'Jun 28, 2017'
},
{
  id: '15459251a6d6b397507',
  title: 'Lancha',
  slug: 'basics-of-angular',
  description: 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  category: 'vehiculos',
  length: 30,
  totalSteps: 11,
  activeStep: 0,
  updated: 'Jun 28, 2017'
},
{
  id: '15459251a6d6b397508',
  title: 'Avión',
  slug: 'basics-of-angular',
  description: 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  category: 'vehiculos',
  length: 30,
  totalSteps: 11,
  activeStep: 0,
  updated: 'Jun 28, 2017'
},
{
  id: '15459251a6d6b397509',
  title: 'Otros',
  slug: 'basics-of-angular',
  description: 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  category: 'vehiculos',
  length: 30,
  totalSteps: 11,
  activeStep: 0,
  updated: 'Jun 28, 2017'
},
{
  id: '15459251a6d6b397510',
  title: 'Maquinarias',
  slug: 'basics-of-angular',
  description: 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  category: 'bienes_muebles',
  length: 30,
  totalSteps: 11,
  activeStep: 0,
  updated: 'Jun 28, 2017'
},
{
  id: '15459251a6d6b397511',
  title: 'Herramientas',
  slug: 'basics-of-angular',
  description: 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  category: 'bienes_muebles',
  length: 30,
  totalSteps: 11,
  activeStep: 0,
  updated: 'Jun 28, 2017'
},
{
  id: '15459251a6d6b397512',
  title: 'Materiales',
  slug: 'basics-of-angular',
  description: 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  category: 'bienes_muebles',
  length: 30,
  totalSteps: 11,
  activeStep: 0,
  updated: 'Jun 28, 2017'
},
{
  id: '15459251a6d6b397513',
  title: 'Equipos Electronicos',
  slug: 'basics-of-angular',
  description: 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  category: 'bienes_muebles',
  length: 30,
  totalSteps: 11,
  activeStep: 0,
  updated: 'Jun 28, 2017'
},
{
  id: '15459251a6d6b397514',
  title: 'Obras de arte',
  slug: 'basics-of-angular',
  description: 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  category: 'bienes_muebles',
  length: 30,
  totalSteps: 11,
  activeStep: 0,
  updated: 'Jun 28, 2017'
},
{
  id: '15459251a6d6b397515',
  title: 'Otros',
  slug: 'basics-of-angular',
  description: 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  category: 'bienes_muebles',
  length: 30,
  totalSteps: 11,
  activeStep: 0,
  updated: 'Jun 28, 2017'
},
{
  id: '15459251a6d6b397516',
  title: 'Otros',
  slug: 'basics-of-angular',
  description: 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  category: 'otros',
  length: 30,
  totalSteps: 11,
  activeStep: 0,
  updated: 'Jun 28, 2017'
},
]

  return data;
});

const coursesAdapter = createEntityAdapter({});

export const { selectAll: selectCourses, selectById: selectCourseById } =
  coursesAdapter.getSelectors((state) => state.academyApp.courses);

const coursesSlice = createSlice({
  name: 'academyApp/courses',
  initialState: coursesAdapter.getInitialState({}),
  reducers: {},
  extraReducers: {
    [getCourses.fulfilled]: coursesAdapter.setAll,
  },
});

export default coursesSlice.reducer;

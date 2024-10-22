// App.jsx
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  Route,
  RouterProvider,
} from 'react-router-dom';

import MainLayout from './components/MainLayout.jsx';
import Pokemon from './pages/Pokemon.jsx';
import Details from './pages/Details.jsx';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>
    <Route index element={<Pokemon />} />
    <Route path="Details" element={<Details />} />

  </Route>
))

function App() {
  return <RouterProvider router={router} />


}


export default App;

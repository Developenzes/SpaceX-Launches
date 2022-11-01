import { Routes as RouterRoutes, Route } from 'react-router-dom';
import LaunchDetailsPage from './pages/LaunchDetailsPage';
import LaunchesListPage from './pages/LaunchesListPage';
import FavoritesPage from './pages/FavoritesPage';

export default function Routes() {

  return (
    <RouterRoutes>
      <Route index element={<LaunchesListPage />} />
      <Route path='/launches/:id' element={<LaunchDetailsPage />}/>
      <Route path='/favorites' element={<FavoritesPage />}/>
    </RouterRoutes>
  );
}
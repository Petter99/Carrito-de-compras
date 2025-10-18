import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Home } from './componentes/home/home';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'dashboard/:id', component: Dashboard}
];

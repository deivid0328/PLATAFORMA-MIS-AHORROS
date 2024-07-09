import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path:'',
        loadChildren:() => import('./modules/auth/auth.routes').then(c => c.AUTH_ROUTES)
    }



];

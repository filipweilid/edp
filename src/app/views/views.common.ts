import { Routes } from '@angular/router';
import { ViewsComponent } from './views.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

export const componentDeclarations: any[] = [];

export const providerDeclarations: any[] = [];

export const routes: Routes = [
    {
        path: '',
        component: ViewsComponent,
        children: [
            { path: 'movie/:movieId', component: MovieDetailComponent },
            {
                path: '**',
                redirectTo: '/movie/1',
                pathMatch: 'full',
            },
        ],
    },
];

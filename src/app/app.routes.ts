import { Routes } from '@angular/router';
import {LayoutComponent} from '@shared/components/layout/layout.component';
import {NotFoundComponent} from './domains/info/pages/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                //component: ListComponent  //asi es para realizar el cargue de toda la pagina
                loadComponent: () => import('./domains/products/pages/list/list.component') //loadCmponent funcion para que cuando se cargue la pagina no envie toda la informacion y se cargue mediante las solicitudes del usario
            },
        
            {
                path: 'about',
                //component: AboutComponent
                loadComponent: () => import('./domains/info/pages/about/about.component')
            },

            {
                path: 'product/:id', //id para recibir los parametros si o si un producto debe tener un id
                //component: ProductDetailComponent
                loadComponent: () => import('../app/domains/products/pages/product-detail/product-detail.component')
            },
        ]
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

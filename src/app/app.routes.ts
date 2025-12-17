import { Routes } from '@angular/router';
import { Card } from './card/card';
import { Home } from './home/home';
import { Product,} from './product/product';
import { SingleviewList } from './singleview-list/singleview-list';



export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: Home},
    {path: 'product', component: Product},
    {path: 'card', component: Card},
    {path: 'singleview-list/:titledid', component:SingleviewList}

];

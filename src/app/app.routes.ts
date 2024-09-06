import { Routes } from '@angular/router';
import { CardComponent } from '../app/card/card/card.component';
import { SuccessComponent } from '../app/success/success.component';

export const routes: Routes = [{path: "", component: CardComponent}, {path: "success", component: SuccessComponent}];

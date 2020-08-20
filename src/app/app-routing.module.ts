import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomCounterComponent } from './custom-counter/custom-counter.component';

const routes: Routes = [
  {path:'', component:CustomCounterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

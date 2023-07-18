import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Com1Component } from './com1/com1.component';
import { Com2Component } from './com2/com2.component';

const routes: Routes = [
  {
    path: 'com1',
    loadChildren: () =>
      import('./com1/com1.component').then((item) => item.Com1Component),
  },
  {
    path: 'com2',
    loadChildren: () =>
      import('./com2/com2.component').then((item) => item.Com2Component),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

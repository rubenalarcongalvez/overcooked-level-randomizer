import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './views/main/main.component';
import { AddRemoveLevelsComponent } from './views/add-remove-levels/add-remove-levels.component';
import { canActivateUser } from './shared/security/authguard';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    pathMatch: 'full',
  },
  {
    path: 'add-remove-levels', canActivate: [canActivateUser],
    component: AddRemoveLevelsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

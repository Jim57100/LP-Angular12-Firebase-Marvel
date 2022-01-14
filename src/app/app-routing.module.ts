import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroModifComponent } from './hero-modif/hero-modif.component';
import { HeroNewComponent } from './hero-new/hero-new.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'herolist',
    component: HeroListComponent
  },
  {
    path: 'new',
    component: HeroNewComponent
  },
  {
    path: 'modif/:id',
    component: HeroModifComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

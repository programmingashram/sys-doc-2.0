import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DocHeilightsComponent } from './doc-heilights/doc-heilights.component';
import { TypoComponent } from './typo/typo.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'docs', component: DocHeilightsComponent},
  {path: 'typo', component: TypoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

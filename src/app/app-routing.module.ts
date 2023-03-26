import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './features/home/homepage/homepage.component';
import { SearchpageComponent } from './features/search/searchpage/searchpage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'search', component: SearchpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { ContactUsComponent } from './modules/contact-us/contact-us.component';
import { StoreComponent } from './modules/store/store.component';
import { AccesoriesComponent } from './modules/accesories/accesories.component';
import { AboutUsComponent } from './modules/about-us/about-us.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'store',
    component: StoreComponent,
  },
  {
    path: 'accesories',
    component: AccesoriesComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

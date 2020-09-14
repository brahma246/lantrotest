import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginpageComponent} from './loginpage/loginpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundcomponentComponent } from './pagenotfoundcomponent.component';
import { UserprofileComponent } from './dashboard/userprofile/userprofile.component';

const routes: Routes = [
  
  { path:'login', component: LoginpageComponent },
  { path:'dashboard', component: DashboardComponent },
  { path:'profile', component: UserprofileComponent },
  { path: '', component: LoginpageComponent, pathMatch:'full' },
  { path:'**', component: PagenotfoundcomponentComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ManagerDetailsComponent } from './manager-details/manager-details.component';
import { EmployeeShowComponent } from './employee-show/employee-show.component';
import { EmployeeService } from './employee.service';
import { LeavehistoryComponent } from './leavehistory/leavehistory.component';
import { ApplyleaveComponent } from './applyleave/applyleave.component';
import { PendingleaveComponent } from './pendingleave/pendingleave.component';
import { ApprovedenyComponent } from './approvedeny/approvedeny.component';

const appRoutes : Routes = [
  { path : 'login',component:LoginComponent },
  { path : 'dashboard',component:DashboardComponent },
  { path : 'applyleave',component:ApplyleaveComponent },
  { path : '',component:EmployeeShowComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    EmployeeDetailsComponent,
    ManagerDetailsComponent,
    EmployeeShowComponent,
    LeavehistoryComponent,
    ApplyleaveComponent,
    PendingleaveComponent,
    ApprovedenyComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

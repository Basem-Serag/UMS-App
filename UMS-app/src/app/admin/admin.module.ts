import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UsersListComponent } from './components/users-list/users-list.component';
import { CreateEditUserComponent } from './components/create-edit-user/create-edit-user.component';

@NgModule({
  declarations: [
    UsersListComponent,
    CreateEditUserComponent
  ],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}

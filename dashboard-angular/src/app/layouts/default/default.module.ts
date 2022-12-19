import { DashboardService } from './../../modules/dashboard.service';
import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
import { DefaultComponent } from './default.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [DefaultComponent, DashboardComponent],
  imports: [CommonModule, RouterModule, SharedModule],
  providers: [DashboardService],
})
export class DefaultModule {}

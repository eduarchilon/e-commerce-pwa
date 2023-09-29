import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatIconModule } from '@angular/material/icon';
import { MatIconService } from 'src/app/services/mat-icon/mat-icon.service';
import { NotificationService } from 'src/app/services/notification.service';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, MatIconModule],
  providers: [MatIconService, NotificationService],
})
export class HomeModule {}

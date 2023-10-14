import { Component, OnInit } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { tokenSwPush } from 'src/app/model/token-push.model';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  respuesta!: tokenSwPush;
  VAPID_PUBLIC_KEY =
    'BCpfOVBWK3YLN5aJ-t5iZkPaPJO5nKIupLV9MSQ6vTArc0cTqOicE3RJAPicSH3hqXlVJFZ8iLlxJJs1STtb4Ik';

  constructor(
    private swPush: SwPush,
    private notificationService: NotificationService
  ) {
    // this.swPush
    //   .requestSubscription({
    //     serverPublicKey: this.VAPID_PUBLIC_KEY,
    //   })
    //   .then((res: any) => (this.respuesta = res))
    //   .catch((err) => (this.respuesta = err));
  }

  ngOnInit(): void {
    this.subscribeToNotifications();
    // this.swPush
    //   .requestSubscription({
    //     serverPublicKey: this.VAPID_PUBLIC_KEY,
    //   })
    //   .then((res: any) => (this.respuesta = res))
    //   .catch((err) => (this.respuesta = err));
  }

  subscribeToNotifications(): void {
    this.swPush
      .requestSubscription({
        serverPublicKey: this.VAPID_PUBLIC_KEY,
      })
      .then((res: any) => (this.respuesta = res))
      .catch((err) => (this.respuesta = err));
  }

  sendNotification(): void {
    console.log(this.respuesta);
    //Notification data example
    const payload = {
      notification: {
        icon: 'https://gcdnb.pbrd.co/images/gdz0JxIhdawu.png',
        badge:
          'https://gcdnb.pbrd.co/images/gdz0JxIhdawu.png',
        title: 'Tomar Misoprostol - Front',
        body: 'Hoy a las 10am debe tomarla pastilla',
        vibrate: [100, 50, 100],
        image:
          'https://gcdnb.pbrd.co/images/lToeU43x7Z4n.png',
        actions: [
          {
            action: 'https://www.google.com',
            title: 'Ver calendario',
          },
        ],
      },
    };
    if (this.respuesta !== undefined) {
      this.notificationService
        .enviarNotificacion(this.respuesta, payload)
        .subscribe({
          next: (response: any) => response,
        });
    } else {
      alert(
        'Debe dar Click en Solicitar Permiso y aceptar las notificaciones en la APP'
      );
    }
  }
}

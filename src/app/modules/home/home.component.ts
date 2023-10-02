import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { tokenSwPush } from 'src/app/model/token-push.model';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  respuesta!: tokenSwPush;
  readonly VAPID_PUBLIC_KEY =
    'BCpfOVBWK3YLN5aJ-t5iZkPaPJO5nKIupLV9MSQ6vTArc0cTqOicE3RJAPicSH3hqXlVJFZ8iLlxJJs1STtb4Ik';

  constructor(
    private swPush: SwPush,
    private notificationService: NotificationService
  ) {}

  subscribeToNotifications(): void {
    this.swPush
      .requestSubscription({
        serverPublicKey: this.VAPID_PUBLIC_KEY,
      })
      .then((res: any) => (this.respuesta = res))
      .catch((err) => (this.respuesta = err));
  }

  sendNotification(): void {
    //Notification data example
    const payload = {
      notification: {
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Facebook_icon_%28black%29.svg/2048px-Facebook_icon_%28black%29.svg.png',
        badge:
          'https://i.pinimg.com/1200x/4e/5d/6e/4e5d6eb79c88fd031051c1f28b077b32.jpg',
        title: 'Tomar Misoprostol - Front',
        body: 'Hoy a las 10am debe tomarla pastilla',
        vibrate: [100, 50, 100],
        image:
          'https://img.squadhelp.com/story_images/visual_images/11155823.jpg?class=show',
        actions: [
          {
            action: 'https://www.google.com',
            title: 'Ver calendario',
          },
        ],
      },
    };
    if (this.respuesta !== undefined) {
      this.notificationService.enviarNotificacion(this.respuesta, payload).subscribe(
        (response) => {
          console.log('Notificación enviada correctamente:', response);
        },
        (error) => {
          console.error('Error al enviar la notificación:', error);
        }
      );
    } else {
      alert(
        'Debe dar Click en Solicitar Permiso y aceptar las notificaciones en la APP'
      );
    }
  }
}

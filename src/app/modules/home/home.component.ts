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
    if (this.respuesta !== undefined) {
      this.notificationService.enviarNotificacion(this.respuesta).subscribe(
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

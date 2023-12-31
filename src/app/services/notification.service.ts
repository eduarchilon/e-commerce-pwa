import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private httpClient: HttpClient) {}

  public enviarNotificacion(data: any, payload: any): Observable<any> {
    return this.httpClient
      .post(
        `https://notification-server-alpha.vercel.app/api/enviar-notificacion`,
        {
          data: { data, payload },
        }
      )
      .pipe(
        map((response) => {
          return response;
        })
      );
  }
}

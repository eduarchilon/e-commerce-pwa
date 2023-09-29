import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private httpClient: HttpClient) {}

  public enviarNotificacion(data: any): Observable<any> {
    console.log(data);
    return this.httpClient.post(
      `https://notification-test-15xa0l06c-eduarchilon.vercel.app/api/enviar-notificacion`,
      {
        data: data,
      }
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateMenuPageModel } from '../model/create-menu-page.model';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  public apiMockFromWeb = "https://6a0a886f21e4456256961108.mockapi.io/sophorn/demo/api/v1/sophorn-demo-api";


  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {
    return this.http.get<any>(this.apiMockFromWeb);
  }
  public getDataById(): Observable<any> {
    return this.http.get<any>(this.apiMockFromWeb);
  }

  public updateData(id: string, payload: any): Observable<any> {
    return this.http.put<any>(`${this.apiMockFromWeb}/${id}`, payload);
  }
  
  public deleteData(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiMockFromWeb}/${id}`);
  }

  public createData(payload: CreateMenuPageModel): Observable<any> {
    return this.http.post<any>(`${this.apiMockFromWeb}`, payload, ); 
  }
  
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Material } from '../model/Material';
import { HttpClient } from '@angular/common/http';
import { QtdGastaPorPadeiro } from '../model/QtdGastaPorPadeiro';

@Injectable({
  providedIn: 'root'
})
export class MaterialServiceService {

  constructor(private http: HttpClient) { }

  getQtdGastaPorPadeiroByUser(user: string): Observable<QtdGastaPorPadeiro[]>{
    return this.http.get<QtdGastaPorPadeiro[]>(`http://localhost:8080/rawMaterials/user/${user}`)
  }

  postMaterial(material: Material): Observable<Material>{
    return this.http.post<Material>('http://localhost:8080/rawMaterials', material)
  }

  getMaterialByName(name: string): Observable<Material[]>{
    return this.http.get<Material[]>(`http://localhost:8080/rawMaterials/${name}`)
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Material } from '../model/Material';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MaterialServiceService {

  constructor(private http: HttpClient) { }

  getAllMaterials(): Observable<Material[]>{
    return this.http.get<Material[]>('http://localhost:8080/rawMaterials/leite')
  }

  postMaterial(material: Material): Observable<Material>{
    return this.http.post<Material>('http://localhost:8080/rawMaterials', material)
  }

  getMaterialByName(name: string): Observable<Material[]>{
    return this.http.get<Material[]>(`http://localhost:8080/rawMaterials/${name}`)
  }
}

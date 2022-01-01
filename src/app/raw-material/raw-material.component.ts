import { Component, OnInit } from '@angular/core';

import { Material } from '../model/Material';
import { MaterialServiceService } from '../service/material-service.service';

@Component({
  selector: 'app-raw-material',
  templateUrl: './raw-material.component.html',
  styleUrls: ['./raw-material.component.css']
})
export class RawMaterialComponent implements OnInit {

  material: Material = new Material();



  listaMaterials : Material[]

  constructor(
    private materialService: MaterialServiceService
  ) { }

  ngOnInit(): void {
    this.getAllPostagens()
    console.log(this.listaMaterials)
  }

  getAllPostagens(){
    this.materialService.getAllMaterials().subscribe((resp: Material[])=>{
      this.listaMaterials = resp
    })
  }

  cadastrar() {
    this.materialService
      .postMaterial(this.material)
      .subscribe((resp: Material) => {
        this.material = resp;
        alert('Postagem realizada com sucesso!');
      });
  }

  
}

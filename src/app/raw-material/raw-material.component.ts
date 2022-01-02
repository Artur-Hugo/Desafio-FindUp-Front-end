import { Component, OnInit } from '@angular/core';

import { Material } from '../model/Material';
import { QtdGastaPorPadeiro } from '../model/QtdGastaPorPadeiro';
import { MaterialServiceService } from '../service/material-service.service';

@Component({
  selector: 'app-raw-material',
  templateUrl: './raw-material.component.html',
  styleUrls: ['./raw-material.component.css']
})
export class RawMaterialComponent implements OnInit {

  material: Material = new Material();

  qtdGasta: QtdGastaPorPadeiro = new QtdGastaPorPadeiro();

  materialName: string

  qtdGastaUser : string

  idMaterial : number


  listaMaterials : Material[]

  listaQtdGasta : QtdGastaPorPadeiro[]


 

  constructor(
    private materialService: MaterialServiceService,
    
  ) { 
  
  
  }

  ngOnInit(): void {
    
    
  }



  cadastrar() {
    this.materialService
      .postMaterial(this.material)
      .subscribe((resp: Material) => {
        this.material = resp;
        alert('Cadastro de material realizada com sucesso!');
      });
  }

  findByMaterialName(){
    this.materialService.getMaterialByName(this.materialName).subscribe((resp: Material[])=> {
      this.listaMaterials = resp
    })
  }

  findByMaterialUser(){
  this.materialService.getQtdGastaPorPadeiroByUser(this.qtdGastaUser).subscribe((resp: QtdGastaPorPadeiro[])=>{
      this.listaQtdGasta = resp
  })
  }

  putQtdGasta(id: number){
  this.materialService.putQtdGastaPorPadeiro(id, this.qtdGasta ).subscribe((resp: QtdGastaPorPadeiro)=>{
    this.qtdGasta = resp;
  });
  }


  ver(){
    console.log(this.idMaterial)
  }
}

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

  verifique : string
  verifiqueQtd: number


 

  constructor(
    private materialService: MaterialServiceService,

  ) { 
  
  
  }

  ngOnInit(): void {
       
  }

  load() {
    location.reload()
  }

  cadastrar() {
    this.materialService
      .postMaterial(this.material)
      .subscribe((resp: Material) => {
        this.material = resp;
        alert('Cadastro de material realizada com sucesso!');
      },undefined => {
        alert("Precisa Preencher todos os Campos para cadastrar!");
        this.load()
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

  Pulguinante(id: number){
    if(this.verifique == undefined || this.verifiqueQtd == undefined){
      alert("Preencha todos os campos!!")
  }else{
    this.putQtdGasta(id)
  }
  }



  putQtdGasta(id: number){
  this.materialService.putQtdGastaPorPadeiro(id, this.qtdGasta ).subscribe((resp: QtdGastaPorPadeiro)=>{
    
      this.qtdGasta = resp;
      alert("Concluído com sucesso")
      this.load()
    
    
  },erro => {
    if(erro.status == 400){
        alert("Quantidade insuficiente para dar Baixa")
    }
  },
  
  );
  }


  ver(){
    console.log(this.idMaterial)
  }
}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  
})
export class BuscarComponent implements OnInit {
  
  heroes:any[]=[];
  termino:string='';
  constructor(private activatedRoute:ActivatedRoute,private _heroesService:HeroesService,private router:Router) {

   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      // console.log(params);
      this.termino=params['termino'];
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
      console.log(this.heroes);
    })
   
  }
  verHeroe(idx:number){
    this.router.navigate(['/heroe',idx]);
  }
}

import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-target-heroe',
  templateUrl: './target-heroe.component.html',
  styleUrls: ['./target-heroe.component.css']
})
export class TargetHeroeComponent implements OnInit {
  @Input() heroe:any={};  //indica que la variable puede venir desde afuera argumento que viene desde afuera
  @Input() index?:number;
  
  @Output() heroeSeleccionado: EventEmitter<number>;
  constructor(private router:Router) { 

    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verHeroe(){
    // console.log(this.index);
    this.router.navigate(['/heroe',this.index]);
    // this.heroeSeleccionado.emit( this.index );
  }
}

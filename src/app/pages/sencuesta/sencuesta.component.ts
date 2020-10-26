import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sencuesta',
  templateUrl: './sencuesta.component.html',
  styleUrls: ['./sencuesta.component.css']
})
export class SencuestaComponent implements OnInit {

  miFormulario: FormGroup;

  constructor(private auth: AuthService,
    private router: Router,
    private formb: FormBuilder) { }

  ngOnInit() {

    this.miFormulario = this.formb.group({

      tipoEncuesta: [''],
      cantidadPreguntas: 0,
      preguntas: this.formb.array([this.formb.group({pregunta: ['']})]),
      tipoPreguntas: this.formb.array([this.formb.group({tipoPregunta: ['']})]),
      receptor: [''],
      fecha: ['']
    });
  }


  salir(){

    this.auth.logout();
    this.router.navigateByUrl('/login');
  }

  removerPregunta(indice: number){
      this.preguntas.removeAt(indice);
  }

  agregarPregunta(){
    const preguntasFormGroup = this.formb.group({pregunta: ['']});

    this.preguntas.push(preguntasFormGroup);
  }

   get preguntas(){
      return this.miFormulario.get('preguntas') as FormArray;
  }

  get TipoPreguntas(){
    return this.miFormulario.get('tipoPreguntas') as FormArray;
  }
}

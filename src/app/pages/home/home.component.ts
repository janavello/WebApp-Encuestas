import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UsuarioModel } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit() {
  }


  salir(){

    this.auth.logout();
    this.router.navigateByUrl('/login');
  }

  verResultados(){

    this.router.navigateByUrl('/graficos');
  }


  generarEncuesta(){
    this.router.navigateByUrl('/sencuesta');
  }
}

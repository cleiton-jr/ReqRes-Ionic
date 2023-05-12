import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UsuariosService } from '../services/usuarios.service';
import { User } from '../models/User.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.page.html',
  styleUrls: ['./lista-usuarios.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterLink]
})
export class ListaUsuariosPage implements OnInit {
  listaUsuarios : User[] = [];

  constructor(private usuariosService : UsuariosService) { }
  ngOnInit() {
    this.usuariosService.getUsers().subscribe(resposta =>{
      this.listaUsuarios = resposta.data as User[];
    })
  }

}

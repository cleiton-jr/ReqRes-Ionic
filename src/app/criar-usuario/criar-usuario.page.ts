import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UsuariosService } from '../services/usuarios.service';
import { UserCreateUpdate } from '../models/UserCreateUpdate.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-usuario',
  templateUrl: './criar-usuario.page.html',
  styleUrls: ['./criar-usuario.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CriarUsuarioPage implements OnInit {

  nome : string = "";
  job : string = "";
  constructor(private usuariosServices: UsuariosService,private router : Router) { }

  ngOnInit() {
  }

  salvar(){
    if(this.nome != "" && this.job != ""){
      let user : UserCreateUpdate = {
        name: this.nome,
        job: this.job
      }

      this.usuariosServices.create(user).subscribe(resposta => {
        alert("Usuario Criado");
        console.log(resposta);
        this.router.navigate(['/lista-usuarios']);
      })
    }
  }

}

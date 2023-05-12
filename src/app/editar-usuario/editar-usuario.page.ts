import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserCreateUpdate } from '../models/UserCreateUpdate.model';
import { UsuariosService } from '../services/usuarios.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Resposta } from '../models/Resposta.model';
import { User } from '../models/User.model';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.page.html',
  styleUrls: ['./editar-usuario.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class EditarUsuarioPage implements OnInit {

  nome : string = "";
  job : string = "";
  id: number = 0;
  constructor(private usuariosServices: UsuariosService,private router : Router,    private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activeRoute.snapshot.params['id'];
    this.usuariosServices.getUserById(this.id).subscribe(resposta => {
      let user = resposta.data as User;
      this.nome = user.first_name + " " + user.last_name;
      this.job = "";
    });
  }

  salvar(){
    if(this.nome != "" && this.job != ""){
      let user : UserCreateUpdate = {
        name: this.nome,
        job: this.job
      }

      this.usuariosServices.update(user,this.id).subscribe(resposta => {
        alert("Usuario Editado");
        console.log(resposta);
        this.router.navigate(['/lista-usuarios']);
      })
    }
  }
}

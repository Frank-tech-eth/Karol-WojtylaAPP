import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonIcon, IonSegment, IonSegmentButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { ApiService, DatosRut } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonIcon,
    IonSegment, IonSegmentButton,
    CommonModule, FormsModule
  ]
})
export class LoginPage implements OnInit {
  claveUnica = '';
  errorMessage = '';
  successMessage = '';
  tipoUsuario: 'paciente' | 'funcionario' = 'paciente';
  datosUsuario: DatosRut | null = null;
  usuario = '';
  password = '';

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {}

  onSubmit() {
    this.errorMessage = '';
    this.successMessage = '';
    if (!this.usuario || !this.password) {
      this.errorMessage = 'Por favor, ingresa usuario y contraseña.';
      return;
    }
    this.apiService.loginUsuario(this.usuario, this.password).subscribe({
      next: (resp) => {
        if (resp.success) {
          localStorage.setItem('datosUsuario', JSON.stringify({ nombre: resp.nombre }));
          this.successMessage = '¡Bienvenido, ' + resp.nombre + '!';
          setTimeout(() => {
            this.router.navigate(['/inicio']);
          }, 700);
        } else {
          this.errorMessage = resp.error || 'Usuario o contraseña incorrectos.';
        }
      },
      error: () => {
        this.errorMessage = 'Error de conexión con la API.';
      }
    });
  }

  irARegistro() {
    this.router.navigate(['/registro']);
  }
}

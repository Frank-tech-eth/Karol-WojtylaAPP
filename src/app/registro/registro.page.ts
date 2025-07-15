import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonCard, IonCardContent, IonButton, IonInput, IonItem, IonLabel } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [IonContent, IonCard, IonCardContent, IonButton, IonInput, IonItem, IonLabel, CommonModule, FormsModule]
})
export class RegistroPage {
  nombre = '';
  usuario = '';
  password = '';
  errorMessage = '';
  successMessage = '';

  constructor(private router: Router, private apiService: ApiService) {}

  onSubmit() {
    this.errorMessage = '';
    this.successMessage = '';
    if (!this.nombre || !this.usuario || !this.password) {
      this.errorMessage = 'Todos los campos son obligatorios.';
      return;
    }
    this.apiService.registrarUsuario(this.nombre, this.usuario, this.password).subscribe({
      next: (resp) => {
        if (resp.success) {
          this.successMessage = '¡Registro exitoso! Ahora puedes iniciar sesión.';
          setTimeout(() => this.router.navigate(['/login']), 1200);
        } else {
          this.errorMessage = resp.error || 'Error al registrar.';
        }
      },
      error: () => {
        this.errorMessage = 'Error de conexión con la API.';
      }
    });
  }

  volver() {
    this.router.navigate(['/login']);
  }
} 
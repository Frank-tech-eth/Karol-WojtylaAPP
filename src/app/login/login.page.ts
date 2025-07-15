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

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {}

  onSubmit() {
    this.errorMessage = '';
    this.successMessage = '';
    if (!this.claveUnica) {
      this.errorMessage = 'Por favor, ingresa tu clave única.';
      return;
    }
    // Redirigir siempre a inicio para pruebas
    this.router.navigate(['/inicio']);
    // Si quieres volver a la lógica de API, descomenta el código original abajo
    /*
    this.successMessage = 'Verificando RUT...';
    this.apiService.obtenerDatosRut(this.claveUnica).subscribe({
      next: (html: string) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const table = doc.querySelector('table');
        if (table) {
          const tds = table.querySelectorAll('tbody td');
          if (tds.length >= 5) {
            this.datosUsuario = {
              nombre: tds[0].textContent || '',
              rut: tds[1].textContent || '',
              genero: tds[2].textContent || '',
              direccion: tds[3].textContent || '',
              ciudad: tds[4].textContent || ''
            };
            localStorage.setItem('datosUsuario', JSON.stringify(this.datosUsuario));
            this.successMessage = '¡Ingreso exitoso!';
            setTimeout(() => {
              this.router.navigate(['/inicio']);
            }, 500);
            return;
          }
        }
        this.errorMessage = 'RUT no encontrado o formato incorrecto.';
        this.successMessage = '';
      },
      error: () => {
        this.errorMessage = 'Error al consultar el RUT.';
        this.successMessage = '';
      }
    });
    */
  }
}

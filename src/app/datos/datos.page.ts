import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonButton, IonIcon } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { DatosRut } from '../services/api.service';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonButton, IonIcon, CommonModule]
})
export class DatosPage implements OnInit {
  datos: DatosRut | null = null;

  constructor(private router: Router) {}

  ngOnInit() {
    const datos = localStorage.getItem('datosUsuario');
    if (datos) {
      try {
        this.datos = JSON.parse(datos);
      } catch {}
    }
  }

  volver() {
    this.router.navigate(['/inicio']);
  }
} 
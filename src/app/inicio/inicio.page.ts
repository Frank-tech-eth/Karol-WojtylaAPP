import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonButton, IonIcon, IonCard, IonCardContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonButton, IonIcon, IonCard, IonCardContent, CommonModule, FormsModule]
})
export class InicioPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navegarACitas() {
    this.router.navigate(['/citas']);
  }

  navegarAAgendamiento() {
    this.router.navigate(['/agendamiento']);
  }

  navegarAInterconsultas() {
    this.router.navigate(['/interconsultas']);
  }

  navegarARecetas() {
    this.router.navigate(['/recetas']);
  }

  navegarADatos() {
    // Por ahora solo muestra un mensaje
    alert('Página de datos en desarrollo');
  }

  cerrarSesion() {
    this.router.navigate(['/login']);
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonButton, IonIcon, IonCard, IonCardContent, AlertController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonButton, IonIcon, IonCard, IonCardContent, CommonModule, FormsModule, RouterModule]
})
export class InicioPage implements OnInit {

  numeroReclamos = 3;
  nombreUsuario = '';

  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() {
    const datos = localStorage.getItem('datosUsuario');
    if (datos) {
      try {
        const datosObj = JSON.parse(datos);
        this.nombreUsuario = datosObj.nombre || '';
      } catch {}
    }
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
    this.router.navigate(['/datos']);
  }

  async registrarReclamo() {
    const alert = await this.alertController.create({
      header: 'Nuevo Reclamo',
      inputs: [
        {
          name: 'motivo',
          type: 'text',
          placeholder: 'Describe el motivo del reclamo'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Registrar',
          handler: (data) => {
            if (data.motivo && data.motivo.trim() !== '') {
              this.numeroReclamos++;
            }
          }
        }
      ]
    });
    await alert.present();
  }

  cerrarSesion() {
    this.router.navigate(['/login']);
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonList, IonItem, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonIcon, IonChip, AlertController } from '@ionic/angular/standalone';
import { ApiService, Profesional } from '../services/api.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-agendamiento',
  templateUrl: './agendamiento.page.html',
  styleUrls: ['./agendamiento.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonList, IonItem, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonIcon, IonChip, CommonModule, FormsModule, RouterModule],
})
export class AgendamientoPage implements OnInit {
  profesionales: Profesional[] = [];

  constructor(private apiService: ApiService, private alertController: AlertController) { }

  ngOnInit() {
    this.cargarProfesionales();
  }

  cargarProfesionales() {
    this.apiService.getProfesionales().subscribe(profesionales => {
      this.profesionales = profesionales;
    });
  }

  async agendarCita(profesional: Profesional, horario: string) {
    const fechaHoy = new Date().toISOString().split('T')[0];
    this.apiService.addCita({
      id: 0,
      profesional,
      fecha: fechaHoy,
      hora: horario,
      especialidad: profesional.especialidad
    });
    const alert = await this.alertController.create({
      header: '¡Cita Agendada!',
      message: `Tu cita con ${profesional.nombre} a las ${horario} ha sido agendada exitosamente.`,
      buttons: ['OK']
    });
    await alert.present();
  }
}

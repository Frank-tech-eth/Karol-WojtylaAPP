import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonList, IonItem, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonIcon, IonChip } from '@ionic/angular/standalone';
import { ApiService, Profesional } from '../services/api.service';

@Component({
  selector: 'app-agendamiento',
  templateUrl: './agendamiento.page.html',
  styleUrls: ['./agendamiento.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonList, IonItem, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonIcon, IonChip, CommonModule, FormsModule]
})
export class AgendamientoPage implements OnInit {
  profesionales: Profesional[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.cargarProfesionales();
  }

  cargarProfesionales() {
    this.apiService.getProfesionales().subscribe(profesionales => {
      this.profesionales = profesionales;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonList, IonItem, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonIcon } from '@ionic/angular/standalone';
import { ApiService, Interconsulta } from '../services/api.service';

@Component({
  selector: 'app-interconsultas',
  templateUrl: './interconsultas.page.html',
  styleUrls: ['./interconsultas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonList, IonItem, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonIcon, CommonModule, FormsModule]
})
export class InterconsultasPage implements OnInit {
  interconsultas: Interconsulta[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.cargarInterconsultas();
  }

  cargarInterconsultas() {
    this.apiService.getInterconsultas().subscribe(interconsultas => {
      this.interconsultas = interconsultas;
    });
  }
}

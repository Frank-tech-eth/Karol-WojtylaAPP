import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonList, IonItem, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonIcon } from '@ionic/angular/standalone';
import { ApiService, Cita } from '../services/api.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.page.html',
  styleUrls: ['./citas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonList, IonItem, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonIcon, CommonModule, FormsModule]
})
export class CitasPage implements OnInit {
  citas: Cita[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.cargarCitas();
  }

  cargarCitas() {
    this.apiService.getCitas().subscribe(citas => {
      this.citas = citas;
    });
  }
}

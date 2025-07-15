import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonList, IonItem, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonIcon } from '@ionic/angular/standalone';
import { ApiService, Receta } from '../services/api.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.page.html',
  styleUrls: ['./recetas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonList, IonItem, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonIcon, CommonModule, FormsModule, RouterModule]
})
export class RecetasPage implements OnInit {
  recetas: Receta[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.cargarRecetas();
  }

  cargarRecetas() {
    this.apiService.getRecetas().subscribe(recetas => {
      this.recetas = recetas;
    });
  }

  descargarReceta(receta: Receta) {
    this.apiService.descargarReceta(receta);
  }
}

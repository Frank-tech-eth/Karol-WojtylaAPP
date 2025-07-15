import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonIcon } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonIcon,
    CommonModule, FormsModule
  ]
})
export class LoginPage implements OnInit {
  claveUnica = '';
  errorMessage = '';
  successMessage = '';

  constructor(private router: Router) { }

  ngOnInit() {}

  onSubmit() {
    this.errorMessage = '';
    this.successMessage = '';
    if (!this.claveUnica) {
      this.errorMessage = 'Por favor, ingresa tu clave única.';
      return;
    }
    this.successMessage = '¡Ingreso exitoso!';
    setTimeout(() => {
      this.router.navigate(['/inicio']);
    }, 500);
  }
}

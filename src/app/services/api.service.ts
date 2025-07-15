import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Profesional {
  id: number;
  nombre: string;
  especialidad: string;
  horarios: string[];
}

export interface Cita {
  id: number;
  profesional: Profesional;
  fecha: string;
  hora: string;
  especialidad: string;
}

export interface Interconsulta {
  id: number;
  profesional: Profesional;
  especialidad: string;
  hospital: string;
  fecha: string;
}

export interface Receta {
  id: number;
  fecha: string;
  profesional: string;
  especialidad: string;
  archivo: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private profesionales: Profesional[] = [
    {
      id: 1,
      nombre: 'Dr. Juan Pérez',
      especialidad: 'Medicina General',
      horarios: ['08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00']
    },
    {
      id: 2,
      nombre: 'Dra. María González',
      especialidad: 'Pediatría',
      horarios: ['08:30', '09:30', '10:30', '11:30', '14:30', '15:30', '16:30']
    },
    {
      id: 3,
      nombre: 'Dr. Carlos Silva',
      especialidad: 'Dental',
      horarios: ['09:00', '10:00', '11:00', '12:00', '15:00', '16:00', '17:00']
    },
    {
      id: 4,
      nombre: 'Dra. Ana Rodríguez',
      especialidad: 'Ginecología',
      horarios: ['08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00']
    },
    {
      id: 5,
      nombre: 'Dr. Roberto Martínez',
      especialidad: 'Cardiología',
      horarios: ['08:30', '09:30', '10:30', '11:30', '14:30', '15:30', '16:30']
    }
  ];

  private citas: Cita[] = [
    {
      id: 1,
      profesional: this.profesionales[0],
      fecha: '2024-01-15',
      hora: '10:00',
      especialidad: 'Medicina General'
    },
    {
      id: 2,
      profesional: this.profesionales[2],
      fecha: '2024-01-16',
      hora: '15:00',
      especialidad: 'Dental'
    },
    {
      id: 3,
      profesional: this.profesionales[1],
      fecha: '2024-01-17',
      hora: '09:30',
      especialidad: 'Pediatría'
    }
  ];

  private interconsultas: Interconsulta[] = [
    {
      id: 1,
      profesional: this.profesionales[4],
      especialidad: 'Cardiología',
      hospital: 'Hospital Regional',
      fecha: '2024-01-20'
    },
    {
      id: 2,
      profesional: this.profesionales[3],
      especialidad: 'Ginecología',
      hospital: 'Hospital de la Mujer',
      fecha: '2024-01-22'
    }
  ];

  private recetas: Receta[] = [
    {
      id: 1,
      fecha: '2024-01-10',
      profesional: 'Dr. Juan Pérez',
      especialidad: 'Medicina General',
      archivo: 'receta_paracetamol.pdf'
    },
    {
      id: 2,
      fecha: '2024-01-08',
      profesional: 'Dra. María González',
      especialidad: 'Pediatría',
      archivo: 'receta_antibiotico.pdf'
    },
    {
      id: 3,
      fecha: '2024-01-05',
      profesional: 'Dr. Carlos Silva',
      especialidad: 'Dental',
      archivo: 'receta_analgesico.pdf'
    }
  ];

  constructor() { }

  getProfesionales(): Observable<Profesional[]> {
    return of(this.profesionales);
  }

  getCitas(): Observable<Cita[]> {
    return of(this.citas);
  }

  getInterconsultas(): Observable<Interconsulta[]> {
    return of(this.interconsultas);
  }

  getRecetas(): Observable<Receta[]> {
    return of(this.recetas);
  }

  descargarReceta(receta: Receta): void {
    // Simular descarga de PDF
    console.log(`Descargando: ${receta.archivo}`);
    // Aquí iría la lógica real de descarga
    alert(`Descargando ${receta.archivo}`);
  }
}

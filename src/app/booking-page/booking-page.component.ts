import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking-page',
  standalone: true,
  imports: [NavBarComponent,NgIf,NgFor,FormsModule],
  templateUrl: './booking-page.component.html',
  styleUrl: './booking-page.component.css'
})
export class BookingPageComponent {
   locations: string[] = ['Chennai', 'Tambaram', 'Avadi'];
  selectedLocation: string = '';
  theaters: { name: string, showTimings: string[] }[] = [];
  selectedTheater: { name: string, showTimings: string[] } | null = null;
  selectedTiming: string = '';

  constructor(private router: Router) {}

  onLocationSelect(): void {
    this.theaters = this.getTheatersForLocation(this.selectedLocation);
    this.selectedTheater = null;
    this.selectedTiming = ''; 
  }

  onSelectTheater(theater: { name: string, showTimings: string[] }): void {
    this.selectedTheater = theater;
    this.selectedTiming = ''; 
  }

  onSelectTiming(): void {
  }
  redirectToNewComponent(): void {
    this.router.navigate(['/bookingdetails'], { queryParams: { location: this.selectedLocation, theater: this.selectedTheater?.name, timing: this.selectedTiming } });
  }

  private getTheatersForLocation(location: string): { name: string, showTimings: string[] }[] {
    
    switch (location) {
      case 'Chennai':
        return [
          { name: 'Rohini', showTimings: ['Kungfu Panda 10:00 AM', 'Theri 1:00 PM', 'Batman 4:00 PM'] },
          { name: 'AGS Maduravoya', showTimings: ['Veeram 11:00 AM', 'Dark Night 2:00 PM', 'Por 5:00 PM'] },
          { name: 'PVR INOX', showTimings: ['Lover 12:00 PM', 'Dune-2 3:00 PM', 'Premalu 6:00 PM'] },
          { name: 'VR-PVR', showTimings: ['Leo 1:00 PM', 'Avatar 4:00 PM', 'Spider-man 7:00 PM'] }
        ];
      case 'Tambaram':
        return [
          { name: 'National Theater', showTimings: ['9:00 AM', '12:00 PM', '3:00 PM'] },
          { name: 'Varadharaj Cinemas', showTimings: ['10:00 AM', '1:00 PM', '4:00 PM'] },
          { name: 'S2 cinemas', showTimings: ['11:00 AM', '2:00 PM', '5:00 PM'] }
        ];
      case 'Avadi':
        return [
          { name: 'Rakki Cinemas', showTimings: ['9:30 AM', '12:30 PM', '3:30 PM'] },
          { name: 'Sangam Movies', showTimings: ['10:30 AM', '1:30 PM', '4:30 PM'] },
          { name: 'PVR AMPA MALL', showTimings: ['11:30 AM', '2:30 PM', '5:30 PM'] }
        ];
      default:
        return [];
    }
  }

}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking-details',
  standalone: true,
  imports: [],
  templateUrl: './booking-details.component.html',
  styleUrl: './booking-details.component.css'
})
export class BookingDetailsComponent {
  selectedLocation: string = '';
  selectedTheater: string = '';
  selectedTiming: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.route.queryParams.subscribe(params => {
      this.selectedLocation = params['location'];
      this.selectedTheater = params['theater'];
      this.selectedTiming = params['timing'];
    });
  }
}

import {
  Component,
  OnInit,
  ViewContainerRef
} from '@angular/core';

import { ApiService } from '../api/api.service';
import { HttpClient } from '@angular/common/http';

import { ModalDialogService } from 'ngx-modal-dialog';
import { HotelModalComponent } from '../hotel-modal/hotel-modal.component';

import * as _ from 'lodash';

@Component({

  selector: 'feed',
  styleUrls: ['./feed.component.css'],
  templateUrl: './feed.component.html'
})
export class FeedComponent implements OnInit {

  public hotels;

  public hotelFilter = {
    name: '',
    city: {name: ''},
    amenities: {
      shared_kitchen: '',
      private_bath: ''
    }
  };

  constructor(private http: HttpClient, private apiService: ApiService,
              private modalDialogService: ModalDialogService,
              private viewContainer: ViewContainerRef) {
    this.apiService.getHotelsData().subscribe((data) => {
      console.log('data', data);
      this.hotels = data;
    });
  }

  public ngOnInit() {
    console.log('hello `Feed` component');
  }

  public openHotelModal(hotel) {
    this.modalDialogService.openDialog(this.viewContainer, {
      childComponent: HotelModalComponent,
      settings: {
        closeButtonClass: 'close theme-icon-close'
      },
      data: hotel
    });
  }

  public toggleAmenitie(amenitie) {
    this.hotelFilter.amenities[amenitie] = !this.hotelFilter.amenities[amenitie];
    if (!this.hotelFilter.amenities[amenitie]) {
      this.hotelFilter.amenities[amenitie] = null;
    }
  }

  public sortByRate() {
    const sortHotels = _.sortBy(this.hotels, [function (o) {
      return o.rate;
    }]);
    this.hotels = sortHotels;
  }

}

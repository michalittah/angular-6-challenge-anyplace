import {
  Component,
  OnInit,
  ViewContainerRef
} from '@angular/core';

import { ApiService } from '../api/api.service';
import { HttpClient } from '@angular/common/http';

import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { HotelModalComponent } from '../hotel-modal/hotel-modal.component';

import * as _ from 'lodash';

// import { XLargeDirective } from './x-large';

@Component({
  /**
   * The selector is what angular internally uses
   * for `document.querySelectorAll(selector)` in our index.html
   * where, in this case, selector is the string 'home'.
   */
  selector: 'feed',
  /**
   * We need to tell Angular's Dependency Injection which providers are in our app.
   */

  /**
   * Our list of styles in our component. We may add more to compose many styles together.
   */
  styleUrls: ['./feed.component.css'],
  /**
   * Every Angular template is first compiled by the browser before Angular runs it's compiler.
   */
  templateUrl: './feed.component.html'
})
export class FeedComponent implements OnInit {
  /**
   * Set our default values
   */
  /**
   * TypeScript public modifiers
   */

  public hotels;
  public hotelName;
  public cityName;
  public sharedKitchen;
  public privateBath;

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
    /**
     * this.title.getData().subscribe(data => this.data = data);
     */
  }

  public openHotelModal(hotel) {
    this.modalDialogService.openDialog(this.viewContainer, {
      // title: hotel.name,
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
    const sortHotels = _.sortBy(this.hotels, [function(o) {
      return o.rate;
    }]);
    this.hotels = sortHotels;
  }

}

import { IModalDialog, IModalDialogOptions } from 'ngx-modal-dialog';
import { Component, ComponentRef } from '@angular/core';

@Component({
  selector: 'hotel-modal',
  styleUrls: ['./hotel-modal.component.css'],
  templateUrl: './hotel-modal.component.html'
})
export class HotelModalComponent implements IModalDialog {
  public hotelData: string;

  public dialogInit(reference: ComponentRef<IModalDialog>,
                    options: Partial<IModalDialogOptions<string>>) {
    this.hotelData = options.data;
  }
}

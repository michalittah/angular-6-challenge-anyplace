import { IModalDialog, IModalDialogOptions } from 'ngx-modal-dialog';
import { Component, ComponentRef } from '@angular/core';

@Component({
  selector: 'hotel-modal',
  /**
   * Our list of styles in our component. We may add more to compose many styles together.
   */
  styleUrls: ['./hotel-modal.component.css'],
  /**
   * Every Angular template is first compiled by the browser before Angular runs it's compiler.
   */
  templateUrl: './hotel-modal.component.html'
})
export class HotelModalComponent implements IModalDialog {
  public hotelData: string;

  public dialogInit(reference: ComponentRef<IModalDialog>,
                    options: Partial<IModalDialogOptions<string>>) {
    this.hotelData = options.data;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'saa-modal',
  templateUrl: './modal.component.html'
})

export class ModalComponent {
    isOpen = false;

    toggleOpenClose(): void {
        this.isOpen = !this.isOpen;
    }
}

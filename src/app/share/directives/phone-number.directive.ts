import {
    Directive,
    HostListener,
    ElementRef,
} from '@angular/core';

@Directive({
    selector: '[appPhoneNumberFormat]',
})
export class PhoneNumberFormatDirective {
    constructor(private el: ElementRef) { }

    @HostListener('input', ['$event'])
    onInput(event: Event): void {
        const input = this.el.nativeElement as HTMLInputElement;

        // Remove non-numeric characters
        let value = input.value.replace(/\D/g, '');

        // Limit to 10 digits only
        value = value.substring(0, 10);

        // Format: 086 700 745
        if (value.length > 6) {
            value = `${value.substring(0, 3)} ${value.substring(3, 6)} ${value.substring(6)}`;
        } else if (value.length > 3) {
            value = `${value.substring(0, 3)} ${value.substring(3)}`;
        }

        input.value = value;
    }
}
import { Directive, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appEditablePreventEventKey]',
    standalone: true
})
export class EditablePreventEventKeyDirective {
    @Input('appEditablePreventEventKey') eventKey!: string;

    @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
        if (event.key === this.eventKey) {
            event.preventDefault();
        }
    }
}
import { Directive, ElementRef, HostListener, inject, Input } from '@angular/core';

@Directive({
    selector: '[appEditableMaxlength]',
    standalone: true
})
export class EditableMaxlengthDirective {
    private _el = inject(ElementRef);

    @Input('appEditableMaxlength') maxLength!: string;

    @HostListener('input', ['$event']) onInput(event: any) {
        let element = this._el.nativeElement;
        let text = element.innerText || element.textContent;

        if (text.length >= +this.maxLength) {
            let truncatedText = text.substring(0, +this.maxLength);
            element.innerText = truncatedText;
        }

        this.setCursorToEnd();
    }

    private setCursorToEnd() {
        let element = this._el.nativeElement;

        element.focus();

        let range = document.createRange();
        let selection = window.getSelection();

        range.selectNodeContents(element);

        // Move cursor to the end of the content
        range.collapse(false);

        selection?.removeAllRanges();
        selection?.addRange(range);
    }
}
import { Directive, HostListener, Input, ElementRef, Renderer2, inject } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
    selector: '[appDelayError]',
    standalone: true
})
export class DelayErrorDirective {
    @Input() control!: NgModel;
    @Input() value!: string;
    @Input() errorClass!: string;
    @Input() delay!: number;

    private _el = inject(ElementRef);
    private _renderer = inject(Renderer2);
    private _debouceTimeout: any;

    @HostListener('ngModelChange') onInputChange() {
        clearTimeout(this._debouceTimeout);

        this._debouceTimeout = setTimeout(() => {
            if (this.control.invalid && this.control.touched && this.value) {
                this._renderer.addClass(this._el.nativeElement, this.errorClass);
            } else {
                this._renderer.removeClass(this._el.nativeElement, this.errorClass);
            }
        }, this.delay);
    }
}
import {Directive, ElementRef, Renderer2, HostBinding, HostListener} from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {
@HostBinding('class.open') isOpen = false;

@HostListener('click') toggleClass() {
    this.isOpen = !this.isOpen;
}

//Another way of doing it:
// isOpen = true;
// @HostListener('click') click(eventData: Event) {
//     if(this.abielto){
//         this.renderer.addClass(this.elRef.nativeElement, 'open');
//         this.abielto = false;
//     }
//     else {
//         this.renderer.removeClass(this.elRef.nativeElement, 'open');
//         this.abielto = true;
//     }
    
}
import { Directive, HostBinding, HostListener, Input } from "@angular/core";

@Directive({
    selector:'[submitButton]'
})

export class SubmitButton{

    @Input() buttonBeackgroundColor:string='blue'
    @Input() buttonHoverColor:string='green'

    @HostBinding('style.background-color') background_color:string='blue'
    @HostBinding('style.background-color') hover_color:string='green'

    @HostListener('mouseenter') onHover(){
        this.background_color='pink',
        this.hover_color='red'
    }
    @HostListener('mouseout') onMouseOut(){
        this.background_color='blue',
        this.hover_color='green'
    }
}
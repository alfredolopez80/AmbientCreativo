import { Component, OnInit, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'acca-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer) {
    window.onresize = () => {

      if ((window.innerHeight > 650) && (window.innerWidth > 950)) {
        let div = this.elRef.nativeElement.querySelector('#stickyfooter');
        this.renderer.setElementClass(div, 'navbar-fixed-bottom', true);
      } else {
        let div = this.elRef.nativeElement.querySelector('#stickyfooter');
        this.renderer.setElementClass(div, 'navbar-fixed-bottom', false);
      };

    };
   }

   ngOnInit() {
      if ((window.innerHeight > 650) && (window.innerWidth > 950)) {
        let div = this.elRef.nativeElement.querySelector('#stickyfooter');
        this.renderer.setElementClass(div, 'navbar-fixed-bottom', true);
      } else {
        let div = this.elRef.nativeElement.querySelector('#stickyfooter');
        this.renderer.setElementClass(div, 'navbar-fixed-bottom', false);
      };
   }

}

import {Directive, ElementRef, HostListener, Input} from '@angular/core';

import {PopoverService} from '../services/popover.service';
import {PopoverContent, PopoverRef} from '../services/popover-ref';

export type PopoverPosition = 'top' | 'bottom' | 'right' | 'left' | 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

@Directive({
  selector: '[appPopover]'
})
export class PopoverDirective {

  private _popoverRef: PopoverRef;

  @Input() position: PopoverPosition;

  @Input() content: PopoverContent;

  @Input() popoverHoverEnabled: boolean;

  @HostListener('mouseenter')
  show() {
    this._popoverRef = this.popper.open(this.elementRef, this.content, this.position);
  }

  @HostListener('mouseout')
  hide() {
        setTimeout(() => {
      if (this.popoverHoverEnabled && this._popoverRef.isHovered) {
        return;
      }
      this._popoverRef.close();
    }, 100);
  }

  constructor(
    private popper: PopoverService,
    private elementRef: ElementRef
  ) {
  }

}

import {TemplateRef, Type} from '@angular/core';
import {OverlayRef} from '@angular/cdk/overlay';

export type PopoverContent = TemplateRef<any> | Type<any> | string;

export class PopoverRef {

  isHovered: boolean;

  constructor(
    public overlayRef: OverlayRef,
    public content: PopoverContent) {
  }

  close() {
    this.overlayRef.dispose();
  }

  onMouseEnter(): void {
    this.isHovered = true;
  }

  onMouseLeave(): void {
    this.isHovered = false;
    this.close();
  }
}


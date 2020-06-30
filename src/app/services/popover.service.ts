import {ElementRef, Injectable, Injector} from '@angular/core';
import {ConnectedPosition, Overlay} from '@angular/cdk/overlay';
import {ComponentPortal, PortalInjector} from '@angular/cdk/portal';
import {PopoverComponent} from '../components/popover/popover.component';
import {PopoverContent, PopoverRef} from './popover-ref';
import {Positions} from './Positions';
import {PopoverPosition} from '../directives/popover.directive';


@Injectable({
  providedIn: 'root'
})
export class PopoverService {

  constructor(
    private overlay: Overlay,
    private injector: Injector
  ) {
  }

  open(origin: ElementRef, content: PopoverContent, position: PopoverPosition, alternativePosition?: PopoverPosition): PopoverRef {
    const positionStrategy = this._getPositionStrategy(origin, position, alternativePosition);
    const overlayRef = this.overlay.create({positionStrategy});
    const popoverRef = new PopoverRef(overlayRef, content);
    const injector = this._createInjector(popoverRef, this.injector);
    const popoverPortal = new ComponentPortal(PopoverComponent, null, injector);

    overlayRef.attach(popoverPortal);

    return popoverRef;
  }

  private _createInjector(popoverRef: PopoverRef, injector: Injector) {
    const tokens = new WeakMap([[PopoverRef, popoverRef]]);
    return new PortalInjector(injector, tokens);
  }

  private _getPositionStrategy(origin: ElementRef, position: PopoverPosition, alternativePosition?: PopoverPosition) {
    const mainPosition = Positions[position] as ConnectedPosition;
    const fallbackPosition = alternativePosition ? Positions[alternativePosition] as ConnectedPosition : this._invertPosition(position);

    return this.overlay.position()
      .flexibleConnectedTo(origin)
      // желаемое положение popover в порядке приоритетности на случай, если popover не может быть расположен в заданном положении
      .withPositions([mainPosition, fallbackPosition]);
  }

  /** Если при заданном position popover не помещается во viewport, отобразим в противоположном направлении */
  private _invertPosition(position: string): ConnectedPosition {
    let fallbackPosition;

    switch (position) {
      case 'top':
        fallbackPosition = Positions.bottom;
        break;
      case 'bottom':
        fallbackPosition = Positions.top;
        break;
      case 'left':
        fallbackPosition = Positions.right;
        break;
      case 'right':
        fallbackPosition = Positions.left;
        break;
      case 'top-right':
        fallbackPosition = Positions['bottom-right'];
        break;
      case 'top-left':
        fallbackPosition = Positions['bottom-left'];
        break;
      case 'bottom-right':
        fallbackPosition = Positions['top-right'];
        break;
      case 'bottom-left':
        fallbackPosition = Positions['top-left'];
        break;
    }

    return fallbackPosition as ConnectedPosition;
  }
}

export const Positions = {
  'top': {
    originX : 'center',
    originY : 'top',
    overlayX: 'center',
    overlayY: 'bottom',
    offsetY: -8,
    panelClass: ['top']
  },
  'bottom': {
    originX : 'center',
    originY : 'bottom',
    overlayX: 'center',
    overlayY: 'top',
    offsetY: 8,
    panelClass: ['bottom']
  },
  'right': {
    originX : 'end',
    originY : 'center',
    overlayX: 'start',
    overlayY: 'center',
    offsetX: 8,
    panelClass: ['right']
  },
  'left': {
    originX : 'start',
    originY : 'center',
    overlayX: 'end',
    overlayY: 'center',
    offsetX: -8,
    panelClass: ['left']
  },
  'top-right': {
    originX: 'end',
    originY: 'top',
    overlayX: 'end',
    overlayY: 'bottom',
    offsetY: -8,
    panelClass: ['top-right']
  },
  'top-left': {
    originX: 'start',
    originY: 'top',
    overlayX: 'start',
    overlayY: 'bottom',
    offsetY: -8,
    panelClass: ['top-left']
  },
  'bottom-right': {
    originX: 'end',
    originY: 'bottom',
    overlayX: 'end',
    overlayY: 'top',
    offsetY: 8,
    panelClass: ['bottom-right']
  },
  'bottom-left': {
    originX: 'start',
    originY: 'bottom',
    overlayX: 'start',
    overlayY: 'top',
    offsetY: 8,
    panelClass: ['bottom-left']
  }
};

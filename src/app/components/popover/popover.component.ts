import {Component, OnInit, TemplateRef} from '@angular/core';
import {PopoverContent, PopoverRef} from '../../services/popover-ref';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
  animations: [
    trigger('popover', [
      transition(':enter', [
        style({opacity: 0}),
        animate(300, style({opacity: 1})),
      ]),
      transition(':leave', [
        animate(300, style({opacity: 0})),
      ]),
    ]),
  ],
})

export class PopoverComponent implements OnInit {
  renderMethod: 'template' | 'component' | 'text' = 'component';
  content: PopoverContent;
  context;

  constructor(
    public popoverRef: PopoverRef
  ) {
  }

  ngOnInit() {
    this.content = this.popoverRef.content;

    if (typeof this.content === 'string') {
      this.renderMethod = 'text';
    } else if (this.content instanceof TemplateRef) {
      this.renderMethod = 'template';
    }
  }
}

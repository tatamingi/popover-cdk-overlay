import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {OverlayModule} from '@angular/cdk/overlay';

import { AppComponent } from './app.component';
import {PopoverService} from './services/popover.service';
import { PopoverComponent } from './components/popover/popover.component';
import { PopoverDirective } from './directives/popover.directive';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PopoverComponent,
    PopoverDirective
  ],
  entryComponents: [PopoverComponent],
  imports: [
    BrowserModule,
    OverlayModule,
    BrowserAnimationsModule
  ],
  providers: [PopoverService],
  bootstrap: [AppComponent]
})
export class AppModule { }

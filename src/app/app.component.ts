import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fallbackPositionWarning = 'Этот текст не помещается во viewport, поэтому автоматически отображается в противоположном направлении';
  fallbackPositionDescription = 'Если текст не помещается по viewport, он автоматически отобразится в противоположнм направлении';
}

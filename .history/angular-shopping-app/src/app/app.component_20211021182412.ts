import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-shopping-app';
  loadedFeatures ="recipe";

  onNavigate(feature: string): void {
    this.loadedFeatures = feature;
  }
}

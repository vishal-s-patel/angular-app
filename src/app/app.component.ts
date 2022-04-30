import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedTab: string = 'fibo';
  title = 'angular-app';

  setTab(tab: string): void {
    this.selectedTab = tab;
  }
}

import { Component } from '@angular/core';
import { Sidebar } from './components/sidebar/sidebar';
import { Feed } from './components/feed/feed';

@Component({
  selector: 'app-root',
  imports: [Sidebar, Feed],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  showSidebar: boolean = false;

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }
}

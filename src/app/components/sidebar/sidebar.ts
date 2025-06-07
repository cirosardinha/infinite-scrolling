import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserInfo } from '../user-info/user-info';
import { Menu } from '../menu/menu';

@Component({
  selector: 'app-sidebar',
  imports: [UserInfo, Menu],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  @Output() toggleSidebar = new EventEmitter<void>();
  @Input() showSidebar!: boolean;

  toggle() {
    this.toggleSidebar.emit();
  }
}

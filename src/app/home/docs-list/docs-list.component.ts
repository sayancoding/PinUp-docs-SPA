import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docs-list',
  templateUrl: './docs-list.component.html',
  styleUrls: ['./docs-list.component.css'],
})
export class DocsListComponent implements OnInit {
  isModalOn: boolean = false;
  showItems:any = {}
  constructor() {}
  ngOnInit(): void {
  }
  toggleModal() {
    this.isModalOn = !this.isModalOn;
  }
  detailView(data) {
    this.showItems = data
    console.log(data);
    this.toggleModal();
  }
}

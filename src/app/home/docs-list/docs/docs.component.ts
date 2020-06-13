import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { DocsService } from 'src/app/service/docs.service';


@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css'],
})
export class DocsComponent implements OnInit {
  constructor(private _doc: DocsService) {}

  @Output() modalToggle = new EventEmitter();
  docs:any[] = []

  ngOnInit(): void {
    this._doc.getDocs().subscribe((docs) => {
      this.docs = docs;
    });
  }
  parentToggleHandle(data:any) {
    this.modalToggle.emit(data);
  }
}

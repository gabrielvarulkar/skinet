import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss'],
})
export class PagerComponent implements OnInit {
  @Input() pageSize: number;
  @Input() totalCount: number;
  @Output() pagerChange = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  onPagerChanged(event) {
    this.pagerChange.emit(event.page);
  }
}

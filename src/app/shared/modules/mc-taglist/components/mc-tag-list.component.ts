import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'mc-tag-list',
  templateUrl: './mc-tag-list.component.html',
  styleUrls: ['./mc-tag-list.component.scss']
})
export class McTagListComponent implements OnInit {

  constructor() { }

  @Input('tags') tagsProps: string[]


  ngOnInit(): void {
    console.log(this.tagsProps)
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {UtilService} from "../../services/util.service";

@Component({
  selector: 'mc-pagination',
  templateUrl: './mc-pagination.component.html',
  styleUrls: ['./mc-pagination.component.scss']
})
export class McPaginationComponent implements OnInit {

  constructor(private utilsService: UtilService) { }

  @Input('total') totalProps: number
  @Input('limit') limitProps: number
  @Input('url') urlProps: string
  @Input('currentPage') currentPageProps: number
  pagesCount: number
  pages: number[]

  ngOnInit(): void {
    this.pagesCount = Math.ceil(this.totalProps/ this.limitProps)
    this.pages = this.utilsService.range(1, this.pagesCount)
  }

}

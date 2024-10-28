import { Component, OnInit } from '@angular/core';
import{Serie} from "../serie";
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {

  series: Array<Serie>= [];
  average: number = 0;

  constructor(private serieService: SerieService) { }

  getSeries(): void {
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
      this.getAverage(series);
    });
  }

  getAverage(series: Array<Serie>): void {
    let counter = 0;
    series.forEach(serie => {
      counter += serie.seasons;
    })
    this.average = counter/series.length
  }
 
  ngOnInit() {
    this.getSeries();
  }
 

}

import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrl: './flight-search.component.scss'
})
export class FlightSearchComponent implements OnInit {
  city!: any;

  constructor(){}

  ngOnInit(): void {
  }
  search(){
      console.log('aqui==',this.city);
      const emitValue = {city: this.city};
      //this.whenSearched.emit(emitValue);
    }
}

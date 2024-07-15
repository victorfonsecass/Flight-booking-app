import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-core',
  templateUrl: './search-core.component.html',
  styleUrl: './search-core.component.scss'
})
export class SearchCoreComponent implements OnInit {
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

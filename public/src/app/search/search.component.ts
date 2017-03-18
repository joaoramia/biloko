import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { All } from '../videos';
import { SearchService } from '../search.service';
import { GlobalEventEmitter } from '../global-events-manager.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: []
})
export class SearchComponent implements OnInit {

  videos: any;
  currentWords: string;
  constructor(private titleService: Title, private globalEventEmitter: GlobalEventEmitter) {
    this.globalEventEmitter.currentResults.subscribe((results: any) => this.videos = results);

    this.globalEventEmitter.currentWords.subscribe(words => this.currentWords = words);
  }

  ngOnInit() {
      this.globalEventEmitter.askForUpdate.emit(true);
      this.titleService.setTitle( `TRADOO | BUSCA`);
      this.globalEventEmitter.currentResults.subscribe((results: any) => this.videos = results);

      this.globalEventEmitter.currentWords.subscribe(words => this.currentWords = words);
  }

}

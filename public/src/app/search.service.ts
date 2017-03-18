import { Injectable } from '@angular/core';
import { All } from './videos';
import { GlobalEventEmitter } from './global-events-manager.service';

@Injectable()
export class SearchService {

  public currentSearch = [];
  private currentWords = '';
  constructor(private globalEventEmitter: GlobalEventEmitter) {
      this.globalEventEmitter.askForUpdate.subscribe(mode => {
          this.globalEventEmitter.currentResults.emit(this.currentSearch);
          this.globalEventEmitter.currentWords.emit(this.currentWords);
      })
  }

  checkVideo(video: any): boolean {
    let words = this.currentWords.split(' ');
    let found = false;
    words.forEach(word => {
        if (!found && (video.title.toLowerCase().includes(word) || video.author.toLowerCase().includes(word))){
            found = true;
        }
    });
    return found;
  }

  updateSearch() {
      this.currentWords = this.currentWords.toLowerCase();
      let result = All.filter(video => {
        let found = false;
        if (!found && (video.title.toLowerCase().includes(this.currentWords) || video.author.toLowerCase().includes(this.currentWords))){
            found = true;
        }
        return found;
      });
      this.currentSearch = result;
      this.globalEventEmitter.currentResults.emit(this.currentSearch);
  }

  setCurrentWords(str: string) {
      this.currentWords = str;
  }

}

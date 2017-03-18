import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class GlobalEventEmitter {
  public currentResults: EventEmitter<any> = new EventEmitter();
  public currentWords: EventEmitter<any> = new EventEmitter();
  public askForUpdate: EventEmitter<any> = new EventEmitter();

  constructor(){}
}

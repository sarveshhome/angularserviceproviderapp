import { Injectable } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  private static count = 0;
  constructor( ) {
      LogService.count = LogService.count + 1;
      console.log(LogService.count);
  }
  getData(name: string)
  {
    return  name;
  }
}

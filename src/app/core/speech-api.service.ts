import { Speech } from '../components/speech/speech.model';
import { Injectable } from '@angular/core';

@Injectable()
export class SpeechApiService {
  static speeches: Array<Speech> = [];
  constructor() {
    this.getSpeechData()
      .then( (data: any) => {
        let speeches = localStorage.getItem('speeches');
        if(speeches) {
          try  {
            SpeechApiService.speeches = JSON.parse(speeches);
          } catch (e) {
            console.log('Parse speeches error !');
          }
        } else {
          SpeechApiService.speeches = data.data;
          localStorage.setItem('speeches', JSON.stringify(data.data));
        }
      });
  }
  static update() {
    localStorage.setItem('speeches', JSON.stringify(SpeechApiService.speeches));
  }
  getSpeechData() {
    return fetch('assets/data.json')
            .then( res => {
              return res.json();
            });
  }
  search(query: string): Array<Speech> {
    let result: Array<Speech> = SpeechApiService.speeches.filter( item => {
      return item.title.includes(query) || item.content.includes(query) || item.subject.includes(query)
    });
    return result;
  }
}

import { Speech } from '../speech.model';
import { SpeechApiService } from '../../../core/speech-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speech-list',
  templateUrl: './speech-list.component.html',
  styleUrls: ['./speech-list.component.scss']
})
export class SpeechListComponent implements OnInit {
  speechList: Array<Speech>;
  selectedSpeech: Speech = new Speech();
  selectedIndex: number = -1;


  constructor(
      private api:SpeechApiService
  ) { }



  ngOnInit() {
    this.api.getSpeechData().then( (data: any) => {
      if(SpeechApiService.speeches.length) {
        this.speechList = SpeechApiService.speeches;
        this.speechList.concat(data.data);
        this.selectedSpeech = this.speechList[0];
        this.selectedIndex = 0;
      }  else {
        this.speechList = data.data;
        this.selectedSpeech = this.speechList[0];
        this.selectedIndex = 0;
        SpeechApiService.speeches = this.speechList;
      }

    });
  }
  removeSpeech() {
    this.speechList.splice(this.selectedIndex, 1);
    SpeechApiService.speeches = this.speechList;
    SpeechApiService.update();
  }

  selectSpeech( item: Speech, idx: number ) {
    this.selectedSpeech = item;
    this.selectedIndex = idx;
  }

}

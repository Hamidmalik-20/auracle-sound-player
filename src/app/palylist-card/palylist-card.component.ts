import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-palylist-card',
  templateUrl: './palylist-card.component.html',
  styleUrl: './palylist-card.component.css',
})
export class PalylistCardComponent implements OnInit {
  // data = [] = [];
  // constructor(private httpClient: HttpClient) {}
  // ngOnInit(): void {
  //   this.fetchData();
  // }
  // fetchData() {
  //   this.httpClient.get('https://danisha18.sg-host.com/wp-json/mp3-tracks-api/v1/tracks')
  //   .subscribe((data: any)=> {
  //     console.log(data);
  //     this.data = data;
  //   });
  // }
  data: any[] = [];
  constructor(private httpClient: HttpClient) {
    this.dataId = '';
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.httpClient
      .get('https://danisha18.sg-host.com/wp-json/mp3-tracks-api/v1/tracks')
      .subscribe((data: any) => {
        this.data = data.map((item: any) => ({
          id: item.id,
          name: item.name,
          url: item.url,
        }));
      });
  }
  @Input() dataId: string;
  
}

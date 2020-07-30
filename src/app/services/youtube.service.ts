import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/commont/http';

@Injectable()
export class YoutubeService {
  
  private youtubeUrl='https://www.googleapis.com/youtube/v3/';
  private apikey='AIzaSyCdgd_X4gBbOwg-XZzKnysuCLQaoRuqzic';
  private playlist='UUnotougIyavupQXYtaprrAA';
  private nextPageTocken='CAUQAA';

  constructor(private http:HttpClient) {}

    getVideos() {

      const url = `${this.youtubeUrl}/`

      const params = new HttpParams()
                    .set ('part','snippet')
                    .set ('maxResults','10')
                    .set ('playlistId',this.playlist)
                    .set ('key',this.apikey)



      return this.http.get(url, {params:params})
    }



}

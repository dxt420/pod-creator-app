import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, from, defer } from 'rxjs';
import { map, mergeMap } from "rxjs/operators";

import { HTTP } from '@ionic-native/http/ngx';
// import { UserProfileModel } from './profile/user-profile.model';
// import { UserFriendsModel } from './friends/user-friends.model';



import { DataStore } from '../shell/data-store';
import { PlaylistModel } from './profile/playlist.model';

@Injectable()
export class PlaylistService {
  private playlistDataStore: DataStore<PlaylistModel>;
 

  constructor(private http: HttpClient, private nativeHttp: HTTP) { }

 

  public  getPlaylistsDataSource(): Observable<PlaylistModel> {
    // return this.nativeHttp.get<PlaylistModel>('http://pod.pythonanywhere.com/api/playlists/');
    // return from(
    //   this.nativeHttp.get('http://pod.pythonanywhere.com/api/playlists/',{},{})
      
    // );


    // return new Observable<PlaylistModel> (observer => {
      return from(this.nativeHttp.get('http://pod.pythonanywhere.com/api/playlists/',{},{})).pipe(map(response => new PlaylistModel()));
    // });

    // return defer(
    //   this.nativeHttp.get('http://pod.pythonanywhere.com/api/playlists/',{},{})
    // );
    

    

    
  }

  public getPlaylistsStore(dataSource) {
    // Use cache if available
    if (!this.playlistDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: PlaylistModel = new PlaylistModel();
      this.playlistDataStore = new DataStore(shellModel);
      // Trigger the loading mechanism (with shell) in the dataStore
      this.playlistDataStore.load(dataSource);
    }
 
    return this.playlistDataStore;
  }

}

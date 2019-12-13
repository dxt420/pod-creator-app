import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Observable } from 'rxjs';
import { DataStore } from '../../shell/data-store';

import { PlaylistService } from '../playlist.service';
import { PlaylistModel } from './playlist.model';

@Injectable()
export class PlaylistResolver implements Resolve<any> {

  constructor(private userService: PlaylistService) { }

  resolve() {
    const dataSource: Observable<PlaylistModel> = this.userService.getPlaylistsDataSource();
    const dataStore: DataStore<PlaylistModel> = this.userService.getPlaylistsStore(dataSource);

    // const dataSource = this.userService.getPlaylistsDataSource();
    // const dataStore = this.userService.getPlaylistsStore(dataSource);

    return dataStore;
  }
}

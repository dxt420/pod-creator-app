import { ShellModel } from '../../shell/data-store';

export class PlaylistModel extends ShellModel {


  playlist_id : string;
  publisher_id : string;
  title :string;
  description : string;
  cover : string;
  
  created_at : string;

  songs: Array<{song_id: string, file_url: string, plays: string}> = [
    {
      song_id: '',
      file_url: '',
      plays: ''
    }
  ];
 

  constructor() {
    super();
  }
}

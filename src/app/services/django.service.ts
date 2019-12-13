import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { Platform, NavController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DjangoService {

  data = [];

  artistSongs;
  // loggedInUser;


 constructor(private http:HttpClient,
              private nativeHttp: HTTP, 
              private plt: Platform, 
              public navCtrl: NavController,
              private router: Router,
              private loadingCtrl: LoadingController) {
                // this.getArtistSongs();
              }


              async getArtistSongs(artist_alias) {
                let loading = await this.loadingCtrl.create();
                await loading.present();
             
               
            
                try {
                  const response = await this.nativeHttp.get('http://pod.pythonanywhere.com/api/artistsongs/'+artist_alias+'/',{},{});
                  console.log(response.status);
                  console.log(JSON.parse(response.data)); // JSON data returned by server
                  console.log(response.headers)
                  this.artistSongs = response.data.results;
            
                  // if (response.data.results) {
            
                    // (<any>window).AccountKitPlugin.getAccount(
                    //   (info)=> {
                    //    console.log(info);
                    //    response.data.results.forEach(element => {
                    //     if (element.phone == info.phoneNumber) {
                    //       this.loggedInUser = element;
                    //       console.log(this.loggedInUser);
                    //     }
                    //   });
                    //   },
                    //  async (err) => {
                    //    console.log(err)
                      
                    //  });
                
                   
                  // }
            
                 
                  
                 
                  loading.dismiss();
            
                } catch (error) {
                  console.error(error.status);
                  console.error(error.error); // Error message as string
                  console.error(error.headers);
                  loading.dismiss();
                }
               
              }


              async getPlaylists() {
                let loading = await this.loadingCtrl.create();
                await loading.present();
             
               
            
                try {
                  const response = await this.nativeHttp.get('http://pod.pythonanywhere.com/api/playlists/',{},{});
                  console.log(response.status);
                  console.log(JSON.parse(response.data)); // JSON data returned by server
                  console.log(response.headers)
                  this.artistSongs = response.data.results;
            
                
                 
                  
                 
                  loading.dismiss();
            
                } catch (error) {
                  console.error(error.status);
                  console.error(error.error); // Error message as string
                  console.error(error.headers);
                  loading.dismiss();
                }
               
              }
            
            
}

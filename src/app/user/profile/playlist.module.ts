import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ComponentsModule } from '../../components/components.module';
import { LanguageService } from '../../language/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { PlaylistResolver } from './playlist.resolver';
import { PlaylistService } from '../playlist.service';
import { PlaylistPage } from './playlist.page';


const routes: Routes = [
  {
    path: '',
    component: PlaylistPage,
    resolve: {
      data: PlaylistResolver
    }
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TranslateModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PlaylistPage],
  providers: [
    PlaylistResolver,
    PlaylistService,
    LanguageService
  ]
})
export class PlaylistPageModule {}

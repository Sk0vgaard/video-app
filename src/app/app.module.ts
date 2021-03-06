import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { VideoService } from './videoes/shared/video.service';
import {HttpClientModule} from '@angular/common/http';
import { VideoListComponent } from './videoes/video-list/video-list.component';
import { VideoDetailComponent } from './videoes/video-detail/video-detail.component';
import {RouterModule, Routes} from '@angular/router';
import { VideoCreateComponent } from './videoes/video-create/video-create.component';
import { GenreListComponent } from './genre/genre-list/genre-list.component';
import {GenreService} from './genre/shared/genre.service';

const appRoutes: Routes = [
  { path: 'video/:id',
    component: VideoDetailComponent },
  { path: 'videoes/create',
    component: VideoCreateComponent },
  {
    path: 'videoes',
    component: VideoListComponent,
    data: { title: 'Video List' }
  },
  { path: '',
    redirectTo: '/videoes',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    VideoDetailComponent,
    VideoCreateComponent,
    GenreListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [VideoService, GenreService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { VideoComponent } from './videoes/video/video.component';
import { VideoService } from './videoes/shared/video.service';
import {HttpClientModule} from '@angular/common/http';
import { VideoListComponent } from './videoes/video-list/video-list.component';
import { VideoDetailComponent } from './videoes/video-detail/video-detail.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  { path: 'video/:id',
    component: VideoDetailComponent },
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
    VideoComponent,
    VideoListComponent,
    VideoDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [VideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

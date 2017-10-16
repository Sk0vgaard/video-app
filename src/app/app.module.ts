import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { VideoService } from './videoes/shared/video.service';
import {HttpClientModule} from '@angular/common/http';
import { VideoListComponent } from './videoes/video-list/video-list.component';
import { VideoDetailComponent } from './videoes/video-detail/video-detail.component';
import {RouterModule, Routes} from '@angular/router';
import { VideoCreateComponent } from './videoes/video-create/video-create.component';

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
    VideoCreateComponent
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

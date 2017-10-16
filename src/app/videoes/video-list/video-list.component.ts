import { Component, OnInit } from '@angular/core';
import {Video} from '../shared/video.model';
import {VideoService} from '../shared/video.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  videoes: Video[];
  videoToDelete: Video;
  constructor(private videoService: VideoService,
              private router: Router) {
  }

  ngOnInit() {
    // Asks for a bunch of code i want to execute
    this.videoService.getVideoes()
    // Executing and explaning when done let me know in the subscribe below.
      .subscribe(
        videoes => {
          this.videoes = videoes;
        }
      );
  }

  details(video: Video) {
    this.router
      .navigateByUrl('/video/' + video.id);
  }

  deleteAborted($event) {
    this.videoToDelete = null;
    $event.stopPropagation();
  }

  deleteConfirmed($event) {
    this.videoService.delete(this.videoToDelete.id)
      .subscribe(video => {
        this.videoService.getVideoes()
        // Executing and explaning when done let me know in the subscribe below.
          .subscribe(
            videoes => {
              this.videoes = videoes;
            }
          );
      });
    $event.stopPropagation();
  }

  delete(video: Video, $event) {
    this.videoToDelete = video;
    $event.stopPropagation();
  }

  edit($event) {

    $event.stopPropagation();
  }

}

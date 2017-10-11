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
      .navigateByUrl('/video/'  + video.id);
  }

}

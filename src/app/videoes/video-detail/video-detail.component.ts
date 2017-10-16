import {Component, OnInit} from '@angular/core';
import {Video} from '../shared/video.model';
import {VideoService} from '../shared/video.service';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {

  video: Video;
  confirmDelete = false;
  constructor(private videoService: VideoService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap(params => this.videoService.getById(+ params.get('id')))
      .subscribe(video => this.video = video);

    /*this.route.paramMap.subscribe(params => {
      this.videoService.getById(+ params.get('id'))
        .subscribe(video => this.video = video);
    });*/
  }
  delete() {
    this.confirmDelete = true;
  }

  abortDelete() {
    this.confirmDelete = false;
  }

  deleteConfirmed() {
    this.videoService.delete(this.video.id)
      .subscribe(video => this.router
        .navigateByUrl('/videoes'));
  }
}

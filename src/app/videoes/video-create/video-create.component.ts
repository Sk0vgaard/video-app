import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {VideoService} from '../shared/video.service';
import {Video} from '../shared/video.model';
import {Genre} from '../../genre/shared/genre.model';
import 'rxjs/add/observable/forkJoin';
import {GenreService} from '../../genre/shared/genre.service';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-video-create',
  templateUrl: './video-create.component.html',
  styleUrls: ['./video-create.component.css']
})
export class VideoCreateComponent implements OnInit {

  videoGroup: FormGroup;
  videoCreatedSuccessfully = false;
  videoCreatedFailed = false;
  genresInput: Genre[];
  constructor(private router: Router,
              private fb: FormBuilder,
              private videoService: VideoService,
              private genreService: GenreService) {
    this.videoGroup = this.fb.group({
      title: ['', [Validators.required]],
      year: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)
       // Validators.pattern(Number + '1234567890')
      ]],
      pricePrDay: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.genresInput = [];
    // this.genresInput = [{
    //   id: 1,
    //   name: 'Action'
    // }, {
    //   id: 2,
    //   name: 'Thriller'
    // }, {
    //   id: 3,
    //   name: 'Comedy'
    // }];
  }

  back() {
    this.router.navigateByUrl('/videoes');
  }

  closeAlert() {
    this.videoCreatedSuccessfully = false;
    this.videoCreatedFailed = false;
  }

  save() {
    const genreIds = [];
    const genreRequests = [];
    const values = this.videoGroup.value;
      this.genresInput.forEach(genre => {
        genreRequests.push(this.genreService.create(genre)
        .map(genreBack => {
        genreIds.push(genreBack.id);
      }));
    });
    Observable.forkJoin(genreRequests)
      .switchMap(() =>
        this.videoService.create({
          title: values.title,
          year: values.year,
          pricePrDay: values.pricePrDay,
          genreIds: genreIds})
      ).subscribe(video => {
        this.videoGroup.reset();
        this.videoCreatedSuccessfully = true;
        this.genresInput = [];
        setTimeout(() => {
          this.videoCreatedSuccessfully = false;
        }, 3000);
      });
  }



  isInvalid(controlName: string) {
    const control = this.videoGroup.controls[controlName];
    return control.invalid && (control.touched || control.dirty);
  }
  isValid(controlName: string) {
    const control = this.videoGroup.controls[controlName];
    return !control.invalid && (control.touched || control.dirty);
  }

}

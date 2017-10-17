import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {VideoService} from '../shared/video.service';
import {Video} from '../shared/video.model';

@Component({
  selector: 'app-video-create',
  templateUrl: './video-create.component.html',
  styleUrls: ['./video-create.component.css']
})
export class VideoCreateComponent implements OnInit {

  videoGroup: FormGroup;
  videoCreatedSuccessfully = false;
  videoCreatedFailed = false;
  constructor(private router: Router,
              private fb: FormBuilder,
              private videoService: VideoService) {
    this.videoGroup = this.fb.group({
      title: ['', [Validators.required]],
      year: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)
       // Validators.pattern(Number + '1234567890')
      ]],
      pricePrDay: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  back() {
    this.router.navigateByUrl('/videoes');
  }

  closeAlert() {
    this.videoCreatedSuccessfully = false;
    this.videoCreatedFailed = false;
  }

  save() {
    const values = this.videoGroup.value;
    const video: Video = {
      title: values.title,
      year: values.year,
      pricePrDay: values.pricePrDay,
      genres: []
    };
    this.videoService.create(video)
      .subscribe(video => {
        this.videoGroup.reset();
        this.videoCreatedSuccessfully = true;
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

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-video-create',
  templateUrl: './video-create.component.html',
  styleUrls: ['./video-create.component.css']
})
export class VideoCreateComponent implements OnInit {

  videoGroup: FormGroup;
  constructor(private router: Router, private fb: FormBuilder) {
    this.videoGroup = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(1)]]
    });
  }

  ngOnInit() {
  }

  back() {
    this.router.navigateByUrl('/videoes');
  }

}

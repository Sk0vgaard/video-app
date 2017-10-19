import { Component, OnInit } from '@angular/core';
import {Genre} from "../shared/genre.model";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.css']
})
export class GenreListComponent implements OnInit {

  genreGroup: FormGroup;
  genres: Genre[];
  constructor(private fb: FormBuilder) {
    this.genreGroup = fb.group({
      genre: ''
    });
  }

  ngOnInit() {
    this.genres = [{
      id: 1,
      name: 'Action'
    }, {
      id: 2,
      name: 'Thriller'
    }, {
      id: 3,
      name: 'Comedy'
    }];
  }

}

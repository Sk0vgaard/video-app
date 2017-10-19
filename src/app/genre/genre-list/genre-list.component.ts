import {Component, Input, OnInit} from '@angular/core';
import {Genre} from "../shared/genre.model";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.css']
})
export class GenreListComponent implements OnInit {

  genreGroup: FormGroup;
  @Input()
  genres: Genre[];
  constructor(private fb: FormBuilder) {
    this.genreGroup = fb.group({
      genre: ''
    });
  }

  ngOnInit() {}

  delete(i, $event) {
    $event.preventDefault();
     this.genres.splice(i, 1);
  }

  saveGenre() {
    const values = this.genreGroup.value;
    this.genres.push({
      name: values.genre
    });
    this.genreGroup.reset();
  }

}

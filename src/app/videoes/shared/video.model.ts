import {Genre} from '../../genre/shared/genre.model';

export class Video {
  id?: number;
  title: string;
  year: number;
  pricePrDay: number;
  genres?: Genre[];
  genreIds?: number[];
}

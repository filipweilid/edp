import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/shared/services/movies.service';
import { ActivatedRoute, Params } from '@angular/router';
import { combineLatest } from 'rxjs';

@Component({
    selector: 'app-movie-detail',
    templateUrl: './movie-detail.component.html',
    styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
    movieId;
    movie;
    characters;
    loading = true;
    showMore = [];
    constructor(private service: MoviesService, private route: ActivatedRoute) {}

    ngOnInit() {
        this.showMore = [];
        combineLatest(this.route.params, this.service.getMovies()).subscribe(([params, movies]) => {
            this.movieId = params.movieId;
            this.movie = movies.find(movie => movie.Id == this.movieId);
            this.service.getCharacters(this.movieId).subscribe(characters => {
                this.characters = characters;
                this.characters.map(character => {
                    this.showMore.push({ id: character.Id, showMore: false });
                });
                this.loading = false;
            });
        });
    }

    calculateAge(bornDate) {
        const timeDiff = Date.now() - Date.parse(bornDate);
        const age = new Date(timeDiff);
        return Math.abs(age.getUTCFullYear() - 1970);
    }

    toggleShowMore(id) {
        this.showMore.map((el, index) => {
            if (el.id == id) {
                this.showMore[index] = { ...el, showMore: !el.showMore };
            }
        });
    }
}

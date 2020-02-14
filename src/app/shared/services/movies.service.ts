import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class MoviesService {
    url = 'http://api.edpconsult.se/characterwebapi';

    constructor(private http: HttpClient) {}

    getAuthentication() {
        return this.http.get(`${this.url}/authenticate?user=admin&password=admin`);
    }

    getMovies(): Observable<any> {
        return this.http.get(`${this.url}/movies`, {
            headers: { token: 'edpwebtest123' },
        });
    }

    getCharacters(movieId) {
        return this.http.get(`${this.url}/characters?movieid=${movieId}`, {
            headers: { token: 'edpwebtest123' },
        });
    }
}

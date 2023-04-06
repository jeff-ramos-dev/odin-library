function Movie(title, director, runtime, year, watched = false) {
  this.title = title;
  this.runtime = runtime
  this.director = director;
  this.year = year;
  this.watched = watched;

  Movie.prototype.info = () =>
    `${this.title} by ${this.director}, ${this.runtime} minutes, released ${year}, ${
      watched ? 'watched' : 'not not watched yet'
    }`;
}

const library = [];

const movies = document.querySelector('.movies');
const movieForm = document.querySelector('.movie-form');
const addBtn = document.querySelector('.new-movie');

const theMatrix = new Movie('The Matrix', 'Wacowski Brothers', 100, 2000, true);
const shawshankRedemption = new Movie('Shawshank Redepmtion', 'Stephen Spielberg', 160, 1992, true);
const thePrestige = new Movie('The Prestige', 'Christopher Nolan', 125, 2006, true);
const theLionKing = new Movie('The Lion King', 'Disney', 90, 1992, true);

addBtn.addEventListener('click', () => {
  movieForm.classList.toggle('hidden');
});

function addMovieToLibrary(movie) {
  const newMovie = new Movie(movie.title, movie.director, movie.runtime, movie.year, movie.watched);
  library.push(newMovie);
}

addMovieToLibrary(theMatrix);
addMovieToLibrary(shawshankRedemption);
addMovieToLibrary(thePrestige);
addMovieToLibrary(theLionKing);

function displayLibrary() {
  for (let i = 0; i < library.length; i++) {
    const currentMovie = document.createElement('tr');
    const currentMovieTitle = document.createElement('td');
    const currentMovieDirector = document.createElement('td');
    const currentMovieRuntime = document.createElement('td');
    const currentMovieYear = document.createElement('td');
    const currentMovieWatched = document.createElement('td')
    currentMovieTitle.textContent = library[i].title;
    currentMovieDirector.textContent = library[i].director;
    currentMovieRuntime.textContent = library[i].runtime;
    currentMovieYear.textContent = library[i].year;
    currentMovieWatched.textContent = library[i].watched;
    currentMovie.classList.add('movie');
    movies.appendChild(currentMovie);
  }
}

displayLibrary();

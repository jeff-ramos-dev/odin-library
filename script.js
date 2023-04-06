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
const overlay = document.querySelector('.layer');
const submit = document.querySelector('.submit')


function updateLibrary(movie) {
    const currentMovie = document.createElement('tr');
    const currentMovieTitle = document.createElement('td');
    const currentMovieDirector = document.createElement('td');
    const currentMovieRuntime = document.createElement('td');
    const currentMovieYear = document.createElement('td');
    const currentMovieWatched = document.createElement('td')
    const currentMovieWatchedCheckbox = document.createElement('input')
    currentMovieWatchedCheckbox.type = 'checkbox'
    currentMovieTitle.textContent = movie.title;
    currentMovieDirector.textContent = movie.director;
    currentMovieRuntime.textContent = movie.runtime;
    currentMovieYear.textContent = movie.year;
    currentMovieWatchedCheckbox.name = movie.title.toLowerCase().split(' ').join('')
    currentMovieWatchedCheckbox.id = movie.title.toLowerCase().split(' ').join('')
    currentMovieWatchedCheckbox.checked = movie.watched
    currentMovie.classList.add('movie');
    currentMovie.appendChild(currentMovieTitle)
    currentMovie.appendChild(currentMovieDirector)
    currentMovie.appendChild(currentMovieRuntime)
    currentMovie.appendChild(currentMovieYear)
    currentMovie.appendChild(currentMovieWatched)
    currentMovieWatched.appendChild(currentMovieWatchedCheckbox)
    movies.appendChild(currentMovie);
    library.push(currentMovie)
}

addBtn.addEventListener('click', () => {
  movieForm.classList.toggle('hidden');
  overlay.classList.toggle('overlay');
});

submit.addEventListener('click', (e) => {
  e.preventDefault()
  const movie = e.target.form
  const newMovie = new Movie(movie.title.value, movie.director.value, movie.runtime.value, movie.year.value, movie.watched.value)
  movieForm.classList.toggle('hidden')
  overlay.classList.toggle('overlay')
  updateLibrary(newMovie)
})

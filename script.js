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

const library = {};

const movies = document.querySelector('.movies');
const movieForm = document.querySelector('.movie-form');
const addBtn = document.querySelector('.new-movie');
const overlay = document.querySelector('.layer');
const submit = document.querySelector('.submit')


function updateLibrary(movie) {
    const movieKey = movie.title.toLowerCase().split(' ').join('')
    const currentMovie = document.createElement('tr');
    const currentMovieTitle = document.createElement('td');
    currentMovieTitle.classList.add(movieKey)
    const currentMovieDirector = document.createElement('td');
    currentMovieDirector.classList.add(movieKey)
    const currentMovieRuntime = document.createElement('td');
    currentMovieRuntime.classList.add(movieKey)
    const currentMovieYear = document.createElement('td');
    currentMovieYear.classList.add(movieKey)
    const currentMovieWatched = document.createElement('td')
    currentMovieWatched.classList.add(movieKey)
    const currentMovieWatchedLabel = document.createElement('label')
    currentMovieWatchedLabel.classList.add('switch')
    const currentMovieWatchedCheckbox = document.createElement('input')
    currentMovieWatchedCheckbox.type = 'checkbox'
    const currentMovieWatchedSlider = document.createElement('span')
    currentMovieWatchedSlider.classList.add('slider', 'round')
    currentMovieTitle.textContent = movie.title;
    currentMovieDirector.textContent = movie.director;
    currentMovieRuntime.textContent = movie.runtime;
    currentMovieYear.textContent = movie.year;
    currentMovieWatchedCheckbox.name = movieKey
    currentMovieWatchedCheckbox.id = movieKey 
    currentMovieWatchedCheckbox.checked = movie.watched
    currentMovie.classList.add('movie');
    currentMovie.appendChild(currentMovieTitle)
    currentMovie.appendChild(currentMovieDirector)
    currentMovie.appendChild(currentMovieRuntime)
    currentMovie.appendChild(currentMovieYear)
    currentMovie.appendChild(currentMovieWatched)
    currentMovieWatched.appendChild(currentMovieWatchedLabel)
    currentMovieWatchedLabel.appendChild(currentMovieWatchedCheckbox)
    currentMovieWatchedLabel.appendChild(currentMovieWatchedSlider)
    movies.appendChild(currentMovie);
    library[movieKey] = {title: movie.title, director: movie.director, runtime: movie.runtime, year: movie.year, watched: movie.watched}
    currentMovieWatchedCheckbox.addEventListener('click', e => {
      const movieName = e.target.name
      library[movieName].watched = !library[movieName].watched
    })
}

addBtn.addEventListener('click', () => {
  movieForm.classList.toggle('hidden');
  overlay.classList.toggle('overlay');
});

submit.addEventListener('click', (e) => {
  e.preventDefault()
  const movie = e.target.form
  const newMovie = new Movie(movie.title.value, movie.director.value, movie.runtime.value, movie.year.value, movie.watched.checked)
  movieForm.classList.toggle('hidden')
  overlay.classList.toggle('overlay')
  updateLibrary(newMovie)
})

const theMatrix = new Movie('The Matrix', 'The Wachowski Brothers', 136, 1999, true)
updateLibrary(theMatrix)

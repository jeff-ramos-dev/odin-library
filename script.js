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
  addMovieToLibrary(newMovie)
})

const cards = document.querySelector('.cards')

function addMovieToLibrary(movie) {
  const movieKey = movie.title.toLowerCase().split(' ').join('')
  const card = document.createElement('div')
  card.classList.add('card')
  const heading = document.createElement('h2')
  heading.classList.add('card-title')
  const details = document.createElement('div')
  details.classList.add('card-details')
  const directorDiv = document.createElement('div')
  directorDiv.classList.add('card-detail')
  const directorPrompt = document.createElement('p')
  directorPrompt.classList.add('prompt')
  const director = document.createElement('p')
  director.classList.add('data')
  const runtimeDiv = document.createElement('div')
  runtimeDiv.classList.add('card-detail')
  const runtimePrompt = document.createElement('p')
  runtimePrompt.classList.add('prompt')
  const runtime = document.createElement('p')
  runtime.classList.add('data')
  const yearDiv = document.createElement('div')
  yearDiv.classList.add('card-detail')
  const yearPrompt = document.createElement('p')
  yearPrompt.classList.add('prompt')
  const year = document.createElement('p')
  year.classList.add('data')
  const watchedLabel = document.createElement('label')
  watchedLabel.classList.add('switch')
  const watchedCheckbox = document.createElement('input')
  watchedCheckbox.type = 'checkbox'
  const watchedSlider = document.createElement('span')
  watchedSlider.classList.add('slider', 'round')

  heading.textContent = movie.title
  directorPrompt.textContent = 'Directed By:'
  director.textContent = movie.director
  runtimePrompt.textContent = 'Runtime(min):'
  runtime.textContent = movie.runtime
  yearPrompt.textContent = 'Released:'
  year.textContent = movie.year
  // watchedLabel.textContent = "Watched?"
  watchedCheckbox.checked = movie.watched
  cards.appendChild(card)
  card.appendChild(heading)
  card.appendChild(details)
  details.appendChild(directorDiv)
  directorDiv.appendChild(directorPrompt)
  directorDiv.appendChild(director)
  details.appendChild(runtimeDiv)
  runtimeDiv.appendChild(runtimePrompt)
  runtimeDiv.appendChild(runtime)
  details.appendChild(yearDiv)
  yearDiv.appendChild(yearPrompt)
  yearDiv.appendChild(year)
  card.appendChild(watchedLabel)
  watchedLabel.appendChild(watchedCheckbox)
  watchedLabel.appendChild(watchedSlider)

  watchedCheckbox.addEventListener('click', (e) => {
    library[movieKey].watched = !library[movieKey].watched
    watchedCheckbox.checked = library[movieKey].watched
  })
}

const theMatrix = new Movie('The Matrix', 'The Wachowski Brothers', 136, 1999, true)
addMovieToLibrary(theMatrix)
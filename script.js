function Movie(title, director, runtime, year, watched = false) {
  this.title = title;
  this.runtime = runtime;
  this.director = director;
  this.year = year;
  this.watched = watched;

  Movie.prototype.info = () =>
    `${this.title} by ${this.director}, ${
      this.runtime
    } minutes, released ${year}, ${watched ? 'watched' : 'not watched yet'}`;
}

const library = {};

const movieForm = document.querySelector('.movie-form');
const addBtn = document.querySelector('.new-movie');
const overlay = document.querySelector('.layer');
const submit = document.querySelector('.submit');
const cards = document.querySelector('.cards');

function addMovieToLibrary(movie) {
  const movieKey = movie.title.toLowerCase().split(' ').join('');
  library[movieKey] = {
    title: movie.title,
    director: movie.director,
    runtime: movie.runtime,
    year: movie.year,
    watched: movie.watched,
  };
  const card = document.createElement('div');
  card.classList.add('card');
  if (movie.watched) {
    card.classList.add('watched');
  }
  const heading = document.createElement('h2');
  heading.classList.add('card-title');
  const details = document.createElement('div');
  details.classList.add('card-details');
  const directorDiv = document.createElement('div');
  directorDiv.classList.add('card-detail');
  const directorPrompt = document.createElement('p');
  directorPrompt.classList.add('prompt');
  const director = document.createElement('p');
  director.classList.add('data');
  const runtimeDiv = document.createElement('div');
  runtimeDiv.classList.add('card-detail');
  const runtimePrompt = document.createElement('p');
  runtimePrompt.classList.add('prompt');
  const runtime = document.createElement('p');
  runtime.classList.add('data');
  const yearDiv = document.createElement('div');
  yearDiv.classList.add('card-detail');
  const yearPrompt = document.createElement('p');
  yearPrompt.classList.add('prompt');
  const year = document.createElement('p');
  year.classList.add('data');
  const watchedLabel = document.createElement('label');
  watchedLabel.classList.add('switch');
  const watchedPrompt = document.createElement('p');
  watchedPrompt.classList.add('prompt');
  const watchedCheckbox = document.createElement('input');
  watchedCheckbox.type = 'checkbox';
  const watchedSlider = document.createElement('span');
  watchedSlider.classList.add('slider', 'round');
  const bottomBorder = document.createElement('div');
  bottomBorder.classList.add('bottom-border');
  const removeButton = document.createElement('button');
  removeButton.classList.add('remove');

  heading.textContent = movie.title;
  directorPrompt.textContent = 'Directed By:';
  director.textContent = movie.director;
  runtimePrompt.textContent = 'Runtime:';
  runtime.textContent = `${movie.runtime} min`;
  yearPrompt.textContent = 'Released:';
  year.textContent = movie.year;
  watchedPrompt.textContent = 'Watched?';
  watchedCheckbox.checked = movie.watched;
  removeButton.textContent = 'X';

  cards.appendChild(card);
  card.appendChild(heading);
  card.appendChild(details);
  details.appendChild(directorDiv);
  directorDiv.appendChild(directorPrompt);
  directorDiv.appendChild(director);
  details.appendChild(runtimeDiv);
  runtimeDiv.appendChild(runtimePrompt);
  runtimeDiv.appendChild(runtime);
  details.appendChild(yearDiv);
  yearDiv.appendChild(yearPrompt);
  yearDiv.appendChild(year);
  card.appendChild(watchedLabel);
  watchedLabel.appendChild(watchedPrompt);
  watchedLabel.appendChild(watchedCheckbox);
  watchedLabel.appendChild(watchedSlider);
  card.appendChild(bottomBorder);
  card.appendChild(removeButton);

  heading.contentEditable = true;
  director.contentEditable = true;
  runtime.contentEditable = true;
  year.contentEditable = true;

  heading.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      director.focus();
    }
  });

  director.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      runtime.focus();
    }
  });

  runtime.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      year.focus();
    }
  });

  year.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.target.blur();
      watchedCheckbox.focus();
      watchedSlider.classList.add('selected');
    }
  });

  watchedCheckbox.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      library[movieKey].watched = !library[movieKey].watched;
      watchedCheckbox.checked = library[movieKey].watched;
      card.classList.toggle('watched');
      removeButton.classList.toggle('remove-unwatched');
    }
  });

  watchedCheckbox.addEventListener('click', () => {
    library[movieKey].watched = !library[movieKey].watched;
    watchedCheckbox.checked = library[movieKey].watched;
    card.classList.toggle('watched');
    removeButton.classList.toggle('remove-unwatched');
    watchedSlider.classList.add('selected');
  });

  watchedCheckbox.addEventListener('blur', () => {
    watchedSlider.classList.remove('selected');
  });

  removeButton.addEventListener('click', (e) => {
    e.preventDefault();
    cards.removeChild(card);
  });
}

addBtn.addEventListener('click', () => {
  movieForm.classList.toggle('hidden');
  overlay.classList.toggle('overlay');
  submit.focus();
});

submit.addEventListener('click', (e) => {
  e.preventDefault();
  const movie = e.target.form;
  const newMovie = new Movie(
    movie.title.value ? movie.title.value : 'TITLE',
    movie.director.value ? movie.director.value : 'DIRECTOR',
    movie.runtime.value ? `${movie.runtime.value} min` : 'RUNTIME',
    movie.year.value ? movie.year.value : 'YEAR',
    movie.watched.checked
  );
  movieForm.classList.toggle('hidden');
  overlay.classList.toggle('overlay');
  addMovieToLibrary(newMovie);
});

const theMatrix = new Movie(
  'The Matrix',
  'The Wachowski Brothers',
  136,
  1999,
  true
);

addMovieToLibrary(theMatrix);

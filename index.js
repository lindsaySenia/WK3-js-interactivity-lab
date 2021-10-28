console.log('hello world')

const movieForm = document.querySelector('form')
movieForm.addEventListener('submit', addMovie)

function addMovie(event) {
    event.preventDefault()
    let inputField = document.querySelector('input');
    const movie = document.createElement('li')
    const movieTitle = document.createElement('span')
    

    movieTitle.textContent = inputField.value
    movie.appendChild(movieTitle)

    const movieList = document.querySelector('ul')
    movieList.appendChild(movie)

    inputField.value = ''
};


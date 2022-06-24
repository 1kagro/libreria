const API = 'https://api.themoviedb.org/3/';
const URL_IMG = 'https://image.tmdb.org/t/p/w200/'

async function getTrendingMoviesPreview() {
    const res = await fetch(API + 'trending/movie/day?api_key=' + API_KEY);
    const data = await res.json();

    const movies = data.results;
    movies.forEach(movie => {
        const trendingPreviewMoviesContainer = document.querySelector('#tendencias .tendecias-container')

        const movieContainer = document.createElement('div');
        movieContainer.classList.add('card-item');

        const movieImg = document.createElement('img');
        movieImg.classList.add('card-img');
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute('src', URL_IMG + movie.poster_path);

        movieContainer.appendChild(movieImg);
        trendingPreviewMoviesContainer.appendChild(movieContainer);
    });

    console.log(movies);
}

function showToggleMenu() {
    const menuIcon = document.querySelector('.button-wrap div');
    const toggle = menuIcon.classList.toggle('icon-cancel');

    const searchMenu = document.querySelector('.header-top-menu .header-search');
    menuIcon.classList.toggle('icon-menu');
    
    if (toggle) {
        searchMenu.style.display = 'flex';
    } else {
        searchMenu.style.display = 'none';
    }   
}

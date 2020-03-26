const movieUnorderedList = document.getElementById('movie-list');
const radioButtons = document.getElementsByName('movie-filter');

//function to add movies to the dom
const addMoviesToDom = (movies) => {
    const movieListItems = movies.map((movie) => {
        const listItem = document.createElement('li');
        const image = document.createElement('img');
        image.src = movie.Poster;
        listItem.appendChild(image);
        return listItem;
    });
    movieListItems.forEach(item => {
        movieUnorderedList.appendChild(item);
    });
}

//remove movies from dom
const removeMoviesFromDom = () => {
    movieUnorderedList.innerHTML = "";
}

//filter movies by searching for a word in the title
const filterMovies = (wordInMovieTitle) => {
    return movies.Movies.filter((item) => {
        return item.Title.includes(wordInMovieTitle);
    })
}

//filter latest movies by year
const filterLatestMovies = () => {
    return movies.Movies.filter((item) => {
        return item.Year >= 2014;
    })
}

//radio button change handler
const handleChangeEvent  = (event) => {
    switch (event.target.value) {
        case "new-movies":
            removeMoviesFromDom();
            addMoviesToDom(filterLatestMovies());
            break;
        case "avenger-movies":
            removeMoviesFromDom();
            addMoviesToDom(filterMovies("Avenger"));
            break;
        case "xmen-movies":
            removeMoviesFromDom();
            addMoviesToDom(filterMovies("X-Men"));
            break;
        case "princess-movies":
            removeMoviesFromDom();
            addMoviesToDom(filterMovies("Princess"));
            break;
        case "batman-movies":
            removeMoviesFromDom();
            addMoviesToDom(filterMovies("Batman"));
            break;
        default:
            break;
    }
}

//add eventhandler to radio buttons
console.log(radioButtons);
radioButtons.forEach((button) => {
    button.addEventListener('change', () => handleChangeEvent(event));
})


//add movies to ul
addMoviesToDom(movies.Movies);

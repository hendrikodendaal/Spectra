// Side Navigation Toggle
function openNav() {
    document.getElementById("sideNav").style.width = "250px";
}

function closeNav() {
    document.getElementById("sideNav").style.width = "0";
}

// Fetch Movie Data from API and display it
async function fetchMovies(category, elementId) {
    const url = `https://streaming-availability.p.rapidapi.com/shows/type/category`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '66ff2bcc70msh8505e5847f6dc33p1b45b8jsne542b7641872',
            'x-rapidapi-host': 'streaming-availability.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        const moviesContainer = document.getElementById(elementId);
        
        // Clear previous content
        moviesContainer.innerHTML = "";

        // Loop through movie results and create movie cards
        result.results.forEach(movie => {
            const movieCard = document.createElement("div");
            movieCard.classList.add("movie-card");
            movieCard.textContent = movie.title; // Display movie title
            moviesContainer.appendChild(movieCard);
        });
    } catch (error) {
        console.error(error);
    }
}

// Call the fetchMovies function for each section
fetchMovies('new', 'new-movies');
fetchMovies('popular', 'popular-movies');
fetchMovies('horror', 'horror-movies');

// Search Functionality
function searchMovies() {
    const query = document.getElementById('search').value;
    if (query) {
        fetchMovies(query, 'new-movies'); // You can adapt this to display search results in any section
    }
}


// Side Navigation Toggle
function openNav() {
    document.getElementById("sideNav").style.width = "250px";
}

function closeNav() {
    document.getElementById("sideNav").style.width = "0";
}

// Fetch Movies Data from API
async function fetchMovies() {
    const url = 'https://streaming-availability.p.rapidapi.com/shows/movie/popular'; // API endpoint for movies
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '66ff2bcc70msh8505e5847f6dc33p1b45b8jsne542b7641872',
            'x-rapidapi-host': 'streaming-availability.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        const moviesContainer = document.getElementById('movies-list');

        // Clear previous content
        moviesContainer.innerHTML = "";

        // Loop through movie results and create movie cards
        result.results.forEach(movie => {
            const movieCard = document.createElement("div");
            movieCard.classList.add("movie-card");
            movieCard.textContent = movie.title; // Display movie title
            moviesContainer.appendChild(movieCard);
        });
    } catch (error) {
        console.error(error);
    }
}

// Fetch Series Data from API
async function fetchSeries() {
    const url = 'https://streaming-availability.p.rapidapi.com/shows/tv/popular'; // API endpoint for series
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '66ff2bcc70msh8505e5847f6dc33p1b45b8jsne542b7641872',
            'x-rapidapi-host': 'streaming-availability.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        const seriesContainer = document.getElementById('series-list');

        // Clear previous content
        seriesContainer.innerHTML = "";

        // Loop through series results and create series cards
        result.results.forEach(tvShow => {
            const seriesCard = document.createElement("div");
            seriesCard.classList.add("movie-card");
            seriesCard.textContent = tvShow.title; // Display series title
            seriesContainer.appendChild(seriesCard);
        });
    } catch (error) {
        console.error(error);
    }
}

// Search Movies
function searchMovies() {
    const query = document.getElementById('search').value;
    if (query) {
        // Call fetchMovies() or another function with search term
        fetchMovies(query);
    }
}

// Search Series
function searchSeries() {
    const query = document.getElementById('search').value;
    if (query) {
        // Call fetchSeries() or another function with search term
        fetchSeries(query);
    }
}

// Call fetch functions on page load
if (window.location.pathname.includes('movies.html')) {
    fetchMovies(); // Fetch and display movies on Movies page
} else if (window.location.pathname.includes('series.html')) {
    fetchSeries(); // Fetch and display series on Series page
}

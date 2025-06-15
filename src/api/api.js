const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchPopularMovies = async () => {
    return fetchMovies('/movie/popular');
};

export const fetchTopRatedMovies = async () => {
    return fetchMovies('/movie/top_rated');
};

export const fetchUpcomingMovies = async () => {
    return fetchMovies('/movie/upcoming');
};

export const fetchTrendingMovies = async () => {
    return fetchMovies('/trending/movie/week');
};

export const fetchNetflixOriginals = async () => {
    return fetchMovies('/discover/tv?with_networks=213');
};

// Reusable fetcher
const fetchMovies = async (path, queryParams = {}) => {
    try {
        const url = new URL(`${BASE_URL}${path}`);
        url.searchParams.set('api_key', API_KEY);

        // Add any additional query params
        for (const key in queryParams) {
            url.searchParams.set(key, queryParams[key]);
        }

        const res = await fetch(url);
        const data = await res.json();
        return data.results || [];
    } catch (e) {
        console.error(`Failed to fetch ${path}`, e);
        return [];
    }
};


import { Container, MovieList, Movie } from "./style";
import { APIkey } from "../../config/key";
import {useState, useEffect} from 'react'


function Home() {

// const movies = [
//     {
//         id: 1,
//         title: 'Arcane',
//         poster_path: `https://uauposters.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/9/4/945720211216-uau-posters-arcane-league-of-legends-lol-series-1.jpg`
//     }
// ]

const [movies, setMovies] = useState([])
const image_path = 'https://image.tmdb.org/t/p/w500/'

useEffect (() => {
    //consumir api
    // fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIkey}&language=en-US&page=1`)
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${APIkey}&language=en-US&page=1`)
    // fetch(`https://api.themoviedb.org/3/movie/76341?api_key=${APIkey}`)
    .then(response => response.json())
    .then(data => setMovies(data.results))
}, [])

    return (
        <Container>
            <h1>Filmes</h1>
            <MovieList>
                {movies.map(movie => {
                    return (
                    <Movie key={movie.id}>
                        <a href="https://www.netflix.com/browse" > <img src={`${image_path}${movie.poster_path}`} alt={movie.title}/></a>
                        <span>{movie.title}</span>
                    </Movie>
                    )
                })}

            </MovieList>
        </Container>
    )
}
export default Home;
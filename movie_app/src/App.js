import {Routes, Route, Link } from "react-router-dom";
import './App.css';
import MovieList from './components/MovieList';
import MovieTrailer from "./components/MovieTrailer";
import moviesList from './data';
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState(moviesList);
    const [show, setShow] = useState(false);
    const [filteredRating, setFilteredRating] = useState(0)
    const [addedMovie, setAddedMovie] = useState({
        title: '',
        description: '',
        rating: 0,
        posterURL: '',
    })
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleFilterByName = (event) => {
        const value = event.target.value;
        const nMovies = moviesList.filter((m) => m.title.includes(value));
        setMovies(nMovies);
        if (!event.target.value) {
            setMovies(moviesList);
        }
    }
    const ratingChanged = (newRating) => {
        console.log('ttettette', newRating);
        setFilteredRating(newRating);
        const nMovies = moviesList.filter((m) => m.rating === newRating);
        setMovies(nMovies);
    }

    const handleChnage = (event) => {
        const name = event.target.name;
        console.log(event.target.name, event.target.value);
        setAddedMovie({ ...addedMovie, [name]: event.target.value})
    }
    const addedRatingChanged = (newRating) => {
        setAddedMovie({ ...addedMovie, rating: newRating})
    }
    const handleAddMovie = () => {
        console.log('helooo');
        console.log('adeddddd new', addedMovie);
        setMovies([...moviesList, addedMovie]);
    }
  return (
    <div className=" container">
      <Routes>
         <Route path="/" element={<MovieList 
          movies={movies}
          show={show}
          handleClose={handleClose}
          handleShow={handleShow}
          handleFilterByName={handleFilterByName}
          ratingChanged={ratingChanged}
          handleChnage={handleChnage}
          addedRatingChanged={addedRatingChanged}
          handleAddMovie={handleAddMovie}
          filteredRating={filteredRating}
          addedMovie={addedMovie}
         />} />
         <Route path="/:test" element={<MovieTrailer movies={movies} />} />
       </Routes>
    </div>
  );
}

export default App;

import { useState } from 'react';
import ReactStars from 'react-stars'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import moviesList from '../data';
import MovieCard from './MovieCard';
function MovieList () {
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
      <div className="row m-auto">
        <Row className="m-5">
          <Col>
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              onChange={handleFilterByName}
            />
          </Col>
          <Col xs="auto">
            <ReactStars
              count={5}
              value={filteredRating}
              onChange={ratingChanged}
              size={24}
              color2={"#ffd700"}
            />
          </Col>
          <Col xs="auto">
            <Button onClick={handleShow}>Add movie</Button>
          </Col>
        </Row>
        {movies.map((movie) => (
          <MovieCard key={movie.name} movie={movie} />
        ))}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Movie Title" name='title' onChange={handleChnage}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Movie Description" name='description' onChange={handleChnage}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Picture</Form.Label>
                <Form.Control type="text" placeholder="Movie Picture" name='posterURL' onChange={handleChnage}/>
              </Form.Group>
              <ReactStars
                count={5}
                value={addedMovie.rating}
                onChange={addedRatingChanged}
                size={24}
                color2={"#ffd700"}
              />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => {handleAddMovie(); handleClose()}}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
}

export default MovieList
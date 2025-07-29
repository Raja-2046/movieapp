import ReactStars from 'react-stars'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MovieCard(props) {
    const { movie } = props; // const movie = props.movie; {movie: }
    const ratingChanged = (newRating) => {
        console.log('ttettette', newRating)
    }
  return (
    <Card className='col-4'>
      <Card.Img variant="top" src={movie.posterURL} width={300}/>
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          {movie.description}
        </Card.Text>
        <ReactStars
            count={5}
            value={movie.rating}
            onChange={ratingChanged}
            size={24}
            color2={'#ffd700'} />
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
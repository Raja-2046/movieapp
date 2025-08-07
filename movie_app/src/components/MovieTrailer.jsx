import { useParams } from "react-router-dom";

function MovieTrailer ({movies}) {
    const params = useParams();
    console.log('hello',params)
    const findedMovie =movies.find((movie) => movie.id === Number(params.test));
    return (
      <div className="m-5">
        <iframe
          width="1000"
          height="500"
          src={findedMovie.trailerURL}
          title="Trailer"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    );
}

export default MovieTrailer;
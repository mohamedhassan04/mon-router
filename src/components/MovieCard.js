import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

function MovieCard({ movie, id }) {
  return (
    <section className="mohamed">
      <Card style={{ width: "300px", height: "400px" }}>
        <Card.Img src={movie.posterurl} style={{ height: "100%" }} />
        <div className="caramel">
          {" "}
          <Card.Title>{movie.name}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <Card.Text>
            <Link to={`/detail/${movie.id}`}>
              <button className="btn btn-danger">Détail</button>
            </Link>
          </Card.Text>
          <ReactStars size={35} value={movie.rating} edit={false} />
        </div>
      </Card>
    </section>
  );
}

export default MovieCard;

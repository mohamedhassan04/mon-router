import { Card } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";

function Detail({ movies }) {
  const history = useHistory();
  const { ID } = useParams();
  const mov = movies.find((movie) => movie.id === Number(ID));

  return (
    <div className="container">
      <h1 style={{ color: "#DB202C", justifyContent: "center" }}>{mov.name}</h1>
      <iframe
        width="100%"
        height="500"
        src={mov.trailer}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <Card>
        <Card.Body className="desc">
          <Card.Text>
            <label style={{ fontWeight: "bold", color: "tomato" }}>
              {" "}
              Description :{" "}
            </label>
            {mov.description}
          </Card.Text>
        </Card.Body>
      </Card>
      <div className="home">
        <button className="btn btn-danger" onClick={() => history.goBack()}>
          Go back to home page
        </button>
      </div>
    </div>
  );
}
export default Detail;

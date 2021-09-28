import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function AddMovie({ addMovie }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newmovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterurl: "",
    rating: 0,
  });

  let onChangehand = (e) => {
    setNewMovie({ ...newmovie, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="btn-1">
        <Button className="btn-2" onClick={handleShow}>
          Add movie
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <div className="med">
          <Modal.Header closeButton>
            <Modal.Title>Add movies</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {" "}
            <div className="f-all">
              <label>
                <b>Movie Title</b>
              </label>
              <input
                onChange={onChangehand}
                type="text"
                placeholder="Enter Movie Title"
                name="name"
                required
              />
              <label>
                <b>Movie Description</b>
              </label>
              <input
                onChange={onChangehand}
                type="text"
                placeholder="Enter Movie Description"
                name="description"
                required
              />
              <label>
                <b>Movie Poster</b>
              </label>
              <input
                onChange={onChangehand}
                type="text"
                placeholder="Enter posterurl"
                name="posterurl"
              />
              <label>
                <b>Movie Rate</b>
              </label>
              <input
                onChange={onChangehand}
                type="text"
                placeholder="Enter Movie rate"
                name="rating"
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              onClick={() => {
                addMovie(newmovie);
                handleClose();
              }}
            >
              Add
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </div>
  );
}

export default AddMovie;

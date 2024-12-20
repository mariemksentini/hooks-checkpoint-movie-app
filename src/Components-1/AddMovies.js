import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Rating from '@mui/material/Rating';
function AddMovies({movies,setMovies}){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [newTitle, setNewTitle] = useState('')
    const [newDescription, setNewDescription] = useState('')
    const [newPosterURL, setNewPosterURL] = useState('')
    const [ratingValue, setRatingValue] = useState(0)

    function handleAddMovie() {
        if (newTitle && newDescription && newPosterURL && ratingValue) {
          const newMovie = {
            title: newTitle,
            description: newDescription,
            posterURL: newPosterURL,
            rating: ratingValue,
            id: Math.random(),
          };
          setMovies([...movies, newMovie]); // Add new movie to the list
          setNewTitle(''); // Reset form fields
          setNewDescription('');
          setNewPosterURL('');
          setRatingValue(0);
          handleClose(); // Close modal
        } else {
          alert('Please fill in all fields.');
        }
      }
    


    return(<div>
        <Button variant="outline-success" onClick={handleShow}>
          Add movie
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Movie title</Form.Label>
                        <Form.Control 
                        onChange={(e)=>setNewTitle(e.target.value)}
                        type="text" placeholder="Enter movie name..." />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Movie poster URL</Form.Label>
                        <Form.Control 
                        onChange={(e)=>setNewPosterURL(e.target.value)}
                        type="text" placeholder="Enter movie poster URL..." />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Movie description</Form.Label>
                        <Form.Control
                        onChange={(e)=>setNewDescription(e.target.value)} 
                        type="text" placeholder="Enter movie description..." />
                    </Form.Group>

                    <Rating
                        name="simple-controlled"
                        value={ratingValue}
                        precision={0.5}
                        onChange={(event, newRatingValue) => {
                        setRatingValue(newRatingValue);
                        }}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleAddMovie}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
      </div>)
}
export default AddMovies
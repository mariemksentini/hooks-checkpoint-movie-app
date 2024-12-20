
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Rating from '@mui/material/Rating';
function FilterMovies({searchedTitle, setSearchedTitle,searchedRating,setSearchedRating}){

    function handleReset(){
        setSearchedTitle('')
        setSearchedRating(0)

    }
    return(
    <Form className="d-flex search-bar-container">
        <Form.Control
        style={{width : '300px'}}
          type="search"
          placeholder="Search movie name..."
          className="me-2"
          aria-label="Search"
          value={searchedTitle}
          onChange={(e)=>setSearchedTitle(e.target.value)}
        />

        <Rating
            name="simple-controlled"
            precision={0.5}
            value={searchedRating}
            onChange={(event, newRatingValue) => {
            setSearchedRating(newRatingValue);
            }}
        />      
        <Button  style={{marginLeft : '15px'}} variant="outline-success" onClick={()=> handleReset()}>Reset</Button>
      </Form>)
}
export default FilterMovies
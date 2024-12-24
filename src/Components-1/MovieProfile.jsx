import { useNavigate, useParams } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Rating from '@mui/material/Rating';
function MovieProfile({movies}){
    const {id} = useParams()
    const found = movies.find((el,i,t)=> el.id == id)
console.log(found)
    const navigate = useNavigate()
    return(<div style={styles.all}>
        
        <div style={styles.box}>
            <img style={styles.image} src={found.posterURL} alt="Not found"/>
            <div>
                <div style={styles.spacebetween}>
                    <h1 style={styles.title}>{found.title.toUpperCase()}</h1>
                    <Rating name="read-only" precision={0.5} value={found.rating} readOnly />
                </div>
                <p>{found.description}</p>
                <iframe
                    width="560"
                    height="315"
                    src={found.trailerURL}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen 
                />
                <br/><br/>
                <Button variant="outline-success" onClick={()=>navigate('/movies')} >Go back</Button>
            </div>
            
        </div>
        
        
        
    </div>)
}
export default MovieProfile

const styles={
    all :{
        padding : "50px"
    },
    box : {
        display : 'flex',
        flex : 'wrap',
        gap : '80px'
        
    },
    spacebetween : {
        display: 'flex',
        flex:'wrap',
        justifyContent: 'space-between',
    },
    title : {
        fontSize: '2rem',
        color: '#212529',
        textShadow : '0 0 20px rgba(0, 0, 0, 0.52) '
    },
    image : {
        width : '25rem',
        boxShadow : '0 0 20px rgba(0, 0, 0, 0.52) '
    }

}

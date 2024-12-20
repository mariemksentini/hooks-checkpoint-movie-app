
import Card from 'react-bootstrap/Card';
import Rating from '@mui/material/Rating';
import { useState } from 'react';
function CardMovie({el}){
  const [seeMore,setSeeMore] = useState(false)
    return(
    <Card style={{ width: '18rem' }}>
      <Card.Img 
      style={{height : '417px'}}
      variant="top" src={el.posterURL} />
      <Card.Body>
        <Card.Title>{el.title}</Card.Title>
        <Card.Text>
        {seeMore ? el.description : `${el.description.slice(0, 100)}...`}
        <button
          onClick={() => setSeeMore(!seeMore)}
          style={{ 
            border : 'none',
            margin : '0',
            padding : '0',
            backgroundColor : 'white',
            color: seeMore ? 'red' : 'green' }}
        >
          {seeMore ? 'Show less' : 'See more'}
        </button>
      </Card.Text>
        <Rating name="read-only" precision={0.5} value={el.rating} readOnly />
      </Card.Body>
    </Card>
    )
}

export default CardMovie
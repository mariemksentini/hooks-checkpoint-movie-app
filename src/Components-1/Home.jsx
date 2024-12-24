import Carousel from 'react-bootstrap/Carousel';


function Home(){
    return (
    <div>
    <Carousel fade>
        <Carousel.Item>
            <img
            src="https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQSdzE354yA9fsMjuadHmwb0MUhCYo0XH3oL0vZc8-ywGKADwq1y1K-tXp6BW7Ekbpn8AnHDYGbbpp1weUtB5xXINaBjnWDuYUKDcvyFP7UnQ_9D0C6usmZjNq6B9DqFt9dl_5Ii1AzBSl4tnPf6IwURr8NY.jpg?r=eb4"
            alt="First slide"
            className="d-block w-100"
            />
            <Carousel.Caption>
            <h3>Science Fiction</h3>
            <p>Miss your teenage years? watch movies and cry.</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
            src="https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQc_oCDeVQPZWISOpJvMctKUHZFLi8SgEUbbqsAPVOVbI8ttdqfdVMPUjrH8T9F84IiirRdhLtf-tqgVAGcCZxTbgnBX9BFY5w1si68mYjWu1yiMl3mMfRJaEaWncupySkKT8_aJ2iKNDvb0_ivM4OhfIkfc.jpg?r=d2f"
            alt="Second slide"
            className="d-block w-100"
            />
            <Carousel.Caption>
            <h3>High school</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
            src="https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQTOr9QHpbTJfGmu-42JsfWeNd9_yu9CfA_w7gmEgRiN6KuHsTHT-0uI57xcNc4CVQLKr2CDcqx_0-ajQTJbzltQAgdq8m2JCOS_U90M72Vk6xM6SebmzWFS9Uk1G2yyYZq7jHN5Hrtmjz0ADfL1umc-1osA.jpg?r=7d1"
            alt="Third slide"
            className="d-block w-100"
            />
            <Carousel.Caption>
            <h3>Spy & History</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    <div>
        {/* First Div with Title and Paragraph */}
        <div style={styles.centeredDiv}>
          <h1 style={styles.title}>MovieMania: Discover, Rate, and Enjoy Movies</h1>
          <p style={styles.paragraph}>MovieMania is your ultimate destination for exploring the vast world of cinema. Whether you're into action, romance, thriller, sci-fi, or documentaries, our website offers an extensive library of movies from every genre imaginable. Easily browse through detailed movie information, including ratings from viewers like you, and make informed decisions about your next watch. MovieMania isn't just about finding movies — it's about engagement. You can add your own favorite titles to our growing database and even watch high-quality trailers to get a sneak peek before committing to a film. With MovieMania, we aim to connect film enthusiasts, foster discovery, and celebrate the magic of storytelling. Dive in and turn every movie night into an unforgettable experience!</p>
        </div>
  
        {/* Second Div with Image */}
        <div className="d-block w-100">
          <img
            src="https://miro.medium.com/v2/resize:fit:13000/1*O7VIrvdMHe0Jg6CAOJ4x9Q.jpeg"
            alt="Descriptive Alt Text"
            className="d-block w-100"
          />
        </div>
    </div>
    </div>)
}
export default Home

  
const styles = {
    centeredDiv: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(187, 185, 185, 0.85)', // bg color
      padding : '20px',
      textAlign: 'center',
    },
    title: {
      margin: 0,
      fontSize: '2rem',
      color: '#212529',
      textShadow : '0 0 20px rgba(0, 0, 0, 0.6) '
    },
    paragraph: {
      width : '950px',
      margin: '10px 0 0',
      fontSize: '1.2rem',
      color: '#212529',
    },
    imageDiv: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '20px',
    },
    
};
  
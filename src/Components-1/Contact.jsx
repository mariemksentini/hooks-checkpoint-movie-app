import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function Contact (){
    return(
    <div>
        <h1 style={style.title}>Fill the form</h1>
        <div style={style.all}>
            <Form style={style.form}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Your message</Form.Label>
                    <Form.Control as="textarea" placeholder='Enter your message...' rows={3} />
                </Form.Group>
            </Form>
        </div>
        <Button style={style.button} variant="outline-success">Send</Button>
    </div>
)
}
export default Contact

const style = {
    all : {
        paddingLeft : '50px',
        paddingTop : '25px',
        
        display : 'flex',
        flex : 'wrap'
    },
    title : {
        fontSize: '2rem',
        color: '#212529',
        textShadow : '0 0 20px rgba(0, 0, 0, 0.52) ',
        marginLeft : '50px',
        marginTop : '50px',
    },
    form : {
        width : '650px',
    },
    button : {
        marginLeft : '50px'
    }
}
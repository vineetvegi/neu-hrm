import React, { Component } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

class ProfDev extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        fetch('http://localhost:5000')
        .then((res) => res.json())
        .then((eventsData) => {
            console.log(eventsData.rows)
            this.setState({
                isLoaded: true,
                events:eventsData.rows
            })
        })
    }
    render() {
        let cols = [];
        if (this.state.events) {
            cols = this.state.events.map((event, index) => {
                if (index <= 11 ) {
                return (
                    <div className='card-container'>
                    <Col sm={2} class='col-space'>
                    <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="https://studentlife.northeastern.edu/wp-content/uploads/2016/08/neu_m040cj27n.jpeg" />
                    <Card.Body>
                        <Card.Title class='card-title'><b>{event.event_name}</b></Card.Title>
                        <Card.Text class='card-text'>{event.event_time}</Card.Text>
                        <Card.Text class='card-text'>{event.event_date}</Card.Text>
                        <div class='card-footer'>
                        <a href={event.event_url} target="_blank"><button class='btn-btn btn-outline-secondary'>Register</button></a>
                        </div>
                    </Card.Body>
                    </Card>
                    </Col>
                    </div>
                )
                }
            });
            let rows = [];

            return (
                <div>
                <Container>
                    <Row>
                    {cols}
                    </Row>
                    </Container>
                </div>
            );
        }
    }
}

export default ProfDev;
import React from "react";
import { Container, Card, Row, Col } from 'react-bootstrap';
import one from '../images/1.png';
import two from '../images/2.png';
import three from '../images/3.png';

function Projects() {
    return (
        <div className="Projects">
            <Container >
                <Row className="mb-3" style={{padding: '5px'}}>
                    <Col>
                        <Card style={{ width: '18rem', height: '30rem'}}>
                            <Card.Img variant="top" src={three} style={{ height: '10rem'}}/>
                            <Card.Body>
                                <Card.Title>Rise Companion App</Card.Title>
                                <Card.Text>
                                The Rise Companion App is a complmentary app to be used by players of the Rise System (a work in progress). It is built with modern MERN architecture and uses GraphQL documentation for the database. Players of the Rise System can keep track of their Characters and access a Dice Roller to make jumping into the game quick and easy!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem', height: '30rem' }}>
                            <Card.Img variant="top" src={one} style={{ height: '10rem'}}/>
                            <Card.Body>
                                <Card.Title>Mellifluous</Card.Title>
                                <Card.Text>
                                Ever had lyrics stuck in your head, but couldn't figure out what song it was from? Mellifluous leverages Shazam's API to search for artists, songs, lyrics, and albums. Stop getting lost in a musical quandary! Try out Mellifluous to start clearing those unknown songs from your mind.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem', height: '30rem' }}>
                            <Card.Img variant="top" src={two} style={{ height: '10rem'}}/>
                            <Card.Body>
                                <Card.Title>Decide Your Fate.js</Card.Title>
                                <Card.Text>
                                A scalable choose-your-own-adventure the utilizes back-end servers and Mongo databases. Text based adventures like these are typically early projects for new developers, but this one utilizes REST API authentication, saved user instances, and the ability to end a save sessions.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Projects;
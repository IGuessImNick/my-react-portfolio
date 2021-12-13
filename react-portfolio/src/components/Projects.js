import React from "react";
import { Container, Card, Row, Col } from 'react-bootstrap';

function Projects() {
    return (
        <div className="Projects">
            <Container >
                <Row className="mb-3" style={{padding: '5px'}}>
                    <Col>
                        <Card style={{ width: '18rem', height: '20rem'}}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Rise Companion App</Card.Title>
                                <Card.Text>
                                    Some info about the Rise Companion App
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem', height: '20rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Rise Companion App</Card.Title>
                                <Card.Text>
                                    Some info about the Rise Companion App
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem', height: '20rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Rise Companion App</Card.Title>
                                <Card.Text>
                                    Some info about the Rise Companion App
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
import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
const styles = {
  card: {
    margin: 20,
    background: '#e8eaf6',
  },
  heading: {
    background: '#111111',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
  },
  content: {
    padding: 20,
  },
};

// In `Card`, we can assign a style from an object by using curly braces
// We are assigning the card, heading, and content all from our `style` object
function About() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>Hi, welcome to my portfolio page!</div>
      <div style={styles.content}>
      Hey, my name is Nick. I'm just starting my journey into the world of web design, and I'm hoping to transition into the game development industry.
      </div>
    </div>
  );
}

export default About;

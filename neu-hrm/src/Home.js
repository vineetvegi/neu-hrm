import React from 'react'
import styled from 'styled-components';
import { Container, Row } from 'react-bootstrap';

const Styles = styled.div`
h5 {
    color: red;
}
`;

export const Home = () => (
    <Styles>
        <div>
            <h5>
            Learning & Organizational Development</h5>
            <p>Northeastern provides a variety of opportunities for faculty and staff to broaden their knowledge in their current roles as well as to learn new skills. Human Resources Management offers workshops and leadership programs. Our catalog of training programs is published four times annually. View our <a href="https://www.northeastern.edu/hrm/pdfs/training-development/LearningCatalog.pdf" target="_blank">course catalogue</a> for course descriptions.</p>
        </div>

        <Container>
            <Row>
                <div>
                    <p><a href='http://news.northeastern.edu/' title="News at Northeastern" aria-label="News at Northeastern" target="_blank">News@Northeastern</a></p>
                </div>
                <div>Images will go in here</div>
            </Row>
        </Container>
        </Styles>
    )



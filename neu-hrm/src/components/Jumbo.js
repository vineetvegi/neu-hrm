import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
.jumbotron {
    background-image: url(https://news.northeastern.edu/wp-content/uploads/2020/03/krentzman-zoom.jpg);
    background-repeat: no-repeat, repeat;
    background-position: center;
    background-size: cover;
    padding-top: 50px;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 20px;
    padding: 100px;
    border-radius: 10px;
    bax-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    min-height: 300px;
}

.jumbotron h1, p {
    ${'' /* background-color: #ffffff73;  */}
    /**#ffffff73; */
    padding-top: 90px;
    font-style: italic;
    color: black;
}
`;

export const Jumbo = () => (
    <Styles>
        <Jumbotron fluid>
        <Container>
            {/* <h1> A University Like No Other</h1> */}
            {/* <p></p> */}
        </Container>
        </Jumbotron>
    </Styles>

)

import React from 'react'
import styled from 'styled-components';

const Styles = styled.div`
h5 {
    color: red;
}
p1 {
    font-size: 20px;
    font-weight: bold;
}
`;

export const Contact = () => (
        <Styles>
            <div>
                <h5>Contact Us</h5><br />
                <p1>Visit Us At:</p1> <br />
                <p2>250 Columbus Place</p2> <br />
                <p2>716 Columbus Avenue</p2> <br />
                <p2>Boston, MA 02115</p2> <br />
                <br />

                <p2>We are open Monday- Friday, 8:00 AM - 5:00 PM</p2>
                <br />
                <br />
                <p1>Phone:</p1>
                <p2> 617.373.2230</p2><br />
                <p1>Fax:</p1>
                <p2> 617.373.5090</p2> <br />
                <p1>Email:</p1>
                <p2><a href="HRMInfo@northeastern.edu"> HRMInfo@northeastern.edu</a></p2>

            </div>
        </Styles>
)
import { Container } from '@mui/material';
import React, { useEffect } from 'react';

function Contact() {
    useEffect(() => {
        document.title = 'Tourguru | Contact';
    });
    return (
        <Container>
            <p>contact</p>
        </Container>
    );
}

export default Contact;

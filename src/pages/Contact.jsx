import React, { useEffect } from 'react';

function Contact() {
    useEffect(() => {
        document.title = 'Tourguru | Contact';
    });
    return (
        <div>
            <p>this is the contact page</p>
        </div>
    );
}

export default Contact;

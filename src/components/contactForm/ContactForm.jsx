import React, { useState } from 'react';

import './contactForm.css'

function ContactForm() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Email: ${email}, Message: ${message}`);
        // Do something with the email and message, such as send it to a server.
        // Reset the form after submission
        setEmail('');
        setMessage('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    className='email-input'
                    placeholder="Email"
                    id="email-input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <textarea
                    className='message-input'
                    placeholder="Din besked"
                    id="message-input"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
            </div>
            <button className='submit-btn' type="submit">Send</button>
        </form>
    );
}

export default ContactForm;

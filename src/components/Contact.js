import React, { useRef, useState , useEffect } from 'react';
import emailjs from '@emailjs/browser';
import useIntersecting from './HandleIntersecting.js';


export const ContactUs = () => {
    const form = useRef();
    const iconRef = useRef(null);
    const contactRef = useRef(null);

    const [message, setMessage] = useState('');

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                setMessage('');
            }, 2000); 

            return () => clearTimeout(timer);
        }
    }, [message]);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qw5t3ta', 'template_0zr7gkf', form.current, 'dpGbEGcgIFktxQOgf')
        .then((result) => {
            setMessage('Successfully sent!');
            console.log(result.text);
        }, (error) => {
            setMessage('Failed to send!');
            console.log(error.text);
        });

    };
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    }

    const handleIntersectContact = () => {
        iconRef.current.classList.add('animate2');
    }

    useIntersecting(options,contactRef,handleIntersectContact);

    return (
        <section className='contact' id="contact" ref={contactRef}>
            <i className="fa fa-paper-plane-o" ref={iconRef}></i>
            <h2>Contact Me</h2>
            <div className="form-container">
                <form onSubmit={sendEmail} ref={form}>
                    <label>Name</label>
                    <input type="text" name="user_name" />

                    <label>Email</label>
                    <input type="email" name="user_email" />

                    <label>Message</label>
                    <textarea name="message" rows="5" cols="40"></textarea>
                    <input type="submit" value="Send"/>
                    {message && <p id='message'>{message}</p>}
                </form>
            </div>
        </section>
    );
};

export default ContactUs;
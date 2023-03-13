import { EmailJSResponseStatus } from '@emailjs/browser';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_wt8dodi', 'template_xcirh6y', form.current, 'bVbBU8nkN2GsUR0nm')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
            toast.success('Your Message Sent Successfully. Thank You.')
    };
    return (
        <div style={{ background: `url(${''})` }} className='text-center px-5 py-20 mt-20'>
            <h1 className='text-3xl text-center font-bold text-info mb-6'>Contact Me</h1>
            <h1 className="text-white text-4xl font-bold">Stay connected with me</h1>
            <form ref={form} onSubmit={sendEmail} className='lg:w-1/3 mx-auto mt-8'>
                <input name='name' type="text" placeholder="Name" className="input mb-5 input-bordered w-full" />
                <input name='email' type="email" placeholder="Email Address" className="input mb-5 input-bordered w-full" />
                <input name='subject' type="text" placeholder="Subject" className="input mb-5 input-bordered w-full" />
                <textarea name='message' className="textarea h-32 textarea-bordered w-full" placeholder="Your message"></textarea>
                <input className='mt-8 btn btn-primary bg-gradient-to-r from-info to-primary text-white' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Contact;
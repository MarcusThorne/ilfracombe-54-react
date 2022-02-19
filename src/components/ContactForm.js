import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import {EmailForm, FormButton} from '../styles/Contact.style'

function ContactForm() {
    // to send an email via form on website contact page
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_zdii2md', 'template_voucpyb', form.current, 'user_iSvLSi2fbEy7yc4nNfReY')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
        e.target.reset()
    };

    return (
        <div>
            <EmailForm ref={form} onSubmit={sendEmail}>
                <div>
                    <label>Name</label>
                    <input type="text" name="from_name" />
                </div>
                <div>
                    <label>Email <i>(required)</i></label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label>Message <i>(required)</i></label>
                    <textarea name="message" />
                </div>
                <FormButton type="submit" value="Send" />
            </EmailForm>
        </div>
    )
}

export default ContactForm

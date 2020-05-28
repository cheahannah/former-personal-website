import React from 'react';
import "./ContactForm.css";

class ContactForm extends React.Component {

  render() {
    return (
        <div className="form-group">
            <form action="https://getform.io/f/ccfbca67-f985-4f96-ac8d-49c801ff8f60" method="POST">
            
                <label>Full name</label>
                <input type="name" name="name" id="name" />
            
                <label>Email</label>
                <input type="email" name="email" id="email" />
            
                <label>Subject</label>
                <input type="subject" name="subject" id="subject" />
            
                <label>Message</label>
                <textarea name="message" id="message" rows="5" />

                <button type="submit" className="button">Send</button>
        </form>
      </div>
    );
  }
}

export default ContactForm
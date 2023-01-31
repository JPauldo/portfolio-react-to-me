import React, { useState, useEffect } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [visible, setVisible] = useState(false);

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    switch (inputType) {
      case 'name':
        setName(inputValue);
        break;
      case 'email':
        setEmail(inputValue)
        break;
      case 'subject':
        setSubject(inputValue)
        break;
      default:
        setMessage(inputValue)
        break;
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!name || !email || !subject || !message) {
      setErrorMessage('Please fill out the form!');
      setVisible(true);
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  useEffect(() => {
    let timer = 5;
    const footTime = setInterval(() => {
      timer--;
      
      // Once timer is done, the error message disappears
      if (timer === 0) {
        // footnote.setAttribute("style", "display: none;");
        setVisible(false);
        setErrorMessage('');
        clearInterval(footTime);
      }
    }, 1000);
  }, [errorMessage])


  return (
    <form>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input 
            className="input"
            value={name}
            name="name"
            onChange={handleInputChange} 
            type="text" 
            placeholder="Enter your name"></input>
        </div>
      </div>

      <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <input 
            className="input" 
            value={email}
            name="email"
            onChange={handleInputChange} 
            type="email" 
            placeholder="Enter your email"></input>
        </div>
      </div>

      <div className="field">
        <label className="label">Subject</label>
        <div className="control">
          <input 
            className="input" 
            value={subject}
            name="subject"
            onChange={handleInputChange} 
            type="text" 
            placeholder="Subject"></input>
        </div>
      </div>

      <div className="field">
        <label className="label">Message</label>
        <div className="control">
          <textarea 
            className="textarea" 
            value={message}
            name="message"
            min={50}
            onChange={handleInputChange} 
            placeholder="Write your message here..."></textarea>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <button 
            className="button is-link"
            onClick={handleFormSubmit}>Submit</button>
        </div>
      </div>

      {visible && (
        <div>
          <p className="has-text-danger">{errorMessage}</p>
        </div>
      )}
    </form>
  );
}

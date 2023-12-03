import React, { useState } from 'react'; 
import './App.css';

function App() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault(); 
    setSubmitted(true);
  };
  return (
    <div className="container">
      <h1>Contact me</h1>
      <form
        target="_blank"
        action="https://formsubmit.co/nagimbasher@gmail.com"
        method="POST"
        onSubmit={handleSubmit} 
      >
        <div className="form-group">
          <div className="form-row">
            <div className="col">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="col">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email Address"
                required
              />
        <input type="hidden" name="_next" 
        value=" https://nagimbsher.github.io/mycv/pages/index.html"></input>
            </div>
          </div>
        </div>
        <div className="form-group">
          <textarea
            placeholder="Your Message"
            className="form-control"
            name="message"
            rows="10"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-lg btn-dark btn-block">
          <h3>Submit Form</h3>
        </button>
      </form>
      {submitted && 
      <div className='thank'>Thank you for your message. I will get back to you soon!</div>}
     


     <a href={require("./CV.pdf")} download="CV.pdf">Download MY CV </a>

    </div>
  );
}

export default App;



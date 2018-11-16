import React  from 'react'
import 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'

import Layout from '../components/layout'


class ContactPage extends React.Component {

  constructor(props){
    super(props);
    this.fullName = React.createRef();
    this.email = React.createRef();
    this.question = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preferDefault();
    e.stopPropagation();
    fetch('https://hooks.zapier.com/hooks/catch/4011082/en2v00/silent', {
      method: 'post',
      body: {
        "full-name": this.fullName.value,
        "email-address": this.email.value,
        "question": this.question.value,
      }
    });
  }

  render() {

    return (

    <Layout>
      <div className="contact section">
        <form id="contact-form" onSubmit={this.handleSubmit} type="POST">
          <div className="input-area">
            <div className="input-field">
              <input type="text" name="full-name" ref={this.fullName} />
              <label htmlFor="full-name">What is your name?</label>
            </div>
            <div className="input-field">
              <input type="email" name="email-address" ref={this.email}/>
              <label htmlFor="email-address">What's your email address?</label>
            </div>
            <textarea id="textarea1" className="materialize-textarea" name="question" placeholder="Ask me anything" ref={this.question}/>
            <input type="submit" value="Submit" id="Form-submit" className="waves-effect waves-light btn"/>
          </div>
          <div className="text-area">Do not hesitate to contact to request more info about myself or my experience,
            ask for my resume, go snowboarding or ropejumping,ask random questions about the universe or science,
            get tips on solving sudoku puzzles.
            Just feel free to drop me a line anytime"
          </div>
        </form>
      </div>
    </Layout>
    )
  }
}

export default ContactPage;

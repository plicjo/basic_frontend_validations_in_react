import logo from './logo.svg';
import React from 'react';

class Form extends React.Component {
  state = {
    errors: []
  }

  nameRef = React.createRef();
  emailRef = React.createRef();
  passwordRef = React.createRef();
  passwordConfirmationRef = React.createRef();

  signUpUser = (event) => {
    event.preventDefault();
    const user = {
      name: this.nameRef.current.value,
      email: this.emailRef.current.value,
      password: this.passwordRef.current.value,
      passwordConfirmationRef: this.passwordConfirmationRef.current.value,
    }
    this.validate(user);
  }

  validate = (user) => {
    const validationErrors = [];
    if(user.password !== user.passwordConfirmation) { validationErrors.push('Passwords do not match') }
    if(user.name.length <= 3)                       { validationErrors.push('Name must be longer than 3 characters') }
    this.setState({ errors: validationErrors });
  }

  renderErrors = () => {
    if(!this.state.errors.length) { return }
    return (
      <div className='alert alert-warning'>
        {this.state.errors.map((error, index) => {
          return (<span key={index}>{error}<br/></span>)
        })}
      </div>
    );
  }
  render() {
    return (
      <form className="form-signin" onSubmit={this.signUpUser}>
        <img className="mb-4" src={logo} alt="" width={72} height={72} />


        <h1 className="h3 mb-3 font-weight-normal">Ridiculous Tech Tips Newsletter</h1>

        {this.renderErrors()}

        <label htmlFor="name" className="sr-only">Name</label>
        <input type="text" id="name" name='name' ref={this.nameRef} className="form-control" placeholder="Name" required/>

        <label htmlFor="inputEmail" className="sr-only">Email address</label>
        <input type="email" id="inputEmail" ref={this.emailRef} className="form-control" placeholder="Email address" required/>

        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <input type="password" id="inputPassword" ref={this.passwordRef} className="form-control" placeholder="Password" required/>

        <label htmlFor="inputPasswordConfirmation" className="sr-only">Password Confirmation</label>
        <input type="password" id="inputPasswordConfirmation" ref={this.passwordConfirmationRef} className="form-control mb-3" placeholder="Password Confirmation" required/>

        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign up!</button>
      </form>
    );
  }
}

export default Form;

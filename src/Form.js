import logo from './logo.svg';
import React from 'react';

function Form() {
  return (
    <form className="form-signin">
      <img className="mb-4" src={logo} alt="" width={72} height={72} />
      <h1 className="h3 mb-3 font-weight-normal">Ridiculous Tech Tips Newsletter</h1>

      <label htmlFor="name" className="sr-only">Name</label>
        <input type="email" id="name" className="form-control" placeholder="Name"/>

      <label htmlFor="inputEmail" className="sr-only">Email address</label>
      <input type="email" id="inputEmail" className="form-control" placeholder="Email address"/>

      <label htmlFor="inputPassword" className="sr-only">Password</label>
      <input type="password" id="inputPassword" className="form-control" placeholder="Password"/>

      <label htmlFor="inputPasswordConfirmation" className="sr-only">Password Confirmation</label>
      <input type="password" id="inputPasswordConfirmation" className="form-control mb-3" placeholder="Password Confirmation"/>

      <button className="btn btn-lg btn-primary btn-block" type="submit">Sign up!</button>
    </form>
  );
}

export default Form;

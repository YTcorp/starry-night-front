import React, { useState } from 'react';

import { login } from '../utils/fetchApi';
import { filterError } from '../utils/filterError';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onSuccess = (data) => {
    setEmail('');
    setPassword('');

    alert('Connexion OK, il manque un JWT et ce sera parfait !');

    console.log(data);
  };

  const onFail = (error) => {
    const errorFiltered = filterError(error);
    if (typeof errorFiltered !== typeof '') {
      setErrorMessage('La connexion a échoué');
    }
    else {
      setErrorMessage(errorFiltered);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(email, password, onSuccess, onFail);
  };

  return (
    <main className="Main Login">
      <form
        onSubmit={handleSubmit}
        className="Form Block Block--small"
      >
        {errorMessage.length > 0 && (
          <p className="Error">{errorMessage}</p>
        )}
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="email">Adresse email</label>
          <input
            className="Input"
            id="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            type="email"
            placeholder="spaceman@universe.com"
            required
          />
        </fieldset>

        <fieldset className="Fieldset">
          <label className="Label" htmlFor="password">Mot de passe</label>
          <input
            className="Input"
            id="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            type="password"
            placeholder="********"
            required
          />
        </fieldset>

        <button
          type="submit"
          className="Button"
        >
          Se connecter
        </button>
      </form>
    </main>
  )
};

export default Login;

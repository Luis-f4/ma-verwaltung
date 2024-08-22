import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      
      if (response.ok) {
        // Die Antwort als Text lesen, da der Token als Text zurückgegeben wird
        const token = await response.text();
        console.log("response ist ok!");
        console.log("response: " + response);
        if (token === "fail") {
          console.log("Login ist fehlgeschlagen")
          throw new Error('Login fehlgeschlagen. Überprüfen Sie Ihre Anmeldedaten.');
        }
        // Token im localStorage speichern
        console.log("Token wird jetzt gespeihert");
        console.log("Token:  " + token);
        localStorage.setItem('token', token);
        navigate('/'); // Weiterleitung zur Startseite

        console.log(token === localStorage.getItem('token'));
      } else {
        // Behandle den Fall, wenn die Antwort nicht erfolgreich war
        const errorText = await response.text();
        throw new Error(`Login fehlgeschlagen: ${errorText}`);
      }
      
    } catch (error) {
      setError(error.message);
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          required 
        />
      </label>
      <label>
        Password:
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
      </label>
      <button type="submit">Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default Login;


/*
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from './hooks/useAuth';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Token direkt als Text lesen
        const token = await response.text();
        if (token === 'fail') {
          console.log('Login fehlgeschlagen. Überprüfen Sie Ihre Anmeldedaten.');
          throw new Error('Login fehlgeschlagen. Überprüfen Sie Ihre Anmeldedaten.');
          
        }
        console.log("Token ist ok");
        login(token); // Token an die Authentifizierungslogik übergeben
        navigate('/'); // Weiterleitung zur Startseite
      } else {
        // Fehlerbehandlung für nicht erfolgreiche Antworten
        const errorText = await response.text();
        throw new Error(`Login fehlgeschlagen: ${errorText}`);
      }

    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          required 
        />
      </label>
      <label>
        Password:
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
      </label>
      <button type="submit">Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default Login;

*/

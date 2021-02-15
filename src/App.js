import logo from './logo.gif';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button'
import './API_call'
import InputGroup from 'react-bootstrap/InputGroup'
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import './Sign-in'
import Signin from './Sign-in';

function App() {
  function handleLogin(e) {
    e.preventDefault();
    console.log("This is how we handle LogIn")
  }
  function handleSignin(e) {
    e.preventDefault();
    console.log("This is how we handle SignIn")
  }
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <p>
          <code> Lets make some laughs!</code>
        </p>
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Turn on your SideKick
        </a>


        <Signin
          name="signin"
          id="signin"
          onClick={handleLogin}
        />
      </header>
    </div>

  );
}

export default App;

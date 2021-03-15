import logo from "./logo.gif";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "./API_call";
import "./Sign-in";
import Signin from "./Sign-in";
import ClockComponent from "./ClockComponent";
import Dictaphone from "./speech_component";
import Navbar from "./components/navbar";

function App() {
  function handleLogin(e) {
    e.preventDefault();
    console.log("This is how we handle LogIn");
  }
  function handleSignin(e) {
    e.preventDefault();
    console.log("This is how we handle SignIn");
  }
  return (
    <div className="App">
      <Navbar />
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

        <Signin name="signin" id="signin" onClick={handleLogin} />
        <div>
          {/* <ClockComponent /> */}
          <Dictaphone />
        </div>
      </header>
    </div>
  );
}

export default App;

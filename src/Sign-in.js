import React from "react";
import Field from "./field";
import { TextField } from "@material-ui/core";


const handlelogout = async e => {
  e.preventDefault();
  try {//remove jwt toke when logged out
    localStorage.storage.removeItem("token");
    //unauthorize user 
    //go to /login or other page
  } catch (logouterror) {
    console.error(logouterror.message);
  }
};
const Signin = (action) => {

//set state for username/email and password
  const [username, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSubmit= async e => { 

    e.preventDefault();
   
    try {
    const body = { username, password };
    //onsubmit json.stringify the username/passowrd 
   const  response = await fetch("/auth/login",
   {//post request to http://localhost:5000/auth/login or  just /auth/login for heroku

     method: "POST",
     headers: {"Content-type": "application/json" },
     body: JSON.stringify(body),
   }); 
    //if it returns a jwttoken save jwttoken in local storage else login failed
   const parseRes = await response.json();
   if(parseRes.jwtToken)  {localStorage.setItem("token", parseRes.jwtToken); }
   
//go somewhere if logged in

} 
 
 catch (loginerror) {
   console.error(loginerror.message);
   
 }
}
  let id = 0;
  id++;
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <TextField
          id={"SignUp" + id++}
          name="username"
          type="text"
          value ={username}
          placeholder="ex. john.smith"
          label="username"
          onChange ={ e => setUser(e.target.value)}
        />
      </div>

      <div className="form-group">
        <TextField
          id={"SignUp" + id++}
          name="password"
          type="password"
          value={password}
          placeholder="******"
          label="password"
          onChange={e => setPassword(e.target.value)}
        />
      </div>

      <button
        id={"SignUp" + id++}
        name="submit"
        type="submit"
        className="btn btn-success"
      >
        Login
      </button>
    </form>
  );
};

export default Signin;

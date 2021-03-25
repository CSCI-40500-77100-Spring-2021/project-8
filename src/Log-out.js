import React from "react";
import Field from "./field";
import { TextField } from "@material-ui/core";


const Logout = ()=> {

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
return (
<button onClick = {e => handlelogout}
className="btn btn-success"
>
Logout
</button>
  );
};

export default Logout;
import React from "react";
import Field from "./field";
import { TextField } from "@material-ui/core";

const signin = (action) => {
  let id = 0;
  id++;
  return (
    <form onSubmit={action}>
      <div className="form-group">
        <TextField
          id={"SignUp" + id++}
          name="username"
          type="text"
          placeholder="ex. john.smith"
          label="username"
        />
      </div>

      <div className="form-group">
        <TextField
          id={"SignUp" + id++}
          name="password"
          type="password"
          placeholder="******"
          label="password"
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

export default signin;

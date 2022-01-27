import React, { useState } from "react";
import "./Adduser.css";
import { addUser } from "../Service/Api";

const InitialValues = {
  FirstName: "",
  LastName: "",
  Email: "",
  State: "",
  City: "",
  Pincode: "",
};
const Adduser = () => {
  const [user, setUser] = useState(InitialValues);
  const { FirstName, LastName, Email, State, City, Pincode } = user;

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.FirstName]: e.target.value });
    console.log(e.target.value);
  };
  const addUserDetails = async () => {
    await addUser(user);
  };

  const regax =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const checkEmail = (e) => {
    setEmail(e.target.value);

    if (regax.test(email) === false) {
      setError("Enter Valid Email Address");
    } else {
      setError("");
      return true;
    }
  };
  return (
    <div>
      <div className="userdata">
        <div class="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            First Name
          </label>
          <br />
          <input
            onChange={(e) => onValueChange(e)}
            value={FirstName}
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Last Name
          </label>
          <br />
          <input
            onChange={(e) => onValueChange(e)}
            value={LastName}
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Email
          </label>
          <br />
          <input
            onChange={((e) => onValueChange(e), checkEmail)}
            value={Email}
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
          />
          <p className="text-danger p-2 m-2">{error}</p>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            State
          </label>
          <br />
          <select
            onChange={(e) => onValueChange(e)}
            value={State}
            className="form-select"
            aria-label="Default select example"
          >
            <option selected>State</option>
            <option value="1">Maharashtra</option>
            <option value="2">Goa</option>
            <option value="3">Gujrat</option>
            <option value="3">Delhi</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            City
          </label>
          <br />
          <input
            onChange={(e) => onValueChange(e)}
            value={City}
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Pincode
          </label>
          <br />
          <input
            onChange={(e) => onValueChange(e)}
            value={Pincode}
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
          />
        </div>
      </div>
      <div>
        <button onClick={() => addUserDetails()} type="button">
          Add
        </button>
        <button type="button">Cancel</button>
      </div>
    </div>
  );
};

export default Adduser;

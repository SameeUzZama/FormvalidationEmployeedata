import React, { useEffect, useState } from "react";
import "./Adduser.css";
import { editUser, getUsers } from "../Service/Api";
import { useParams } from "react-router-dom";

const InitialValues = {
  FirstName: "",
  LastName: "",
  Email: "",
  State: "",
  City: "",
  Pincode: "",
};
const Edituser = () => {
  const [user, setUser] = useState(InitialValues);
  const { FirstName, LastName, Email, State, City, Pincode } = user;
  const { id } = useParams();

  useEffect(() => {
    loadUserdata();
  });

  const loadUserdata = async () => {
    const response = await getUsers(id);
    setUser(response.data);
  };

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.FirstName]: e.target.value });
    console.log(e.target.value);
  };
  const editUserDetails = async () => {
    await editUser(id, user);
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
            onChange={(e) => onValueChange(e)}
            value={Email}
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
          />
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
        <button onClick={() => editUserDetails()} type="button">
          Add
        </button>
        <button type="button">Cancel</button>
      </div>
    </div>
  );
};

export default Edituser;

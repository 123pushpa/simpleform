import "./styles.css";
import { useState } from "react";

export default function App() {
  const [registration, setRegistration] = useState({
    username: "",
    email: "",
    phone: "",
    id: "",
    password: ""
  });

  const [records, setRecords] = useState([]);

  const handleinput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    console.log(name, value);
    setRegistration({ ...registration, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = { ...registration };

    setRecords([...records, newRecord]);
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <labl htmlFor="username">FULLNAME:</labl>
          <input
            onChange={handleinput}
            type="text"
            autoComplte="off"
            value={registration.username}
            name="username"
            id="username"
          ></input>
        </div>
        <div>
          <label htmlFor="email">EMAIL</label>
          <input
            onChange={handleinput}
            type="text"
            autoComplete="off"
            value={registration.email}
            name="email"
            id="email"
          ></input>
        </div>
        <div>
          <label>PhoneNo</label>
          <input
            onChange={handleinput}
            type="text"
            autoComplete="off"
            value={registration.phone}
            name="phone"
            id="phone"
          ></input>
        </div>
        <div>
          <label htmlFor="id">ID</label>
          <input
            onChange={handleinput}
            type="text"
            autoComplete="off"
            value={registration.id}
            name="id"
            id="id"
          ></input>
        </div>
        <div>
          <label htmlFor="password">PASSWORD</label>
          <input
            onChange={handleinput}
            type="password"
            autoComplete="off"
            name="password"
            id="password"
            value={registration.password}
          ></input>
        </div>
        <button type="submit">RGISTRATION</button>
      </form>
      <div>
        {records.map((el) => {
          return (
            <div>
              <p>{el.username}</p>
              <p>{el.email}</p>
              <p>{el.phone}</p>
              <p>{el.password}</p>
              <p>{el.id}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

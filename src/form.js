import React, { useState } from "react";

function Fields(props) {
  function HandleSubmit(e) {
   const { name, value } = e.target;
    props.setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }

  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={props.fieldName}
      >
        {props.fieldName}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
        name={props.fieldName}
        type={props.fieldType}
        value={props.value}
        onChange={HandleSubmit}
        placeholder={props.fieldName}/>
    </div>
  );
}

export default function Register() {
  const [form, setForm] = useState({
    Name: "",
    Age: "",
    Username: "",
    Password: "",
  });

  return (
    <div>
      <form className="flex-inline max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 m-10">
        <h1 className="text-xl text-center font-bold font-mono">Register</h1>
        <Fields
          fieldName="Name"
          fieldType="text"
          value={form.Name}
          setForm={setForm}
        />
        <Fields
          fieldName="Age"
          fieldType="number"
          value={form.Age}
          setForm={setForm}
        />
        <Fields
          fieldName="Username"
          fieldType="text"
          value={form.Username}
          setForm={setForm}
        />
        <Fields
          fieldName="Password"
          fieldType="password"
          value={form.Password}
          setForm={setForm}
        />
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => console.log(form)}
          >
            Sign In
          </button>
        </div>
        <div>
          <h2 className="text-xl font-bold">Form Data:</h2>
          <p>Name: {form.Name}</p>
          <p>Age: {form.Age}</p>
          <p>Username: {form.Username}</p>
          <p>Password: {form.Password}</p>
        </div>
      </form>
    </div>
  );
}































import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class UserData extends React.Component{
  constructor() {
    super();
    this.state={};
  }

onClick(e){
  e.preventDefault()
  let firstName = document.querySelector("#firstName").value;
    let lastName = document.querySelector("#lastName").value;
    let country = document.querySelector("#country").value;
    let gender = document.querySelector("#gender").value;
    let email = document.querySelector("#email").value;
    let file = document.querySelector("#file").value;

    if (
      firstName === "" ||
      lastName === "" ||
      gender === "" ||
      email === "" ||
      file === ""
    ) {
      alert("All fields are mandatory");
    }

    console.log(firstName);
    console.log(lastName);
    console.log(country);
    console.log(gender);
    console.log(email);
    console.log(file);
}


  render(){
    return(
      <div className='UserForm'>

        <h2 id = "h2">Registration From</h2>

        <div id = "container">
          <form >
            <input id='firstName'
            type={"text"}
            placeholder = 'Enter firstName' />

            <br/>
            <input
              id="lastName"
              type={"text"}
              placeholder="Enter lastName"
            />
            <br />
            <input
              id="country"
              type={"text"}
              placeholder="Enter country"
            />
            <br />

            <select id="gender">
              <option>selectGender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            <br />
            <input id="email" type={"email"} placeholder="Enter your e-mail" />
            <br />
            <input
              id="file"
              type={"file"}
              placeholder="uplode profile picture"
            />
            <br />
         <button id = "button" onClick={(e)=> this.onClick(e)}>
          submit
         </button>

          </form>
        </div>
        





      </div>
    )
  
}


}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <UserData />
  </React.StrictMode>
)


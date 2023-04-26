import {createUser} from "../api/api.js"

let form = document.querySelectorAll("#user-form input")
let user = {}
form.forEach((field) => {
    field.addEventListener("keyup", (event) => {
      let property = event.target.name;
      let value = event.target.value;
      user[property] = value;
    });
  });
document.querySelector("button").addEventListener("click", ()=>{
    createUser(user)
} )
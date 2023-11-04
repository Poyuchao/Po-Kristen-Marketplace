// import axios from 'axios';  import axios for making HTTP requests


export function validateUsername(username) {
    if (username.trim() === '') {
        return "Please input a valid username!";
    }
    return null;
}


export function validateEmail(email) {
    if (email.trim() === '') {
        return "Please input valid email!";
      }
      // Return null if the username is valid
      return null; 
  }

  
  export function validatePassword(password) {
    if (password.trim() === '') {
        return "Please input valid password!";
      }
      // Return null if the username is  valid
      return null; 
  }

  

  
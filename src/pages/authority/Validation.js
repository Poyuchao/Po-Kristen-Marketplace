

// Function to validate the username
export function validateUsername(username) {
    if (username.trim() === '') {
      return "Sorry, username can't be empty.";
    }
    // Return null if the username is valid
    return null; 
  }


  export function validateEmail(email) {
    if (email.trim() === '') {
        return "Sorry, email can't be empty.";
      }
      // Return null if the username is valid
      return null; 
  }

  
  export function validatePassword(password) {
    if (password.trim() === '') {
        return "Sorry, password can't be empty.";
      }
      // Return null if the username is valid
      return null; 
  }

  export function validateGender(gender) {
    if (gender.trim() === '') {
        return "gender can't be empty";
      }
      // Return null if the username is valid
      return null; 
  }
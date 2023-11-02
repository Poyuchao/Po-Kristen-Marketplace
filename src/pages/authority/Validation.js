

// Function to validate the username
export function validateUsername(username) {
    if (username.trim() === '') {
      return "Please input valid username!";
    }
    // Return null if the username is valid
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
      // Return null if the username is valid
      return null; 
  }

  export function validateGender(gender) {
    if (gender.trim() === '') {
        return "please choose your gender!";
      }
      // Return null if the username is valid
      return null; 
  }
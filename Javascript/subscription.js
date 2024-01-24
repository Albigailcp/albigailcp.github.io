function validateAndRegister() {
    // Get form inputs
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    // Perform validation
    if (!isValidName(name)) {
      alert('Please enter a valid name.');
      return;
    }
  
    if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    if (!isValidPassword(password)) {
      alert('Password must be at least 6 characters long and include letters and numbers.');
      return;
    }
  
    // Temporary registration logic (you can replace this with actual registration logic)
    alert('Information temporarily registered. Redirecting to Our Team page.');
    window.location.href = 'our_team.html';
  }
  
  function isValidName(name) {
    // Add your name validation logic here
    return name.trim() !== '';
  }
  
  function isValidEmail(email) {
    // Add your email validation logic here
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  
  function isValidPassword(password) {
    // Add your password validation logic here
    return password.length >= 6 && /\d/.test(password) && /[a-zA-Z]/.test(password);
  }
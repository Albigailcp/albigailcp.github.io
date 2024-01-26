function validateAndRegister() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
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
  
    alert('Information temporarily registered. We will contact you later');
    window.location.href = 'index.html';
  }
  
  function isValidName(name) {
    return name.trim(20) !== '';
  }
  
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  
  function isValidPassword(password) {
    return password.length >= 6 && /\d/.test(password) && /[a-zA-Z]/.test(password);
  }
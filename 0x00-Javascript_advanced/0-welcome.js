function welcome(firstName, lastName) {
  const fullName = `${firstName} ${lastName}`;

  function displayFullName() {
    alert(`Welcome ${fullName}!`);
  }

  displayFullName();
}

//For testing in browser
welcome('Holberton', 'School');
document.getElementById("form").onsubmit = e => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  if (name && email && phone) {
    alert(`Thank you for registering, ${name}!`);
    e.target.reset();
  } else {
    alert("Please fill in all fields.");
  }
};
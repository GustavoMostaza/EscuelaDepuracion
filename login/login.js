document.getElementById('showModalBtn').addEventListener('click', function() {
  document.getElementById('modal').style.display = 'block';
});

document.getElementsByClassName('close-btn')[0].addEventListener('click', function() {
  document.getElementById('modal').style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target == document.getElementById('modal')) {
    document.getElementById('modal').style.display = 'none';
  }
});

document.getElementById('userForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting the default way

  // Get form data
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const numero = parseInt(document.getElementById('numero').value);

  // Create payload
  const payload = {
    nombre: nombre,
    apellido: apellido,
    numero: numero
  };

  // Send data to the API
  fetch('http://localhost/Apis/loginWeb2.php', { // Replace with your actual API endpoint
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
  .then(response => {
    if (!response.ok) {
      return response.json().then(errorData => {
        throw new Error(errorData.message || 'Error al enviar los datos');
      });
    }
    return response.json();
  })
  .then(data => {
    console.log('Success:', data);
    alert('Datos enviados y guardados exitosamente');
  })
  .catch((error) => {
    console.error('Error:', error);
    alert(`Hubo un error al enviar los datos: ${error.message}`);
  });
});

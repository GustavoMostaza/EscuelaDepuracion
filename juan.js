document.addEventListener('DOMContentLoaded', function() {
    const pepeButton = document.getElementById('pepe-button');
    const destinationBody = document.getElementById('destination-body');
    const destinationTable = document.getElementById('destination-table');

    pepeButton.addEventListener('click', function() {
        fetch('http://localhost/Apis/primera.php')
            .then(response => response.json())
            .then(data => {
                destinationBody.innerHTML = '';

                data.forEach(destination => {
                    const row = document.createElement('tr');
                    const destinationData = [destination.Destino, destination.Descripcion, destination.Precio];

                    destinationData.forEach(cellData => {
                        const cell = document.createElement('td');
                        cell.textContent = cellData;
                        cell.classList.add('border', 'px-4', 'py-2');
                        row.appendChild(cell);
                    });

                    destinationBody.appendChild(row);
                });

                destinationTable.classList.remove('hidden');
            })
            .catch(error => console.error('Error al obtener los datos:', error));
    });
});

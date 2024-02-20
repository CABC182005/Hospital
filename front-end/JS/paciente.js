




/*Funcion boton registrar*/ 
document.addEventListener('DOMContentLoaded', function() {
    const userForm = document.getElementById('userForm');
    const userTable = document.getElementById('userTable').getElementsByTagName('tbody')[0];
    
    userForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const id = document.getElementById('id').value;
        const document = document.getElementById('document').value;
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const secondLastName = document.getElementById('secondLastName').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const contacto = document.getElementById('contacto').value;
        const numcontacto = document.getElementById('numcontacto').value;
        const status = document.getElementById('status').value;
        
        const newRow = userTable.insertRow();
        newRow.innerHTML = `
            <td>${id}</td>
            <td>${document}</td>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${secondLastName}</td>
            <td>${phone}</td>
            <td>${email}</td>
            <td>${contacto}</td>
            <td>${numcontacto}</td>
            <td>${status}</td>
            <td>
                <button type="button" class="btn btn-danger btn-sm delete-btn">Eliminar</button>
                <button type="button" class="btn btn-warning btn-sm status-btn">${status === 'activo' ? 'Desactivar' : 'Activar'}</button>
            </td>
        `;
        
        // Limpiar campos del formulario después de agregar el usuario
        userForm.reset();
    });

    // Event listener para eliminar usuario
    userTable.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-btn')) {
            const row = event.target.closest('tr');
            row.remove();
        }
    });

    // Event listener para cambiar el estado del usuario
    userTable.addEventListener('click', function(event) {
        if (event.target.classList.contains('status-btn')) {
            const button = event.target;
            const row = button.closest('tr');
            const statusCell = row.cells[7]; // Índice de la celda de estado en la fila
            const currentStatus = statusCell.textContent.trim();
            statusCell.textContent = currentStatus === 'activo' ? 'inactivo' : 'activo';
            button.textContent = currentStatus === 'activo' ? 'Activar' : 'Desactivar';
            button.classList.toggle('btn-warning');
            button.classList.toggle('btn-success');
        }
    });
});

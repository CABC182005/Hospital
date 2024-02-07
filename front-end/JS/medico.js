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
            <td>${status}</td>
        `;
        
        // Limpiar campos del formulario después de agregar el usuario
        userForm.reset();
    });
});

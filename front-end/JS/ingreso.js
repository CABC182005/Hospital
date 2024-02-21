var url="http://localhost:8080/api/hospital/ingreso/";

function listarIngreso(){
    //METODO PARA LISTAR LOS CLIENTES
    //SE CREA LA PETICION AJAX
    $.ajax({
        url:url,
        type:"GET",
        success: function(result){
            //success: funcion que se ejecuta
            //cuando la peticion tiene exito
            console.log(result);
    
            var cuerpoTablaIngreso=document.getElementById("cuerpoTablaIngreso");
            //Se limpia el cuepro de la tabla
            cuerpoTablaIngreso.innerHTML="";
            //se hace un ciclo que recorra l arreglo con los datos
            for(var i=0; i<result.length;i++){
                //UNA ETIQUETA tr por cada registro
                var trResgistro=document.createElement("tr");

                var celdaIdIngreso=document.createElement("td");
                let celdaHabitacion = document.createElement("td")
                let celdaCama = document.createElement("td")
                let celdaPaciente = document.createElement("td")
                let celdaMedico = document.createElement("td")
                let celdaFechaIngreso = document.createElement("td")
                let celdaFechaSalida = document.createElement("td")
                let celdaEstado = document.createElement("td")
                
                let celdaOpcion = document.createElement("td");
                let botonEditarPaciente = document.createElement("button")
                botonEditarPaciente.innerHTML="Editar"
                botonEditarPaciente.className = "btn btn-warning"
    
                let botonDesahabilitarPaciente = document.createElement("button")
                botonDesahabilitarPaciente.innerHTML="Desahabilitar"
                botonDesahabilitarPaciente.className = "btn btn-danger"
    
                celdaIdIngreso.innerText=result[i]["id_ingreso"];
                celdaHabitacion.innerText=result[i]["habitacion"];
                celdaCama.innerText=result[i]["cama"];
                celdaPaciente.innerText=result[i]["paciente"];
                celdaMedico.innerText=result[i]["medico"];
                celdaFechaIngreso.innerText=result[i]["fecha_ingreso"];
                celdaFechaSalida.innerText=result[i]["fecha_salida"];
                celdaEstado.innerText=result[i]["estado"];
                
    
                trResgistro.appendChild(celdaIdIngreso);
                trResgistro.appendChild(celdaHabitacion);
                trResgistro.appendChild(celdaCama);
                trResgistro.appendChild(celdaPaciente);
                trResgistro.appendChild(celdaMedico);
                trResgistro.appendChild(celdaFechaIngreso);
                trResgistro.appendChild(celdaFechaSalida);
                trResgistro.appendChild(celdaEstado);
                
                
                celdaOpcion.appendChild(botonEditarPaciente);
                trResgistro.appendChild(celdaOpcion)
    
                celdaOpcion.appendChild(botonDesahabilitarPaciente);
                trResgistro.appendChild(celdaOpcion)
    
                cuerpoTablaIngreso.appendChild(trResgistro);

               
                //creamos un td por cada campo de resgistro
                
            }
        },
        error: function(error){
            /*
            ERROR: funcion que se ejecuta cuando la peticion tiene un error
            */
            alert("Error en la petición " + error);
        }
    });
    }

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

var url="http://localhost:8080/api/hospital/paciente/";

function listarPaciente(){
    //METODO PARA LISTAR LOS CLIENTES
    //SE CREA LA PETICION AJAX
    $.ajax({
        url:url,
        type:"GET",
        success: function(result){
            //success: funcion que se ejecuta
            //cuando la peticion tiene exito
            console.log(result);
    
            var cuerpoTablaPaciente=document.getElementById("cuerpoTablaPaciente");
            //Se limpia el cuepro de la tabla
            cuerpoTablaPaciente.innerHTML="";
            //se hace un ciclo que recorra l arreglo con los datos
            for(var i=0; i<result.length;i++){
                //UNA ETIQUETA tr por cada registro
                var trResgistro=document.createElement("tr");

                var celdaIdPaciente=document.createElement("td");
                let celdaDocumentoPaciente = document.createElement("td")
                let celdaPrimerNombrePaciente = document.createElement("td")
                let celdaSegundoNombrePaciente = document.createElement("td")
                let celdaPrimerApellidoPaciente = document.createElement("td")
                let celdaSegundoApellidoPaciente = document.createElement("td")
                let celdaCorreoPaciente = document.createElement("td")
                let celdaTelefonoPaciente = document.createElement("td")
                let celdaNombrePersonContac = document.createElement("td")
                let celdaNombrePersonContac = document.createElement("td")
                
                let celdaOpcion = document.createElement("td");
                let botonEditarMedico = document.createElement("button")
                botonEditarMedico.innerHTML="Editar"
                botonEditarMedico.className = "btn btn-warning"
    
                let celdaOpcion2 = document.createElement("td");
                let botonEliminarMedico = document.createElement("button")
                botonEliminarMedico.innerHTML="Eliminar"
                botonEliminarMedico.className = "btn btn-danger"
    
                celdaId.innerText=result[i]["id_medico"];
                celdaDocumentoMedico.innerText=result[i]["doc_medico"];
                celdaPrimerNombreMedico.innerText=result[i]["primer_nombre_medico"];
                celdaSegundoNombreMedico.innerText=result[i]["segundo_nombre_medico"];
                celdaPrimerApellidoMedico.innerText=result[i]["primer_apellido_medico"];
                celdaSegundoApellidoMedico.innerText=result[i]["segundo_apellido_medico"];
                celdaCorreoMedico.innerText=result[i]["correo_medico"];
                celdaTelefonoMedico.innerText=result[i]["telefono_medico"];
                celdaEstadoMedico.innerText=result[i]["estado_medico"];
                
    
                trResgistro.appendChild(celdaId);
                trResgistro.appendChild(celdaDocumentoMedico);
                trResgistro.appendChild(celdaPrimerNombreMedico);
                trResgistro.appendChild(celdaSegundoNombreMedico);
                trResgistro.appendChild(celdaPrimerApellidoMedico);
                trResgistro.appendChild(celdaSegundoApellidoMedico);
                trResgistro.appendChild(celdaCorreoMedico);
                trResgistro.appendChild(celdaTelefonoMedico);
                trResgistro.appendChild(celdaEstadoMedico);
                
                
                celdaOpcion.appendChild(botonEditarMedico);
                trResgistro.appendChild(celdaOpcion)
    
                celdaOpcion2.appendChild(botonEliminarMedico);
                trResgistro.appendChild(celdaOpcion2)
    
                cuerpoTablaPaciente.appendChild(trResgistro);

               
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

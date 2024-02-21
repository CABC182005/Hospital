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
                let celdaTelefonoPersonContac = document.createElement("td")
                
                let celdaOpcion = document.createElement("td");
                let botonEditarPaciente = document.createElement("button")
                botonEditarPaciente.innerHTML="Editar"
                botonEditarPaciente.className = "btn btn-warning"
    
                let botonDesahabilitarPaciente = document.createElement("button")
                botonDesahabilitarPaciente.innerHTML="Desahabilitar"
                botonDesahabilitarPaciente.className = "btn btn-danger"
    
                celdaIdPaciente.innerText=result[i]["id_paciente"];
                celdaDocumentoPaciente.innerText=result[i]["doc_paciente"];
                celdaPrimerNombrePaciente.innerText=result[i]["primer_nombre_paciente"];
                celdaSegundoNombrePaciente.innerText=result[i]["segundo_nombre_paciente"];
                celdaPrimerApellidoPaciente.innerText=result[i]["primer_apellido_paciente"];
                celdaSegundoApellidoPaciente.innerText=result[i]["ssegundo_apellido_paciente"];
                celdaCorreoPaciente.innerText=result[i]["correo_paciente"];
                celdaTelefonoPaciente.innerText=result[i]["telefono_paciente"];
                celdaNombrePersonContac.innerText=result[i]["nombre_percontac"];
                celdaTelefonoPersonContac.innerText=result[i]["tel_percontac"];
                
    
                trResgistro.appendChild(celdaIdPaciente);
                trResgistro.appendChild(celdaDocumentoPaciente);
                trResgistro.appendChild(celdaPrimerNombrePaciente);
                trResgistro.appendChild(celdaSegundoNombrePaciente);
                trResgistro.appendChild(celdaPrimerApellidoPaciente);
                trResgistro.appendChild(celdaSegundoApellidoPaciente);
                trResgistro.appendChild(celdaCorreoPaciente);
                trResgistro.appendChild(celdaTelefonoPaciente);
                trResgistro.appendChild(celdaNombrePersonContac);
                trResgistro.appendChild(celdaTelefonoPersonContac);
                
                
                celdaOpcion.appendChild(botonEditarPaciente);
                trResgistro.appendChild(celdaOpcion)
    
                celdaOpcion.appendChild(botonDesahabilitarPaciente);
                trResgistro.appendChild(celdaOpcion)
    
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
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
                let botonEditarMedico = document.createElement("button");
                botonEditarMedico.value=result[i]["id_paciente"];
                botonEditarMedico.innerHTML = "Editar";
                
                botonEditarMedico.onclick=function(e){
                    $('#exampleModal').modal('show');
                    consultarPacienteID(this.value);
                }
                botonEditarMedico.className = "btn btn-warning editar-medico";

                let botonDesahabilitarMedico = document.createElement("button");
                botonDesahabilitarMedico.innerHTML = "Deshabilitar";
                botonDesahabilitarMedico.className = "btn btn-danger deshabilitar-medico";

                celdaOpcion.appendChild(botonEditarMedico);
                celdaOpcion.appendChild(botonDesahabilitarMedico);
    
                celdaIdPaciente.innerText=result[i]["id_paciente"];
                celdaDocumentoPaciente.innerText=result[i]["doc_paciente"];
                celdaPrimerNombrePaciente.innerText=result[i]["primer_nombre_paciente"];
                celdaSegundoNombrePaciente.innerText=result[i]["segundo_nombre_paciente"];
                celdaPrimerApellidoPaciente.innerText=result[i]["primer_apellido_paciente"];
                celdaSegundoApellidoPaciente.innerText=result[i]["segundo_apellido_paciente"];
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

    function consultarPacienteID(id){
        //alert(id);
        $.ajax({
            url:url+id,
            type:"GET",
            success: function(result){
                document.getElementById("id_paciente").value=result["id_paciente"];
                document.getElementById("doc_paciente").value=result["doc_paciente"];
                document.getElementById("primer_nombre_paciente").value=result["primer_nombre_paciente"];
                document.getElementById("segundo_nombre_paciente").value=result["segundo_nombre_paciente"];
                document.getElementById("primer_apellido_paciente").value=result["primer_apellido_paciente"];
                document.getElementById("segundo_apellido_paciente").value=result["segundo_apellido_paciente"];
                document.getElementById("telefono_paciente").value=result["telefono_paciente"];
                document.getElementById("correo_paciente").value=result["correo_paciente"];
                document.getElementById("nombre_percontac").value=result["nombre_percontac"];
                document.getElementById("tel_percontac").value=result["tel_percontac"];
            }
        });
    }
    //2.Crear petición que actualice la información del medico
    
    function actualizarPaciente() { 
        var id_paciente=document.getElementById("id_paciente").value
        let formData={
            "doc_paciente": document.getElementById("doc_paciente").value,
            "primer_nombre_paciente": document.getElementById("primer_nombre_paciente").value,
            "segundo_nombre_paciente": document.getElementById("segundo_nombre_paciente").value,
            "primer_apellido_paciente": document.getElementById("primer_apellido_paciente").value,
            "segundo_apellido_paciente": document.getElementById("segundo_apellido_paciente").value,
            "telefono_paciente": document.getElementById("telefono_paciente").value,
            "correo_paciente": document.getElementById("correo_paciente").value,
            "nombre_percontac": document.getElementById("nombre_percontac").value,
            "tel_percontac": document.getElementById("tel_percontac").value
    };
    
    if (validarCampos()) {
        $.ajax({
            url:url+id_paciente,
            type: "PUT",
            data: formData,
            success: function(result) {
                // Manejar la respuesta exitosa según necesites
                Swal.fire({
                    title: "¡Excelente!",
                    text: "Se guardó correctamente",
                    icon: "success"
                  });
                // Puedes hacer algo adicional como recargar la lista de médicos
                listarPaciente();
            },
            error: function(error) {
                // Manejar el error de la petición
                Swal.fire({
                    title: "¡Error!",
                    text: "No se guardó",
                    icon: "error"
                  });
            }
        });
        } else {
        Swal.fire({
            title: "¡Error!",
            text: "Llene todos los campos correctamente",
            icon: "error"
          });
        }
    }
    

    function registrarPaciente() {
  
        let formData={
            "doc_paciente": document.getElementById("doc_paciente").value,
            "primer_nombre_paciente": document.getElementById("primer_nombre_paciente").value,
            "segundo_nombre_paciente": document.getElementById("segundo_nombre_paciente").value,
            "primer_apellido_paciente": document.getElementById("primer_apellido_paciente").value,
            "segundo_apellido_paciente": document.getElementById("segundo_apellido_paciente").value,
            "telefono_paciente": document.getElementById("telefono_paciente").value,
            "correo_paciente": document.getElementById("correo_paciente").value,
            "nombre_percontac": document.getElementById("nombre_percontac").value,
            "tel_percontac": document.getElementById("tel_percontac").value
            
        };
    
        if (validarCampos()) {
            $.ajax({
                url:url,
                type:"POST",
                data:formData,
                success: function (result){
                    //
                    Swal.fire({
                        title: "¡Excelente!",
                        text: "Se guardó correctamente",
                        icon: "success"
                      });
                },
            })}else{
                Swal.fire({
                    title: "¡Error!",
                    text: "Llene todos los campos correctamente",
                    icon: "error"
                  });
        }
    }
    
        
    function validarCampos(){
        var doc_paciente = document.getElementById("doc_paciente");
        return validarNumeroDocumento(doc_paciente);
    }
    function validarNumeroDocumento(cuadroNumero){
       var valor=cuadroNumero.value;
       var valido=true;
       if (valor.length <5 || valor.length> 11){
        valido=false
       }
    
       if(valido){
        cuadroNumero.className="form-control is-valid";
       }else{
        cuadroNumero.className="form-control is-invalid";
       }
       return valido;
    
    }
<<<<<<< HEAD

    function limpiar() {
        document.getElementById("doc_paciente").value = "";
        document.getElementById("primer_nombre_paciente").value = "";
        document.getElementById("segundo_nombre_paciente").value = "";
        document.getElementById("primer_apellido_paciente").value = "";
        document.getElementById("segundo_apellido_paciente").value = "";
        document.getElementById("telefono_paciente").value = "";
        document.getElementById("correo_paciente").value = "";
        document.getElementById("nombre_percontac").value = "";
        document.getElementById("tel_percontac").value = "";
=======
    function limpiar() {
            document.getElementById("doc_paciente").value = "";
            document.getElementById("primer_nombre_paciente").value = "";
            document.getElementById("segundo_nombre_paciente").value = "";
            document.getElementById("primer_apellido_paciente").value = "";
            document.getElementById("segundo_apellido_paciente").value = "";
            document.getElementById("telefono_paciente").value = "";
            document.getElementById("correo_paciente").value = "";
            document.getElementById("nombre_percontac").value = "";
            document.getElementById("tel_percontac").value = "";
>>>>>>> 6cc21deb2d544d0c5a5b73a1ba624b23c3279539
    }
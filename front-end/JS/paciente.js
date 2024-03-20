var url="http://localhost:8080/api/hospital/paciente/";

function listarPaciente(){
    //METODO PARA LISTAR LOS CLIENTES
    //SE CREA LA PETICION AJAX

    var urlLocal=url;
    var filtro=document.getElementById("texto").value
    if(filtro!="")
        urlLocal+="busqueda/"+filtro;

    $.ajax({
        url:urlLocal,
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
                let botonEditarPaciente = document.createElement("button");
                botonEditarPaciente.value=result[i]["id_paciente"];
                botonEditarPaciente.innerHTML = "Editar";
                
                botonEditarPaciente.onclick=function(e){
                    $('#exampleModal').modal('show');
                    consultarPacienteID(this.value);
                }
                botonEditarPaciente.className = "btn btn-warning editar-paciente";

                let botonDeshabilitarPaciente = document.createElement("button");
                botonDeshabilitarPaciente.innerHTML = "Deshabilitar";
                botonDeshabilitarPaciente.className = "btn btn-danger deshabilitar-paciente";

                let pacienteIdParaDeshabilitar = result[i]["id_paciente"];
                botonDeshabilitarPaciente.onclick = function() {
                deshabilitarPaciente(pacienteIdParaDeshabilitar);
                };

                celdaOpcion.appendChild(botonEditarPaciente);
                celdaOpcion.appendChild(botonDeshabilitarPaciente);
    
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
    
    function deshabilitarPaciente(id) {
        Swal.fire({
            title: '¿Está seguro?',
            text: "Esta acción no se puede deshacer",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, deshabilitar!'
        }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    url: url + id,
                    type: "DELETE",
                    success: function (result) {
                        Swal.fire(
                            'Deshabilitado!',
                            'El registro ha sido deshabilitado.',
                            'success'
                        );
                        listarPaciente(); // Recarga la lista de médicos
                    },
                    error: function (error) {
                        Swal.fire(
                            'Error!',
                            'No se pudo deshabilitar el registro.',
                            'error'
                        );
                    }
                });
            }
        });
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
    
        
    //validación número de documento
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
    //validación primer nombre
    function validarCampos(){
        var primer_nombre_paciente = document.getElementById("primer_nombre_paciente");
        return validarPrimerNombrePaciente(primer_nombre_paciente);
    }
    function validarPrimerNombrePaciente(cuadroPrimerNombrePaciente){
        var valor=cuadroPrimerNombrePaciente.value;
        var valido=true;
        if (valor.length <3 || valor.length> 21){
         valido=false
        }
     
        if(valido){
            cuadroPrimerNombrePaciente.className="form-control is-valid";
        }else{
            cuadroPrimerNombrePaciente.className="form-control is-invalid";
        }
        return valido;
     }

     //validación segundo nombre
     function validarCampos(){
        var segundo_nombre_paciente = document.getElementById("segundo_nombre_paciente");
        return validarSegundoNombrePaciente(segundo_nombre_paciente);
    }
    function validarSegundoNombrePaciente(cuadroSegundoNombrePaciente){
        var valor=cuadroSegundoNombrePaciente.value;
        var valido=true;
        if (valor.length <3 || valor.length> 21){
         valido=false
        }
     
        if(valido){
            cuadroSegundoNombrePaciente.className="form-control is-valid";
        }else{
            cuadroSegundoNombrePaciente.className="form-control is-invalid";
        }
        return valido;
     }

     //validación primer apellido
     function validarCampos(){
        var primer_apellido_paciente = document.getElementById("primer_apellido_paciente");
        return validarPrimerApellidoPaciente(primer_apellido_paciente);
    }
    function validarPrimerApellidoPaciente(cuadroPrimerApellidoPaciente){
        var valor=cuadroPrimerApellidoPaciente.value;
        var valido=true;
        if (valor.length <2 || valor.length> 21){
         valido=false
        }
     
        if(valido){
            cuadroPrimerApellidoPaciente.className="form-control is-valid";
        }else{
            cuadroPrimerApellidoPaciente.className="form-control is-invalid";
        }
        return valido;
     }

     //validación segundo apellido
     function validarCampos(){
        var segundo_apellido_paciente = document.getElementById("segundo_apellido_paciente");
        return validarSegundoApellidoPaciente(segundo_apellido_paciente);
    }
    function validarSegundoApellidoPaciente(cuadroSegundoApellidoPaciente){
        var valor=cuadroSegundoApellidoPaciente.value;
        var valido=true;
        if (valor.length <2 || valor.length> 21){
         valido=false
        }
     
        if(valido){
            cuadroSegundoApellidoPaciente.className="form-control is-valid";
        }else{
            cuadroSegundoApellidoPaciente.className="form-control is-invalid";
        }
        return valido;
     }

     //validación telefono
     function validarCampos(){
        var telefono_paciente = document.getElementById("telefono_paciente");
        return validarTelefonoPaciente(telefono_paciente);
    }
    function validarTelefonoPaciente(cuadroTelelefono){
        var valor=cuadroTelelefono.value;
        var valido=true;
        if (valor.length <7 || valor.length> 16){
         valido=false
        }
     
        if(valido){
            cuadroTelelefono.className="form-control is-valid";
        }else{
            cuadroTelelefono.className="form-control is-invalid";
        }
        return valido;
     }

     //validación correo
     function validarCampos(){
        var correo_paciente = document.getElementById("correo_paciente");
        return validarCorreoPaciente(correo_paciente);
    }
    function validarCorreoPaciente(cuadroCorreo){
        var valor=cuadroCorreo.value;
        var valido=true;
        if (valor.length <7 || valor.length> 256){
         valido=false
        }
     
        if(valido){
            cuadroCorreo.className="form-control is-valid";
        }else{
            cuadroCorreo.className="form-control is-invalid";
        }
        return valido;
     }

     //validación nombre persona de contacto
     function validarCampos(){
        var nombre_percontac = document.getElementById("nombre_percontac");
        return validarNombrePersonaContacto(nombre_percontac);
    }
    function validarNombrePersonaContacto(cuadroPersonaContacto){
        var valor=cuadroPersonaContacto.value;
        var valido=true;
        if (valor.length <7 || valor.length> 256){
         valido=false
        }
     
        if(valido){
            cuadroPersonaContacto.className="form-control is-valid";
        }else{
            cuadroPersonaContacto.className="form-control is-invalid";
        }
        return valido;
     }

     //validación nombre telefono de contacto
     function validarCampos(){
        var tel_percontac = document.getElementById("tel_percontac");
        return validarNombrePersonaContacto(tel_percontac);
    }
    function validarNombrePersonaContacto(cuadroTelefonoContacto){
        var valor=cuadroTelefonoContacto.value;
        var valido=true;
        if (valor.length <7 || valor.length> 101){
         valido=false
        }
     
        if(valido){
            cuadroTelefonoContacto.className="form-control is-valid";
        }else{
            cuadroTelefonoContacto.className="form-control is-invalid";
        }
        return valido;
     }
     
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
    }
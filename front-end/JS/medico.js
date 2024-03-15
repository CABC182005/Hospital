var url="http://localhost:8080/api/hospital/medico/";

function listarMedico(){
    //METODO PARA LISTAR LOS CLIENTES
    //SE CREA LA PETICION AJAX
    $.ajax({
        url:url,
        type:"GET",
        success: function(result){
            //success: funcion que se ejecuta
            //cuando la peticion tiene exito
            console.log(result);
    
            var cuerpoTablaMedico=document.getElementById("cuerpoTablaMedico");
            //Se limpia el cuepro de la tabla
            cuerpoTablaMedico.innerHTML="";
            //se hace un ciclo que recorra l arreglo con los datos
            for(var i=0; i<result.length;i++){
                //UNA ETIQUETA tr por cada registro
                var trResgistro=document.createElement("tr");

                var celdaId=document.createElement("tr");
                let celdaDocumentoMedico = document.createElement("td")
                let celdaPrimerNombreMedico = document.createElement("td")
                let celdaSegundoNombreMedico = document.createElement("td")
                let celdaPrimerApellidoMedico = document.createElement("td")
                let celdaSegundoApellidoMedico = document.createElement("td")
                let celdaCorreoMedico = document.createElement("td")
                let celdaTelefonoMedico = document.createElement("td")
                let celdaEstadoMedico = document.createElement("td")
                
                
    
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

                //botones editar y deshabilitar
                let celdaOpcion = document.createElement("td");
                let botonEditarMedico = document.createElement("button");
                botonEditarMedico.value=result[i]["id_medico"];
                botonEditarMedico.innerHTML = "Editar";
                
                botonEditarMedico.onclick=function(e){
                    $('#exampleModal').modal('show');
                    consultarMedicoID(this.value);
                }
                botonEditarMedico.className = "btn btn-warning editar-medico";

                let botonDeshabilitarMedico = document.createElement("button");
                botonDeshabilitarMedico.innerHTML = "Deshabilitar";
                botonDeshabilitarMedico.className = "btn btn-danger deshabilitar-medico";

                let medicoIdParaDeshabilitar = result[i]["id_medico"];
                botonDeshabilitarMedico.onclick = function() {
                deshabilitarMedico(medicoIdParaDeshabilitar);
                };


                celdaOpcion.appendChild(botonEditarMedico);
                celdaOpcion.appendChild(botonDeshabilitarMedico);
                
                trResgistro.appendChild(celdaOpcion)
                cuerpoTablaMedico.appendChild(trResgistro);

               
                //creamos un td por cada campo de resgistro
                
            }
        },
        error: function(error){
            /*
            ERROR: funcion que se ejecuta cuando la peticion tiene un error
            */
            alert("Error en la petición " + error);
        }
    })
}

//1.Crear petición que traiga la información del medico por id
function consultarMedicoID(id){
    //alert(id);
    $.ajax({
        url:url+id,
        type:"GET",
        success: function(result){
            document.getElementById("id_medico").value=result["id_medico"];
            document.getElementById("doc_medico").value=result["doc_medico"];
            document.getElementById("primer_nombre_medico").value=result["primer_nombre_medico"];
            document.getElementById("segundo_nombre_medico").value=result["segundo_nombre_medico"];
            document.getElementById("primer_apellido_medico").value=result["primer_apellido_medico"];
            document.getElementById("segundo_apellido_medico").value=result["segundo_apellido_medico"];
            document.getElementById("telefono_medico").value=result["telefono_medico"];
            document.getElementById("correo_medico").value=result["correo_medico"];
            document.getElementById("estado_medico").value=result["estado_medico"];
        }
    });
}
//2.Crear petición que actualice la información del medico

function actualizarMedico() { 
    var id_medico=document.getElementById("id_medico").value
    let formData={
        "doc_medico": document.getElementById("doc_medico").value,
        "primer_nombre_medico": document.getElementById("primer_nombre_medico").value,
        "segundo_nombre_medico": document.getElementById("segundo_nombre_medico").value,
        "primer_apellido_medico": document.getElementById("primer_apellido_medico").value,
        "segundo_apellido_medico": document.getElementById("segundo_apellido_medico").value,
        "telefono_medico": document.getElementById("telefono_medico").value,
        "correo_medico": document.getElementById("correo_medico").value,
        "estado_medico": document.getElementById("estado_medico").value
};

if (validarCampos()) {
    $.ajax({
        url:url+id_medico,
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
            listarMedico();
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


// funcion de deshabilitar medico
function deshabilitarMedico(id) {
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
                    listarMedico(); // Recarga la lista de médicos
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


function registrarMedico() {
  
    let formData={
        "doc_medico": document.getElementById("doc_medico").value,
        "primer_nombre_medico": document.getElementById("primer_nombre_medico").value,
        "segundo_nombre_medico": document.getElementById("segundo_nombre_medico").value,
        "primer_apellido_medico": document.getElementById("primer_apellido_medico").value,
        "segundo_apellido_medico": document.getElementById("segundo_apellido_medico").value,
        "telefono_medico": document.getElementById("telefono_medico").value,
        "correo_medico": document.getElementById("correo_medico").value,
        "estado_medico": document.getElementById("estado_medico").value
        
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

    //se ejecuta la peticion
    

function validarCampos(){
    var doc_medico = document.getElementById("doc_medico");
    return validarNumeroDocumento(doc_medico);
}

function validarNumeroDocumento(cuadroNumero){
   var valor=cuadroNumero.value;
   var valido=true;
   if (valor.length <5 || valor.length> 11){
    valido=false
   }

   if(valido){
    //cuadro de texto cumple
    cuadroNumero.className="form-control is-valid";
   }else{
    //cuadro de texto no cumple
    cuadroNumero.className="form-control is-invalid";
   }
   return valido;

}

function limpiar() {
    document.getElementById("doc_medico").value = "";
    document.getElementById("primer_nombre_medico").value = "";
    document.getElementById("segundo_nombre_medico").value = "";
    document.getElementById("primer_apellido_medico").value = "";
    document.getElementById("segundo_apellido_medico").value = "";
    document.getElementById("telefono_medico").value = "";
    document.getElementById("correo_medico").value = "";
    document.getElementById("estado_medico").value = "";
}



var url="http://localhost:8080/api/hospital/medico/";

function listarMedico(){
    //METODO PARA LISTAR LOS CLIENTES

    // cual es la diferencia entre busqueda normal
    // y con FileSystemDirectoryHandle
    // normal url= http://localhost:8080/api/hospital/medico/
    // con filtro url= http://localhost:8080/api/hospital/medico/busqueda/parametro

    // si el campo filtro es diferente a vacio haga busqueda con filtro

    // si no haga busqueda normal

    var urlLocal=url;
    var filtro=document.getElementById("texto").value
    if(filtro!="")
        urlLocal+="busqueda/"+filtro;
    

    //SE CREA LA PETICION AJAX
    $.ajax({
        url:urlLocal,
        type:"GET",
        success: function(result){
            //success: funcion que se ejecuta
            //cuando la peticion tiene exito
            //console.log(result);
    
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
                
<<<<<<< HEAD
                let celdaOpcion = document.createElement("td");
                celdaOpcion.className = "opciones";
                
                let botonEditarMedico = document.createElement("button");
                botonEditarMedico.innerHTML = "Editar";
                botonEditarMedico.className = "btn btn-warning editar-medico";

                let botonDesahabilitarMedico = document.createElement("button");
                botonDesahabilitarMedico.innerHTML = "Deshabilitar";
                botonDesahabilitarMedico.className = "btn btn-danger deshabilitar-medico";

                celdaOpcion.appendChild(botonEditarMedico);
                celdaOpcion.appendChild(botonDesahabilitarMedico);
=======
                
>>>>>>> 6cc21deb2d544d0c5a5b73a1ba624b23c3279539
    
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
                let botonEliminarMedico = document.createElement("button");
                botonEliminarMedico.innerHTML = "Eliminar";
                botonEliminarMedico.className = "btn btn-danger eliminar-medico";
                botonEliminarMedico.value = result[i]["id_medico"];
                botonEliminarMedico.onclick = function(e) {
                    // Confirmar antes de eliminar
                    Swal.fire({
                        title: '¿Estás seguro?',
                        text: "Esta acción no se puede revertir",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#d33',
                        cancelButtonColor: '#3085d6',
                        confirmButtonText: 'Sí, eliminarlo'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            eliminarMedico(this.value);
                        }
                    });
                };
                celdaOpcion.appendChild(botonEliminarMedico);

                // Función para eliminar un médico
                function eliminarMedico(id) {
                    $.ajax({
                        url: url + id,
                        type: "DELETE",
                        success: function(result) {
                            Swal.fire({
                                title: '¡Eliminado!',
                                text: 'El médico ha sido eliminado correctamente',
                                icon: 'success'
                            });
                            // Actualizar la lista después de eliminar
                            listarMedico();
                        },
                        error: function(error) {
                            Swal.fire({
                                title: 'Error',
                                text: 'No se pudo eliminar el médico',
                                icon: 'error'
                            });
                        }
                    });
                }

               
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

//validación número de documento medico
function validarCampos(){
    var doc_medico = document.getElementById("doc_medico");
    return validarNumeroDocumento(doc_medico);
}
<<<<<<< HEAD
=======
<<<<<<< HEAD

function validarNumeroDocumento(cuadroNumero){
    /*
    numero documento 
    min=5
    max=11
    numero entero
=======
>>>>>>> 6cc21deb2d544d0c5a5b73a1ba624b23c3279539

>>>>>>> b4efc45593dd7d486ff885d5a5ae47cb0ccb9e31
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
    var primer_nombre_medico = document.getElementById("primer_nombre_medico");
    return validarPrimerNombreMedico(primer_nombre_medico);
}
function validarPrimerNombreMedico(cuadroPrimerNombreMedico){
    var valor=cuadroPrimerNombreMedico.value;
    var valido=true;
    if (valor.length <3 || valor.length> 21){
     valido=false
    }
 
    if(valido){
        cuadroPrimerNombreMedico.className="form-control is-valid";
    }else{
        cuadroPrimerNombreMedico.className="form-control is-invalid";
    }
    return valido;
 }

 //validación segundo nombre
 function validarCampos(){
    var segundo_nombre_medico = document.getElementById("segundo_nombre_medico");
    return validarSegundoNombreMedico(segundo_nombre_medico);
}
function validarSegundoNombreMedico(cuadroSegundoNombreMedico){
    var valor=cuadroSegundoNombreMedico.value;
    var valido=true;
    if (valor.length <3 || valor.length> 21){
     valido=false
    }
 
    if(valido){
        cuadroSegundoNombreMedico.className="form-control is-valid";
    }else{
        cuadroSegundoNombreMedico.className="form-control is-invalid";
    }
    return valido;
 }

 //validación primer apellido
 function validarCampos(){
    var primer_apellido_medico = document.getElementById("primer_apellido_medico");
    return validarPrimerApellidoMedico(primer_apellido_medico);
}
function validarPrimerApellidoMedico(cuadroPrimerApellidoMedico){
    var valor=cuadroPrimerApellidoMedico.value;
    var valido=true;
    if (valor.length <2 || valor.length> 21){
     valido=false
    }
 
    if(valido){
        cuadroPrimerApellidoMedico.className="form-control is-valid";
    }else{
        cuadroPrimerApellidoMedico.className="form-control is-invalid";
    }
    return valido;
 }

 //validación segundo apellido
 function validarCampos(){
    var segundo_apellido_medico = document.getElementById("segundo_apellido_medico");
    return validarSegundoApellidoMedico(segundo_apellido_medico);
}
function validarSegundoApellidoMedico(cuadroSegundoApellidoMedico){
    var valor=cuadroSegundoApellidoMedico.value;
    var valido=true;
    if (valor.length <2 || valor.length> 21){
     valido=false
    }
 
    if(valido){
        cuadroSegundoApellidoMedico.className="form-control is-valid";
    }else{
        cuadroSegundoApellidoMedico.className="form-control is-invalid";
    }
    return valido;
 }

 //validación telefono
 function validarCampos(){
    var telefono_medico = document.getElementById("telefono_medico");
    return validarTelefonoMedico(telefono_medico);
}
function validarTelefonoMedico(cuadroTelelefonoMedico){
    var valor=cuadroTelelefonoMedico.value;
    var valido=true;
    if (valor.length <7 || valor.length> 16){
     valido=false
    }
 
    if(valido){
        cuadroTelelefonoMedico.className="form-control is-valid";
    }else{
        cuadroTelelefonoMedico.className="form-control is-invalid";
    }
    return valido;
 }

 //validación correo
 function validarCampos(){
    var correo_medico = document.getElementById("correo_medico");
    return validarCorreoMedico(correo_medico);
}
function validarCorreoMedico(cuadroCorreoMedico){
    var valor=cuadroCorreoMedico.value;
    var valido=true;
    if (valor.length <7 || valor.length> 256){
     valido=false
    }
 
    if(valido){
        cuadroCorreoMedico.className="form-control is-valid";
    }else{
        cuadroCorreoMedico.className="form-control is-invalid";
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
/*
function buscarMedicoPorFiltro(filtro) {

<<<<<<< HEAD
    $.ajax({
        url: "http://localhost:8080/api/hospital/medico/busqueda/" + filtro,
        type: "GET",
        success: function (result) {
            var cuerpoTabla = document.getElementById("cuerpoTabla");
            cuerpoTabla.innerHTML = "";

            for (var i = 0; i < result.length; i++) {
                var trRegistro = document.createElement("tr");
                trRegistro.innerHTML = `
                    <td>${result[i]["id_medico"]}</td>
                    <td class="text-center align-middle">${result[i]["doc_medico"]}</td>
                    <td class="text-center align-middle">${result[i]["primer_nombre_medico"]}</td>
                    <td class="text-center align-middle">${result[i]["segundo_nombre_medico"]}</td>
                    <td class="text-center align-middle">${result[i]["estado_medico"]}</td>`;
                if (result[i]["estado"]=="H") {
                    trRegistro.innerHTML +=` <td class="text-center align-middle">Habilitado</td>`
                } else {
                    trRegistro.innerHTML +=` <td class="text-center align-middle">Deshabilitado</td>`
                }
                trRegistro.innerHTML +=`
                    <td class="text-center align-middle">
                        <i class="fas fa-edit editar"  onclick="registrarMedico=false;" data-id="${result[i]["id_medico"]}"></i>
                        <i class="fas fa-user-slash cambiarEstado" onclick="actualizarMedico(${result[i]["id_medico"]})" data-id="${result[i]["id_medico"]}"></i>
                        <i class="fas fa-trash-alt eliminar" data-id="${result[i]["id_medico"]}"></i>
                    </td>
                `;
                cuerpoTabla.appendChild(trRegistro);
            }
        },
        error: function (error) {
            alert("Error en la petición: " + error);
        }
    });
}
*/
=======
<<<<<<< HEAD
=======
>>>>>>> b4efc45593dd7d486ff885d5a5ae47cb0ccb9e31

>>>>>>> 6cc21deb2d544d0c5a5b73a1ba624b23c3279539

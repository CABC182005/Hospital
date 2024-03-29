var url = "http://localhost:8080/api/hospital/ingreso/";

function listarIngreso() {
    //METODO PARA LISTAR LOS CLIENTES
    //SE CREA LA PETICION AJAX

    var urlLocal = url;
    var filtro = document.getElementById("texto").value
    if (filtro != "")
        urlLocal += "busqueda/" + filtro;

    $.ajax({
        url: urlLocal,
        type: "GET",
        success: function (result) {
            //success: funcion que se ejecuta
            //cuando la peticion tiene exito
            console.log(result);

            var cuerpoTablaIngreso = document.getElementById("cuerpoTablaIngreso");
            //Se limpia el cuepro de la tabla
            cuerpoTablaIngreso.innerHTML = "";
            //se hace un ciclo que recorra l arreglo con los datos
            for (var i = 0; i < result.length; i++) {
                //UNA ETIQUETA tr por cada registro
                var trResgistro = document.createElement("tr");

                var celdaIdIngreso = document.createElement("td");
                let celdaHabitacion = document.createElement("td")
                let celdaCama = document.createElement("td")
                let celdaPaciente = document.createElement("td")
                let celdaMedico = document.createElement("td")
                let celdaFechaIngreso = document.createElement("td")
                let celdaFechaSalida = document.createElement("td")
                let celdaEstado = document.createElement("td")


                celdaIdIngreso.innerText = result[i]["id_ingreso"];
                celdaHabitacion.innerText = result[i]["habitacion"];
                celdaCama.innerText = result[i]["cama"];
                // celdaPaciente.innerText=result[i]["paciente"];
                if (celdaPaciente.innerText = result[i]["paciente"] != null) {
                    celdaPaciente.innerText = result[i]["paciente"]["primer_nombre_paciente"];
                }else{
                    celdaPaciente.innerText ="No registra paciente";
                }
                if (celdaMedico.innerText = result[i]["medico"] != null) {
                    celdaMedico.innerText = result[i]["medico"]["primer_nombre_medico"];
                }else{
                    celdaMedico.innerText ="No registra medico";
                }
                celdaFechaIngreso.innerText = result[i]["fecha_ingreso"];
                celdaFechaSalida.innerText = result[i]["fecha_salida"];
                celdaEstado.innerText = result[i]["estado"];


                trResgistro.appendChild(celdaIdIngreso);
                trResgistro.appendChild(celdaHabitacion);
                trResgistro.appendChild(celdaCama);
                trResgistro.appendChild(celdaPaciente);
                trResgistro.appendChild(celdaMedico);
                trResgistro.appendChild(celdaFechaIngreso);
                trResgistro.appendChild(celdaFechaSalida);
                trResgistro.appendChild(celdaEstado);

                //BOTONES EDITAR Y DESHABILITAR
                let celdaOpcion = document.createElement("td");
                let botonEditarIngreso = document.createElement("button");
                botonEditarIngreso.value = result[i]["id_ingreso"];
                botonEditarIngreso.innerHTML = "Editar";

                botonEditarIngreso.onclick = function (e) {
                    $('#exampleModal').modal('show');
                    consultarIngresoID(this.value);
                }
                botonEditarIngreso.className = "btn btn-warning editar-ingreso";

                let botonDesahabilitarIngreso = document.createElement("button");
                botonDesahabilitarIngreso.innerHTML = "Deshabilitar";
                botonDesahabilitarIngreso.className = "btn btn-danger deshabilitar-ingreso";

                celdaOpcion.appendChild(botonEditarIngreso);
                celdaOpcion.appendChild(botonDesahabilitarIngreso);

                trResgistro.appendChild(celdaOpcion)
                cuerpoTablaIngreso.appendChild(trResgistro);


                //creamos un td por cada campo de resgistro

            }
        },
        error: function (error) {
            /*
            ERROR: funcion que se ejecuta cuando la peticion tiene un error
            */
            alert("Error en la petición " + error);
        }
    })
}
function consultarIngresoID(id) {
    $.ajax({
        url: url + id,
        type: "GET",
        success: function (result) {
            document.getElementById("id_ingreso").value=result["id_ingreso"];
            document.getElementById("habitacion").value=result["habitacion"];
            document.getElementById("cama").value=result["cama"];
            document.getElementById("paciente").value=result["paciente"];
            document.getElementById("medico").value=result["medico"];
            document.getElementById("fecha_ingreso").value=result["fecha_ingreso"];
            document.getElementById("fecha_salida").value=result["fecha_salida"];
            document.getElementById("estado").value=result["estado"];
        }
    });
}
//2.Crear petición que actualice la información del medico

function actualizarIngreso() {
    var id_ingreso = document.getElementById("id_ingreso").value
    let formData = {
        "habitacion": document.getElementById("habitacion").value,
        "cama": document.getElementById("cama").value,
        "paciente": document.getElementById("paciente").value,
        "medico": document.getElementById("medico").value,
        "fecha_ingreso": document.getElementById("fecha_ingreso").value,
        "fecha_salida": document.getElementById("fecha_salida").value,
        "estado": document.getElementById("estado").value
    };

    if (validarCampos()) {
        $.ajax({
            url: url + id_ingreso,
            type: "PUT",
            data: formData,
            success: function (result) {
                // Manejar la respuesta exitosa según necesites
                Swal.fire({
                    title: "¡Excelente!",
                    text: "Se guardó correctamente",
                    icon: "success"
                });
                // Puedes hacer algo adicional como recargar la lista de médicos
                listarIngreso();
            },
            error: function (error) {
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



function registrarIngreso() {
    let formData = {
        "habitacion": document.getElementById("habitacion").value,
        "cama": document.getElementById("cama").value,
        "paciente": document.getElementById("paciente").value,
        "medico": document.getElementById("medico").value,
        "fecha_ingreso": document.getElementById("fecha_ingreso").value,
        "fecha_salida": document.getElementById("fecha_salida").value,
        "estado": document.getElementById("estado").value

    };


    if (validarCampos()) {
        $.ajax({
            url: url,
            type: "POST",
            data: formData,
            success: function (result) {
                //
                Swal.fire({
                    title: "¡Excelente!",
                    text: "Se guardó correctamente",
                    icon: "success"
                });
            },
        })
    } else {
        Swal.fire({
            title: "¡Error!",
            text: "Llene todos los campos correctamente",
            icon: "error"
        });
    }
}

//validacion habitación
function validarCampos(){
    var habitacion = document.getElementById("habitacion");
    return validarHabitacion(habitacion);
}
function validarHabitacion(cuadroHabitacion){
   var valor=cuadroHabitacion.value;
   var valido=true;
<<<<<<< HEAD
   if (valor.length <1 || valor.length> 21){
=======
   if (valor.length <1 || valor.length> 11){
>>>>>>> b4efc45593dd7d486ff885d5a5ae47cb0ccb9e31
    valido=false
   }

   if(valido){
    cuadroHabitacion.className="form-control is-valid";
   }else{
    cuadroHabitacion.className="form-control is-invalid";
   }
   return valido;
}

<<<<<<< HEAD
//validacion cama
function validarCampos(){
    var cama = document.getElementById("cama");
    return validarCama(cama);
}
function validarCama(cuadroCama){
   var valor=cuadroCama.value;
   var valido=true;
   if (valor.length <1 || valor.length> 21){
    valido=false
   }

   if(valido){
    cuadroCama.className="form-control is-valid";
   }else{
    cuadroCama.className="form-control is-invalid";
   }
   return valido;
}

//validacion fecha ingreso
function validarCampos(){
    var fecha_ingreso = document.getElementById("fecha_ingreso");
    return validarFechaIngreso(fecha_ingreso);
}
function validarFechaIngreso(cuadroFechaIngreso){
   var valor=cuadroFechaIngreso.value;
   var valido=true;
   if (valor.length <1 || valor.length> 31){
    valido=false
   }

   if(valido){
    cuadroFechaIngreso.className="form-control is-valid";
   }else{
    cuadroFechaIngreso.className="form-control is-invalid";
   }
   return valido;
}

//validacion fecha salida
function validarCampos(){
    var fecha_salida = document.getElementById("fecha_salida");
    return validarFechaSalida(fecha_salida);
}
function validarFechaSalida(FechaSalida){
   var valor=FechaSalida.value;
   var valido=true;
   if (valor.length <1 || valor.length> 31){
    valido=false
   }

   if(valido){
    FechaSalida.className="form-control is-valid";
   }else{
    FechaSalida.className="form-control is-invalid";
   }
   return valido;
}


function limpiar() {
    document.getElementById("id_ingreso").value = "";
=======
}

function limpiar() {
>>>>>>> b4efc45593dd7d486ff885d5a5ae47cb0ccb9e31
    document.getElementById("habitacion").value = "";
    document.getElementById("cama").value = "";
    document.getElementById("paciente").value = "";
    document.getElementById("medico").value = "";
    document.getElementById("fecha_ingreso").value = "";
    document.getElementById("fecha_salida").value = "";
    document.getElementById("estado").value = "";
<<<<<<< HEAD
}

function cargarFormulario() {
    cargarMedico();
    cargarPaciente();
}

function cargarMedico() {
    let urlMedico = "http://localhost:8080/api/hospital/medico/";
    $.ajax({
        url: urlMedico,
        type: "GET",
        success: function (result) {
            let medico = document.getElementById("medico");
            medico.innerHTML = "";
            for (let i = 0; i < result.length; i++) {
                let nombreMedico = document.createElement("option");
                nombreMedico.value = result[i]["id_medico"];
                nombreMedico.innerText = nombre_completo_medico =
                    result[i]["primer_nombre_medico"] + " " + result[i]["segundo_nombre_medico"] + " " +
                    result[i]["primer_apellido_medico"] + " " + result[i]["segundo_apellido_medico"];
                medico.appendChild(nombreMedico);
            }
        },
    });
}

function cargarPaciente() {
    let urlPaciente = "http://localhost:8080/api/hospital/paciente/";
    $.ajax({
        url: urlPaciente,
        type: "GET",
        success: function (result) {
            let paciente = document.getElementById("paciente");
            paciente.innerHTML = "";
            for (let i = 0; i < result.length; i++) {
                let nombrePaciente = document.createElement("option");
                nombrePaciente.value = result[i]["id_paciente"];
                nombrePaciente.innerText = nombre_completo_paciente =
                    result[i]["primer_nombre_paciente"] + " " + result[i]["segundo_nombre_paciente"] + " " +
                    result[i]["primer_apellido_paciente"] + " " + result[i]["segundo_apellido_paciente"];
                paciente.appendChild(nombrePaciente);
            }
        },
    });
}
=======
}
>>>>>>> b4efc45593dd7d486ff885d5a5ae47cb0ccb9e31

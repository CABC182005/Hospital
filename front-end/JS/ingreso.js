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
                let botonEditarIngreso = document.createElement("button");
                botonEditarIngreso.value=result[i]["id_ingreso"];
                botonEditarIngreso.innerHTML = "Editar";
                
                botonEditarIngreso.onclick=function(e){
                    $('#exampleModal').modal('show');
                    consultarIngresoID(this.value);
                }
                botonEditarIngreso.className = "btn btn-warning editar-medico";

                let botonDesahabilitarIngreso = document.createElement("button");
                botonDesahabilitarIngreso.innerHTML = "Deshabilitar";
                botonDesahabilitarIngreso.className = "btn btn-danger deshabilitar-medico";

                celdaOpcion.appendChild(botonEditarIngreso);
                celdaOpcion.appendChild(botonDesahabilitarIngreso);
    
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
    })
}
function consultarIngresoID(id){
    //alert(id);
    $.ajax({
        url:url+id,
        type:"GET",
        success: function(result){
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
    var id_ingreso =document.getElementById("id_ingreso").value
    let formData={
        "habitacion": document.getElementById("habitacion").value,
        "cama": document.getElementById("cama").value,
        "paciente": document.getElementById("paciente").value,
        "medico": document.getElementById("medico").value,
        "fecha_ingreso": document.getElementById("fecha_ingreso").value,
        "fecha_salida": document.getElementById("fecha_salida").value,
        "estado": document.getElementById("estado").value,
};

if (validarCampos()) {
    $.ajax({
        url:url+id_ingreso,
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
            listarIngreso();
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

function registrarIngreso() {
  
    let formData={
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
    var habitacion = document.getElementById("habitacion");
    return validarNumeroDocumento(habitacion);
}
function validarNumeroDocumento(cuadroNumero){
    /*
    numero documento 
    min=5
    max=11
    numero entero

    si cumple, se cambia color a verde
    si no, se cambia a rojo
    */
   var valor=cuadroNumero.value;
   var valido=true;
   if (valor.length <1 || valor.length> 11){
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
    document.getElementById("habitacion").value = "";
    document.getElementById("cama").value = "";
    document.getElementById("paciente").value = "";
    document.getElementById("medico").value = "";
    document.getElementById("fecha_ingreso").value = "";
    document.getElementById("fecha_salida").value = "";
    document.getElementById("estado").value = "";
}
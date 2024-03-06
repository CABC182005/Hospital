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

                var celdaId=document.createElement("td");
                let celdaDocumentoMedico = document.createElement("td")
                let celdaPrimerNombreMedico = document.createElement("td")
                let celdaSegundoNombreMedico = document.createElement("td")
                let celdaPrimerApellidoMedico = document.createElement("td")
                let celdaSegundoApellidoMedico = document.createElement("td")
                let celdaCorreoMedico = document.createElement("td")
                let celdaTelefonoMedico = document.createElement("td")
                let celdaEstadoMedico = document.createElement("td")
                
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
    
                celdaOpcion.appendChild(botonDesahabilitarMedico);
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


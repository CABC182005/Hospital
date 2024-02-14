//se almacena la url de la API
var url="http://localhost:8080/api/v1/cliente/";

function listarClientes(){
//METODO PARA LISTAR LOS CLIENTES
//SE CREA LA PETICION AJAX
$.ajax({
    url:url,
    type:"GET",
    success: function(result){
        //success: funcion que se ejecuta
        //cuando la peticion tiene exito
        console.log(result);

        var cuerpoTabla=document.getElementById("cuerpoTabla");
        //Se limpia el cuepro de la tabla
        cuerpoTabla.innerHTML="";
        //se hace un ciclo que recorra l arreglo con los datos
        for(var i=0; i<result.length;i++){
            //UNA ETIQUETA tr por cada registro
            var trResgistro=document.createElement("tr");
            var celdaId=document.createElement("td");

            let celdaTipoDocumento = document.createElement("td","a")
            let celdaNumeroDocumento = document.createElement("td")
            let celdaPrimerNombre = document.createElement("td")
            let celdaSegundoNombre = document.createElement("td")
            let celdaPrimerApellido = document.createElement("td")
            let celdaSegundoApellido = document.createElement("td")
            let celdaCorreo = document.createElement("td")
            let celdaTelefono = document.createElement("td")
            let celdaDireccion = document.createElement("td")

            let celdaOpcion = document.createElement("td");
            let botonEditar = document.createElement("button")
            botonEditar.innerHTML="Editar"
            botonEditar.className = "btn btn-warning"

            let celdaOpcion2 = document.createElement("td");
            let botonEliminar = document.createElement("button")
            botonEliminar.innerHTML="Eliminar"
            botonEliminar.className = "btn btn-danger"

            celdaId.innerText=result[i]["id"];
            celdaTipoDocumento.innerText=result[i]["tipo_id"];
            celdaNumeroDocumento.innerText=result[i]["numero_id"];
            celdaPrimerNombre.innerText=result[i]["primer_nombre"];
            celdaSegundoNombre.innerText=result[i]["segundo_nombre"];
            celdaPrimerApellido.innerText=result[i]["primer_apellido"];
            celdaSegundoApellido.innerText=result[i]["segundo_apellido"];
            celdaCorreo.innerText=result[i]["correo"];
            celdaTelefono.innerText=result[i]["telefono"];
            celdaDireccion.innerText=result[i]["direccion"];
            

            trResgistro.appendChild(celdaId);
            trResgistro.appendChild(celdaTipoDocumento);
            trResgistro.appendChild(celdaNumeroDocumento);
            trResgistro.appendChild(celdaPrimerNombre);
            trResgistro.appendChild(celdaSegundoNombre);
            trResgistro.appendChild(celdaPrimerApellido);
            trResgistro.appendChild(celdaSegundoApellido);
            trResgistro.appendChild(celdaCorreo);
            trResgistro.appendChild(celdaTelefono);
            trResgistro.appendChild(celdaDireccion);

            celdaOpcion.appendChild(botonEditar);
            trResgistro.appendChild( celdaOpcion)

            celdaOpcion2.appendChild(botonEliminar);
            trResgistro.appendChild(celdaOpcion2)

            cuerpoTabla.appendChild(trResgistro);

           
            //creamos un td por cada campo de resgistro
            
        }
    },
    error: function(error){
        /*
        ERROR: funcion que se ejecuta cuando la peticion tiene un error
        */
       alert("Error en la petición ".error);
    }
});
}

function registrarCliente() {
  
    let formData={
        "tipo_id":  document.getElementById("tipo_id").value,
        "numero_id": document.getElementById("numero_id").value,
        "primer_nombre": document.getElementById("primer_nombre").value,
        "segundo_nombre":  document.getElementById("segundo_nombre").value,
        "primer_apellido":  document.getElementById("primer_apellido").value,
        "segundo_apellido":  document.getElementById("segundo_apellido").value,
        "telefono":  document.getElementById("telefono").value,
        "correo":  document.getElementById("correo").value,
        "direccion":  document.getElementById("direccion").value
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
    var numero_id = document.getElementById("numero_id");
    return validarNumeroDocumento(numero_id);
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

   if (valido){
    //cuadro de texto cumple
    cuadroNumero.className="form-control is-valid";
   }else{
    //cuadro de texto no cumple
    cuadroNumero.className="form-control is-invalid";
   }
   return valido;

}
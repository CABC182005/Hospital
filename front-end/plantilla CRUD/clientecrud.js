//se almacena la url de la API
var url="http://localhost:8081/api/v1/cliente/";

function listarCliente(){
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

            let celdaTipoDocumento = document.createElement("td")
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
            cuerpoTabla.appendChild(trResgistro);

            celdaOpcion.appendChild(botonEditar);
            trResgistro.appendChild(celdaOpcion)

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
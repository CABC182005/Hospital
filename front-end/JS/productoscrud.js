//se almacena la url de la API
var url="http://localhost:8080/api/v1/productos/";

function listarProductos(){
//METODO PARA LISTAR LOS CLIENTES
//SE CREA LA PETICION AJAX
$.ajax({
    url:url,
    type:"GET",
    success: function(result){
        //success: funcion que se ejecuta
        //cuando la peticion tiene exito
        console.log(result);

        var cuerpoTablaProduct=document.getElementById("cuerpoTablaProduct");
        //Se limpia el cuepro de la tabla
        cuerpoTablaProduct.innerHTML="";
        //se hace un ciclo que recorra l arreglo con los datos
        for(var i=0; i<result.length;i++){
            //UNA ETIQUETA tr por cada registro
            var trResgistro=document.createElement("tr");

            var celdaIdProduc=document.createElement("td");
            let celdaNombreProduc = document.createElement("td");
            let celdaPresentacionProduc = document.createElement("td");
            let celdaPrecio = document.createElement("td");

            let celdaOpcion = document.createElement("td");
            let botonEditar = document.createElement("button")
            botonEditar.innerHTML="Editar"
            botonEditar.className = "btn btn-warning"

            let celdaOpcion2 = document.createElement("td");
            let botonEliminar = document.createElement("button")
            botonEliminar.innerHTML="Eliminar"
            botonEliminar.className = "btn btn-danger"

            celdaIdProduc.innerText=result[i]["id_produc"];
            celdaNombreProduc.innerText=result[i]["nombre_produc"];
            celdaPresentacionProduc.innerText=result[i]["presentacion_produc"];
            celdaPrecio.innerText=result[i]["precio"];
            

            trResgistro.appendChild(celdaIdProduc);
            trResgistro.appendChild(celdaNombreProduc);
            trResgistro.appendChild(celdaPresentacionProduc);
            trResgistro.appendChild(celdaPrecio);
            cuerpoTablaProduct.appendChild(trResgistro);

            celdaOpcion.appendChild(botonEditar);
            trResgistro.appendChild(celdaOpcion)

            celdaOpcion2.appendChild(botonEliminar);
            trResgistro.appendChild(celdaOpcion2)

            cuerpoTablaProduct.appendChild(trResgistro);
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
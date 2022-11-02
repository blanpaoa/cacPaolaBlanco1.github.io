
window.addEventListener('load', (event) => {
    var btn = document.getElementById('resumen');
    btn.addEventListener('click',precio);    
});


function precio(){        
    var cantidad = document.getElementById("cantidad").value;
    var categoria = document.getElementById("categoria").value;
    var compra = 0;
    var desc = 0;
    var resultado = 0;
    var porcentaje = 0;

console.log(categoria);
console.log(cantidad);

    switch(categoria){
        case '1':
            
            compra = parseInt(cantidad) * 200 ;
            porcentaje = compra * 80/100;            
            resultado = compra - porcentaje;
            break;
        case '2':
            compra = parseInt(cantidad) * 200 ;
            porcentaje = compra * 50/100; 
            resultado = compra - porcentaje;
            break;
        case '3':
            compra = parseInt(cantidad) * 200 ;
            porcentaje = compra * 15/100; 
            resultado = compra - porcentaje;
            break;
        default:
            alert("Por favor elegir una opción correcta");
            break;    

            
    }
   
    document.getElementById('lblResultado').innerText = resultado;
    console.log(resultado);
}



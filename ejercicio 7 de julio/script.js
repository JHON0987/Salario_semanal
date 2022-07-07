let nombre
let cantidad=0
let salario_semanal=0
let salario_extra=0

let form = document.getElementById('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    LeerDatos()
})

function LeerDatos(){
    nombre = document.getElementById('nombre').value
    cantidad = Number(document.getElementById('cantidad').value)
    revision(cantidad,nombre)
    calcular(cantidad)
    console.log(salario_semanal)
    console.log(salario_extra)
}

function revision(cantidad,nombre){
    if (cantidad<=0 || nombre.length==0 )
        swal("ERROR", "Revisa que la informacion que ingresaste si es correcta.", "error");
}

function calcular(cantidad){
    if (cantidad>0 && cantidad<=40){
        salario_semanal = cantidad * 8000;
        salario_extra = 0;
    }else if (cantidad>40){
        salario_semanal = 40 * 8000;
        salario_extra = (cantidad - 40) * 12000
    }
}
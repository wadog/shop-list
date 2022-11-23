let splash = document.getElementById('splash');
let popUp = document.getElementById('pop-up')
let form = document.getElementById('form');
let lista = document.getElementById('lista');
let listaProductos = document.getElementById('ul-lista')
let btnSplash = document.getElementById('btn-splash');
let btnAdd = document.getElementById('btnAdd')
let btnCerrarForm = document.getElementById('cerrarPopUp');
let detalle = document.getElementById('detalle');
let ulDetalle = document.getElementById('ul-detalle');
let btnCerrarDescrip = document.getElementById('btnCerrarDescrip');
let llenarForm = document.getElementById('llenarForm');


const  guardar_localStorage = ()=>{
    
}


/* boton ir al inicio */
const  volverInicio = ()=>{
    console.log('volviendo al inicio');
    splash.classList.remove('oculto');
    popUp.classList.add("oculto");
    btnSplash.classList.remove('oculto');
    listaProductos.innerHTML = "";

}
/* boton abrir formulario */
btnSplash.addEventListener('click', () => {
    console.log('abro el form para agregar productos')
    splash.classList.add('oculto');
    popUp.classList.remove("oculto");
    btnSplash.classList.add('oculto');
    lista.classList.add('oculto');
})

/* boton cerrar formulario */
btnCerrarForm.addEventListener('click', () => {
    if (listaProductos.innerHTML == '') {
        console.log('la lista esta vacia');
        splash.classList.remove('oculto');
        popUp.classList.add('oculto');
        btnSplash.classList.remove('oculto');
    } else {
        console.log('la lista esa llena');
        popUp.classList.add('oculto');
        btnSplash.classList.remove('oculto');

    }
})
/* boton cerrar descripcion */
btnCerrarDescrip.addEventListener('click', () => {
    detalle.classList.add('oculto');
    lista.classList.remove('oculto');
    btnSplash.classList.remove('oculto');

})
/* boton ver */
const verDescrip = (producto, categoria, descripcion) => {
    let productoItem = `<li><img src="${categoria}" alt="">
                        <h3>${producto}</h3>
                        <p>${descripcion}</p>
                        </li>
                        `
    ulDetalle.innerHTML = productoItem;
    detalle.classList.remove('oculto');
    lista.classList.add('oculto');
    btnSplash.classList.add('oculto');
}

const agregarItem = (producto, categoria, descripcion) => {
    let productoItem = `<li>
        <img src="${categoria}" alt="${producto}">
        <h3>${producto}</h3>
            <button onclick='verDescrip("${producto}", "${categoria}", "${descripcion}")'>
                ver
            </button>
            <button onclick="this.style.background = 'green';">
            <img src="img/cheque.png" alt="">
            </button> 
        </li>
        `
    listaProductos.innerHTML += productoItem;

    popUp.classList.add('oculto');
    btnSplash.classList.remove('oculto');
}
/* boton tachar producto */
const tacharProducto = () => {
    productoItem.classList.add('oculto')
}
/* boton agregar producto a la lista */
form.addEventListener('submit', (e) => {

    e.preventDefault();
    let producto = e.target.producto.value;
    let categoria = e.target.categoria.value;
    let descripcion = e.target.descripcion.value;
    let id = 0
    let btnId = 0

    if (producto && categoria && descripcion) {
        console.log('agrego productos a la lista')
        agregarItem(producto, categoria, descripcion);
        splash.classList.add('oculto')
        lista.classList.remove('oculto');
        form.reset();
    } else {
        console.log('el formulario está incompleto')
        llenarForm.innerHTML = 'el formulario está incompleto';
    }

})
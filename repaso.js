function mostrar(opcion) {
    switch (opcion) {
        case 1:
            ejercicio1();
            break;
        case 2:
            imprimirCentenas();
            break;
        case 3:
            imprimirCentenasRegresivo();
            break;
        case 4:
            mostrarMensaje1();
            break;
        case 5:
            mostrarMensaje2();
            break;
        case 6:
            mostrarMensaje3();
            break;
        case 7:
            mostrarMensaje4();
            break;
        case 8:
            imprimirTabla3();
            break;
        default:
            break;
    }
}

function ejercicio1() {
    console.clear();
    console.log("Ejercicio 1");
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}

function imprimirCentenas() {
    console.clear();
    console.log("Centenas");
    for (let i = 100; i <= 1000; i += 100) {
        console.log(i);
    }
}
function imprimirCentenasRegresivo() {
    console.clear();
    console.log("Regresivo");
    for (let i = 1000; i >= 800; i -= 100) {
        console.log(i);
    }
}
function mostrarMensaje1() {
    console.clear();
    console.log("Mensaje 1");
    for (let i = 5; i < 8; i++) {
        console.log(i + " : hola mundo");
    }
}
function mostrarMensaje2() {
    console.clear();
    console.log("Mensaje 2");
    for (let i = 10; i >= 8; i--) {
        console.log(i + " : hola mundo");
    }
}

function mostrarMensaje3() {
    console.clear();
    console.log("Mensaje 3");
    for (let i = 0; i < 3; i++) {
        console.log(i + " : hola mundo");
    }
}

function mostrarMensaje4() {
    console.clear();
    console.log("Mensaje 4");
    for (let i = 8; i > 5; i--) {
        console.log(i + " : hola mundo");
    }
}

function imprimirTabla3() {
    console.clear();
    console.log("Tabla Multiplicar del 3");
    for (let i = 1; i <= 10; i++) {
        console.log("3 * " + i + " = " + 3 * i);
    }
}

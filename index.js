let money;
let choice;
let bandera;
let validar;
let card;
let bandera2;
let validateNumber;
let contValidateNumber;
const usd = 291.0, euro = 291.99;
alert("Bienvenido a la mejor casa de cambio one-line");
menu();
do {
    bandera = parseInt(prompt("Desea realizar otra operacion? \nDigite 1 para continuar, 0 para salir"));
    if (bandera) {
        menu();
    } else {
        alert("Hasta luego, vuelva pronto");
        bandera = false;
    }
} while (bandera);

function menu() {
    let option;
    do {
        option = parseInt(prompt("Digite 1 si desea cambiar o vender divisas \nDigite 2 si desea depositar dinero a una cuetna bancaria \nDigite 3 si desea extraer dinero de una cuenta bancaria "));
        switch (option) {
            case 1: operacion(); break;
            case 2: depositMoney(); break;
            case 3: extractionMoney(); break;
            default: alert("ingrese una opcion valida");
        }
    } while (option !== 1 && option !== 2 && option !== 3);
}
function operacion() {
    let currency;
    do {
        currency = parseInt(prompt("ingrese 1 si deasea comprar una moneda \nIngrese 2 si desea vender una moneda"));
        if (currency === 1) {
            purchaseCurrency();
        } else if (currency === 2) {
            saleCurrency();
        } else {
            alert("Ingrese una opcion valida: " + currency + " \nNo es una opcion valida");
        }
    } while (currency !== 1 && currency !== 2);
}
function depositMoney(){
    let nombre;
    let apellido;
    let dni;
    let altValidateNumber;
    nombre= prompt("Ingrese su nombre");
    apellido = prompt("Ingrese su apellido");
    dni = parseInt(prompt("ingrese su dni"));
    
    while(fly){

    }    
}
function purchaseCurrency() {
    do {
        choice = parseInt(prompt("Ingrese 1 si desea comprar dolares \ningrese 2 si desea comprar euros"));
        if (choice === 1) {
            card = parseInt(prompt("Desea comprar con tarjeta o con efectivo? 1 , 2"));
            if (card === 1) {
                purchaseCardUsd();
            } else {
                purchaseUsd();
            }
        } else if (choice === 2) {
            card = parseInt(prompt("Desea comprar con tarjeta o con efectivo? 1 , 2"));
            if (card === 1) {
                purchaseCardEur();
            } else {
                purchaseEur();
            }
        } else {
            alert("ingrese una opcion valida: " + choice + "\nNo es una opcion valida");
        }


    } while (choice !== 1 && choice !== 2);
}
function saleCurrency() {
    do {
        choice = parseInt(prompt("Ingrese 1 si desea vender dolares \ningrese 2 si desea vender euros"));
        if (choice === 1) {
            card = parseInt(prompt("Desea comprar con tarjeta o con efectivo? 1 , 2"));
            if (card === 1) {
                saleCardUsd();
            } else {
                saleUsd();
            }
        } else if (choice === 2) {
            card = parseInt(prompt("Desea comprar con tarjeta o con efectivo? 1 , 2"));
            if (card === 1) {
                saleCardEur();
            } else {
                saleEur();
            }
        } else {
            alert("ingrese una opcion valida: " + choice + "\nNo es una opcion valida");
        }
    } while (choice !== 1 && choice !== 2);
}
function purchaseCardUsd() {
    do {
        validateNumber = parseInt(prompt("Ingrese el numero de su tarjeta"));
        contValidateNumber = 12;
        validar = checkerCard(validateNumber, contValidateNumber);
        if (validar) {
            purchaseUsd(usd);
        } else {
            alert("La cantidad de digitos de la tarjeta no es valida asegurese de haber ingresado los 12 digitos correctamente");
        }
    } while (!validar);
}
function saleCardUsd() {
    do {
        validateNumber = parseInt(prompt("Ingrese el numero de su tarjeta"));
        contValidateNumber = 12;
        validar = checkerCard(validateNumber, contValidateNumber);
        if (validar) {
            saleUsd();
        } else {
            alert("La cantidad de digitos de la tarjeta no es valida asegurese de haber ingresado los 12 digitos correctamente");
        }
    } while (!validar);
}
function purchaseCardEur() {
    
    do {
        validateNumber = parseInt(prompt("Ingrese el numero de su tarjeta"));
        contValidateNumber = 12;
        validar = checkerCard(validateNumber, contValidateNumber);
        if (validar) {
            purchaseEur(euro);
        } else {
            alert("La cantidad de digitos de la tarjeta no es valida asegurese de haber ingresado los 12 digitos correctamente");
        }
    } while (!validar);
}
function checkerCard(validateNumber, contValidateNumber) {
    let = contador = 0;
    while (validateNumber >= 1) {
        contador = contador + 1;
        validateNumber = validateNumber / 10;
    }
    if (contador === contValidateNumber) {
        bandera2 = true;
    } else {
        bandera2 = false;
    }
    return bandera2;
}
function purchaseUsd() {
    do {
        money = parseFloat(prompt("Ingrese la cantidad de dolares que desea comprar $" + usd + "ARS=1U$D"));
        validar = checker(money);
        if (validar) {
            conversion = money * usd;
            alert(`Deposite  ${conversion}AR$ para la compra de: ${money} U$D`);
        } else {
            alert("La cantidad ingresada no es valida o no es un numero");
        }
    } while (!validar);
}
function purchaseEur() {
    do {
        money = parseFloat(prompt("Ingrese la cantidad de EUROS que desea comprar " + euro + "AR$ = 1€UR "));
        validar = checker(money);
        if (validar) {
            conversion = money * usd;
            alert(`Deposite  ${conversion}AR$ para la compra de: ${money} €UR `);
        } else {
            alert("La cantidad ingresada no es valida o no es un numero");
        }
    } while (!validar);
}
function saleUsd() {
    do {
        money = parseFloat(prompt(" ingrese la cantidad de dolares que desea vender " + usd + "AR$ = 1U$D"));
        validar = checker(money);
        if (validar) {
            conversion = money * usd;
            alert(`deposite ${money}U$D para recibir ${conversion}AR$`);
        } else {
            alert("La cantidad ingresada no es valida o no es un numero");
        }
    } while (!validar);

}
function saleEur() {
    do {
        money = parseFloat(prompt(" ingrese la cantidad de EUROS que desea vender " + euro + "AR$ = 1€UR "));
        checker(money);
        if (validar) {
            conversion = money * usd;
            alert(`deposite ${money}1€UR para recibir ${conversion}AR$`);

        } else {
            alert("La cantidad ingresada no es valida o no es un numero");
        }
    } while (!validar);
}
function checker(money) {

    if (typeof money == 'number' && !isNaN(money)) {
        if (Number.isInteger(money)) {
            bandera2 = true;
        }
        else {
            bandera2 = true;
        }

    } else {
        bandera2 = false;
    }
    return bandera2;
}

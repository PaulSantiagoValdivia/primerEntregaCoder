//craeacion de variables globales
let money;
let validate;
let card;
let cardNumber;
let altValidate;
let numberAcount;
let option;
const usd = 291.0, euro = 291.99;
//Saludamos al usuario
alert("Bienvenido a la mejor casa de cambio one-line");
//llamamos a la funcion menu
menu();
do {
    validate = parseInt(prompt("Desea realizar otra operacion? \nDigite 1 para continuar, 0 para salir"));
    if (validate) {
        menu();
    } else {
        alert("Hasta luego, vuelva pronto");
        validate = false;
    }
} while (validate);

function menu() {
    //validamos que el usuario ingrese una opcion que este en el menu 
    do {
        //pedimos al usuario que prosceso desea realizar
        option = parseInt(prompt("Digite 1 si desea cambiar o vender divisas \nDigite 2 si desea depositar dinero a una cuetna bancaria"));
        //validamos que option coincida con uno de los case sino mostrara un mensaje deafault
        switch (option) {
            //LLamado a funciones 
            case 1: operacion(); break;
            case 2: depositMoney(); break;
            default: alert("ingrese una opcion valida");
        }
    } while (option !== 1 && option !== 2);
}
function operacion() {
    let currency;
    //verifica que currency sea una opcion valida
    do {
        currency = parseInt(prompt("ingrese 1 si deasea comprar una moneda \nIngrese 2 si desea vender una moneda"));
        // si currency = 1 llamamos a la funcion purchaseCurrency();
        if (currency === 1) {
            purchaseCurrency();
            // si currency = 1 llamamos a la funcion purchaseCurrency();
        } else if (currency === 2) {
            saleCurrency();
            // si currency !=1 && currency !2 muestra que currency no es valido
        } else {
            alert("Ingrese una opcion valida: " + currency + " \nNo es una opcion valida");
        }
    } while (currency !== 1 && currency !== 2);
}
function depositMoney() {
    let nombre;
    let apellido;
    nombre = prompt("Ingrese su nombre");
    apellido = prompt("Ingrese su apellido");
    //vamos a validar la cuenta
    validate = validateAcount(nombre, apellido);
    //si la cuenta a sido valida seguimos con el proceso
    if (validate) {
        do {
            money = parseFloat(prompt(`${nombre} Ingrese el monto que dese a depositar`));
            //validamos el monto ingresado con la function checker
            validate = checker(money);
            //si el monto ingresado es valido continuamos
            if (validate) {
                alert(`${nombre} El monto ingresado a sido validado`);
                do {
                    numberAcount = parseInt(prompt(`${nombre} \n ingrese el numero de la cuenta a la que desea depositar\nRecuerde que debe contar con 12 numeros`));
                    accounterNumbers = 12;
                    //validaremos la cuneta con la funcion checkerImportantNumbers()
                    validate = checkerImportantNumbers(numberAcount, accounterNumbers);
                    //si la cuenta ingresada es valida continuamos
                    if (validate) {
                        alert(`${nombre} el deposito fue aprobado correctamente a la cuenta ${numberAcount} el monto de ${money} AR$`);
                    } else {
                        alert(`${nombre} la cuenta ingresada no es valida, intente nuevamente`);
                    }
                } while (!validate);

            } else {
                alert(`${nombre} El monto ingresado no fue validado, intente nuevamente`);
            }
        } while (!validate);
    }
}
function purchaseCurrency() {
    //validamo la opcion elegida por el usuario
    do {
        option = parseInt(prompt("Ingrese 1 si desea comprar dolares \ningrese 2 si desea comprar euros"));
        //verificamos que compra desea relizar 
        if (option === 1) {
            card = parseInt(prompt("Desea comprar con tarjeta o con efectivo?\nDigite 1 si es asi\nCualquier tecla de caso contrario"));
            //verificamos que metodo desea utilizar
            if (card === 1) {
                purchaseCardUsd();
            } else {
                purchaseUsd();
            }
        } else if (option === 2) {
            card = parseInt(prompt("Desea comprar con tarjeta o con efectivo? \nDigite 1 si es asi\nCualquier tecla de caso contrario"));
            //verificamos que metodo desea utilizar
            if (card === 1) {
                purchaseCardEur();
            } else {
                purchaseEur();
            }
        } else {
            //mensaje de error
            alert("ingrese una opcion valida: " + option + "\nNo es una opcion valida");
        }
    } while (option !== 1 && option !== 2);
}
function saleCurrency() {
    //validamo la opcion elegida por el usuario
    do {
        option = parseInt(prompt("Ingrese 1 si desea vender dolares \ningrese 2 si desea vender euros"));
        //verificamos la venta desea relizar 
        if (option === 1) {
            card = parseInt(prompt("Desea vender con tarjeta o en efectivo? \nDigite 1 si es asi\nCualquier tecla de caso contrario"));
            //validamos el metodo que desea utilizar
            if (card === 1) {
                saleCardUsd();
            } else {
                saleUsd();
            }
        } else if (option === 2) {
            card = parseInt(prompt("Desea vender con tarjeta o con efectivo?\nDigite 1 si es asi\nCualquier tecla de caso contrario"));
            //validamos el metodo que desea utilizar
            if (card === 1) {
                saleCardEur();
            } else {
                saleEur();
            }
        } else {
            //mensaje de error
            alert("ingrese una opcion valida: " + option + "\nNo es una opcion valida");
        }
    } while (option !== 1 && option !== 2);
}
function purchaseCardUsd() {
    //se verifica que la tarjeta sea valida
    do {
        cardNumber = parseInt(prompt("Ingrese el numero de su tarjeta"));
        accounterNumbers = 12;
        //valida el numero de la tarjea
        validate = checkerImportantNumbers(cardNumber, accounterNumbers);
        if (validate) {
            //realiza la compra
            purchaseUsd(usd);
        } else {
            alert("La cantidad de digitos de la tarjeta no es valida asegurese de haber ingresado los 12 digitos correctamente");
        }
    } while (!validate);
}
function purchaseCardEur() {
    //se verifica que la tarjeta sea valida
    do {
        cardNumber = parseInt(prompt("Ingrese el numero de su tarjeta"));
        accounterNumbers = 12;
        //valida el numero de la tarjea
        validate = checkerImportantNumbers(cardNumber, accounterNumbers);
        if (validate) {
            //realiza la compra
            purchaseEur(euro);
        } else {
            alert("La cantidad de digitos de la tarjeta no es valida asegurese de haber ingresado los 12 digitos correctamente");
        }
    } while (!validate);
}
function saleCardUsd() {
    //se verifica que la tarjeta sea valida
    do {
        cardNumber = parseInt(prompt("Ingrese el numero de su tarjeta"));
        accounterNumbers = 12;
        //valida el numero de la tarjea
        validate = checkerImportantNumbers(cardNumber, accounterNumbers);
        if (validate) {
            //realiza la venta
            saleUsd();
        } else {
            alert("La cantidad de digitos de la tarjeta no es valida asegurese de haber ingresado los 12 digitos correctamente");
        }
    } while (!validate);
}
function saleCardEur() {
    //se verifica que la tarjeta sea valida
    do {
        cardNumber = parseInt(prompt("Ingrese el numero de su tarjeta"));
        accounterNumbers = 12;
        //valida el numero de la tarjea
        validate = checkerImportantNumbers(cardNumber, accounterNumbers);
        if (validate) {
            //realiza la venta
            saleEur();
        } else {
            alert("La cantidad de digitos de la tarjeta no es valida asegurese de haber ingresado los 12 digitos correctamente");
        }
    } while (!validate);
}
function purchaseUsd() {
    //valida la compra
    do {
        money = parseFloat(prompt("Ingrese la cantidad de dolares que desea comprar $" + usd + "ARS=1U$D"));
        //valida el monto a comprar por el usuario
        validate = checker(money);
        if (validate) {
            //realiza el cambio
            conversion = money * usd;
            alert(`Deposite  ${conversion}AR$ para la compra de: ${money} U$D`);
        } else {
            alert("La cantidad ingresada no es valida o no es un numero");
        }
    } while (!validate);
}
function purchaseEur() {
    //valida la compra
    do {
        money = parseFloat(prompt("Ingrese la cantidad de EUROS que desea comprar " + euro + "AR$ = 1€UR "));
        //valida el monto a comprar por el usuario
        validate = checker(money);
        if (validate) {
            //realiza el cambio
            conversion = money * usd;
            alert(`Deposite  ${conversion}AR$ para la compra de: ${money} €UR `);
        } else {
            alert("La cantidad ingresada no es valida o no es un numero");
        }
    } while (!validate);
}
function saleUsd() {
    //valida la venta
    do {
        money = parseFloat(prompt(" ingrese la cantidad de dolares que desea vender " + usd + "AR$ = 1U$D"));
        //valida el monto a vender
        validate = checker(money);
        if (validate) {
            //realiza la venta
            conversion = money * usd;
            alert(`deposite ${money}U$D para recibir ${conversion}AR$`);
        } else {
            alert("La cantidad ingresada no es valida o no es un numero");
        }
    } while (!validate);

}
function saleEur() {
    //valida la venta
    do {
        money = parseFloat(prompt(" ingrese la cantidad de EUROS que desea vender " + euro + "AR$ = 1€UR "));
        //valida el monto a vender
        validate=checker(money);
        if (validate) {
            //realiza la venta
            conversion = money * usd;
            alert(`deposite ${money}1€UR para recibir ${conversion}AR$`);
        } else {
            alert("La cantidad ingresada no es valida o no es un numero");
        }
    } while (!validate);
}
function validateAcount(nombre, apellido) {
    //variable contadora
    accounterNumbers = 9;
    let dni;
    do {
        dni = parseInt(prompt("ingrese su dni, recuerde ingresar los 9 digitos correctamente"));
        //valida el dni
        validate = checkerImportantNumbers(dni, accounterNumbers);
        if (validate) {
            alert(`Bienvenido ${nombre} ${apellido} `);
        } else {
            alert("El dni ingresado no es valido o no pertenece a un usuario afiliado\nVerifique nuevamente")
        }
    } while (!validate);
    return validate;
}
function checker(money) {
    //valida que los montos ingresados sean dinero
    if (typeof money == 'number' && !isNaN(money)) {
        //verifica que sea un entero
        if (Number.isInteger(money)) {
            validate = true;
        }
        //veridica si es un double
        else {
            validate = true;
        }
        //no valida si lo ingresado no es dinero
    } else {
        validate = false;
    }
    return validate;
}
function checkerImportantNumbers(cardNumber, accounterNumbers) {
    let = contador = 0;
    //ciclo que cuenta la cantidad de numeros claves para los procesos
    while (cardNumber >= 1) {
        //contador incrementa por cada numero que hay
        contador = contador + 1;
        //para contar la cantidad de numeros verifica que card number sea >=1 si numero a verificar es 12345 en la primer vuelta sera 1234,5 en la seguna 123,45 hasta que ya no seas divisible
        cardNumber = cardNumber / 10;
    }
    //si contador es igual a la regla impuesta a ser verificada devuelve tru false caso contrario 
    if (contador === accounterNumbers) {
        validate = true;
    } else {
        validate = false;
    }
    return validate;
}

function ordenarNums() {
    document.getElementById('resultado').innerHTML = '';

    let num1 = getNums('Ingrese el primer numero:');
    if (num1 === null) return;

    let num2 = getNums('Ingrese el segundo numero:');
    if (num2 === null) return;

    let num3 = getNums('Ingrese el tercer numero:');
    if (num3 === null) return;

    let iguales = [];
    if (num1 === num2) iguales.push(num1);
    if (num1 === num3) iguales.push(num1);
    if (num2 === num3) iguales.push(num2);

    if (num1 === num2 && num2 === num3) {
        document.getElementById('resultado').innerHTML = `
            <div class="numbers">
                <p><strong>Orden ingresado:</strong> ${num1}, ${num2}, ${num3}</p>
                <p>Los tres numeros ingresados son iguales: ${num1}</p>
            </div>
        `;
        return;
    }

    if (iguales.length > 0) {
        alert(`El numero ${iguales[0]} esta repetido`);
    }

    let numeros = [num1, num2, num3];
    let asc = [...numeros].sort((a, b) => a - b);
    let desc = [...numeros].sort((a, b) => b - a);

    document.getElementById('resultado').innerHTML = `
        <div class="numbers">
            <p><strong>Orden ingresado:</strong> ${numeros.join(', ')}</p>
            <p><strong>De Mayor a Menor:</strong> ${desc.join(', ')}</p>
            <p><strong>De Menor a Mayor:</strong> ${asc.join(', ')}</p>
        </div>
    `;
}

function getNums(mensaje) {
    let valor;

    do {
        valor = prompt(mensaje);

        if (valor === null) return null;
        if (valor === '') {
            alert('Complete el campo');
            continue;
        }

        valor = Number(valor);

        if (isNaN(valor)) {
            alert('Debes ingresar un numero valido');
            continue;
        }
        break;

    } while (true);

    return valor;
}
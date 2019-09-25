// recibir un dia de la semana y mostrar el proximo

function dayOfWeek(day) {
	/*if(day === "monday"){
        console.log("tuesday");
    } else if(day === "tuesday"){
        console.log("wednsday");
    } else if(day === "wednsday"){
        console.log("thursday");
    } else if(day === "thursday"){
        console.log("friday");
    } else if(day === "friday"){
        console.log("satursday");
    } else if(day === "satursday"){
        console.log("sunday");
    } else {
        console.log("monday");
    }*/

	switch (day) {
		case monday:
			console.log('tuesday');
			break;
		case tuesday:
			console.log('wednsday');
			break;
		case wednsday:
			console.log('thursday');
			break;
		case thursday:
			console.log('friday');
			break;
		case friday:
			console.log('saturday');
			break;
		case saturday:
			console.log('sunday');
			break;
		case sunday:
			console.log('monday');
			break;
	}
}

switch (day) {
	case monday:
		console.log('tuesday');
		break;
	case tuesday:
		console.log('wednsday');
		break;
	case wednsday:
		console.log('thursday');
		break;
	case thursday:
		console.log('friday');
		break;
	case friday:
		console.log('saturday');
		break;
	case saturday:
		console.log('sunday');
		break;
	case sunday:
		console.log('monday');
		break;
}

// Recibir dos numeros, compararlos y mostrar un mensaje adecuado

function comparar(a, b) {
	if (a === b) {
		console.log('son iguales');
	} else {
		console.log('no son iguales');
	}
}

// Numeros de dias en un mes -- Acepta un numero del mes del 1 al 12 y muestra la cantidad de dias que tiene ese mes

function numDays() {
	let num = Number(prompt('Numero de mes:'));

	switch (num) {
		case 1:
			console.log('31');
			break;
		case 2:
			console.log('28');
			break;
		case 3:
			console.log('31');
			break;
		case 4:
			console.log('30');
			break;
		case 5:
			console.log('31');
			break;
		case 6:
			console.log('30');
			break;
		case 7:
			console.log('31');
			break;
		case 8:
			console.log('31');
			break;
		case 9:
			console.log('30');
			break;
		case 10:
			console.log('31');
			break;
		case 11:
			console.log('30');
			break;
		case 12:
			console.log('31');
			break;
		default:
			console.log('Numero incorrecto');
	}
}

// Funcion que toma un tiempo y devuelve el tiempo un segundo mas tarde

// Devolver tiempo + un segundo

function hora() {
	let hora = Number(prompt('Hora de este momento:'));
	let minutos = Number(prompt('Minuto de este momento:'));
	let segundos = Number(prompt('Segundo de este momento:'));

	let horaMas = hora;
	let minutosMas = minutos;
	let segundosMas = segundos + 1;

	if (segundosMas === 60) {
		segundosMas = 00;
		minutosMas = minutos + 1;

		if (minutosMas === 60) {
			minutosMas = 00;
			horaMas = hora + 1;

			if (horaMas === 24) {
				horaMas = 00;
			}
		}
	} else {
		horaMas = hora;
		minutosMas = minutos;
		segundosMas = segundosMas;
	}

	let horaFinal =
		horaMas + 'hs' + ' ' + minutosMas + 'ms' + ' ' + segundosMas + 's';

	return console.log(horaFinal);
}

// Number squaring
// Complete the following program so that the square1() and square2() functions work properly.

// Square the given number x
function square1() {
	for (let i = 0; i < 11; i++) {
		console.log(i * i);
	}
}

// Square the given number x
const square2 = x => {
	return x * x;
};

console.log(square1(0)); // Must show 0
console.log(square1(2)); // Must show 4
console.log(square1(5)); // Must show 25

console.log(square2(0)); // Must show 0
console.log(square2(2)); // Must show 4
console.log(square2(5)); // Must show 25

// min() returns minimun value between a and b

function min(a, b) {
	if (a < b) {
		return a;
	} else {
		return b;
	}
}

// calculator

function calculate(a, b, c) {
	if (b === '+') {
		return a + c;
	} else if (b === '-') {
		return a - c;
	} else if (b === '*') {
		return a * c;
	} else if (b === '/') {
		return a / c;
	}
}

// Circumference and area of a circle

function area(r) {
	let a = r * r;
	return Math.Pi * a;
}

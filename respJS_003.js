function Q1() {
    console.log('Q1');
    var aux = Number.parseInt(document.getElementById('numerosQ1').value);
    var pares = [];
    for (let num = 0; num <= aux; num += 2) {
        pares.push(num);
    }
    var resp = pares
    document.getElementById('RQ1').innerHTML = "Texto da resposta: " + resp;
    console.log(resp);
}

function Q2() {
    console.log('Q2');
    var aux = Number.parseInt(document.getElementById('numerosQ2').value);
    var primos = [];
    function primoounao(x) {
        if (x != 1) {
        for (let j = 2; j < x; j++) 
            if (x % j == 0) return false;
                return x !== 1;
    }
}
    for (let i = 2; i <= aux; i++) {
        if (primoounao(i) == true)
            primos.push(i);
    }
    document.getElementById('RQ2').innerHTML = "Texto da resposta: " + primos;
    console.log(primos);
}

var listaStrings = [];

function acrescentaSTR() {
	var aux = document.getElementById('novaString').value;
	listaStrings.push(aux);
	document.getElementById('novaString').value = "";
	document.getElementById('auxQ3').innerHTML = listaStrings;
	console.log(listaStrings);
}

function Q3() {
    console.log('Q3');
    for(let i = 0; i < listaStrings.length; i++) {
		listaStrings[i] = listaStrings[i].toUpperCase();
	}
    console.log(listaStrings);
    document.getElementById('RQ3').innerHTML = listaStrings;
}

function QuickSort_(A, lo, hi) { // X é array

	function partition(A, lo, hi) {
		var pivot = A[hi];
		var i = lo;
		var aux;
		for(let j = lo; j < hi; j++) {
			if(A[j] < pivot) {
				aux = A[i];
				A[i] = A[j];
				A[j] = aux;
				i++;
			}
		}
		aux = A[i];
		A[i] = A[hi];
		A[hi] = aux;
		return i;
	}

	var p;
    if(lo < hi){
        p = partition(A, lo, hi);
        QuickSort_(A, lo, p - 1);
        QuickSort_(A, p + 1, hi);
    }
}

function QuickSort(X) {
	var Y = Array.from(X);
	QuickSort_(Y, 0, Y.length-1);
	return Y;
}

function Q4() {
    console.log('Q4');
    var aux = document.getElementById('numerosQ4').value;
    var numerosQ4 = aux.split(';');
    var ordenados;
    for (let i = 0; i < numerosQ4.length; i++) {
		numerosQ4[i] = Number.parseFloat(numerosQ4[i]);
	}
	console.log('****' + numerosQ4);
    ordenados = QuickSort(numerosQ4);
    console.log(ordenados);
    document.getElementById('RQ4').innerHTML = ordenados;
}

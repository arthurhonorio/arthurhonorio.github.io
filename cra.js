function cra() {
    var notas = "";
    notas = document.getElementById('notas').value;
    notas = notas.split(";").map(Number);
    var cargahoraria = "";
    cargahoraria = document.getElementById('horas').value;
    cargahoraria = cargahoraria.split(";").map(Number);
    var cargareprov = "";
    cargareprov = document.getElementById('horasrep').value;
    cargareprov = cargareprov.split(";").map(Number);
    console.log(notas);
    console.log(cargahoraria);
    console.log(cargareprov);
    function multiplicalista(lst1, lst2) {
        // array array -> array
        // multipica elemento i de uma lista pelo correspondente em outra lista
        var aux = [];
        for (i = 0; i < (lst1.length) || i < (lst2.length); i++) {
            aux[i] = lst1[i] * lst2[i];
        }
        return aux;
    }
    function somalista(lst) {
        // array -> array
        // retorna a soma dos elementos de uma array
        var aux = [];
        for (var i = 0; i < lst.length; i++) {
            aux[i] = lst[i];
        }
        while (aux.length > 1) {
            aux[0] = aux[0] + aux[aux.length - 1];
            aux.pop();
        }
        return aux[0];
    }
    var aux1 = multiplicalista(notas, cargahoraria);
    var somadetudo = somalista(aux1);
    var totalhoras = somalista(cargahoraria);
    var total = somadetudo / totalhoras;
    var reprovacao = 1 - (0.5 * (somalista(cargareprov) / totalhoras));
    var resp = Math.round(total * reprovacao * 1000) / 1000;
    document.getElementById('resposta').innerHTML = "Seu CRA é " + resp;
}
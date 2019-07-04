function Q1() {
    var x = Number.parseInt(document.getElementById('x').value);
    var y = Number.parseInt(document.getElementById('y').value);
    const valordex = x => 'X = ' + x;
    const valordey = y => ' Y = ' + y;
    const quociente = (x, y) => ' Quociente = ' + Math.floor(x / y);
    const resto = (x, y) => ' Resto = ' + (x % y);
    const resp1 = valordex(x) + valordey(y) + quociente(x, y) + resto(x, y);
    document.getElementById('RQ1').innerHTML = "Texto da resposta: " + resp1;
}

function Q2() {
    var x = Number.parseFloat(document.getElementById('x').value);
    var y = Number.parseFloat(document.getElementById('y').value);
    const cateto1 = x => 'Cateto 1 = ' + x;
    const cateto2 = y => ' Cateto 2 = ' + y;
    const hipotenusa = (x, y) => ' Hipotenusa = ' + Math.sqrt(x * x + y * y);
    const resp2 = cateto1(x) + cateto2(y) + hipotenusa(x, y);
    document.getElementById('RQ2').innerHTML = "Texto da resposta: " + resp2;
}

function Q3() {
    var aux = document.getElementById('profissoes');
    var profissao = aux.options[aux.selectedIndex].text;
    function resp3() {
        if (profissao.endsWith('o') || profissao.endsWith('r')) {
            return 'Masculino'
        } else if (profissao.endsWith('z') || profissao.endsWith('ra') || profissao.endsWith('ca')) {
            return 'Feminino'
        } else {
            return 'Ambos'
        }
    }
    document.getElementById('RQ3').innerHTML = "Texto da resposta: " + resp3();
}

function Q4() {
    var a_str = document.getElementById('a').value;
    var b_str = document.getElementById('b').value;
    var c_str = document.getElementById('c').value;
    function resp4() {
        if (!a_str) {
            if (!b_str || !c_str) {
                return 'É necessário informar exatamente dois lados do triângulo'
            } else {
                var valora = 'A = ' + Math.sqrt(b_str * b_str + c_str * c_str);
                var valorb = ' B = ' + b_str;
                var valorc = ' C = ' + c_str;
                return valora + valorb + valorc
            }
        } else if (!b_str) {
            if (!a_str || !c_str) {
                return 'É necessário informar exatamente dois lados do triângulo'
            } else {
                var valora = 'A = ' + a_str;
                var valorb = ' B = ' + Math.sqrt(a_str * a_str - c_str * c_str);
                var valorc = ' C = ' + c_str;
                return valora + valorb + valorc
            }
        } else if (!c_str) {
            if (!a_str || !b_str) {
                return 'É necessário informar exatamente dois lados do triângulo'
            } else {
                var valora = 'A = ' + a_str;
                var valorb = ' B = ' + b_str;
                var valorc = ' C = ' + Math.sqrt(a_str * a_str - b_str * b_str);
                return valora + valorb + valorc
            }
        } else {
            return 'É necessário informar exatamente dois lados do triângulo'
        }
    }
    document.getElementById('RQ4').innerHTML = "Texto da resposta: " + resp4();
}

function Q5() {
    var altura = Number.parseFloat(document.getElementById('altura').value);
    var peso = Number.parseFloat(document.getElementById('peso').value);
    var aux = document.getElementById('generos');
    var genero = aux.options[aux.selectedIndex].text;
    var imc = peso / (altura * altura);
    const alturae = 'Altura = ' + altura;
    const massae = ' Massa = ' + peso;
    const imce = ' IMC = ' + imc;
    function resp5() {
        if (genero == 'Masculino') {
            if (imc <= 18.5) {
                var conclusao = ' Magro'
            }
            else if (imc > 18.5 && imc <= 24.9) {
                var conclusao = ' Sarado'
            }
            else if (imc > 24.9 && imc <= 29.9) {
                var conclusao = ' Rechonchudo'
            }
            else if (imc > 29.9) {
                var conclusao = ' Obeso'
            }
        } else if (genero == 'Feminino') {
            if (imc <= 18.5) {
                var conclusao = ' Magra'
            }
            else if (imc > 18.5 && imc <= 24.9) {
                var conclusao = ' Sarada'
            }
            else if (imc > 24.9 && imc <= 29.9) {
                var conclusao = ' Rechonchuda'
            }
            else if (imc > 29.9) {
                var conclusao = ' Obesa'
            }
        }
        return alturae + massae + imce + conclusao;
    }
    document.getElementById('RQ5').innerHTML = "Texto da resposta: " + resp5();
}
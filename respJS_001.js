function Q1() {
    console.log('Q1');
    var x = Number.parseInt(document.getElementById('x').value);
    var y = Number.parseInt(document.getElementById('y').value);

    console.log('X / Y: ' + x + ' / ' + y);
    console.log('Quociente = ' + Math.floor(x/y));
    console.log('Resto = ' + (x%y));
    
}    

function Q2() {
    console.log('Q2');
    var x = Number.parseFloat(document.getElementById('x').value);
    var y = Number.parseFloat(document.getElementById('y').value);
    // Segue aqui seu código
    console.log('cateto x = ' + x)
    console.log('cateto y = ' + y)
    console.log(Math.sqrt(Math.pow(x,2) + Math.pow(y,2)));
}

function Q3() {
    console.log('Q3');
    var aux = document.getElementById('profissoes');
    var profissao = aux.options[aux.selectedIndex].value;
    // Segue aqui seu código
    if ((profissao.slice(-2)).includes('o')) {
        console.log(profissao + ' genero masculino')
    }
    else if ((profissao.slice(-2)).includes('a')) {
        console.log(profissao + ' genero feminino')
    }
    else if ((profissao.slice(-2)).includes('i')) {
        console.log(profissao + ' genero feminino')
    }
    else {
        console.log(profissao + ' ambos generos')
    }
}

function Q4() {
    console.log('Q4');
    var a_str = document.getElementById('a').value;
    var b_str = document.getElementById('b').value;
    var c_str = document.getElementById('c').value;
    // Segue aqui seu código

    if (!a_str) {
        console.log("hipotenusa é " + Math.sqrt(Math.pow(b_str,2) + Math.pow(c_str,2)))
    }
    else if (!b_str) {
        console.log("cateto b é " +  Math.sqrt(Math.pow(a_str,2) - Math.pow(c_str,2)))
    }
    else if (!c_str) {
        console.log("cateto c é " +  Math.sqrt(Math.pow(a_str,2) - Math.pow(b_str,2)))
    }
   
   //FICOU FALTANDO DEFINIR UMA FUNÇÃO PRA QUANDO TUDO TIVER VAZIO
   //PENSO QUE O SWITCH SERIA MELHOR AQUI 
}

function Q5() {
    console.log('Q5');
    var altura = Number.parseFloat(document.getElementById('altura').value);
    var peso = Number.parseFloat(document.getElementById('peso').value);
    var aux = document.getElementById('generos');
    var genero = aux.options[aux.selectedIndex].text;
    // Segue aqui seu código

    var imc = (peso / (altura * altura))
    
    console.log('altura: ' + altura)
    console.log('peso: ' + peso)
    console.log('IMC: ' + imc)
   
    if (imc > 30.0) {
        var msg = 'obes'
    }
    else if (imc > 25.0) {
        var msg = 'rechonchud'
    } 
    else if (imc > 18.0) {
        var msg = 'sarad'
    }
    else if (imc < 18.0) {
        var msg = 'magr'
    }

    if (genero = 'Masculino') {
        console.log(msg + 'o')
    }
    if (genero = 'Feminino') {
        console.log(msg + 'a')
    }

}
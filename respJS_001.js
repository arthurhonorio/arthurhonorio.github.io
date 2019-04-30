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
    if ((profissao.slice(-2)).includes('a')) {
        console.log(profissao + ' genero feminino')
    }
     if ((profissao.slice(-2)).includes('i')) {
        console.log(profissao + ' genero feminino')
    }
    if ((profissao.slice(-2)).includes('e')) {
        console.log(profissao + ' ambos generos')
    }
}
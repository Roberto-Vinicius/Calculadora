

function insert(num) {
    // joga num dentro do espaço de resposta
    let number = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = number + num

}

function clean(cleaned) {
    // limpa a os caracteres
    document.getElementById('result').innerHTML =""
}

function back() {
    // apaga o ultimo caracter 
    let result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result.substring(0, result.length -1)
}

function calculate() {
    let result = document.getElementById('result').innerHTML;
    if(result) {
        document.getElementById('result').innerHTML = eval(result)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('button')
    // cancela o recarregamento da pagina
    button.addEventListener('click', function (e) {
        e.preventDefault()
    })

    //Pega o valor no primeiro input
    const inputValue1 = document.getElementById("value1");

    //Formata o input para moeda nacional
    inputValue1.addEventListener('input', () => {
        const value = inputValue1.value.replace(/\D/g, "")
        inputValue1.value = (value / 100).toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })
    })

    let currency1 = document.getElementById('currency1')   
    currency1.addEventListener('change', () => {
        convert()
    })
    let currency2 = document.getElementById('currency2')   
    currency2.addEventListener('change', () => {
        convert()
    })

    inputValue1.addEventListener('input', () => {
        convert()
    })

})

function convert() {
    // pega o valor que está dentro do input
    let value1 = document.getElementById('value1').value
    // remove os pontos
    value1 = value1.replace('.', '')
    // troca virgula por ponto
    value1 = value1.replace(',', '.')
    //converte de string para numero
    value1 = Number(value1)

    // seleciona o segundo input
    let inputValue2 = document.getElementById('value2')
    let value2 = inputValue2.value
    // seleciona as moedas escolhidas
    let currency1 = document.getElementById('currency1').value
    let currency2 = document.getElementById('currency2').value

    if (currency1 == 'Real' && currency2 == 'Dolar') {
        value2 = value1 / 5.24

    } else if (currency1 == 'Dolar' && currency2 == 'Real') {
        value2 = value1 * 5.24

    } else if (currency1 == 'Real' && currency2 == 'Euro') {
        value2 = value1 / 5.74

    } else if (currency1 == 'Euro' && currency2 == 'Real') {
        value2 = value1 * 5.74

    } else if (currency1 == 'Real' && currency2 == 'BTC') {
        value2 = value1 / 149905.69

    } else if (currency1 == 'BTC' && currency2 == 'Real') {
        value2 = value1 * 149905.69

    } else if (currency1 == 'Euro' && currency2 == 'Dolar') {
        value2 = value1 * 1.08

    } else if (currency1 == 'Dolar' && currency2 == 'Euro') {
        value2 = value1 / 1.08

    } else if (currency1 == 'Dolar' && currency2 == 'BTC') {
        value2 = value1 / 28436,50

    } else if (currency1 == 'BTC' && currency2 == 'Dolar') {
        value2 = value1 * 28436,50

    } else if (currency1 == 'Euro' && currency2 == 'BTC') {
        value2 = value1 / 26213,70

    } else if (currency1 == 'BTC' && currency2 == 'Euro') {
        value2 = value1 * 26213,70
    }

    value2 = value2.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })
    inputValue2.value = value2

}
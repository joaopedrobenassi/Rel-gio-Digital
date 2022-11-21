const horas = document.getElementById('horas') /* Selecionando os elementos e guardando em variaveis */
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

setInterval(function time(){ /* Utilizando uma função ciclica do Js para pegar valor durante cada momento */

    let dateToday = new Date() /* Data do dia atual */
    let hr = dateToday.getHours()
    let min = dateToday.getMinutes()
    let ss = dateToday.getSeconds() 

    if(hr < 10) {
        hr = '0' + hr
    }

    if(min < 10) {
        min = '0' + min
    }

    if(ss < 10) {
        ss = '0' + ss
    }

    horas.textContent = hr /* Mudando o conteudo */
    minutos.textContent = min
    segundos.textContent = ss

},1000) 




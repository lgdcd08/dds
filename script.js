/**
 * Ano automático
 * @author Luiz Gustavo De Carvalho Dagnese
 */

// Banner carrosel ------------
const main = document.querySelector('main')
const backgrounds = ['url(img/banner2.jpg)','url(img/banner.jpeg)','url(img/banner22.jpg)']

let indice = 0

function slider(){
    indice ++
    if (indice >= backgrounds.length) {
        indice = 0
    }
    //troca da imagem de background no CSS
main.style.backgroundImage = backgrounds[indice]
main.style.transition = 'background-image 1s ease-in-out'
}

setInterval(slider, 3000)

// fim do Banner carrosel ------------------
//Inserindo o ano na tag <span> do HTML
let ano = document.getElementById('copyrightYear')

//A linha abaixo obtem o ano atual 
let anoAtual = new Date().getFullYear()

//A linha abaixo atribui o ano a tag <span>
ano.innerHTML = anoAtual